import { test } from "node:test";
import assert from "node:assert/strict";
import { onRequest } from "../functions/api/inquiry.ts";
import { submitProjectInquiry } from "../src/lib/inquiries.ts";
const env = {
  SUPABASE_URL: "https://backend.example.test",
  SUPABASE_PUBLISHABLE_KEY: "public",
  INTAKE_GATEWAY_SECRET: "server-only",
};
const request = (body = "{}", headers = {}) =>
  new Request("https://srccvde.com/api/inquiry", {
    method: "POST",
    body,
    headers: {
      origin: "https://srccvde.com",
      "content-type": "application/json",
      "cf-connecting-ip": "192.0.2.1",
      ...headers,
    },
  });
test("gateway rejects cross-site and oversized requests before contacting backend", async () => {
  assert.equal(
    (
      await onRequest({
        request: request("{}", { origin: "https://evil.example" }),
        env,
      })
    ).status,
    403,
  );
  assert.equal(
    (await onRequest({ request: request("x".repeat(20001)), env })).status,
    413,
  );
  assert.equal((await onRequest({ request: request(), env: {} })).status, 503);
});
test("gateway forwards trusted IP and server secret, masks backend failures", async (t) => {
  t.mock.method(globalThis, "fetch", async (url, init) => {
    assert.equal(
      url,
      "https://backend.example.test/functions/v1/submit-project-inquiry",
    );
    assert.equal(init.headers["x-intake-ip"], "192.0.2.1");
    assert.equal(init.headers["x-intake-gateway-secret"], "server-only");
    assert.equal(init.headers["x-forwarded-for"], undefined);
    return Response.json({ error: "internal SQL details" }, { status: 500 });
  });
  const res = await onRequest({
    request: request("{}", {
      "x-forwarded-for": "spoof",
      "x-intake-gateway-secret": "spoof",
    }),
    env,
  });
  assert.equal(res.status, 503);
  assert.equal(res.headers.get("cache-control"), "no-store");
  assert.doesNotMatch(await res.text(), /SQL/);
});
test("form requires explicit success and gives recoverable errors on transport failure", async (t) => {
  const mocked = t.mock.method(globalThis, "fetch", async () =>
    Response.json({}),
  );
  await assert.rejects(submitProjectInquiry({}), /confirm receipt/);
  mocked.mock.mockImplementation(async () => {
    throw new Error("offline");
  });
  await assert.rejects(submitProjectInquiry({}), /brief is still here/);
  mocked.mock.mockImplementation(async () =>
    Response.json({ ok: true, request_id: "request" }),
  );
  assert.equal((await submitProjectInquiry({})).ok, true);
});
