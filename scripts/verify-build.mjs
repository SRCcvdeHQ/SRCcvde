import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
const routes = [
  "/",
  "/services",
  "/process",
  "/work",
  "/about",
  "/start",
  "/privacy",
  "/terms",
  "/cookies",
  "/accessibility",
];
for (const path of routes) {
  const html = await readFile(
    path === "/" ? "dist/index.html" : `dist${path}.html`,
    "utf8",
  );
  assert.match(html, /<h1[ >]/, `${path} must include rendered content`);
  assert.ok(
    html.includes(`rel="canonical" href="https://srccvde.com${path}"`),
    `${path} canonical`,
  );
  assert.ok(
    !html.includes("fonts.googleapis.com"),
    "Fonts must be self hosted",
  );
}
const headers = await readFile("dist/_headers", "utf8");
assert.ok(!headers.includes("__INLINE_HASHES__"));
assert.ok(headers.includes("frame-ancestors 'none'"));
console.log(
  `Verified ${routes.length} static routes, metadata, fonts, and CSP`,
);
