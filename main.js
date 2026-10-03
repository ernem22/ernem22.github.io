/* ──────────────────────────────────────────────────────────────
   Single source of truth: data.js.
   Every panel, scene, and piece of copy is rendered from it.
   The motion engine below is unchanged; it just boots after the
   panels have been generated.
   ────────────────────────────────────────────────────────────── */

function esc(s) {
  return String(s ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
}

/* UI chrome labels — come from data.js site.ui, fall back to English */
const UI_DEFAULTS = {
  expand: "Expand",
  close: "Close section (Esc)",
  closeNote: "Close note",
  usedIn: "Used in",
  sections: "Sections",
  copy: "Copy",
  copied: "Copied",
  copyFallback: "Press ⌘/Ctrl + C",
  soon: "Link coming soon",
  grid: "Layout grid",
  hintGrid: "grid",
  hintNav: "sections",
  hintClose: "close",
  cols: "cols",
  dailyDriver: "daily driver",
  whenFits: "when it fits",
  showTake: "Show my take",
  loading: "loading",
  ready: "ready",
};
let UI = { ...UI_DEFAULTS };

/* Scene art — decorative, keyed by JSON scene.kind, text from JSON */
function sceneMarkup(scene) {
  if (!scene) return "";
  const chips = scene.chips || [];
  switch (scene.kind) {
    case "info":
      return `<div class="art scene scene--info" aria-hidden="true">
      <div class="bg"></div>
      <div class="chip c1">${esc(chips[0])}</div>
      <div class="chip c2 near">${esc(chips[1])}</div>
      <div class="chip c3">${esc(chips[2])}</div>
      <div class="glyph">
        <div class="bob">
          <div class="smiley">
            <div class="eyes"><i></i><i></i></div>
            <b class="cheek l"></b><b class="cheek r"></b>
            <div class="mouth"></div>
          </div>
          <div class="bubble">${esc(scene.bubble)}</div>
        </div>
      </div>
    </div>`;
    case "projects":
      return `<div class="art scene scene--projects" aria-hidden="true">
      <div class="bg"></div>
      <div class="wire w1"><i></i><b></b><b class="s"></b><b></b></div>
      <div class="wire w2"><i></i><b class="s"></b><b></b></div>
      <div class="wire w3"><i></i><b></b><b></b><b class="s"></b></div>
      <div class="glyph">
        <div class="app">
          <div class="app-bar"><i></i><i></i><i></i></div>
          <div class="app-body"><b></b><b class="s"></b>
            <div class="cta"><span class="a">${esc(chips[0])}</span><span class="b">${esc(chips[1])}</span><i class="bits"><b></b><b></b><b></b><b></b><b></b></i></div>
          </div>
        </div>
        <div class="ring"></div>
        <svg class="cursor" viewBox="0 0 24 24"><path d="M4 2.5 L19.5 13.2 L12.6 14.4 L9.4 21 Z"/></svg>
      </div>
    </div>`;
    case "tech":
      return `<div class="art scene scene--tech" aria-hidden="true">
      <div class="bg"></div>
      ${(scene.icons || []).map((id, i) => `<div class="ico i${i + 1}" data-icon="${esc(id)}"></div>`).join("\n      ")}
      <div class="chip c1">${esc(chips[0])}</div>
      <div class="chip c2 near">${esc(chips[1])}</div>
      <div class="glyph">
        <div class="bob"><span class="lt">&lt;</span><span class="sl">/</span><span class="gt">&gt;</span><i class="caret"></i>
          <div class="sel"><i class="box"></i><i class="h tl"></i><i class="h tr"></i><i class="h bl"></i><i class="h br"></i><span class="fr">stack.tsx</span><span class="dm">hug × hug</span></div>
        </div>
      </div>
    </div>`;
    case "contact":
      return `<div class="art scene scene--contact" aria-hidden="true">
      <div class="bg"></div>
      <div class="glyph">
        <div class="msg in">${esc(scene.messages && scene.messages[0])}</div>
        <div class="msg typing"><i></i><i></i><i></i></div>
        <div class="msg sent">${esc(scene.sent)} <em>→</em></div>
        <div class="receipt">${esc(scene.receipt)}</div>
      </div>
      <svg class="trail" viewBox="0 0 66 10" preserveAspectRatio="none"><path d="M0 6 C 12 1, 24 10, 38 5 S 58 1, 66 3" vector-effect="non-scaling-stroke"/></svg>
      <svg class="plane" viewBox="0 0 48 48"><path class="p1" d="M4 22 L44 6 L30 42 L22 28 Z"/><path class="p2" d="M22 28 L44 6 L18 25 Z"/></svg>
    </div>`;
    default:
      return '<div class="art scene" aria-hidden="true"><div class="bg"></div></div>';
  }
}

/* Project mock art — rendered entirely from the project's `mock` config in data.js */
const mockBar = (url) =>
  `<div class="bar"><i></i><i></i><i></i><span>${esc(url || "")}</span></div>`;
function mockShell(type, bar, screen) {
  return `<div class="mock ${type ? `mock--${type}` : ""}" aria-hidden="true">${bar}${screen}</div>`;
}
function mockLedger(m) {
  const nav = (m.nav || [])
    .map((n, i) =>
      i === 0
        ? `<b>${esc(n)}</b>`
        : `<span${i === 3 ? ' class="on"' : ""}>${esc(n)}</span>`,
    )
    .join("");
  const btn = (b) =>
    `<span class="btn ${esc(b.v || "")}">${b.spin ? "<i></i>" : ""}${esc(b.t)}</span>`;
  const tokens = (m.tokens || [])
    .map(
      ([label, color]) =>
        `<span style="--c:${esc(color)}">${esc(label)}</span>`,
    )
    .join("");
  const props = (m.props || [])
    .map(
      (p) => `<b>${esc(p.name)}</b><i>${esc(p.type)}</i><i>${esc(p.def)}</i>`,
    )
    .join("");
  const screen = `<div class="screen">
      <nav>${nav}</nav>
      <div class="doc">
        <h4>${esc(m.heading || "")}</h4>
        <p class="ln w70"></p><p class="ln w45"></p>
        <div class="row">${(m.buttons || []).map(btn).join("")}</div>
        <div class="row">${(m.sizes || []).map(btn).join("")}</div>
        <div class="tokens">${tokens}</div>
        <code>${esc(m.code || "")}</code>
        <div class="props">
          <span>Prop</span><span>Type</span><span>Default</span>
          ${props}
        </div>
      </div>
    </div>`;
  return mockShell("ledger", mockBar(m.url), screen);
}
function mockPulse(m) {
  const tiles = (m.tiles || [])
    .map((t) =>
      t.live
        ? `<div class="live"><small>${esc(t.label)}</small><b><i></i>${esc(t.value)}</b></div>`
        : `<div><small>${esc(t.label)}</small><b>${esc(t.value)}${t.unit ? `<em>${esc(t.unit)}</em>` : ""}</b></div>`,
    )
    .join("");
  const axis = (m.axis || []).map((a) => `<span>${esc(a)}</span>`).join("");
  const screen = `<div class="screen">
      <div class="tiles">${tiles}</div>
      <div class="chart" data-signals></div>
      <div class="axis">${axis}</div>
    </div>`;
  return mockShell("pulse", mockBar(m.url), screen);
}
function mockVessel(m) {
  const nav = `<div class="nav"><b>${esc(m.brand || "")}</b><span>${esc(m.menu || "")}</span><span>${esc(m.bag || "")}</span></div>`;
  const items = (m.items || [])
    .map(
      (it) =>
        `<div class="item"><i class="pot ${esc(it.cls || "")}"></i><span>${esc(it.name)}</span><em>${esc(it.price)}</em></div>`,
    )
    .join("");
  const lh = (m.scores || [])
    .map(
      (s) =>
        `<div style="--s:${esc(s.value)}"><b>${esc(s.value)}</b><small>${esc(s.label)}</small></div>`,
    )
    .join("");
  const screen = `<div class="screen">
      ${nav}
      <div class="grid">${items}</div>
      <div class="lh">${lh}</div>
    </div>`;
  return mockShell("vessel", mockBar(m.url), screen);
}
function mockCode(m) {
  const lines = (m.lines || [])
    .map(
      (ln) =>
        `<span class="n">${esc(ln.n || "")}</span>${(ln.tokens || []).map((t) => (t.c ? `<span class="${t.c}">${esc(t.t)}</span>` : esc(t.t))).join("")}`,
    )
    .join("\n");
  const term = (m.term || [])
    .map((t, i) => `<span${i === 1 ? ' class="ok"' : ""}>${esc(t)}</span>`)
    .join("");
  const screen = `<div class="screen">
      <pre>${lines}</pre>
      <div class="term">${term}</div>
    </div>`;
  return mockShell("code", mockBar(m.url), screen);
}
function mockTide(m) {
  const screen = `<div class="screen">
      <div class="field" data-tide></div>
      <div class="hud"><span>${esc(m.label || "")}</span><span>${esc(m.records || "")}</span></div>
      <div class="scrub"><span>${esc(m.from || "")}</span><div><i></i></div><span>${esc(m.to || "")}</span><b>${esc(m.selected || "")}</b></div>
    </div>`;
  return mockShell("tide", mockBar(m.url), screen);
}
function mockMarkup(mock, name) {
  if (mock && typeof mock === "object") {
    if (mock.type === "ledger") return mockLedger(mock);
    if (mock.type === "pulse") return mockPulse(mock);
    if (mock.type === "vessel") return mockVessel(mock);
    if (mock.type === "code") return mockCode(mock);
    if (mock.type === "tide") return mockTide(mock);
  }
  return `<div class="mock" aria-hidden="true"><div class="bar"><i></i><i></i><i></i><span>${esc(name)}</span></div><div class="screen"><p class="ln w70"></p><p class="ln w45"></p><p class="ln w55"></p></div></div>`;
}

/* Detail bodies — each panel's layout describes its scope in data.js */
function renderBody(p) {
  const c = p.detail.content;
  switch (p.detail.layout) {
    case "info": {
      let n = 0;
      const el = (base) =>
        `class="${base ? `${base} ` : ""}rv" style="--i:${++n + 1}"`;
      const stats = c.stats
        .map(
          (s) =>
            `<div><dt>${esc(s.label)}</dt><dd><span class="num">${esc(s.value)}</span>${s.unit ? `<small>${esc(s.unit)}</small>` : ""}</dd></div>`,
        )
        .join("");
      const code = c.code.lines
        .map((line) =>
          line
            .map((tok) =>
              tok.t === "plain"
                ? esc(tok.v)
                : `<span class="${tok.t}">${esc(tok.v)}</span>`,
            )
            .join(""),
        )
        .join("\n");
      const expList = c.experience
        ? c.experience.items
            .map(
              (e) =>
                `<li><span class="yr${e.current ? " now" : ""}"><span>${esc(e.period)}</span></span><div><strong>${esc(e.role)}</strong><span>${esc(e.place)}</span><p>${esc(e.desc)}</p></div></li>`,
            )
            .join("")
        : "";
      const lists = (c.lists || [])
        .map(
          (l) =>
            `<div ${el("block")}><span class="label">${esc(l.label)}</span>
        <ul class="plain">${l.items.map((it) => `<li><span>${esc(it.text)}</span><em>${esc(it.meta)}</em></li>`).join("")}</ul></div>`,
        )
        .join("");
      return `<div class="d-body info">
        <div class="info-main">
          <p ${el("lead")}>${esc(c.lead)}</p>
          <p ${el("copy")}>${esc(c.copy)}</p>
          <dl ${el("stats")}>${stats}</dl>
          <figure ${el("code")} aria-label="${esc(c.code.caption || "Profile as code")}">
            <figcaption><span>${esc(c.code.file)}</span><em>${esc(c.code.lang)}</em></figcaption>
            <pre><code>${code}</code></pre>
          </figure>
        </div>
        <aside class="info-side">
          ${c.experience ? `<div ${el()}><span class="label">${esc(c.experience.label)}</span><ol class="timeline">${expList}</ol></div>` : ""}
          ${lists}
        </aside>
      </div>`;
    }
    case "projects": {
      const items = c.projects
        .map(
          (project, i) =>
            `<li class="rv" style="--i:${i + 2}"><button type="button" data-p="${i}"${i === 0 ? ' class="is-current"' : ""}><span class="p-num">${String(i + 1).padStart(2, "0")}</span><span class="p-name">${esc(project.name)}<em>${esc(project.type)}</em></span><span class="p-meta">${esc(project.year)}</span></button></li>`,
        )
        .join("");
      const views = c.projects
        .map(
          (project, i) =>
            `<article class="pv${i === 0 ? " is-current" : ""}">
          <header class="pv-top"><h3>${esc(project.name)}</h3><span class="pv-kind">${esc(project.kind)}</span>
            <div class="pv-links">${project.links.map((l) => `<a class="press" href="${esc(l.href)}">${esc(l.label)}</a>`).join("")}</div></header>
          <div class="pv-art">${mockMarkup(project.mock, project.name)}</div>
          <div class="pv-info">
            <p class="pv-desc">${esc(project.desc)}</p>
            <dl class="pv-meta">${project.meta.map((m) => `<div><dt>${esc(m.label)}</dt><dd>${esc(m.text)}</dd></div>`).join("")}</dl>
          </div>
        </article>`,
        )
        .join("");
      return `<div class="d-body proj">
        <ol class="proj-list" style="--n:${c.projects.length}">${items}</ol>
        <div class="proj-views rv" style="--i:4">${views}</div>
      </div>`;
    }
    case "tech": {
      // status line: counts come straight from data.tech so the copy can't drift;
      // each count carries the tile's tier swatch instead of explaining tiers away
      const tech = window.DATA?.tech || [];
      const core = tech.filter((t) => t.tier === 1).length;
      const rest = tech.length - core;
      const coreLabel = esc(c.status?.core ?? "core");
      const moreLabel = esc(c.status?.more ?? "on my radar");
      return `<div class="d-body tech">
        <div class="statusline rv" style="--i:2">
          <span class="ct ct--core"><b>${core}</b>${coreLabel}</span>
          <i class="sep" aria-hidden="true">·</i>
          <span class="ct ct--more"><b>${rest}</b>${moreLabel}</span>
          <span class="hint">${esc(c.hint)}</span>
        </div>
        <div class="cloud rv" style="--i:3" data-cloud></div>
        <aside class="take" id="take" aria-live="polite" hidden>
          <header><i class="take-ico"></i><div><h3></h3><span class="take-meta"></span></div><button type="button" class="take-x" aria-label="${esc(UI.closeNote)}">✕</button></header>
          <p></p>
          <footer><span class="label">${esc(UI.usedIn)}</span><em></em></footer>
        </aside>
      </div>`;
    }
    case "contact": {
      const socials = c.socials.items
        .map(
          (s) =>
            `<li><a href="${esc(s.href)}"><span>${esc(s.name)}</span><em>${esc(s.handle)}</em><i>${esc(s.arrow || "↗")}</i></a></li>`,
        )
        .join("");
      const terms = c.availability.terms
        .map(
          (t) =>
            `<li><span>${esc(t.label)}</span><em>${esc(t.value)}</em></li>`,
        )
        .join("");
      const briefs = c.briefs.items
        .map(
          (b) =>
            `<a class="press" href="mailto:${esc(c.email.address)}?subject=${encodeURIComponent(b.subject)}"><span>${esc(b.subject)}</span><i aria-hidden="true">→</i></a>`,
        )
        .join("");
      return `<div class="d-body contact">
        <div class="mail-row rv" style="--i:2">
          <span class="label">${esc(c.email.label)}</span>
          <a class="mail" href="mailto:${esc(c.email.address)}">${esc(c.email.address)}</a>
          <button class="copy-btn press" type="button" data-copy="${esc(c.email.address)}">${esc(UI.copy)}</button>
        </div>
        <div class="c-col rv" style="--i:4">
          <span class="label">${esc(c.socials.label)}</span>
          <ul class="socials">${socials}</ul>
        </div>
        <div class="c-col rv" style="--i:5">
          <span class="label">${esc(c.availability.label)}</span>
          <p class="avail">${esc(c.availability.before)} <em>${esc(c.availability.date)}</em>${/^[—–]/.test(c.availability.after || "") ? "&nbsp;" : " "}${esc(c.availability.after)}</p>
          <ul class="terms">${terms}</ul>
          <p class="tz"><span class="label">${esc(c.clock.label)}</span> <b id="clock">--:--:--</b> <span>${esc(c.clock.note)}</span></p>
        </div>
        <div class="c-col brief rv" style="--i:6">
          <span class="label">${esc(c.briefs.label)}</span>
          <div class="brief-list">${briefs}</div>
          <p class="copy small">${esc(c.briefs.note)}</p>
        </div>
      </div>`;
    }
    default:
      return '<div class="d-body"></div>';
  }
}

function renderPanel(p) {
  const slug = p.id.replace(/^p-/, "");
  const count =
    p.detail.layout === "projects"
      ? ` (${p.detail.content.projects.length})`
      : "";
  return `<article class="panel" data-q="${esc(p.corner)}" id="${esc(p.id)}">
    <div class="win"><div class="canvas">
    ${sceneMarkup(p.scene)}
    <div class="veil" aria-hidden="true"></div>
    <div class="grain" aria-hidden="true"></div>

    <div class="face" role="button" tabindex="0" aria-controls="d-${slug}" aria-expanded="false" aria-label="${esc(p.face.label)}">
      <div class="face-head">
        <div class="title">${esc(p.face.title)}</div>
        <span class="rule"></span>
        <p class="teaser">${esc(p.face.teaser)}</p>
      </div>
      <span class="indicator"><span class="ind-label">${esc(UI.expand)}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M4 4 L20 20 M9 20 H20 V9"/></svg></span>
    </div>

    <section class="detail" id="d-${slug}" aria-label="${esc(p.face.title)}">
      <header class="d-head">
        <div class="d-titlewrap"><h2 class="title d-title" tabindex="-1">${esc(p.detail.title)}</h2><span class="d-count rv" style="--i:1"><b>${esc(p.detail.symbol)}</b><span>${esc(p.detail.path)}${count}</span></span></div>
        <button class="close rv" style="--i:0" type="button" aria-label="${esc(UI.close)}"><i aria-hidden="true"></i></button>
      </header>
      ${renderBody(p)}
    </section>
    </div></div>
  </article>`;
}

function applyMeta(meta) {
  if (!meta) return;
  const set = (sel, attr, val) => {
    const el = document.querySelector(sel);
    if (el) el.setAttribute(attr, val);
  };
  if (meta.title) document.title = meta.title;
  if (meta.lang) document.documentElement.setAttribute("lang", meta.lang);
  if (meta.description)
    set('meta[name="description"]', "content", meta.description);
  if (meta.themeColor)
    set('meta[name="theme-color"]', "content", meta.themeColor);
  if (meta.og) {
    set('meta[property="og:type"]', "content", meta.og.type || "website");
    set('meta[property="og:title"]', "content", meta.og.title || meta.title);
    set('meta[property="og:description"]', "content", meta.og.description);
    set('meta[property="og:image"]', "content", meta.og.image);
    set('meta[property="og:image:width"]', "content", meta.og.imageWidth);
    set('meta[property="og:image:height"]', "content", meta.og.imageHeight);
  }
  if (meta.twitterCard)
    set('meta[name="twitter:card"]', "content", meta.twitterCard);
}

/* ──────────────────────────────────────────────────────────────
   Motion helpers
   ────────────────────────────────────────────────────────────── */
function bezier(x1, y1, x2, y2) {
  const cx = 3 * x1,
    bx = 3 * (x2 - x1) - cx,
    ax = 1 - cx - bx;
  const cy = 3 * y1,
    by = 3 * (y2 - y1) - cy,
    ay = 1 - cy - by;
  const X = (t) => ((ax * t + bx) * t + cx) * t;
  const Y = (t) => ((ay * t + by) * t + cy) * t;
  const dX = (t) => (3 * ax * t + 2 * bx) * t + cx;
  return (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) {
      const e = X(t) - x;
      if (Math.abs(e) < 1e-5) return Y(t);
      const d = dX(t);
      if (Math.abs(d) < 1e-6) break;
      t -= e / d;
    }
    let lo = 0,
      hi = 1;
    t = x;
    while (hi - lo > 1e-5) {
      if (X(t) < x) lo = t;
      else hi = t;
      t = (lo + hi) / 2;
    }
    return Y(t);
  };
}

const rmq = matchMedia("(prefers-reduced-motion: reduce)");
let reduced = rmq.matches;

// A UI resize, not a film cut: short, decisive, settles hard.
const OPEN = {
  ms: reduced ? 240 : 950,
  lag: reduced ? 0 : 70, // height trails width slightly: the panel unfolds rather than zooms
  css: "cubic-bezier(.3,0,0,1)",
  ease: bezier(0.3, 0, 0, 1),
};
const CLOSE = {
  ms: reduced ? 220 : 720,
  lag: reduced ? 0 : 60,
  css: "cubic-bezier(.4,0,.1,1)",
  ease: bezier(0.4, 0, 0.1, 1),
};

/* ──────────────────────────────────────────────────────────────
   Name — the masthead: the favicon grown into a nameplate (cream on a cherry block) and a four-quadrant caret (one
   quadrant per section, in section order, each with its boot-tile glyph).
   The hovered (or open) section's quadrant comes online and lifts, and its
   accent is swept under the name as a highlighter — the Contact address's
   marker, brought up to the masthead. At rest the quadrants scan in turn.
   ────────────────────────────────────────────────────────────── */
const SECTION_KEYS = ["info", "projects", "tech", "contact"];

function mountName(nameEl, glyphs = []) {
  const text = nameEl.textContent.trim();
  let i = 0;
  const letters = [...text]
    .map((c) => (c === " " ? '<span class="sp"></span>' : `<span class="l" style="--i:${i++}">${esc(c)}</span>`))
    .join("");
  // The extrusion: the name again, stepped down and to the right. Twelve thin
  // layers, one smooth slab: at rest it runs through the four sections' grounds
  // left to right, and the hovered (or open) section floods it with its own
  // gradient (the panels'), then a cherry base.
  const flat = [...text].map((c) => (c === " " ? '<span class="sp"></span>' : `<span class="g">${esc(c)}</span>`)).join("");
  const stack = Array.from({ length: 14 }, (_, n) => `<i class="sh" style="--n:${n + 1}" data-g="${n < 12 ? Math.floor(n / 3) + 1 : "b"}">${flat}</i>`).join("");
  nameEl.innerHTML =
    `<span class="sr">${esc(text)}</span>` +
    `<span class="plate" aria-hidden="true"><span class="ink"><span class="stack">${stack}</span>${letters}</span>` +
    `<span class="mark">${SECTION_KEYS.map((k, n) => `<i data-k="${k}" style="--n:${n}"><b>${esc(glyphs[n] || "")}</b></i>`).join("")}</span></span>`;
  const cells = [...nameEl.querySelectorAll(".mark i")];

  let offT = 0;
  return {
    tint(key) {
      clearTimeout(offT);
      if (key) {
        // --lk outlives the hover, so the marker retracts in the colour it came in
        nameEl.style.setProperty("--lk", `var(--acc-${key})`);
        nameEl.style.setProperty("--lg", `var(--g-${key})`); // floods every layer of the extrusion
        nameEl.classList.add("is-lit");
        cells.forEach((c) => c.classList.toggle("is-on", c.dataset.k === key));
      } else {
        // crossing the gutter between two corners shouldn't flicker the marker
        offT = setTimeout(() => {
          nameEl.classList.remove("is-lit");
          nameEl.style.removeProperty("--lg");
          cells.forEach((c) => c.classList.remove("is-on"));
        }, 140);
      }
    },
  };
}

/* ──────────────────────────────────────────────────────────────
   Desk — the page's dot grid, drawn on a canvas under everything.
   Same pitch and offset as the CSS grid it replaces (and the boot
   screen's), so nothing shifts when it takes over. Every fourth dot
   is a touch stronger, like dot paper. Dots near the pointer darken
   and lean away from it; opening, closing and switching a section
   sends one soft wave through the grid from where the sheet moves.
   Idle, it costs nothing: frames only run while something moves.
   ────────────────────────────────────────────────────────────── */
function mountDesk() {
  const cv = document.createElement("canvas");
  cv.className = "desk";
  cv.setAttribute("aria-hidden", "true");
  const ctx = cv.getContext("2d");
  if (!ctx) return { pulse() {} };
  document.body.prepend(cv);
  document.documentElement.classList.add("has-desk");

  const PITCH = 22,
    R = 1.05, // a dot's radius, css px
    A = 0.15, // a dot's ink
    A_MAJOR = 0.24, // every fourth dot's ink
    NEAR = 150, // the pointer's reach
    WAVE_W = 70, // the wave's band, px
    WAVE_V = 1250; // the wave's speed, px/s
  const INK = "134, 16, 36";
  const BUCKETS = 14; // alpha levels: one path, one fill each

  let W = 0,
    H = 0,
    dpr = 1,
    edge = 0,
    dots = [], // { x, y, a }
    hole = null; // the stage's box once it's up: its dots are never seen
  const ptr = { x: 0, y: 0, tx: 0, ty: 0, k: 0, on: false }; // k: presence, eased
  const waves = []; // { x, y, t0, amp, dur }
  let raf = 0;

  function layout() {
    dpr = Math.min(2, devicePixelRatio || 1);
    W = innerWidth;
    H = innerHeight;
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    cv.style.width = `${W}px`;
    cv.style.height = `${H}px`;
    edge = parseFloat(getComputedStyle(document.body).paddingLeft) || 0;
    // dots sit on edge + k·pitch (the CSS grid's tile centres), k reaching past both sides
    const k0x = -Math.ceil(edge / PITCH),
      k0y = k0x;
    dots = [];
    for (let ky = k0y; edge + ky * PITCH <= H + PITCH; ky++)
      for (let kx = k0x; edge + kx * PITCH <= W + PITCH; kx++)
        dots.push({ x: edge + kx * PITCH, y: edge + ky * PITCH, a: kx % 4 === 0 && ky % 4 === 0 ? A_MAJOR : A });
    measureHole();
    invalidate();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    draw(performance.now(), true);
    rest();
  }
  function measureHole() {
    const stage = document.getElementById("stage");
    if (!stage || !document.body.classList.contains("is-staged")) return (hole = null);
    const r = stage.getBoundingClientRect();
    const off = parseFloat(stage.style.getPropertyValue("--off")) || 0;
    hole = { l: r.left + 3, t: r.top + off + 3, r: r.right - 3, b: r.bottom - 3, cx: r.left + r.width / 2, cy: r.top + (r.height + off) / 2 };
  }

  const paths = Array.from({ length: BUCKETS }, () => null);
  // Each frame first works out every visible dot, then paints only if something
  // on screen differs from the resting grid (or just stopped differing): a wave
  // crossing the hidden middle of the stage costs no painting at all. And only
  // the desk that shows is cleared and painted, not the part under the sheets.
  let wasMoved = true;
  const todo = []; // [x, y, r, bucket] per visible dot, reused
  function draw(now, force = false) {
    // the waves still running, with their current radius and strength
    const live = [];
    for (let i = waves.length - 1; i >= 0; i--) {
      const w = waves[i],
        t = (now - w.t0) / w.dur;
      if (t >= 1) {
        waves.splice(i, 1);
        continue;
      }
      live.push({ x: w.x, y: w.y, r: (now - w.t0) * (WAVE_V / 1000), s: w.amp * (1 - t) * (1 - t) });
    }
    const near = ptr.k > 0.01;

    let n = 0,
      moved = false;
    for (const d of dots) {
      if (hole && d.x > hole.l && d.x < hole.r && d.y > hole.t && d.y < hole.b &&
        Math.abs(d.x - hole.cx) > 6 && Math.abs(d.y - hole.cy) > 6) continue; // under a sheet: never seen
      let a = d.a,
        r = R,
        ox = 0,
        oy = 0,
        gs = 0;
      if (near) {
        const dx = d.x - ptr.x,
          dy = d.y - ptr.y,
          dist = Math.hypot(dx, dy);
        if (dist < NEAR) {
          const g = (1 - dist / NEAR) ** 2 * ptr.k;
          gs += g;
          a += 0.32 * g;
          r += 0.55 * g;
          if (dist > 0.1) {
            ox += (dx / dist) * 2.2 * g;
            oy += (dy / dist) * 2.2 * g;
          }
        }
      }
      for (const w of live) {
        const dx = d.x - w.x,
          dy = d.y - w.y,
          dist = Math.hypot(dx, dy),
          u = (dist - w.r) / WAVE_W;
        if (u < -2.5 || u > 2.5) continue;
        const g = Math.exp(-u * u) * w.s;
        gs += g;
        a += 0.42 * g;
        r += 0.9 * g;
        if (dist > 0.1) {
          ox += (dx / dist) * 3 * g;
          oy += (dy / dist) * 3 * g;
        }
      }
      if (gs > 0.004) moved = true;
      const i = n++ * 4;
      todo[i] = d.x + ox;
      todo[i + 1] = d.y + oy;
      todo[i + 2] = r;
      todo[i + 3] = Math.min(BUCKETS - 1, Math.round((Math.min(1, a) * (BUCKETS - 1)) / 0.75));
    }

    if (force || moved || wasMoved) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (hole) {
        // the desk round the sheets, and the gutters between them (with room for
        // a dot's swell and lean)
        const p = 8,
          l = hole.l + p,
          t = hole.t + p,
          rr = hole.r - p,
          bb = hole.b - p;
        ctx.clearRect(0, 0, W, t);
        ctx.clearRect(0, bb, W, H - bb);
        ctx.clearRect(0, t, l, bb - t);
        ctx.clearRect(rr, t, W - rr, bb - t);
        ctx.clearRect(hole.cx - 14, t, 28, bb - t);
        ctx.clearRect(l, hole.cy - 14, rr - l, 28);
      } else ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < BUCKETS; i++) paths[i] = new Path2D();
      for (let i = 0; i < n * 4; i += 4) {
        const path = paths[todo[i + 3]];
        path.moveTo(todo[i] + todo[i + 2], todo[i + 1]);
        path.arc(todo[i], todo[i + 1], todo[i + 2], 0, Math.PI * 2);
      }
      for (let i = 0; i < BUCKETS; i++) {
        ctx.fillStyle = `rgba(${INK}, ${((i / (BUCKETS - 1)) * 0.75).toFixed(3)})`;
        ctx.fill(paths[i]);
      }
    }
    wasMoved = moved;
    return live.length > 0;
  }

  function frame(now) {
    raf = 0;
    ptr.x += (ptr.tx - ptr.x) * 0.16;
    ptr.y += (ptr.ty - ptr.y) * 0.16;
    ptr.k += ((ptr.on ? 1 : 0) - ptr.k) * 0.08;
    const waving = draw(now);
    const settling = Math.abs(ptr.tx - ptr.x) + Math.abs(ptr.ty - ptr.y) > 0.3 || Math.abs((ptr.on ? 1 : 0) - ptr.k) > 0.005;
    if (waving || settling) kick();
    else rest();
  }
  function kick() {
    if (raf || document.hidden) return;
    show();
    raf = requestAnimationFrame(frame);
  }

  // At rest the canvas steps aside: its resting grid is snapshotted once into the
  // page's own background and the canvas is hidden, so a still desk is just a
  // background image, not a full-screen layer composited on every frame (on a
  // phone that layer alone cost the sheets' opening about half its smoothness).
  // It comes back for as long as a wave or the pointer moves it.
  let still = null, // the snapshot's object URL
    stale = true, // the snapshot no longer matches the resting grid
    snapTok = 0,
    hidden = false;
  const busy = () => raf || waves.length > 0 || ptr.k > 0.01;
  function show() {
    if (!hidden) return;
    hidden = false;
    cv.style.display = "";
    document.body.style.removeProperty("background"); // or its dots would double the canvas's
  }
  function hide() {
    if (hidden || !still) return;
    hidden = true;
    document.body.style.background = `url("${still}") 0 0 / ${W}px ${H}px no-repeat fixed, var(--desk)`;
    cv.style.display = "none";
  }
  function invalidate() {
    stale = true;
    snapTok++;
    show();
  }
  function rest() {
    if (busy()) return;
    if (!stale) return hide();
    const tok = ++snapTok;
    cv.toBlob(async (blob) => {
      if (!blob || tok !== snapTok) return;
      const url = URL.createObjectURL(blob);
      const img = new Image();
      img.src = url;
      try {
        await img.decode(); // never swap to a background that hasn't decoded yet
      } catch {
        return URL.revokeObjectURL(url);
      }
      if (tok !== snapTok || busy()) return URL.revokeObjectURL(url);
      if (still) URL.revokeObjectURL(still);
      still = url;
      stale = false;
      hide();
    });
  }

  document.addEventListener("visibilitychange", () => !document.hidden && kick());
  addEventListener("resize", layout);
  layout();

  return {
    // one wave from (x, y) in viewport px; amp 0..1; delay in ms
    pulse(x, y, amp = 1, delay = 0) {
      if (reduced) return;
      const far = Math.max(Math.hypot(x, y), Math.hypot(W - x, y), Math.hypot(x, H - y), Math.hypot(W - x, H - y));
      // the canvas stays asleep (hidden, no frames) until the wave really starts
      setTimeout(() => {
        waves.push({ x, y, t0: performance.now(), amp, dur: ((far + WAVE_W * 2) / WAVE_V) * 1000 });
        if (waves.length > 4) waves.shift();
        kick();
      }, delay);
    },
    // the stage is up (or resized): its dots can be skipped
    settle() {
      measureHole();
      invalidate();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      draw(performance.now(), true);
      rest();
    },
  };
}
const desk = mountDesk();

/* ──────────────────────────────────────────────────────────────
   The engine. Runs once the stage has been rendered from data.js.
   ────────────────────────────────────────────────────────────── */
function boot(data) {
  const stage = document.getElementById("stage");
  const nameEl = document.querySelector(".name");
  const nameMark = mountName(nameEl, data.panels.map((p) => p.detail?.symbol || ""));
  // When the desk's wave starts. With a mouse it rides along with the sheet; on a
  // touch screen (phones, mostly) it waits for the sheet to land, so the two never
  // share frames and the opening itself keeps every one of them — the wave reads
  // as the sheet's echo there.
  const coarse = matchMedia("(pointer: coarse)");
  const wave = (withSheet, sheetMs) => (coarse.matches ? sheetMs : withSheet);
  // a sheet's outer corner of the stage: where the desk's wave starts when it moves
  const cornerOf = (panel, b) => [
    panel.dataset.q[1] === "l" ? b.left : b.right,
    panel.dataset.q[0] === "t" ? b.top : b.bottom,
  ];

  const panels = [...stage.querySelectorAll(".panel")];
  const ghost = stage.querySelector(".ghost");
  const GUTTER = 8;
  // While a section is open the name steps back to a smaller size (transform
  // only, in step with the sheet) and the stage reaches up into the room it
  // gives up: at rest the top sheets sit --off lower, open they rise into it.
  // Big screens halve the name; small ones, where it's small already, shrink
  // it less, so it never drops under ~30px tall.
  const NAME_OPEN_PX = 30;
  let nameK = 0.5;

  let rest = { sx: 0.5, sy: 0.5, off: 0 };

  // Sizes come straight from the ResizeObserver entries, so measuring never forces
  // a layout. (Reading offsetHeight / getBoundingClientRect here re-laid-out the
  // whole page on every call — the single biggest cost at load.)
  let stageBox = { w: 0, h: 0 };
  let nameH = 0;
  const boxOf = (e) => {
    const bs = e.borderBoxSize && e.borderBoxSize[0];
    return bs
      ? { w: bs.inlineSize, h: bs.blockSize }
      : { w: e.contentRect.width, h: e.contentRect.height };
  };
  const setVar = (k, v) => {
    if (stage.style.getPropertyValue(k) !== v) stage.style.setProperty(k, v);
  };
  function measure(entries) {
    for (const e of entries || []) {
      const b = boxOf(e);
      if (e.target === stage) stageBox = b;
      else if (e.target === nameEl) nameH = b.h;
    }
    const w = stageBox.w,
      h = stageBox.h;
    if (!w || !h) return;
    nameK = nameH ? Math.min(1, Math.max(0.5, NAME_OPEN_PX / nameH)) : 0.5;
    nameEl.style.setProperty("--name-k", nameK.toFixed(3));
    const off = Math.round(nameH * (1 - nameK));
    rest = { sx: (w - GUTTER) / 2 / w, sy: (h - off - GUTTER) / 2 / h, off };
    setVar("--off", `${off}px`);
    setVar("--sx0", rest.sx.toFixed(5));
    setVar("--sy0", rest.sy.toFixed(5));
    const a0 = Math.max(rest.sx, rest.sy);
    setVar("--a0", a0.toFixed(5));
    // The art keeps its aspect, so it's scaled by the larger side; along the
    // tighter side it overhangs the quadrant. Anchor it so the overhang splits
    // evenly between both edges (centre of the art on the quadrant's centre)
    // rather than all of it falling off the far edge. The art box is the canvas
    // plus a 6% bleed each side; at a square quadrant this is the 5.357% corner.
    const anchor = (sv) =>
      `${(((sv / 2 + 0.06 - 0.56 * a0) / (1 - a0) / 1.12) * 100).toFixed(3)}%`;
    setVar("--aox", anchor(rest.sx));
    setVar("--aoy", anchor(rest.sy));
    desk.settle(); // after --off: the desk skips only what the sheets cover
  }
  const ro = new ResizeObserver(measure);
  ro.observe(stage);
  ro.observe(nameEl);

  /* ──────────────────────────────────────────────────────────────
     Expansion — sampled keyframes so the whole move runs on the
     compositor: the window grows (and, for top panels, rises into the
     space the name gives up), the canvas counter-scales so content
     stays 1:1.
     ────────────────────────────────────────────────────────────── */
  const STEPS = 48;

  // Window geometry at elapsed time e.
  // Opening: width leads, height follows. Closing: height leads, width follows.
  function scaleAt({ ms, lag, ease }, opening, e) {
    const lead = ease(Math.min(1, e / ms));
    const trail = ease(Math.min(1, Math.max(0, (e - lag) / ms)));
    const px = opening ? lead : 1 - trail;
    const py = opening ? trail : 1 - lead;
    return {
      sx: rest.sx + (1 - rest.sx) * px,
      sy: rest.sy + (1 - rest.sy) * py,
      py,
    };
  }

  // How far a panel sits below the stage top: --off at rest, 0 when open.
  const lift = (q, py) => (q[0] === "t" ? rest.off * (1 - py) : 0);

  function keyframes(cfg, opening, q) {
    const total = cfg.ms + cfg.lag;
    const win = [],
      canvas = [];
    for (let i = 0; i <= STEPS; i++) {
      const { sx, sy, py } = scaleAt(cfg, opening, (i / STEPS) * total);
      win.push({
        transform: `translate(0, ${lift(q, py)}px) scale(${sx}, ${sy})`,
      });
      canvas.push({ transform: `scale(${1 / sx}, ${1 / sy})` });
    }
    return { win, canvas, total };
  }

  function quadRect(panel) {
    const s = stage.getBoundingClientRect();
    const w = s.width * rest.sx,
      h = s.height * rest.sy;
    const q = panel.dataset.q;
    return {
      left: q[1] === "l" ? 0 : s.width - w,
      top: q[0] === "t" ? rest.off : s.height - h,
      width: w,
      height: h,
    };
  }

  function showGhost(panel, duration, peakAt) {
    const r = quadRect(panel);
    Object.assign(ghost.style, {
      left: `${r.left}px`,
      top: `${r.top}px`,
      width: `${r.width}px`,
      height: `${r.height}px`,
    });
    ghost.animate(
      [{ opacity: 0 }, { opacity: 0.85, offset: peakAt }, { opacity: 0 }],
      { duration, easing: "ease-in-out" },
    );
  }

  let state = "idle";

  // Input that arrives mid-animation isn't dropped: the latest one is kept
  // and replayed as soon as the current transition settles.
  let queued = null;
  function act(fn) {
    if (state === "idle" || state === "open") fn();
    else queued = fn;
  }
  function flush() {
    const fn = queued;
    queued = null;
    if (fn) requestAnimationFrame(fn);
  }
  let current = null;

  const parts = (panel) => {
    const face = panel.querySelector(".face");
    const detail = panel.querySelector(".detail");
    return {
      win: panel.querySelector(".win"),
      canvas: panel.querySelector(".canvas"),
      face,
      fTitle: face.querySelector(".title"),
      detail,
      dTitle: detail.querySelector(".d-title"),
    };
  };

  function setTitleVisible(el, visible) {
    el.style.transition = "none";
    el.style.opacity = visible ? "" : "0";
    void el.offsetWidth;
    el.style.transition = "";
  }

  async function open(panel) {
    if (state !== "idle") return;
    state = "opening";
    current = panel;
    // on touch the tap's pointerleave has already cleared the hover tint: light it for the open panel
    tintName(panel);
    const { win, canvas, face, fTitle, detail, dTitle } = parts(panel);

    // Read geometry first, then only write: no forced style/layout inside the click.
    // (The detail is laid out even while hidden, so its title can be measured now.)
    const from = fTitle.getBoundingClientRect();
    const to = dTitle.getBoundingClientRect();
    const sb = stage.getBoundingClientRect();

    stage.classList.add("is-open");
    nameEl.style.setProperty("--nt", `${OPEN.ms}ms ${OPEN.css}`);
    nameEl.classList.add("is-small");
    panel.classList.add("is-active", "is-reading");
    panels.forEach((p) => {
      if (p !== panel) p.classList.add("is-receding");
    });
    face.setAttribute("aria-expanded", "true");
    face.tabIndex = -1;
    detail.inert = false;
    desk.pulse(...cornerOf(panel, sb), 1, wave(160, OPEN.ms)); // a beat after the sheet starts: it seems to push the air

    // The face title becomes the detail title: same glyphs, carried across the stage.
    fTitle.style.transition = "none";
    fTitle.style.opacity = "0";

    const k = keyframes(OPEN, true, panel.dataset.q);
    const opts = { duration: k.total, easing: "linear", fill: "forwards" };
    const anims = [
      win.animate(k.win, opts),
      canvas.animate(k.canvas, opts),
      dTitle.animate(
        [
          {
            transform: `translate(${from.left - to.left}px, ${from.top - to.top}px)`,
          },
          { transform: "none" },
        ],
        { duration: k.total, easing: OPEN.css },
      ),
    ];
    showGhost(panel, k.total * 1.4, 0.1);

    const reveal = setTimeout(() => {
      detail.classList.add("is-in");
      flashGrid(detail);
      syncCols(detail);
      countUp(detail);
    }, OPEN.ms * 0.5);

    await anims[0].finished;
    fTitle.style.transition = "";
    // Housekeeping that restyles hundreds of nodes waits until nothing is moving:
    // make the covered panels inert and pause their (now hidden) scenes.
    panels.forEach((p) => {
      if (p !== panel) p.inert = true;
    });
    stage.classList.add("is-still");
    panel.classList.add("is-expanded");
    anims.forEach((a) => a.cancel());
    clearTimeout(reveal);
    if (!detail.classList.contains("is-in")) countUp(detail);
    detail.classList.add("is-in");
    dTitle.focus({ preventScroll: true });
    state = "open";
    flush();
  }

  async function close() {
    if (state !== "open" || !current) return;
    closeTake();
    state = "closing";
    const panel = current;
    const { win, canvas, face, fTitle, detail, dTitle } = parts(panel);

    const from = dTitle.getBoundingClientRect();
    const sb = stage.getBoundingClientRect();

    stage.classList.remove("is-still");
    panels.forEach((p) => {
      p.classList.remove("is-receding");
      p.inert = false;
    });
    stage.classList.remove("is-open");
    nameEl.style.setProperty("--nt", `${CLOSE.ms}ms ${CLOSE.css}`);
    nameEl.classList.remove("is-small");
    desk.pulse(...cornerOf(panel, sb), 0.55, wave(0, CLOSE.ms)); // softer: the sheet folds back into its corner

    const k = keyframes(CLOSE, false, panel.dataset.q);
    const opts = { duration: k.total, easing: "linear" };
    // Keyframes start at full size, so dropping the expanded class under them is seamless.
    const anims = [win.animate(k.win, opts), canvas.animate(k.canvas, opts)];
    panel.classList.remove("is-expanded");

    const to = fTitle.getBoundingClientRect();
    const flight = dTitle.animate(
      [
        { transform: "none" },
        {
          transform: `translate(${to.left - from.left}px, ${to.top - from.top}px)`,
        },
      ],
      { duration: k.total, easing: CLOSE.css, fill: "forwards" },
    );
    showGhost(panel, k.total, 0.55);

    // The content steps out first (a quick fade, before the shrinking window can
    // crop it mid-line); only the title rides the whole way home, above it all.
    detail.classList.remove("is-in");
    showGrid(detail, false);
    detail.classList.add("is-out", "is-closing");

    await Promise.all([anims[0].finished, flight.finished]).catch(() => {});
    detail.classList.remove("is-closing");
    setTitleVisible(fTitle, true);
    flight.cancel();
    panel.classList.remove("is-active");
    // the scene (and the face's resting marks) fade back in only once the tile has landed
    panel.classList.remove("is-reading");
    detail.classList.remove("is-out");
    detail.inert = true;
    detail.querySelector(".d-body").scrollTop = 0;
    face.setAttribute("aria-expanded", "false");
    face.tabIndex = 0;
    face.focus({ preventScroll: true });
    current = null;
    state = "idle";
    flush();
    tintName(hovered);
  }

  // The name's marker and caret cell echo the hovered (or open) panel's accent.
  let hovered = null;
  function tintName(panel) {
    const p = current || panel;
    nameMark.tint(p ? p.id.replace(/^p-/, "") : null);
  }

  panels.forEach((panel) => {
    const face = panel.querySelector(".face");
    // the hub leans toward the hovered corner and the other three step back
    face.addEventListener("pointerenter", () => {
      hovered = panel;
      tintName(panel);
      stage.dataset.hover = panel.dataset.q;
    });
    face.addEventListener("pointerleave", () => {
      hovered = null;
      tintName(null);
      delete stage.dataset.hover;
    });
    panel.querySelector(".detail").inert = true; // painted but hidden: keep it out of focus / a11y
    // what scrolls must be reachable by keyboard too (arrows / PgDn once focused);
    // what doesn't scroll at this size isn't a tab stop (the detail itself is
    // already the labelled region these sit in)
    panel.querySelectorAll(".d-body, .d-body pre").forEach((el) => {
      const sync = () => {
        const scrolls = el.scrollHeight > el.clientHeight + 1 || el.scrollWidth > el.clientWidth + 1;
        if (scrolls) el.tabIndex = 0;
        else el.removeAttribute("tabindex");
      };
      new ResizeObserver(sync).observe(el);
    });
    face.addEventListener("click", () => act(() => open(panel)));
    face.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        act(() => open(panel));
      }
    });
    panel.querySelector(".close").addEventListener("click", () => act(close));
  });

  document.addEventListener("keydown", (e) => {
    const plain = !e.metaKey && !e.ctrlKey && !e.altKey;
    if (e.key === "Escape" && closeTake()) return;
    if (e.key === "Escape" && current) act(close);
    if ((e.key === "g" || e.key === "G") && state === "open" && plain)
      toggleGrid();
    const arrow = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 1, ArrowUp: -1 }[
      e.key
    ];
    if (!arrow || !plain || !current) return;
    // inside the project index, arrows move between projects (tabs pattern)
    const inList = e.target.closest?.(".proj-list");
    if (inList) {
      e.preventDefault();
      const btns = [...inList.querySelectorAll("button")];
      btns[
        (btns.indexOf(e.target.closest("button")) + arrow + btns.length) %
          btns.length
      ].focus();
      return;
    }
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      act(() => step(arrow));
    }
  });

  /* ──────────────────────────────────────────────────────────────
     Layout grid overlay — the lines are the real column tracks the content
     sits on. It flashes once, on the first section opened, then gets out of the
     way; G (or the switch in the status bar) pins it on.
     ────────────────────────────────────────────────────────────── */
  // Overlay + scroll fades: non-scrolling layers on the body's grid cell.
  document.querySelectorAll(".detail").forEach((d) => {
    const body = d.querySelector(".d-body");
    d.insertAdjacentHTML(
      "beforeend",
      `
      <footer class="d-status rv" style="--i:8">
        <button type="button" class="grid-btn" aria-pressed="false"><span class="sw" aria-hidden="true"></span>${esc(UI.grid)}</button>
        <span class="cols"></span>
        <span class="hints"><span><kbd>G</kbd> ${esc(UI.hintGrid)}</span><span><kbd>←</kbd> <kbd>→</kbd> ${esc(UI.hintNav)}</span><span><kbd>Esc</kbd> ${esc(UI.hintClose)}</span></span>
      </footer>`,
    );
    body.insertAdjacentHTML(
      "afterend",
      '<i class="d-grid" aria-hidden="true"></i><i class="d-fade t" aria-hidden="true"></i><i class="d-fade b" aria-hidden="true"></i>',
    );
    // --sbw is the gutter the overlay and the fades keep clear of the scrollbar.
    // 10px matches ::-webkit-scrollbar, but where that doesn't apply (Firefox uses
    // scrollbar-width: thin) the real width depends on engine, platform and zoom —
    // so read it off the body rather than assume it.
    const isContact = body.classList.contains("contact");
    // phone: the index becomes a strip of tabs whose widths follow their labels;
    // round them up so their borders stay on whole pixels
    const tabs = body.querySelector(".proj-list");
    const tabBtns = tabs ? [...tabs.querySelectorAll("button")] : [];
    // One pass: gather every measurement, then write. Reading after a write forces a
    // synchronous reflow each time; batching the reads keeps it to a single one.
    const sync = () => {
      // Read-all, then write-all. The contact block's height is the span of its
      // children (scrollHeight never drops below clientHeight, so it can't tell how
      // much room is left); padding moves them all alike, so there's no feedback loop.
      const sbw = body.offsetWidth - body.clientWidth;
      let free = 0;
      if (isContact) {
        const kids = [...body.children];
        const top = Math.min(...kids.map((k) => k.offsetTop));
        const bottom = Math.max(...kids.map((k) => k.offsetTop + k.offsetHeight));
        free = body.clientHeight - (bottom - top);
      }
      const strip =
        tabBtns.length > 0 && getComputedStyle(tabs).display === "flex";
      const widths = strip
        ? tabBtns.map((b) => Math.ceil(b.getBoundingClientRect().width))
        : null;
      const cols = syncCols(d, true); // read with the other measurements

      // writes (no reads after this point)
      if (sbw !== d.style.getPropertyValue("--sbw"))
        d.style.setProperty("--sbw", `${sbw}px`);
      if (isContact)
        body.style.paddingTop = `${Math.max(0, Math.floor(free / 2))}px`;
      if (strip)
        tabBtns.forEach((b, i) => {
          b.style.width = `${widths[i]}px`;
        });
      if (cols)
        d.querySelector(".d-status .cols").textContent = `${cols} ${UI.cols}`;
    };
    sync();
    new ResizeObserver(sync).observe(body);
  });

  let gridPinned = false;
  let gridFlashed = false;
  let gridTimer = 0;

  function showGrid(detail, on) {
    clearTimeout(gridTimer);
    detail.classList.toggle("show-grid", on);
    detail
      .querySelector(".grid-btn")
      .setAttribute("aria-pressed", String(on && gridPinned));
  }
  // the first section opened shows its grid for a beat — a reveal, not a setting
  function flashGrid(detail) {
    if (gridPinned || gridFlashed || reduced) {
      showGrid(detail, gridPinned);
      return;
    }
    gridFlashed = true;
    showGrid(detail, true);
    gridTimer = setTimeout(() => detail.classList.remove("show-grid"), 1500);
  }
  // Stats count up as they arrive. Each figure's width is locked to its final value
  // first, so the unit beside it never shifts while the digits run.
  const easeOut = bezier(0.16, 1, 0.3, 1);
  function countUp(detail) {
    if (reduced) return;
    detail.querySelectorAll(".stats .num").forEach((el) => {
      const final = el.dataset.v ?? (el.dataset.v = el.textContent);
      if (!/^\d+(\.\d+)?$/.test(final)) return;
      const target = parseFloat(final);
      const dec = (final.split(".")[1] || "").length;
      cancelAnimationFrame(el._raf);
      el.style.minWidth = `${el.offsetWidth}px`;
      el.textContent = (0).toFixed(dec);
      const t0 = performance.now() + 260; // lands with the stats row's own reveal
      const tick = (now) => {
        const p = Math.max(0, Math.min(1, (now - t0) / 1100));
        el.textContent = (target * easeOut(p)).toFixed(dec);
        if (p < 1) el._raf = requestAnimationFrame(tick);
        else {
          el.textContent = final;
          el.style.minWidth = "";
        }
      };
      el._raf = requestAnimationFrame(tick);
    });
  }

  // the status bar names the grid the content actually uses at this width;
  // read=true measures during a read phase, the caller writes the label later
  function syncCols(detail, read) {
    const cols = getComputedStyle(detail).getPropertyValue("--cols").trim();
    if (read) return cols;
    detail.querySelector(".d-status .cols").textContent = `${cols} ${UI.cols}`;
  }
  function toggleGrid() {
    if (!current) return;
    gridPinned = !gridPinned;
    showGrid(current.querySelector(".detail"), gridPinned);
  }
  document
    .querySelectorAll(".grid-btn")
    .forEach((b) => b.addEventListener("click", toggleGrid));

  /* ──────────────────────────────────────────────────────────────
     Section switcher — move between open sections without closing.
     The next panel arrives already expanded and slides in over the
     current one (which drifts back and dims), transform/opacity only.
     ────────────────────────────────────────────────────────────── */
  const NAMES = data.panels.map((p) => p.face.title);
  const SWITCH = { ms: reduced ? 1 : 720, css: "cubic-bezier(.3,0,0,1)" };

  // The preference can change mid-session: the CSS re-reads it on its own, but these
  // timings are captured in JS, so keep them in step too.
  rmq.addEventListener("change", (e) => {
    reduced = e.matches;
    OPEN.ms = reduced ? 240 : 950;
    OPEN.lag = reduced ? 0 : 70;
    CLOSE.ms = reduced ? 220 : 720;
    CLOSE.lag = reduced ? 0 : 60;
    SWITCH.ms = reduced ? 1 : 720;
  });

  panels.forEach((panel, i) => {
    const n = panels.length;
    const prev = (i + n - 1) % n,
      next = (i + 1) % n;
    panel.querySelector(".close").insertAdjacentHTML(
      "beforebegin",
      `
      <nav class="d-nav rv" style="--i:0" aria-label="${esc(UI.sections)}">
        <button type="button" class="press" data-step="-1" aria-label="Previous section: ${NAMES[prev]}"><span aria-hidden="true">←</span><em>${NAMES[prev]}</em></button>
        <b aria-hidden="true">${String(i + 1).padStart(2, "0")}/${String(n).padStart(2, "0")}</b>
        <button type="button" class="press" data-step="1" aria-label="Next section: ${NAMES[next]}"><em>${NAMES[next]}</em><span aria-hidden="true">→</span></button>
      </nav>`,
    );
    panel
      .querySelectorAll(".d-nav button")
      .forEach((b) =>
        b.addEventListener("click", () =>
          act(() => step(Number(b.dataset.step))),
        ),
      );
  });

  // Apply class changes with every transition off, so a panel can jump
  // straight to (or out of) its open state while it is out of sight.
  function snap(panel, fn) {
    panel.classList.add("snap");
    fn();
    void panel.offsetWidth;
    panel.classList.remove("snap");
  }

  async function step(dir) {
    if (state !== "open" || !current) return;
    closeTake();
    state = "switching";
    const from = current;
    const to =
      panels[(panels.indexOf(from) + dir + panels.length) % panels.length];
    const a = parts(from),
      b = parts(to);

    // bring the target in, fully open, parked off to one side
    to.inert = false;
    snap(to, () => {
      to.classList.remove("is-receding");
      to.classList.add("is-active", "is-reading", "is-expanded", "is-front");
      b.fTitle.style.opacity = "0";
    });
    b.face.setAttribute("aria-expanded", "true");
    b.face.tabIndex = -1;
    b.detail.inert = false;
    current = to;
    tintName(null);
    to.style.setProperty("--sdir", dir); // which edge leads: it carries the sheet's shadow
    const sb = stage.getBoundingClientRect(); // (snap() has just laid out: no extra cost)
    desk.pulse(dir === 1 ? sb.right : sb.left, sb.top + sb.height / 2, 0.7, wave(0, SWITCH.ms));
    stage.classList.add("is-switching");
    showGrid(a.detail, false);

    const opts = { duration: SWITCH.ms, easing: SWITCH.css };
    const inAnim = b.win.animate(
      [{ transform: `translateX(${dir * 100}%)` }, { transform: "none" }],
      opts,
    );
    const outAnim = a.win.animate(
      [
        { transform: "none", opacity: 1 },
        { transform: `translateX(${dir * -28}%)`, opacity: 0.35 },
      ],
      { ...opts, fill: "forwards" },
    );
    setTimeout(() => {
      b.detail.classList.add("is-in");
      showGrid(b.detail, gridPinned);
      syncCols(b.detail);
      countUp(b.detail);
    }, SWITCH.ms * 0.25);

    await inAnim.finished;

    // retire the old panel behind the new one, straight to its covered state
    snap(from, () => {
      from.classList.remove("is-active", "is-reading", "is-expanded");
      from.classList.add("is-receding");
      a.detail.classList.remove("is-in");
      a.fTitle.style.opacity = "";
    });
    outAnim.cancel();
    from.inert = true;
    a.detail.inert = true;
    a.detail.querySelector(".d-body").scrollTop = 0;
    a.face.setAttribute("aria-expanded", "false");
    a.face.tabIndex = 0;
    to.classList.remove("is-front");
    stage.classList.remove("is-switching");

    const same = document.activeElement?.closest(".d-nav")
      ? `.d-nav [data-step="${dir}"]`
      : ".d-title";
    b.detail.querySelector(same).focus({ preventScroll: true });
    state = "open";
    flush();
  }

  /* ──────────────────────────────────────────────────────────────
     Projects index
     ────────────────────────────────────────────────────────────── */
  const projButtons = [...document.querySelectorAll(".proj-list button")];
  const projViews = [...document.querySelectorAll(".pv")];

  function showProject(i) {
    projButtons.forEach((b, j) => b.classList.toggle("is-current", i === j));
    projViews.forEach((v, j) => {
      v.classList.toggle("is-current", i === j);
      v.inert = i !== j;
    });
  }
  showProject(0);
  projButtons.forEach((b) => {
    const i = Number(b.dataset.p);
    b.addEventListener("focus", () => showProject(i));
    b.addEventListener("click", () => showProject(i));
  });

  /* ──────────────────────────────────────────────────────────────
     Techstack — icons (Simple Icons, CC0) come from data.js
     ────────────────────────────────────────────────────────────── */
  const TECH = data.tech || [];
  const TECH_BY_ID = Object.fromEntries(TECH.map((t) => [t.id, t]));
  const icon = (id) => {
    const t = TECH_BY_ID[id];
    return t
      ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${t.d}"/></svg>`
      : "";
  };

  // scene stickers
  document.querySelectorAll("[data-icon]").forEach((el) => {
    el.innerHTML = icon(el.dataset.icon);
  });

  // A seeded shuffle + jitter: looks scattered, but identical on every visit.
  function seeded(seed) {
    return () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  }
  const cloud = document.querySelector("[data-cloud]");
  const take = document.getElementById("take");
  // A honeycomb that grows out of the </> core: daily drivers fill the ring
  // touching it, everything else sits further out. Cells are picked on a hex
  // lattice by distance from the centre (stretched to the box's aspect, so the
  // cluster fills a wide area) and sized to fit — nothing overlaps, ever.
  // Positions are set once per resize; the only motion is each tile's CSS bob.
  // (The tech panel is optional — skip the whole system if it isn't in data.js.)
  if (cloud)
    (() => {
      const rand = seeded(11);
      const sizes = [];
      const order = [
        ...TECH.filter((x) => x.tier === 1),
        ...TECH.filter((x) => x.tier === 2),
      ];
      cloud.innerHTML =
        '<div class="core" aria-hidden="true"><b>&lt;/&gt;</b></div>' +
        order
          .map((x, k) => {
            // each tile floats on its own: an ellipse of its own size, clock and
            // direction, a sway on another clock, and a size a touch off its tier's
            const rz = ((rand() - 0.5) * 9).toFixed(1);
            const ft = (8 + rand() * 6).toFixed(2),
              fd = (-rand() * 14).toFixed(2),
              st = (4.2 + rand() * 3).toFixed(2),
              ax = (2.5 + rand() * 3.5).toFixed(1),
              ay = (3 + rand() * 3.5).toFixed(1),
              sw = (0.8 + rand() * 1.6).toFixed(2),
              dir = rand() < 0.5 ? "normal" : "reverse";
            sizes[k] = x.tier === 1 ? 1 + rand() * 0.08 : 0.9 + rand() * 0.16;
            return `<div class="tk t${x.tier}" style="--rz:${rz}deg;--ft:${ft}s;--fd:${fd}s;--st:${st}s;--ax:${ax}px;--ay:${ay}px;--sw:${sw}deg;--fdir:${dir};--sz:${sizes[k].toFixed(3)};--k:${k}">
      <button type="button" data-id="${x.id}" aria-expanded="false" aria-controls="take" aria-label="${esc(x.name)} — ${x.tier === 1 ? UI.dailyDriver : UI.whenFits}. ${esc(UI.showTake)}">${icon(x.id)}</button>
      <span class="nm" aria-hidden="true">${esc(x.name)}</span>
    </div>`;
          })
          .join("");
      const tiles = [...cloud.querySelectorAll(".tk")];
      const core = cloud.querySelector(".core");
      const nDaily = order.filter((x) => x.tier === 1).length;

      function layout(entries) {
        // size from the observer entry, so laying out the honeycomb never forces a
        // layout (the observer's first callback supplies it).
        const bs =
          entries &&
          entries[0] &&
          entries[0].borderBoxSize &&
          entries[0].borderBoxSize[0];
        const w = bs ? bs.inlineSize : cloud.clientWidth;
        const h = bs ? bs.blockSize : cloud.clientHeight;
        if (!w || !h) return;
        // Phones: a honeycomb packs too small in a narrow column, so lay the tiles
        // out as a plain grid — bigger targets, even distribution. The honeycomb
        // comes back as soon as there is room for it.
        const grid = w < 560;
        cloud.classList.toggle("is-grid", grid);
        if (grid) {
          const cols = w < 330 ? 4 : w < 440 ? 5 : 6;
          // the right pad (in the CSS too) leaves room for the corner tabs and shadows
          const gap = 12, // = --gx
            pad = 4 + 14;
          const cell = (w - pad - gap * (cols - 1)) / cols;
          cloud.style.setProperty("--cols", cols);
          cloud.style.setProperty("--unit", `${(cell / 0.56).toFixed(1)}px`); // drives the corner-tab size
          tiles.forEach((el) => {
            el.style.setProperty("--ox", "0px"); // the grid only pops in place
            el.style.setProperty("--oy", "0px");
          });
          return;
        }
        const aspect = Math.max(0.6, Math.min(3, w / h));
        // Pick cells on a hex lattice (axial coords, point-symmetric about the core)
        // nearest-first under a stretch factor, taking them in mirrored pairs so the
        // cluster stays balanced. Try a range of stretches and keep the one that
        // lets the tiles be biggest in this box.
        const lattice = [];
        for (let r = -9; r <= 9; r++) {
          for (let q = -18; q <= 18; q++) {
            const x = q + r * 0.5,
              y = r * 0.866;
            if (Math.abs(x) <= 15) lattice.push({ x, y });
          }
        }
        const key = (c) => `${Math.round(c.x * 2)},${Math.round(c.y * 100)}`;
        function pick(k) {
          const cells = lattice
            .map((c) => ({
              ...c,
              d: Math.hypot(c.x / aspect ** (k / 2), c.y * aspect ** k),
            }))
            .sort(
              (a, b) =>
                a.d - b.d || Math.atan2(a.y, a.x) - Math.atan2(b.y, b.x),
            );
          const picked = [cells[0]],
            used = new Set([key(cells[0])]);
          for (const c of cells.slice(1)) {
            if (picked.length > tiles.length) break;
            if (used.has(key(c))) continue;
            picked.push(c);
            used.add(key(c));
            if (picked.length <= tiles.length) {
              const m = { x: -c.x, y: -c.y, d: c.d };
              picked.push(m);
              used.add(key(m));
            }
          }
          const xs = picked.map((c) => c.x),
            ys = picked.map((c) => c.y);
          const spanX = Math.max(...xs) - Math.min(...xs) + 1,
            spanY = Math.max(...ys) - Math.min(...ys) + 1;
          const unit = Math.min(
            (w - 40) / (spanX + 1),
            (h - 44) / (spanY + 1),
            150,
          );
          return { picked, xs, ys, unit };
        }
        let best = null;
        for (let k = 0; k <= 1.6; k += 0.1) {
          const r = pick(k);
          if (!best || r.unit > best.unit + 0.5) best = r;
        }
        const { picked, xs, ys, unit } = best;
        // a wide box leaves the rows short of the height: let them breathe apart
        // (up to 1.3×), so the cluster fills the section instead of banding across it
        const spanY = Math.max(...ys) - Math.min(...ys);
        const uy = spanY
          ? Math.max(unit, Math.min(unit * 1.3, (h - 44 - unit) / spanY))
          : unit;
        // daily drivers take the cells nearest the core
        const inner = picked.slice(1).sort((a, b) => a.d - b.d);
        const ox = w / 2 - ((Math.max(...xs) + Math.min(...xs)) / 2) * unit;
        const oy = h / 2 - ((Math.max(...ys) + Math.min(...ys)) / 2) * uy;
        cloud.style.setProperty("--unit", `${Math.round(unit)}px`);
        // the hover labels centre on their tile: a whole-pixel width keeps them crisp.
        // Reset all widths, then read them all, then write them all — one layout pass
        // rather than a forced reflow per label.
        const nms = [...cloud.querySelectorAll(".nm")];
        for (const nm of nms) nm.style.width = "";
        const nmW = nms.map(
          (nm) => `${Math.ceil(nm.getBoundingClientRect().width / 2) * 2}px`,
        ); // even: centred by half its own width
        nms.forEach((nm, i) => {
          nm.style.width = nmW[i];
        });
        const cx = Math.round(ox + picked[0].x * unit),
          cy = Math.round(oy + picked[0].y * uy);
        core.style.translate = `${cx}px ${cy}px`;
        // Scatter: every tile is nudged off its lattice point (seeded, so a resize
        // never reshuffles), then any pair that got too close is relaxed apart —
        // the rows dissolve into a loose spread while the spacing stays even.
        const jr = seeded(29);
        const pts = tiles.map((el, k) => ({
          x: ox + inner[k].x * unit + (jr() - 0.5) * 0.36 * unit,
          y: oy + inner[k].y * uy + (jr() - 0.5) * 0.3 * uy,
          s: unit * (order[k].tier === 1 ? 0.7 : 0.56) * sizes[k],
        }));
        const all = [{ x: cx, y: cy, s: unit * 0.62, fixed: true }, ...pts];
        const clear = unit * 0.2; // room for the float, the shadow and the corner tab
        for (let it = 0; it < 12; it++) {
          for (let i = 0; i < all.length; i++)
            for (let j = i + 1; j < all.length; j++) {
              const a = all[i],
                b = all[j];
              const need = (a.s + b.s) / 2 + clear;
              const dx = b.x - a.x,
                dy = b.y - a.y;
              const ovx = need - Math.abs(dx),
                ovy = need - Math.abs(dy);
              if (ovx <= 0 || ovy <= 0) continue;
              // squares: part along the axis that needs the smaller move
              const alongX = ovx < ovy;
              const d = (alongX ? ovx : ovy) * (a.fixed || b.fixed ? 1 : 0.5);
              const sx = alongX ? Math.sign(dx) || 1 : 0,
                sy = alongX ? 0 : Math.sign(dy) || 1;
              if (!a.fixed) {
                a.x -= sx * d;
                a.y -= sy * d;
              }
              if (!b.fixed) {
                b.x += sx * d;
                b.y += sy * d;
              }
            }
          for (const p of pts) {
            const m = p.s / 2 + 12;
            p.x = Math.min(w - m - 6, Math.max(m, p.x));
            p.y = Math.min(h - m - 10, Math.max(m, p.y));
          }
        }
        tiles.forEach((el, k) => {
          const p = { x: Math.round(pts[k].x), y: Math.round(pts[k].y) };
          el.style.translate = `${p.x}px ${p.y}px`;
          el.style.setProperty("--ox", `${cx - p.x}px`); // the way back to the core
          el.style.setProperty("--oy", `${cy - p.y}px`);
        });
      }
      new ResizeObserver(layout).observe(cloud);
    })();

  let takeFor = null;
  function closeTake() {
    if (!takeFor) return false;
    takeFor.setAttribute("aria-expanded", "false");
    takeFor.parentElement.classList.remove("open");
    takeFor = null;
    take.hidden = true;
    return true;
  }
  function openTake(btn) {
    const t = TECH_BY_ID[btn.dataset.id];
    if (!t) return;
    if (takeFor === btn) {
      closeTake();
      return;
    }
    closeTake();
    takeFor = btn;
    btn.setAttribute("aria-expanded", "true");
    btn.parentElement.classList.add("open");
    take.querySelector(".take-ico").innerHTML = icon(t.id);
    take.querySelector("h3").textContent = t.name;
    take.querySelector(".take-meta").innerHTML =
      `${esc(t.tier === 1 ? UI.dailyDriver : UI.whenFits)} · <span>${esc(t.since)}</span> · <span>${esc(new Date().getFullYear() - t.since)} yrs</span>`;
    take.querySelector("p").textContent = t.take;
    take.querySelector("footer em").textContent = t.used;
    take.hidden = false;

    // place beside the icon — or as a bottom sheet when the body is too narrow
    const body = take.parentElement;
    take.style.right = "auto";
    take.style.bottom = "auto";
    if (body.clientWidth < 540) {
      take.style.left = "10px";
      take.style.right = "10px";
      take.style.bottom = "10px";
      take.style.top = "auto";
      take.style.width = "auto";
      take.style.setProperty("--tox", "50%");
    } else {
      const b = body.getBoundingClientRect(),
        r = btn.getBoundingClientRect();
      const w = take.offsetWidth,
        h = take.offsetHeight;
      let x = r.right - b.left + 14,
        y = r.top - b.top + body.scrollTop - 6;
      let ox = "0%";
      if (x + w > body.clientWidth - 8) {
        x = r.left - b.left - w - 14;
        ox = "100%";
      }
      if (x < 0) {
        x = Math.max(0, r.left - b.left + r.width / 2 - w / 2);
        y = r.bottom - b.top + body.scrollTop + 26;
        ox = "50%";
      }
      x = Math.max(0, Math.min(x, body.clientWidth - w - 8)); // never past either edge (narrow phones)
      y = Math.max(
        body.scrollTop,
        Math.min(y, body.scrollTop + body.clientHeight - h - 10),
      );
      take.style.width = "";
      take.style.left = `${Math.round(x)}px`;
      take.style.top = `${Math.round(y)}px`;
      take.style.setProperty("--tox", ox);
    }
    take.style.animation = "none";
    void take.offsetWidth;
    take.style.animation = "";
  }
  if (cloud && take) {
    cloud.addEventListener("click", (e) => {
      const btn = e.target.closest(".tk button");
      if (btn) openTake(btn);
    });
    take.querySelector(".take-x").addEventListener("click", () => {
      const b = takeFor;
      closeTake();
      b?.focus();
    });
    document.addEventListener("pointerdown", (e) => {
      if (takeFor && !e.target.closest(".take, .tk button")) closeTake();
    });
  }

  /* ──────────────────────────────────────────────────────────────
     Info scene — the face watches the pointer while you're on the grid
     ────────────────────────────────────────────────────────────── */
  {
    const eyes = document.querySelector(".scene--info .eyes");
    const face = document.querySelector(".scene--info .smiley");
    let raf = 0,
      px = 0,
      py = 0;
    const aim = () => {
      raf = 0;
      const r = face.getBoundingClientRect();
      const dx = px - (r.left + r.width / 2),
        dy = py - (r.top + r.height / 2);
      const d = Math.hypot(dx, dy) || 1,
        k = Math.min(1, d / 260);
      eyes.style.setProperty("--ex", `${((dx / d) * k * 3.2).toFixed(2)}cqmin`);
      eyes.style.setProperty("--ey", `${((dy / d) * k * 2.4).toFixed(2)}cqmin`);
    };
    if (!reduced && eyes && face) {
      stage.addEventListener("pointermove", (e) => {
        if (state !== "idle") return;
        px = e.clientX;
        py = e.clientY;
        if (!raf) raf = requestAnimationFrame(aim);
      });
      stage.addEventListener("pointerleave", () => {
        eyes.style.setProperty("--ex", "0");
        eyes.style.setProperty("--ey", "0");
      });
    }
  }

  /* ──────────────────────────────────────────────────────────────
     Project mocks — generated SVG for the dashboard and the archive
     ────────────────────────────────────────────────────────────── */
  const svg = (viewBox, body, attrs = "") =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" ${attrs}>${body}</svg>`;

  // Three physiological-looking traces. Every frequency is a whole multiple of the
  // 500-unit period, so the two halves match and the sweep loops without a seam.
  const W = (Math.PI * 2) / 500;
  document.querySelectorAll("[data-signals]").forEach((el) => {
    const traces = [
      {
        y: 50,
        amp: 18,
        color: "#3ed6b5",
        f: (x) =>
          Math.sin(x * W * 7) * 0.5 +
          Math.sin(x * W * 18) * 0.3 +
          Math.sin(x * W * 49) * 0.2,
      },
      {
        y: 120,
        amp: 22,
        color: "#8cc8ff",
        f: (x) => {
          const p = x % 100;
          return p > 46 && p < 54
            ? (p < 50 ? (p - 46) / 4 : (54 - p) / 4) * 2 - 0.4
            : Math.sin(x * W * 5) * 0.15;
        },
      },
      { y: 185, amp: 10, color: "#f5c46b", f: (x) => Math.sin(x * W * 3) },
    ];
    let body = "";
    for (const t of traces) {
      let d = "";
      for (let x = 0; x <= 1000; x += 2) {
        d += `${x ? "L" : "M"}${x} ${(t.y - t.f(x % 500) * t.amp).toFixed(1)}`;
      }
      body += `<path d="${d}" fill="none" stroke="${t.color}" stroke-width="1.4" vector-effect="non-scaling-stroke"/>`;
    }
    el.innerHTML = svg("0 0 1000 220", body, 'preserveAspectRatio="none"');
  });

  // Stacked tide lines, one per decade-ish, with a highlighted "selected year".
  document.querySelectorAll("[data-tide]").forEach((el) => {
    let body = "";
    for (let i = 0; i < 26; i++) {
      const y = 90 + i * 12;
      const a = 4 + i * 0.9;
      let d = "";
      for (let x = 0; x <= 800; x += 8) {
        d += `${x ? "L" : "M"}${x} ${(y + Math.sin(x * 0.012 + i * 0.45) * a + Math.sin(x * 0.031 + i) * a * 0.35).toFixed(1)}`;
      }
      const hot = i === 17;
      body += `<path d="${d}" fill="none" stroke="${hot ? "#eaf6fc" : "#6fa3c0"}" stroke-opacity="${hot ? 1 : (0.18 + i / 50).toFixed(2)}" stroke-width="${hot ? 1.6 : 1}"/>`;
    }
    el.innerHTML = svg(
      "0 0 800 480",
      body,
      'preserveAspectRatio="xMidYMid slice"',
    );
  });

  /* ──────────────────────────────────────────────────────────────
     Contact — clock and copy button
     ────────────────────────────────────────────────────────────── */
  const clock = document.getElementById("clock");
  if (clock) {
    const contact = data.panels.find((p) => p.detail.layout === "contact");
    const tz = contact?.detail.content?.clock?.timezone || "Europe/Lisbon";
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => {
      clock.textContent = fmt.format(new Date());
    };
    tick();
    setInterval(tick, 1000);
  }

  // Placeholder links (no URL yet): say "soon" instead of jumping to the top.
  document.querySelectorAll('a[href="#"]').forEach((a) => {
    a.classList.add("soon");
    a.setAttribute("aria-disabled", "true");
    a.title = UI.soon;
    // the arrow promises a destination; placeholders drop it
    if (a.closest(".pv-links"))
      a.textContent = a.textContent.replace(/\s*↗\s*$/, "");
    a.querySelector(".socials i, i")?.replaceChildren();
    a.addEventListener("click", (e) => e.preventDefault());
  });

  document.querySelectorAll("[data-copy]").forEach((btn) => {
    const original = btn.textContent;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(btn.dataset.copy);
        btn.textContent = UI.copied;
      } catch {
        btn.textContent = UI.copyFallback;
      }
      setTimeout(() => {
        btn.textContent = original;
      }, 1800);
    });
  });
}

/* ──────────────────────────────────────────────────────────────
   Boot screen — it is painted from index.html before any script runs,
   so there is never a flash of empty page. The stage is rendered
   behind it, then this lifts and releases the name's intro.
   ────────────────────────────────────────────────────────────── */
const bootEl = document.getElementById("boot");
const bootLog = bootEl?.querySelector("[data-boot-log]");
const bootPct = bootEl?.querySelector("[data-boot-pct]");
const bootStart = performance.now();
// Hold it long enough to read — once. A second visit in the same session runs
// the same log, faster; reduced-motion users never wait a beat longer.
let bootSeen = false;
try {
  bootSeen = sessionStorage.getItem("booted") === "1";
  sessionStorage.setItem("booted", "1");
} catch {}
const BOOT_MIN = reduced ? 300 : bootSeen ? 1500 : 2800;
// steps land no faster than this, so the log reads as a sequence even when
// everything is already cached
const STEP_GAP = reduced ? 0 : bootSeen ? 260 : 480;
let bootDone = false;
let flightsDone = []; // the first flight's animations, handed to the second

// Progress: each real milestone (data, render, paint, fonts) ticks its log line
// with the time it actually took, fills its bar segment and brings its section's
// tile online; the counter eases toward 25% a step.
const bootSteps = bootEl ? [...bootEl.querySelectorAll(".boot-steps li")] : [];
const bootTiles = bootEl ? [...bootEl.querySelectorAll(".boot-q")] : [];
const bootSegs = bootEl ? [...bootEl.querySelectorAll(".boot-bar i")] : [];
bootSegs[0]?.classList.add("is-active");
let lit = 0,
  pctNow = 0,
  pctRaf = 0,
  stepFrom = 0, // navigation start: the first step reports when data.js was in
  nextAt = bootStart + (reduced ? 0 : bootSeen ? 450 : 800), // all four tiles have landed
  bootQueue = Promise.resolve();
function bootCount() {
  pctRaf = 0;
  const target = lit * 25;
  pctNow = Math.min(target, pctNow + Math.max(1, Math.ceil((target - pctNow) * 0.2)));
  if (bootPct) bootPct.textContent = String(pctNow).padStart(3, "0");
  if (pctNow < target) pctRaf = requestAnimationFrame(bootCount);
}
function bootStep(i) {
  const at = performance.now(); // when the work really finished
  bootQueue = bootQueue.then(
    () =>
      new Promise((done) =>
        setTimeout(
          () => {
            const li = bootSteps[i];
            if (li) {
              li.classList.remove("is-active");
              li.classList.add("is-done");
              li.querySelector("b").textContent = `${Math.max(1, Math.round(at - stepFrom))}ms`;
            }
            stepFrom = at;
            bootSteps[i + 1]?.classList.add("is-active");
            bootTiles[i]?.classList.add("is-on");
            bootSegs[i]?.classList.replace("is-active", "is-on");
            bootSegs[i + 1]?.classList.add("is-active");
            lit = i + 1;
            if (!pctRaf) pctRaf = requestAnimationFrame(bootCount);
            nextAt = performance.now() + STEP_GAP;
            done();
          },
          Math.max(0, nextAt - performance.now()),
        ),
      ),
  );
  return bootQueue;
}

// The hand-off: each tile grows into the quadrant it stands for. Real geometry,
// not a scale — the outline never thickens and the texture never stretches —
// and on the way the CSS strips its sticker edge and lowers the panel's veil
// over it, so it lands as exactly the ground of that quadrant.
function handoff() {
  const wins = [...document.querySelectorAll("#stage .panel .win")];
  if (reduced || !bootTiles.length || bootTiles.length !== wins.length) return null;
  const from = bootTiles.map((t) => t.getBoundingClientRect());
  const to = wins.map((w) => w.getBoundingClientRect()); // measurable while hidden
  bootEl.classList.add("is-handoff");
  const box = (r) => ({
    left: `${r.left}px`,
    top: `${r.top}px`,
    width: `${r.width}px`,
    height: `${r.height}px`,
  });
  return bootTiles.map((t, i) => {
    Object.assign(t.style, { position: "fixed", margin: "0", ...box(from[i]) });
    return t.animate([box(from[i]), box(to[i])], {
      duration: 980,
      delay: i * 50,
      easing: "cubic-bezier(.7,0,.16,1)",
      fill: "forwards",
    });
  });
}

// The second flight: the tiles don't dissolve, they become the masthead's mark.
// Plain and tight: each tile comes alive (the offline veil lifts, the sticker
// edge returns) and, in section order, travels to its cell in the caret while
// its box shrinks to the cell's — real geometry, so it is never squashed and
// the outline stays one thickness — turning to the mark's tilt as it goes,
// with a small overshoot at the end. Targets are measured from layout.
function toMark() {
  const mark = document.querySelector(".name .mark");
  const plate = mark?.parentElement;
  const cells = mark ? [...mark.children] : [];
  if (reduced || !plate || cells.length !== bootTiles.length) return null;
  const pr = plate.getBoundingClientRect();
  const ang = parseFloat(getComputedStyle(mark).rotate) || 0; // the tilt it rests at, degrees
  const rad = (ang * Math.PI) / 180;
  // the mark turns about 50% 80% of itself
  const ox = pr.left + mark.offsetLeft + mark.offsetWidth * 0.5;
  const oy = pr.top + mark.offsetTop + mark.offsetHeight * 0.8;
  bootEl.classList.add("is-fly"); // veil off, sticker edge back (CSS)
  return bootTiles.map((t, i) => {
    const r = t.getBoundingClientRect(); // where the first flight left it: its quadrant
    flightsDone[i]?.cancel();
    const c = cells[i];
    const side = c.offsetWidth;
    const dx = pr.left + mark.offsetLeft + c.offsetLeft + side / 2 - ox;
    const dy = pr.top + mark.offsetTop + c.offsetTop + side / 2 - oy;
    const cx = ox + dx * Math.cos(rad) - dy * Math.sin(rad);
    const cy = oy + dx * Math.sin(rad) + dy * Math.cos(rad);
    const box = (L, T, W, H) => ({ left: `${L}px`, top: `${T}px`, width: `${W}px`, height: `${H}px` });
    const from = box(r.left, r.top, r.width, r.height);
    const over = box(cx - side * 0.58, cy - side * 0.58, side * 1.16, side * 1.16); // a touch large, then settles
    const to = box(cx - side / 2, cy - side / 2, side, side);
    Object.assign(t.style, { position: "fixed", margin: "0", transformOrigin: "50% 50%", ...from });
    return t.animate(
      [
        { ...from, transform: "rotate(0deg)", easing: "cubic-bezier(.6,0,.2,1)" },
        { ...over, transform: `rotate(${ang}deg)`, offset: 0.82, easing: "cubic-bezier(.3,0,.3,1)" },
        { ...to, transform: `rotate(${ang}deg)` },
      ],
      { duration: 1000, delay: 140 + i * 80, fill: "forwards" },
    );
  });
}

// The stage is revealed under the landed tiles; its scenes and type set in.
function stageIn() {
  if (document.body.classList.contains("is-staged")) return;
  document.body.classList.add("is-staged");
  const stage = document.getElementById("stage");
  // the sheets have landed: one wave out from where the four meet
  desk.settle();
  const sb = stage.getBoundingClientRect();
  desk.pulse(sb.left + sb.width / 2, sb.top + sb.height / 2, 0.6);
  stage.classList.add("is-arriving");
  requestAnimationFrame(() =>
    requestAnimationFrame(() => stage.classList.remove("is-preintro")),
  );
  setTimeout(() => stage.classList.remove("is-arriving"), 1900);
}

function finishBoot() {
  if (bootDone) return;
  bootDone = true;
  if (bootLog) bootLog.textContent = UI.ready || "ready";
  document.body.classList.add("is-ready"); // releases the name's intro
  if (!bootEl) {
    document.body.classList.add("is-marked");
    return stageIn();
  }
  const gone = () => bootEl.remove();
  // the real mark takes over from the tiles that became it
  const settle = () => {
    document.body.classList.add("is-marked", "is-swap");
    setTimeout(() => document.body.classList.remove("is-swap"), 500);
    const fades = bootTiles.map((t) =>
      t.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, easing: "linear", fill: "forwards" }),
    );
    Promise.all(fades.map((f) => f.finished)).then(gone, gone);
  };
  const flights = handoff();
  if (flights) {
    flightsDone = flights;
    const land = () => {
      stageIn(); // the content comes up as the tiles leave their quadrants
      const home = toMark();
      if (!home) {
        // nowhere to fly to: dissolve onto the stage, colour for colour
        document.body.classList.add("is-marked");
        const fades = bootTiles.map((t) =>
          t.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 520, easing: "cubic-bezier(.3,0,.2,1)", fill: "forwards" }),
        );
        Promise.all(fades.map((f) => f.finished)).then(gone, gone);
        return;
      }
      Promise.all(home.map((f) => f.finished)).then(settle, settle);
    };
    Promise.all(flights.map((f) => f.finished)).then(land, land);
    setTimeout(() => {
      stageIn();
      document.body.classList.add("is-marked");
      gone();
    }, 4800); // safety
    return;
  }
  document.body.classList.add("is-marked");
  stageIn();
  bootEl.classList.add("is-done");
  bootEl.addEventListener("transitionend", (e) => {
    if (e.target === bootEl && e.propertyName === "opacity") gone();
  });
  setTimeout(gone, 900); // safety, if the transition is skipped
}

async function start() {
  const stage = document.getElementById("stage");
  const data = window.DATA;
  if (!data || !Array.isArray(data.panels)) {
    stage.innerHTML =
      '<p class="boot-error">Could not read <code>data.js</code> — the file must load and define <code>window.DATA</code>.</p>';
    finishBoot();
    return;
  }
  applyMeta(data.site?.meta);
  UI = { ...UI_DEFAULTS, ...(data.site?.ui || {}) };
  if (bootLog) bootLog.textContent = UI.loading || "loading";
  const bootPath = bootEl?.querySelector("[data-boot-path]");
  if (bootPath && data.site?.name)
    bootPath.textContent = `~/${data.site.name.trim().toLowerCase().replace(/\s+/g, "-")}`;
  bootStep(0); // data.js is in
  document.querySelector(".name").textContent = data.site?.name || "";
  stage.innerHTML =
    data.panels.map(renderPanel).join("") +
    '<div class="hub" aria-hidden="true"></div>' +
    '<div class="ghost" aria-hidden="true"></div>';
  // keep the boot screen's quadrant glyphs in step with the sections
  bootEl?.querySelectorAll(".boot-q .sym").forEach((el, i) => {
    const s = data.panels[i]?.detail?.symbol;
    if (s) el.textContent = s;
  });
  boot(data);
  bootStep(1); // rendered

  // Hand off only after the render is painted and the webfonts have settled,
  // but keep a ceiling so a slow/blocked font request can't hold the screen.
  const painted = new Promise((r) =>
    requestAnimationFrame(() => requestAnimationFrame(r)),
  );
  const fonts = Promise.race([
    document.fonts?.ready,
    new Promise((r) => setTimeout(r, 1800)),
  ]);
  const shown = new Promise((r) =>
    setTimeout(r, Math.max(0, BOOT_MIN - (performance.now() - bootStart))),
  );
  await painted;
  bootStep(2);
  await fonts;
  await bootStep(3);
  await shown;
  // a beat with all four online, then hand off
  await new Promise((r) => setTimeout(r, reduced ? 0 : bootSeen ? 350 : 650));
  requestAnimationFrame(finishBoot);
}

start().catch((err) => {
  console.error(err);
  finishBoot();
});
