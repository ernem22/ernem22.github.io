/* ──────────────────────────────────────────────────────────────
   Motion helpers
   ────────────────────────────────────────────────────────────── */
function bezier(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
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
    let lo = 0, hi = 1;
    t = x;
    while (hi - lo > 1e-5) {
      if (X(t) < x) lo = t; else hi = t;
      t = (lo + hi) / 2;
    }
    return Y(t);
  };
}

const rmq = matchMedia('(prefers-reduced-motion: reduce)');
let reduced = rmq.matches;

// A UI resize, not a film cut: short, decisive, settles hard.
const OPEN = {
  ms: reduced ? 240 : 950,
  lag: reduced ? 0 : 70,           // height trails width slightly: the panel unfolds rather than zooms
  css: 'cubic-bezier(.3,0,0,1)',
  ease: bezier(.3, 0, 0, 1),
};
const CLOSE = {
  ms: reduced ? 220 : 720,
  lag: reduced ? 0 : 60,
  css: 'cubic-bezier(.4,0,.1,1)',
  ease: bezier(.4, 0, .1, 1),
};

/* ──────────────────────────────────────────────────────────────
   Layout — rest geometry for the window/canvas pair.

   The stage's layout box is always its *open* size: it reaches up
   into the space the name will free when it shrinks (--off). At rest
   the top panels are simply translated down by --off, so the grid
   looks exactly as before; opening releases that translate while the
   name scales down. Nothing ever relayouts mid-animation.
   ────────────────────────────────────────────────────────────── */
const stage = document.getElementById('stage');
const nameEl = document.querySelector('.name');
{
  const text = nameEl.textContent.trim();
  nameEl.setAttribute('aria-label', text);
  let i = 0;
  nameEl.innerHTML = [...text].map((ch) => ch === ' '
    ? ' '
    : `<span class="ch" style="--i:${i++}" aria-hidden="true"><i>${ch}</i></span>`).join('');
}
const panels = [...stage.querySelectorAll('.panel')];
const ghost = stage.querySelector('.ghost');
const measureEl = stage.querySelector('.measure');
const GUTTER = 8;
const NAME_SCALE = 0.5;          // the name's size while a panel is open
document.documentElement.style.setProperty('--name-k', NAME_SCALE);

let rest = { sx: 0.5, sy: 0.5, off: 0 };

function measure() {
  const off = Math.round(nameEl.offsetHeight * (1 - NAME_SCALE));
  stage.style.setProperty('--off', `${off}px`);
  const { width: w, height: h } = stage.getBoundingClientRect();
  rest = { sx: (w - GUTTER) / 2 / w, sy: (h - off - GUTTER) / 2 / h, off };
  stage.style.setProperty('--sx0', rest.sx.toFixed(5));
  stage.style.setProperty('--sy0', rest.sy.toFixed(5));
  stage.style.setProperty('--a0', Math.max(rest.sx, rest.sy).toFixed(5));
}
measure();
const ro = new ResizeObserver(measure);
ro.observe(stage);
ro.observe(nameEl);
document.fonts?.ready.then(measure);

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
  return { sx: rest.sx + (1 - rest.sx) * px, sy: rest.sy + (1 - rest.sy) * py, py };
}

// How far a panel sits below the stage top: --off at rest, 0 when open.
const lift = (q, py) => (q[0] === 't' ? rest.off * (1 - py) : 0);

function keyframes(cfg, opening, q) {
  const total = cfg.ms + cfg.lag;
  const win = [], canvas = [];
  for (let i = 0; i <= STEPS; i++) {
    const { sx, sy, py } = scaleAt(cfg, opening, (i / STEPS) * total);
    win.push({ transform: `translate(0, ${lift(q, py)}px) scale(${sx}, ${sy})` });
    canvas.push({ transform: `scale(${1 / sx}, ${1 / sy})` });
  }
  return { win, canvas, total };
}

// Live "w × h" label riding the moving corner, like an element being resized in devtools.
// It only updates one small element per frame; the resize itself stays on the compositor.
function readout(panel, cfg, opening) {
  const s = stage.getBoundingClientRect();
  const q = panel.dataset.q;
  const total = cfg.ms + cfg.lag;
  measureEl.textContent = `${Math.round(s.width)} × ${Math.round(s.height)}`;
  const box = measureEl.getBoundingClientRect();   // widest the label gets; fixed-width digits below
  let last = '';
  const t0 = performance.now();
  measureEl.classList.add('on');
  const frame = (now) => {
    const e = Math.min(total, now - t0);
    const { sx, sy, py } = scaleAt(cfg, opening, e);
    const w = s.width * sx, h = s.height * sy;
    const x = q[1] === 'l' ? w : s.width - w;
    const y = q[0] === 't' ? lift(q, py) + h : s.height - h;
    // sit just inside the moving corner (size measured once, before the loop)
    const lx = q[1] === 'l' ? x - box.width - 8 : x + 8;
    const ly = q[0] === 't' ? y - box.height - 8 : y + 8;
    const label = `${Math.round(w)} × ${Math.round(h)}`;
    if (label !== last) measureEl.firstChild.nodeValue = last = label;
    measureEl.style.transform = `translate(${Math.round(lx)}px, ${Math.round(ly)}px)`;
    if (e < total) requestAnimationFrame(frame);
    else setTimeout(() => measureEl.classList.remove('on'), 350);
  };
  requestAnimationFrame(frame);
}

function quadRect(panel) {
  const s = stage.getBoundingClientRect();
  const w = s.width * rest.sx, h = s.height * rest.sy;
  const q = panel.dataset.q;
  return {
    left: q[1] === 'l' ? 0 : s.width - w,
    top: q[0] === 't' ? rest.off : s.height - h,
    width: w,
    height: h,
  };
}

function showGhost(panel, duration, peakAt) {
  const r = quadRect(panel);
  Object.assign(ghost.style, {
    left: `${r.left}px`, top: `${r.top}px`, width: `${r.width}px`, height: `${r.height}px`,
  });
  ghost.dataset.size = `${Math.round(r.width)} × ${Math.round(r.height)}`;
  ghost.animate(
    [{ opacity: 0 }, { opacity: 0.85, offset: peakAt }, { opacity: 0 }],
    { duration, easing: 'ease-in-out' }
  );
}

let state = 'idle';

// Input that arrives mid-animation isn't dropped: the latest one is kept
// and replayed as soon as the current transition settles.
let queued = null;
function act(fn) {
  if (state === 'idle' || state === 'open') fn();
  else queued = fn;
}
function flush() {
  const fn = queued;
  queued = null;
  if (fn) requestAnimationFrame(fn);
}
let current = null;

const parts = (panel) => {
  const face = panel.querySelector('.face');
  const detail = panel.querySelector('.detail');
  return {
    win: panel.querySelector('.win'),
    canvas: panel.querySelector('.canvas'),
    face,
    fTitle: face.querySelector('.title'),
    detail,
    dTitle: detail.querySelector('.d-title'),
  };
};

function setTitleVisible(el, visible) {
  el.style.transition = 'none';
  el.style.opacity = visible ? '' : '0';
  void el.offsetWidth;
  el.style.transition = '';
}

async function open(panel) {
  if (state !== 'idle') return;
  state = 'opening';
  current = panel;
  const { win, canvas, face, fTitle, detail, dTitle } = parts(panel);

  // Read geometry first, then only write: no forced style/layout inside the click.
  // (The detail is laid out even while hidden, so its title can be measured now.)
  const from = fTitle.getBoundingClientRect();
  const to = dTitle.getBoundingClientRect();

  stage.classList.add('is-open');
  nameEl.classList.add('is-small');
  panel.classList.add('is-active', 'is-reading');
  panels.forEach((p) => { if (p !== panel) p.classList.add('is-receding'); });
  face.setAttribute('aria-expanded', 'true');
  face.tabIndex = -1;
  detail.inert = false;

  // The face title becomes the detail title: same glyphs, carried across the stage.
  fTitle.style.transition = 'none';
  fTitle.style.opacity = '0';

  const k = keyframes(OPEN, true, panel.dataset.q);
  const opts = { duration: k.total, easing: 'linear', fill: 'forwards' };
  const anims = [
    win.animate(k.win, opts),
    canvas.animate(k.canvas, opts),
    dTitle.animate(
      [{ transform: `translate(${from.left - to.left}px, ${from.top - to.top}px)` }, { transform: 'none' }],
      { duration: k.total, easing: OPEN.css }
    ),
  ];
  showGhost(panel, k.total * 1.4, 0.1);
  readout(panel, OPEN, true);

  const reveal = setTimeout(() => { detail.classList.add('is-in'); flashGrid(detail); syncCols(detail); }, OPEN.ms * 0.5);

  await anims[0].finished;
  fTitle.style.transition = '';
  // Housekeeping that restyles hundreds of nodes waits until nothing is moving:
  // make the covered panels inert and pause their (now hidden) scenes.
  panels.forEach((p) => { if (p !== panel) p.inert = true; });
  stage.classList.add('is-still');
  panel.classList.add('is-expanded');
  anims.forEach((a) => a.cancel());
  clearTimeout(reveal);
  detail.classList.add('is-in');
  dTitle.focus({ preventScroll: true });
  state = 'open';
  flush();
}

async function close() {
  if (state !== 'open' || !current) return;
  closeTake();
  state = 'closing';
  const panel = current;
  const { win, canvas, face, fTitle, detail, dTitle } = parts(panel);

  const from = dTitle.getBoundingClientRect();

  detail.classList.remove('is-in');
  showGrid(detail, false);
  detail.classList.add('is-out');
  panel.classList.remove('is-reading');
  stage.classList.remove('is-still');
  panels.forEach((p) => { p.classList.remove('is-receding'); p.inert = false; });
  stage.classList.remove('is-open');
  nameEl.classList.remove('is-small');

  const k = keyframes(CLOSE, false, panel.dataset.q);
  const opts = { duration: k.total, easing: 'linear' };
  // Keyframes start at full size, so dropping the expanded class under them is seamless.
  const anims = [
    win.animate(k.win, opts),
    canvas.animate(k.canvas, opts),
  ];
  panel.classList.remove('is-expanded');

  const to = fTitle.getBoundingClientRect();
  const flight = dTitle.animate(
    [{ transform: 'none' }, { transform: `translate(${to.left - from.left}px, ${to.top - from.top}px)` }],
    { duration: k.total, easing: CLOSE.css, fill: 'forwards' }
  );
  showGhost(panel, k.total, 0.55);
  readout(panel, CLOSE, false);

  await Promise.all([anims[0].finished, flight.finished]).catch(() => {});
  setTitleVisible(fTitle, true);
  flight.cancel();
  panel.classList.remove('is-active');
  detail.classList.remove('is-out');
  detail.inert = true;
  detail.querySelector('.d-body').scrollTop = 0;
  face.setAttribute('aria-expanded', 'false');
  face.tabIndex = 0;
  face.focus({ preventScroll: true });
  current = null;
  state = 'idle';
  flush();
  tintName(hovered);
}

// The name's shadow echoes the hovered (or open) panel's accent.
const ACCENT = { 'p-info': '#f6cf72', 'p-projects': '#aac5f1', 'p-tech': '#cdbaf4', 'p-contact': '#a8e0cb' };
let hovered = null;
function tintName(panel) {
  const p = current || panel;
  if (p) { nameEl.style.setProperty('--nacc', ACCENT[p.id]); nameEl.style.setProperty('--k', ACCENT[p.id]); }
  else { nameEl.style.removeProperty('--nacc'); nameEl.style.removeProperty('--k'); }
}

panels.forEach((panel) => {
  const face = panel.querySelector('.face');
  face.addEventListener('pointerenter', () => { hovered = panel; tintName(panel); });
  face.addEventListener('pointerleave', () => { hovered = null; tintName(null); });
  panel.querySelector('.detail').inert = true;   // painted but hidden: keep it out of focus / a11y
  face.addEventListener('click', () => act(() => open(panel)));
  face.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(() => open(panel)); }
  });
  panel.querySelector('.close').addEventListener('click', () => act(close));
});

document.addEventListener('keydown', (e) => {
  const plain = !e.metaKey && !e.ctrlKey && !e.altKey;
  if (e.key === 'Escape' && closeTake()) return;
  if (e.key === 'Escape' && current) act(close);
  if ((e.key === 'g' || e.key === 'G') && state === 'open' && plain) toggleGrid();
  const arrow = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 1, ArrowUp: -1 }[e.key];
  if (!arrow || !plain || !current) return;
  // inside the project index, arrows move between projects (tabs pattern)
  const inList = e.target.closest?.('.proj-list');
  if (inList) {
    e.preventDefault();
    const btns = [...inList.querySelectorAll('button')];
    btns[(btns.indexOf(e.target.closest('button')) + arrow + btns.length) % btns.length].focus();
    return;
  }
  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
    e.preventDefault();
    act(() => step(arrow));
  }
});

/* ──────────────────────────────────────────────────────────────
   Layout grid overlay — the lines are the real column tracks the content
   sits on. On by default; G (or the switch in the status bar) hides it.
   ────────────────────────────────────────────────────────────── */
// Overlay + scroll fades: non-scrolling layers on the body's grid cell.
document.querySelectorAll('.detail').forEach((d) => {
  const body = d.querySelector('.d-body');
  d.insertAdjacentHTML('beforeend', `
    <footer class="d-status rv" style="--i:8">
      <button type="button" class="grid-btn" aria-pressed="true"><span class="sw" aria-hidden="true"></span>Layout grid</button>
      <span class="cols"></span>
      <span class="hints"><span><kbd>G</kbd> grid</span><span><kbd>←</kbd> <kbd>→</kbd> sections</span><span><kbd>Esc</kbd> close</span></span>
    </footer>`);
  body.insertAdjacentHTML('afterend',
    '<i class="d-grid" aria-hidden="true"></i><i class="d-fade t" aria-hidden="true"></i><i class="d-fade b" aria-hidden="true"></i>');
  // --sbw is the gutter the overlay and the fades keep clear of the scrollbar.
  // 10px matches ::-webkit-scrollbar, but where that doesn't apply (Firefox uses
  // scrollbar-width: thin) the real width depends on engine, platform and zoom —
  // so read it off the body rather than assume it.
  const syncSbw = () => {
    const w = `${body.offsetWidth - body.clientWidth}px`;
    if (w !== d.style.getPropertyValue('--sbw')) d.style.setProperty('--sbw', w);
  };
  syncSbw();
  new ResizeObserver(syncSbw).observe(body);
});

let gridPinned = true;
let gridTimer = 0;

function showGrid(detail, on) {
  clearTimeout(gridTimer);
  detail.classList.toggle('show-grid', on);
  detail.querySelector('.grid-btn').setAttribute('aria-pressed', String(on && gridPinned));
}
function flashGrid(detail) {
  showGrid(detail, gridPinned);
}
// the status bar names the grid the content actually uses at this width
function syncCols(detail) {
  const cols = getComputedStyle(detail).getPropertyValue('--cols').trim();
  detail.querySelector('.d-status .cols').textContent = `${cols} cols`;
}
function toggleGrid() {
  if (!current) return;
  gridPinned = !gridPinned;
  showGrid(current.querySelector('.detail'), gridPinned);
}
document.querySelectorAll('.grid-btn').forEach((b) => b.addEventListener('click', toggleGrid));

/* ──────────────────────────────────────────────────────────────
   Section switcher — move between open sections without closing.
   The next panel arrives already expanded and slides in over the
   current one (which drifts back and dims), transform/opacity only.
   ────────────────────────────────────────────────────────────── */
const NAMES = ['Info', 'Projects', 'Techstack', 'Contact'];
const SWITCH = { ms: reduced ? 1 : 720, css: 'cubic-bezier(.3,0,0,1)' };

// The preference can change mid-session: the CSS re-reads it on its own, but these
// timings are captured in JS, so keep them in step too.
rmq.addEventListener('change', (e) => {
  reduced = e.matches;
  OPEN.ms = reduced ? 240 : 950;   OPEN.lag = reduced ? 0 : 70;
  CLOSE.ms = reduced ? 220 : 720;  CLOSE.lag = reduced ? 0 : 60;
  SWITCH.ms = reduced ? 1 : 720;
});

panels.forEach((panel, i) => {
  const n = panels.length;
  const prev = (i + n - 1) % n, next = (i + 1) % n;
  panel.querySelector('.close').insertAdjacentHTML('beforebegin', `
    <nav class="d-nav rv" style="--i:0" aria-label="Sections">
      <button type="button" class="press" data-step="-1" aria-label="Previous section: ${NAMES[prev]}"><span aria-hidden="true">←</span><em>${NAMES[prev]}</em></button>
      <b aria-hidden="true">${String(i + 1).padStart(2, '0')}/${String(n).padStart(2, '0')}</b>
      <button type="button" class="press" data-step="1" aria-label="Next section: ${NAMES[next]}"><em>${NAMES[next]}</em><span aria-hidden="true">→</span></button>
    </nav>`);
  panel.querySelectorAll('.d-nav button').forEach((b) =>
    b.addEventListener('click', () => act(() => step(Number(b.dataset.step)))));
});

// Apply class changes with every transition off, so a panel can jump
// straight to (or out of) its open state while it is out of sight.
function snap(panel, fn) {
  panel.classList.add('snap');
  fn();
  void panel.offsetWidth;
  panel.classList.remove('snap');
}

async function step(dir) {
  if (state !== 'open' || !current) return;
  closeTake();
  state = 'switching';
  const from = current;
  const to = panels[(panels.indexOf(from) + dir + panels.length) % panels.length];
  const a = parts(from), b = parts(to);

  // bring the target in, fully open, parked off to one side
  to.inert = false;
  snap(to, () => {
    to.classList.remove('is-receding');
    to.classList.add('is-active', 'is-reading', 'is-expanded', 'is-front');
    b.fTitle.style.opacity = '0';
  });
  b.face.setAttribute('aria-expanded', 'true');
  b.face.tabIndex = -1;
  b.detail.inert = false;
  current = to;
  tintName(null);
  stage.classList.add('is-switching');
  showGrid(a.detail, false);

  const opts = { duration: SWITCH.ms, easing: SWITCH.css };
  const inAnim = b.win.animate([{ transform: `translateX(${dir * 100}%)` }, { transform: 'none' }], opts);
  const outAnim = a.win.animate(
    [{ transform: 'none', opacity: 1 }, { transform: `translateX(${dir * -28}%)`, opacity: 0.35 }],
    { ...opts, fill: 'forwards' });
  setTimeout(() => {
    b.detail.classList.add('is-in');
    showGrid(b.detail, gridPinned);
    syncCols(b.detail);
  }, SWITCH.ms * 0.25);

  await inAnim.finished;

  // retire the old panel behind the new one, straight to its covered state
  snap(from, () => {
    from.classList.remove('is-active', 'is-reading', 'is-expanded');
    from.classList.add('is-receding');
    a.detail.classList.remove('is-in');
    a.fTitle.style.opacity = '';
  });
  outAnim.cancel();
  from.inert = true;
  a.detail.inert = true;
  a.detail.querySelector('.d-body').scrollTop = 0;
  a.face.setAttribute('aria-expanded', 'false');
  a.face.tabIndex = 0;
  to.classList.remove('is-front');
  stage.classList.remove('is-switching');

  const same = document.activeElement?.closest('.d-nav') ? `.d-nav [data-step="${dir}"]` : '.d-title';
  b.detail.querySelector(same).focus({ preventScroll: true });
  state = 'open';
  flush();
}

/* ──────────────────────────────────────────────────────────────
   Projects index
   ────────────────────────────────────────────────────────────── */
const projButtons = [...document.querySelectorAll('.proj-list button')];
const projViews = [...document.querySelectorAll('.pv')];

function showProject(i) {
  projButtons.forEach((b, j) => b.classList.toggle('is-current', i === j));
  projViews.forEach((v, j) => { v.classList.toggle('is-current', i === j); v.inert = i !== j; });
}
showProject(0);
projButtons.forEach((b) => {
  const i = Number(b.dataset.p);
  b.addEventListener('mouseenter', () => showProject(i));
  b.addEventListener('focus', () => showProject(i));
  b.addEventListener('click', () => showProject(i));
});

/* ──────────────────────────────────────────────────────────────
   Techstack — icons (Simple Icons, CC0) from assets/tech-data.js
   ────────────────────────────────────────────────────────────── */
const TECH_BY_ID = Object.fromEntries(TECH.map((t) => [t.id, t]));
const icon = (id) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${TECH_BY_ID[id].d}"/></svg>`;

// scene stickers
document.querySelectorAll('[data-icon]').forEach((el) => { el.innerHTML = icon(el.dataset.icon); });

// A seeded shuffle + jitter: looks scattered, but identical on every visit.
function seeded(seed) {
  return () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
}
const cloud = document.querySelector('[data-cloud]');
const take = document.getElementById('take');
// A honeycomb that grows out of the </> core: daily drivers fill the ring
// touching it, everything else sits further out. Cells are picked on a hex
// lattice by distance from the centre (stretched to the box's aspect, so the
// cluster fills a wide area) and sized to fit — nothing overlaps, ever.
// Positions are set once per resize; the only motion is each tile's CSS bob.
(() => {
  const rand = seeded(11);
  const order = [...TECH.filter((x) => x.tier === 1), ...TECH.filter((x) => x.tier === 2)];
  cloud.innerHTML = '<div class="core" aria-hidden="true"><b>&lt;/&gt;</b></div>'
    + order.map((x, k) => {
      const rz = ((rand() - 0.5) * 7).toFixed(1);
      const ft = (3.8 + rand() * 2.4).toFixed(2), fd = (-rand() * 5).toFixed(2);
      return `<div class="tk t${x.tier}" style="--rz:${rz}deg;--ft:${ft}s;--fd:${fd}s;--k:${k}">
      <button type="button" data-id="${x.id}" aria-expanded="false" aria-controls="take" aria-label="${x.name} — ${x.tier === 1 ? 'daily driver' : 'when it fits'}. Show my take">${icon(x.id)}</button>
      <span class="nm" aria-hidden="true">${x.name}</span>
    </div>`;
    }).join('');
  const tiles = [...cloud.querySelectorAll('.tk')];
  const core = cloud.querySelector('.core');
  const nDaily = order.filter((x) => x.tier === 1).length;

  function layout() {
    const w = cloud.clientWidth, h = cloud.clientHeight;
    if (!w || !h) return;
    const aspect = Math.max(0.6, Math.min(3, w / h));
    // Pick cells on a hex lattice (axial coords, point-symmetric about the core)
    // nearest-first under a stretch factor, taking them in mirrored pairs so the
    // cluster stays balanced. Try a range of stretches and keep the one that
    // lets the tiles be biggest in this box.
    const lattice = [];
    for (let r = -9; r <= 9; r++) {
      for (let q = -18; q <= 18; q++) {
        const x = q + r * 0.5, y = r * 0.866;
        if (Math.abs(x) <= 15) lattice.push({ x, y });
      }
    }
    const key = (c) => `${Math.round(c.x * 2)},${Math.round(c.y * 100)}`;
    function pick(k) {
      const cells = lattice.map((c) => ({ ...c, d: Math.hypot(c.x / aspect ** (k / 2), c.y * aspect ** k) }))
        .sort((a, b) => a.d - b.d || Math.atan2(a.y, a.x) - Math.atan2(b.y, b.x));
      const picked = [cells[0]], used = new Set([key(cells[0])]);
      for (const c of cells.slice(1)) {
        if (picked.length > tiles.length) break;
        if (used.has(key(c))) continue;
        picked.push(c); used.add(key(c));
        if (picked.length <= tiles.length) { const m = { x: -c.x, y: -c.y, d: c.d }; picked.push(m); used.add(key(m)); }
      }
      const xs = picked.map((c) => c.x), ys = picked.map((c) => c.y);
      const spanX = Math.max(...xs) - Math.min(...xs) + 1, spanY = Math.max(...ys) - Math.min(...ys) + 1;
      const unit = Math.min((w - 24) / spanX, (h - 30) / spanY, 150);
      return { picked, xs, ys, unit };
    }
    let best = null;
    for (let k = 0; k <= 1.6; k += 0.1) { const r = pick(k); if (!best || r.unit > best.unit + 0.5) best = r; }
    const { picked, xs, ys, unit } = best;
    // daily drivers take the cells nearest the core
    const inner = picked.slice(1).sort((a, b) => a.d - b.d);
    const ox = w / 2 - ((Math.max(...xs) + Math.min(...xs)) / 2) * unit;
    const oy = h / 2 - ((Math.max(...ys) + Math.min(...ys)) / 2) * unit;
    cloud.style.setProperty('--unit', `${unit.toFixed(1)}px`);
    core.style.translate = `${(ox + picked[0].x * unit).toFixed(1)}px ${(oy + picked[0].y * unit).toFixed(1)}px`;
    tiles.forEach((el, k) => {
      const c = inner[k];
      el.style.translate = `${(ox + c.x * unit).toFixed(1)}px ${(oy + c.y * unit).toFixed(1)}px`;
    });
  }
  new ResizeObserver(layout).observe(cloud);
  layout();
})();

let takeFor = null;
function closeTake() {
  if (!takeFor) return false;
  takeFor.setAttribute('aria-expanded', 'false');
  takeFor.parentElement.classList.remove('open');
  takeFor = null;
  take.hidden = true;
  return true;
}
function openTake(btn) {
  const t = TECH_BY_ID[btn.dataset.id];
  if (takeFor === btn) { closeTake(); return; }
  closeTake();
  takeFor = btn;
  btn.setAttribute('aria-expanded', 'true');
  btn.parentElement.classList.add('open');
  take.querySelector('.take-ico').innerHTML = icon(t.id);
  take.querySelector('h3').textContent = t.name;
  take.querySelector('.take-meta').textContent =
    `${t.tier === 1 ? 'Daily driver' : 'When it fits'} · since ${t.since} · ${new Date().getFullYear() - t.since} yrs`;
  take.querySelector('p').textContent = t.take;
  take.querySelector('footer em').textContent = t.used;
  take.hidden = false;

  // place beside the icon, inside the body, flipping at the edges
  const body = take.parentElement;
  const b = body.getBoundingClientRect(), r = btn.getBoundingClientRect();
  const w = take.offsetWidth, h = take.offsetHeight;
  let x = r.right - b.left + 14, y = r.top - b.top + body.scrollTop - 6;
  let ox = '0%';
  if (x + w > body.clientWidth - 8) { x = r.left - b.left - w - 14; ox = '100%'; }
  if (x < 0) { x = Math.max(0, r.left - b.left + r.width / 2 - w / 2); y = r.bottom - b.top + body.scrollTop + 26; ox = '50%'; }
  y = Math.max(body.scrollTop, Math.min(y, body.scrollTop + body.clientHeight - h - 10));
  take.style.left = `${Math.round(x)}px`;
  take.style.top = `${Math.round(y)}px`;
  take.style.setProperty('--tox', ox);
  take.style.animation = 'none'; void take.offsetWidth; take.style.animation = '';
}
cloud.addEventListener('click', (e) => {
  const btn = e.target.closest('.tk button');
  if (btn) openTake(btn);
});
take.querySelector('.take-x').addEventListener('click', () => { const b = takeFor; closeTake(); b?.focus(); });
document.addEventListener('pointerdown', (e) => {
  if (takeFor && !e.target.closest('.take, .tk button')) closeTake();
});

/* ──────────────────────────────────────────────────────────────
   Name — the extrude is cast away from the pointer, like a light source
   ────────────────────────────────────────────────────────────── */
{
  let raf = 0, px = 0, py = 0, lx = '', ly = '';
  const cast = () => {
    raf = 0;
    const r = nameEl.getBoundingClientRect();
    const dx = (r.left + r.width / 2) - px, dy = (r.top + r.height / 2) - py;
    const d = Math.hypot(dx, dy) || 1;
    // the stack always falls down-right; the pointer only swings it within that quadrant
    const clamp = (v) => Math.min(1, Math.max(0.3, v));
    const vx = clamp(0.65 + (dx / d) * 0.45).toFixed(2), vy = clamp(0.8 + (dy / d) * 0.35).toFixed(2);
    if (vx !== lx) nameEl.style.setProperty('--vx', (lx = vx));
    if (vy !== ly) nameEl.style.setProperty('--vy', (ly = vy));
  };
  if (!reduced) addEventListener('pointermove', (e) => {
    px = e.clientX; py = e.clientY;
    if (!raf) raf = requestAnimationFrame(cast);
  }, { passive: true });
}

/* ──────────────────────────────────────────────────────────────
   Info scene — the face watches the pointer while you're on the grid
   ────────────────────────────────────────────────────────────── */
{
  const eyes = document.querySelector('.scene--info .eyes');
  const face = document.querySelector('.scene--info .smiley');
  let raf = 0, px = 0, py = 0;
  const aim = () => {
    raf = 0;
    const r = face.getBoundingClientRect();
    const dx = px - (r.left + r.width / 2), dy = py - (r.top + r.height / 2);
    const d = Math.hypot(dx, dy) || 1, k = Math.min(1, d / 260);
    eyes.style.setProperty('--ex', `${((dx / d) * k * 3.2).toFixed(2)}cqmin`);
    eyes.style.setProperty('--ey', `${((dy / d) * k * 2.4).toFixed(2)}cqmin`);
  };
  if (!reduced) {
    stage.addEventListener('pointermove', (e) => {
      if (state !== 'idle') return;
      px = e.clientX; py = e.clientY;
      if (!raf) raf = requestAnimationFrame(aim);
    });
    stage.addEventListener('pointerleave', () => { eyes.style.setProperty('--ex', '0'); eyes.style.setProperty('--ey', '0'); });
  }
}

/* ──────────────────────────────────────────────────────────────
   Project mocks — generated SVG for the dashboard and the archive
   ────────────────────────────────────────────────────────────── */
const svg = (viewBox, body, attrs = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" ${attrs}>${body}</svg>`;

// Three physiological-looking traces. Every frequency is a whole multiple of the
// 500-unit period, so the two halves match and the sweep loops without a seam.
const W = (Math.PI * 2) / 500;
document.querySelectorAll('[data-signals]').forEach((el) => {
  const traces = [
    { y: 50, amp: 18, color: '#3ed6b5', f: (x) => Math.sin(x * W * 7) * 0.5 + Math.sin(x * W * 18) * 0.3 + Math.sin(x * W * 49) * 0.2 },
    { y: 120, amp: 22, color: '#8cc8ff', f: (x) => { const p = x % 100; return p > 46 && p < 54 ? (p < 50 ? (p - 46) / 4 : (54 - p) / 4) * 2 - 0.4 : Math.sin(x * W * 5) * 0.15; } },
    { y: 185, amp: 10, color: '#f5c46b', f: (x) => Math.sin(x * W * 3) },
  ];
  let body = '';
  for (const t of traces) {
    let d = '';
    for (let x = 0; x <= 1000; x += 2) {
      d += `${x ? 'L' : 'M'}${x} ${(t.y - t.f(x % 500) * t.amp).toFixed(1)}`;
    }
    body += `<path d="${d}" fill="none" stroke="${t.color}" stroke-width="1.4" vector-effect="non-scaling-stroke"/>`;
  }
  el.innerHTML = svg('0 0 1000 220', body, 'preserveAspectRatio="none"');
});

// Stacked tide lines, one per decade-ish, with a highlighted "selected year".
document.querySelectorAll('[data-tide]').forEach((el) => {
  let body = '';
  for (let i = 0; i < 26; i++) {
    const y = 90 + i * 12;
    const a = 4 + i * 0.9;
    let d = '';
    for (let x = 0; x <= 800; x += 8) {
      d += `${x ? 'L' : 'M'}${x} ${(y + Math.sin(x * 0.012 + i * 0.45) * a + Math.sin(x * 0.031 + i) * a * 0.35).toFixed(1)}`;
    }
    const hot = i === 17;
    body += `<path d="${d}" fill="none" stroke="${hot ? '#eaf6fc' : '#6fa3c0'}" stroke-opacity="${hot ? 1 : (0.18 + i / 50).toFixed(2)}" stroke-width="${hot ? 1.6 : 1}"/>`;
  }
  el.innerHTML = svg('0 0 800 480', body, 'preserveAspectRatio="xMidYMid slice"');
});

/* ──────────────────────────────────────────────────────────────
   Contact
   ────────────────────────────────────────────────────────────── */
const clock = document.getElementById('clock');
const fmt = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Lisbon', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
});
const tick = () => { clock.textContent = fmt.format(new Date()); };
tick();
setInterval(tick, 1000);

// Placeholder links (no URL yet): say "soon" instead of jumping to the top.
document.querySelectorAll('a[href="#"]').forEach((a) => {
  a.classList.add('soon');
  a.setAttribute('aria-disabled', 'true');
  a.title = 'Link coming soon';
  // the arrow promises a destination; placeholders drop it
  if (a.closest('.pv-links')) a.textContent = a.textContent.replace(/\s*↗\s*$/, '');
  a.querySelector('.socials i, i')?.replaceChildren();
  a.addEventListener('click', (e) => e.preventDefault());
});

document.querySelectorAll('[data-copy]').forEach((btn) => {
  const original = btn.textContent;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.textContent = 'Copied';
    } catch {
      btn.textContent = 'Press ⌘/Ctrl + C';
    }
    setTimeout(() => { btn.textContent = original; }, 1800);
  });
});
