type Env = {
  SUPABASE_URL: string;
  SUPABASE_PUBLISHABLE_KEY: string;
  INTAKE_GATEWAY_SECRET: string;
};
const reply = (body: unknown, status: number) =>
  Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "Content-Security-Policy": "default-src 'none'; frame-ancestors 'none'",
      "X-Frame-Options": "DENY",
      "Referrer-Policy": "no-referrer",
      "Strict-Transport-Security": "max-age=31536000",
    },
  });

export async function onRequest({
  request,
  env,
}: {
  request: Request;
  env: Env;
}) {
  if (request.method !== "POST")
    return reply({ error: "Method not allowed" }, 405);
  // Browser form uses JSON; reject cross-site requests. This is supplemental to rate limiting.
  if (request.headers.get("origin") !== new URL(request.url).origin)
    return reply({ error: "Origin not allowed" }, 403);
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  )
    return reply({ error: "JSON required" }, 415);
  if (
    !env.INTAKE_GATEWAY_SECRET ||
    !env.SUPABASE_URL ||
    !env.SUPABASE_PUBLISHABLE_KEY
  )
    return reply(
      {
        error:
          "Project intake is temporarily unavailable. Please email hello@srccvde.com.",
      },
      503,
    );
  // Cloudflare overwrites CF-Connecting-IP on ingress. Never forward the browser's X-Forwarded-For.
  const ip = request.headers.get("cf-connecting-ip");
  if (!ip) return reply({ error: "Unable to verify request source." }, 403);
  const reader = request.body?.getReader();
  if (!reader) return reply({ error: "Invalid request" }, 400);
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > 20_000) {
      await reader.cancel();
      return reply({ error: "Request too large" }, 413);
    }
    chunks.push(value);
  }
  const body = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.length;
  }
  try {
    const upstream = await fetch(
      `${env.SUPABASE_URL}/functions/v1/submit-project-inquiry`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: env.SUPABASE_PUBLISHABLE_KEY,
          "x-intake-gateway-secret": env.INTAKE_GATEWAY_SECRET,
          "x-intake-ip": ip,
        },
        body,
        signal: AbortSignal.timeout(15_000),
      },
    );
    const data: unknown = await upstream.json();
    // Do not expose arbitrary upstream errors, internal details, or headers.
    if (upstream.status >= 500)
      return reply(
        { error: "Unable to submit right now. Please try again." },
        503,
      );
    return reply(data, upstream.status);
  } catch {
    return reply(
      { error: "Unable to submit right now. Please try again." },
      503,
    );
  }
}
