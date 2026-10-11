import { renderToString } from "react-dom/server";
import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import sharp from "sharp";
import App from "./App";
import { pageMeta } from "./page-meta";

async function prerender() {
  const template = await readFile("dist/index.html", "utf8");
  const escape = (value: string) =>
    value.replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c]!,
    );
  for (const [path, meta] of Object.entries(pageMeta)) {
    const url = `https://srccvde.com${path === "/" ? "/" : path}`;
    let html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${renderToString(<App path={path} />)}</div>`,
    );
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${escape(meta.title)}</title>`,
    );
    for (const name of [
      "description",
      "og:description",
      "twitter:description",
    ]) {
      html = html.replace(
        new RegExp(`(<meta (?:name|property)="${name}" content=")[^"]*`),
        `$1${escape(meta.description)}`,
      );
    }
    for (const name of ["og:title", "twitter:title"]) {
      html = html.replace(
        new RegExp(`(<meta (?:name|property)="${name}" content=")[^"]*`),
        `$1${escape(meta.title)}`,
      );
    }
    html = html
      .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`)
      .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`);
    await writeFile(
      path === "/" ? "dist/index.html" : `dist${path}.html`,
      html,
    );
  }
  await sharp("public/og-card.svg").png().toFile("dist/og-card.png");
  // The only inline script is static JSON-LD. Authorize its exact bytes, never unsafe-inline.
  const hashes = [...template.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)]
    .filter((m) => m[1].trim())
    .map(
      (m) => `'sha256-${createHash("sha256").update(m[1]).digest("base64")}'`,
    );
  let headers = await readFile("public/_headers", "utf8");
  headers = headers.replace("__INLINE_HASHES__", hashes.join(" "));
  await writeFile("dist/_headers", headers);
}
prerender().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
