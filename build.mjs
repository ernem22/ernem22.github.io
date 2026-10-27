/* ──────────────────────────────────────────────────────────────
   npm run build — after editing data.js (or the sources).
   1. Copies site.meta from data.js into index.html's <head>, so link
      previews (which never run JS) show the same title, description
      and image as the page. Uses main.js's own resolveData(), so the
      {tokens} come out exactly as they do in the browser.
   2. Minifies main.js and styles.css into the .min files the page loads.
   ────────────────────────────────────────────────────────────── */
import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";
import { build } from "esbuild";

const path = (f) => new URL(f, import.meta.url);
const read = (f) => readFileSync(path(f), "utf8");

const ctx = vm.createContext({ window: {} });
vm.runInContext(read("data.js"), ctx, { filename: "data.js" });
const shared = read("main.js").match(/\/\* @shared:start[\s\S]*?\/\* @shared:end \*\//);
if (!shared) throw new Error("main.js: @shared block not found");
vm.runInContext(shared[0], ctx, { filename: "main.js" });
const data = vm.runInContext("resolveData(window.DATA)", ctx);
const meta = data.site?.meta || {};

const attr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const before = read("index.html");
let html = before;
function sub(re, val) {
  if (val == null || val === "") return;
  if (!re.test(html)) throw new Error(`index.html: no match for ${re}`);
  html = html.replace(re, (_, a, b) => a + attr(val) + b);
}
const og = meta.og || {};
sub(/(<html[^>]*\slang=")[^"]*(")/, meta.lang);
sub(/(<title>)[^<]*(<\/title>)/, meta.title);
sub(/(<meta\s+name="description"\s+content=")[^"]*(")/, meta.description);
sub(/(<meta\s+name="theme-color"\s+content=")[^"]*(")/, meta.themeColor);
sub(/(<link\s+rel="icon"\s+href=")[^"]*(")/, meta.favicon);
sub(/(<meta\s+property="og:type"\s+content=")[^"]*(")/, og.type);
sub(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, og.title || meta.title);
sub(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, og.description);
sub(/(<meta\s+property="og:image"\s+content=")[^"]*(")/, og.image);
sub(/(<meta\s+property="og:image:width"\s+content=")[^"]*(")/, og.imageWidth);
sub(/(<meta\s+property="og:image:height"\s+content=")[^"]*(")/, og.imageHeight);
sub(/(<meta\s+name="twitter:card"\s+content=")[^"]*(")/, meta.twitterCard);
if (html !== before) writeFileSync(path("index.html"), html);
console.log(`index.html  ${html === before ? "up to date" : "head synced from data.js"}`);

await build({
  entryPoints: ["main.js", "styles.css"],
  outdir: ".",
  outExtension: { ".js": ".min.js", ".css": ".min.css" },
  minify: true,
  allowOverwrite: true,
  logLevel: "warning",
  absWorkingDir: new URL(".", import.meta.url).pathname.replace(/^\/(\w:)/, "$1"),
});
console.log("main.min.js, styles.min.css  minified");
