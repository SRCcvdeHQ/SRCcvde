// Public production probes only; the empty inquiry must never create a lead.
const site = "https://srccvde.com";
const workspace = "https://app.srccvde.com";
const results = [];
async function probe(path, expected, options = {}) {
  const url = new URL(path, site).href;
  try {
    const response = await fetch(url, {
      redirect: "manual",
      signal: AbortSignal.timeout(15000),
      ...options,
    });
    const failures = [];
    if (response.status !== expected)
      failures.push(`status ${response.status}, expected ${expected}`);
    if (expected === 200) {
      for (const header of [
        "content-security-policy",
        "strict-transport-security",
        "x-content-type-options",
        "referrer-policy",
        "permissions-policy",
      ])
        if (!response.headers.get(header)) failures.push(`missing ${header}`);
      if (response.headers.get("x-frame-options") !== "DENY")
        failures.push("framing protection missing");
      if (
        url.startsWith(workspace) &&
        !response.headers.get("x-robots-tag")?.includes("noindex")
      )
        failures.push("workspace noindex missing");
    }
    if (
      expected === 308 &&
      response.headers.get("location") !== `${site}/services?probe=canonical`
    )
      failures.push("canonical redirect lost path or query");
    if (expected === 400) {
      const body = await response.json();
      if (body.ok === true) failures.push("invalid inquiry was accepted");
    }
    results.push({
      url,
      ok: failures.length === 0,
      status: response.status,
      failures,
    });
  } catch (error) {
    results.push({ url, ok: false, failures: [error.message] });
  }
}
await Promise.all([
  probe("/", 200),
  probe("/services", 200),
  probe("/health-probe-nonexistent", 404),
  probe(`${workspace}/`, 200),
  probe(`${workspace}/billing`, 200),
  probe("https://www.srccvde.com/services?probe=canonical", 308),
  probe("/api/inquiry", 400, {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: site },
    body: "{}",
  }),
]);
console.log(
  JSON.stringify(
    {
      checkedAt: new Date().toISOString(),
      healthy: results.every((r) => r.ok),
      results,
    },
    null,
    2,
  ),
);
if (results.some((r) => !r.ok)) process.exitCode = 1;
