/* Content audit — run with `npm run check`.
   It never edits content; it only reports what is still mock, unresolved,
   placeholder, or out of sync with the built HTML/OG image. */
import { existsSync, readFileSync, statSync } from "node:fs";
import vm from "node:vm";

const root = new URL("../", import.meta.url);
const read = (file) => readFileSync(new URL(file, root), "utf8");

const errors = [];
const warnings = [];
const passed = [];
const err = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);
const ok = (msg) => passed.push(msg);

// Load data.js exactly like the site and build do.
const dataSource = read("data.js");
const mainSource = read("main.js");
const shared = mainSource.match(/\/\* @shared:start[\s\S]*?\/\* @shared:end \*\//);
if (!shared) throw new Error("main.js: @shared block not found");
const ctx = vm.createContext({ window: {} });
vm.runInContext(dataSource, ctx, { filename: "data.js" });
vm.runInContext(shared[0], ctx, { filename: "main.js" });
const data = vm.runInContext("resolveData(window.DATA)", ctx);
const raw = ctx.window.DATA;
const site = data.site || {};

// ── identity + contact ──────────────────────────────────────────────────────
if (!site.name) err("site.name is empty");
else ok(`name: ${site.name}`);
if (!site.role) err("site.role is empty");
if (!site.email) err("site.email is empty");
else if (/elianmoreau/i.test(site.email))
  warn(`site.email is still the template address: ${site.email}`);
else ok(`email: ${site.email}`);
if (!site.based) warn("site.based is empty");
if (!site.timezone) warn("site.timezone is empty");
if (!site.since) warn("site.since is empty — {years} cannot resolve");
else if (site.since > new Date().getFullYear())
  err(`site.since is in the future: ${site.since}`);
if (site.available) {
  const when = new Date(`${site.available}T00:00:00Z`);
  if (Number.isNaN(when.getTime())) ok(`availability label: ${site.available}`);
  else if (when < new Date()) warn(`site.available is in the past: ${site.available}`);
} else warn("site.available is empty — {availableMonth} cannot resolve");

// ── unresolved {tokens} ─────────────────────────────────────────────────────
const TOKENS = new Set([
  "name", "role", "based", "timezone", "email", "since", "available",
  "first", "years", "offset", "availableMonth", "projectYears",
]);
const tokenHits = [];
function scanTokens(value, path) {
  if (typeof value === "string") {
    for (const m of value.matchAll(/\{(\w+)\}/g))
      if (TOKENS.has(m[1])) tokenHits.push({ path, token: m[0] });
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => scanTokens(v, `${path}[${i}]`));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) scanTokens(v, `${path}.${k}`);
  }
}
scanTokens(data, "DATA");
for (const hit of tokenHits.slice(0, 12))
  warn(`unresolved token ${hit.token} at ${hit.path}`);
if (tokenHits.length > 12) warn(`…and ${tokenHits.length - 12} more unresolved tokens`);
if (!tokenHits.length) ok("no unresolved {tokens}");

// ── placeholder links ───────────────────────────────────────────────────────
const placeholders = [];
function scanLinks(value, path) {
  if (Array.isArray(value)) {
    value.forEach((v, i) => scanLinks(v, `${path}[${i}]`));
  } else if (value && typeof value === "object") {
    if (value.href === "#") placeholders.push(path);
    for (const [k, v] of Object.entries(value)) scanLinks(v, `${path}.${k}`);
  }
}
scanLinks(raw, "DATA");
if (placeholders.length) {
  warn(`${placeholders.length} placeholder link(s) (href="#") still in data.js`);
  for (const p of placeholders.slice(0, 12)) warn(`  ${p}`);
} else ok("no placeholder links");

// ── old persona / mock claims ───────────────────────────────────────────────
const OLD = [
  "elianmoreau", "Elian", "Moreau", "Lisbon", "Tessera", "Halcyon",
  "Tidewater", "motion-kit", "Northfold", "Sillage", "Copenhagen", "Porto",
];
const oldHits = OLD.filter((word) => dataSource.includes(word));
if (oldHits.length)
  warn(`template persona / project strings still present: ${oldHits.join(", ")}`);
else ok("no template persona strings");

// ── projects ────────────────────────────────────────────────────────────────
const projects = raw.panels?.find((p) => p.id === "p-projects")?.detail?.content?.projects || [];
if (!projects.length) warn("no projects yet — {projectYears} cannot resolve");
else {
  ok(`${projects.length} project(s)`);
  projects.forEach((p, i) => {
    if (!p.name) err(`projects[${i}] has no name`);
    if (!p.year) warn(`projects[${i}] (${p.name || "?"}) has no year — {projectYears} skips it`);
    if (!Array.isArray(p.links)) warn(`projects[${i}] (${p.name || "?"}) has no links[]`);
    if (!Array.isArray(p.meta)) warn(`projects[${i}] (${p.name || "?"}) has no meta[]`);
  });
}

// ── GitHub snapshot ─────────────────────────────────────────────────────────
const gh = raw.site?.github || {};
if (existsSync(new URL("projects.js", root))) {
  const pctx = vm.createContext({ window: {} });
  try {
    vm.runInContext(read("projects.js"), pctx, { filename: "projects.js" });
    const repos = pctx.window.GITHUB_REPOS;
    if (!Array.isArray(repos)) warn("projects.js does not define window.GITHUB_REPOS");
    else if (!repos.length)
      warn(
        "projects.js is empty — add the '" +
          (gh.topic || "portfolio") +
          "' topic to repos on GitHub, then run npm run projects",
      );
    else {
      ok(`${repos.length} GitHub repo(s) tagged '${gh.topic || "portfolio"}' in projects.js`);
      repos.forEach((repo, i) => {
        if (!repo.name) err(`GITHUB_REPOS[${i}] has no name`);
        if (!repo.url) warn(`GITHUB_REPOS[${i}] (${repo.name || "?"}) has no url`);
        if (!repo.description)
          warn(`GITHUB_REPOS[${i}] (${repo.name || "?"}) has no description`);
      });
    }
  } catch (error) {
    warn(`projects.js could not be read: ${error.message}`);
  }
} else {
  warn("projects.js is missing — run npm run projects (or npm run build)");
}

// ── tech ────────────────────────────────────────────────────────────────────
const tech = raw.tech || [];
if (!tech.length) err("data.tech is empty");
else {
  const ids = tech.map((t) => t.id);
  const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (duplicates.length) err(`duplicate tech ids: ${duplicates.join(", ")}`);
  const missing = tech.filter((t) => !t.d).map((t) => t.name);
  if (missing.length) warn(`tech without an icon (monogram): ${missing.join(", ")}`);
  const tiers = tech.reduce((a, t) => ((a[t.tier] = (a[t.tier] || 0) + 1), a), {});
  ok(`${tech.length} technologies — ${tiers[1] || 0} main / ${tiers[2] || 0} used before / ${tiers[3] || 0} environment`);
}

// ── index.html head in sync? ────────────────────────────────────────────────
const html = read("index.html");
const head = {
  title: html.match(/<title>([^<]*)<\/title>/)?.[1],
  description: html.match(/name="description"[\s\S]*?content="([^"]*)"/)?.[1],
  ogImage: html.match(/property="og:image"[\s\S]*?content="([^"]*)"/)?.[1],
};
const expected = {
  title: site.meta?.title,
  description: site.meta?.description,
  ogImage: site.meta?.og?.image,
};
for (const key of Object.keys(expected)) {
  if (expected[key] && head[key] !== expected[key])
    warn(`index.html ${key} is out of sync — run npm run build`);
}
if (Object.entries(expected).every(([k, v]) => !v || head[k] === v))
  ok("index.html head matches data.js");

// ── OG image identity ───────────────────────────────────────────────────────
// Compare the values the OG template hardcodes with the current data. This is
// more precise than mtime: editing tech notes or a bio must not warn about the
// OG image, but a renamed role must.
try {
  const ogTemplate = read(".thinkrail/context/mockups/og-template.html");
  const ogAttr = (key) =>
    ogTemplate.match(new RegExp(`data-og="${key}"[^>]*>([^<]*)<`))?.[1]?.trim();
  const identity = [
    ["name", ogAttr("name"), site.name],
    ["role", ogAttr("role"), site.role],
    ["based", ogAttr("based"), site.based],
  ].filter(([, og]) => og);
  const mismatches = identity.filter(
    ([, og, value]) => value && og.toLowerCase() !== value.toLowerCase(),
  );
  if (mismatches.length) {
    for (const [key, og, value] of mismatches)
      warn(`OG template ${key} is "${og}" but data.js says "${value}" — update the template and regenerate assets/og.jpg`);
  } else if (identity.length) {
    ok("OG template identity matches data.js");
  }
} catch {
  warn("OG template not found — cannot verify the OG image identity");
}
try {
  statSync(new URL("assets/og.jpg", root));
  ok("assets/og.jpg present");
} catch {
  err("assets/og.jpg is missing");
}

// ── report ──────────────────────────────────────────────────────────────────
const line = "─".repeat(64);
console.log(`\nPortfolio content check\n${line}`);
if (errors.length) {
  console.log(`\nERRORS (${errors.length})`);
  for (const e of errors) console.log(`  ✗ ${e}`);
}
if (warnings.length) {
  console.log(`\nWARNINGS (${warnings.length})`);
  for (const w of warnings) console.log(`  ! ${w}`);
}
if (passed.length) {
  console.log(`\nOK (${passed.length})`);
  for (const p of passed) console.log(`  ✓ ${p}`);
}
console.log(`\n${line}`);
console.log(
  errors.length
    ? `${errors.length} error(s), ${warnings.length} warning(s) — fix errors first.`
    : warnings.length
      ? `${warnings.length} warning(s) — these are the remaining content tasks.`
      : "All checks passed.",
);
process.exitCode = errors.length ? 1 : 0;
