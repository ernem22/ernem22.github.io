/* Masthead lab — prototypes only, loaded by lab.html (see lab.css for the params). */
(() => {
  const q = new URLSearchParams(location.search);
  const H = (q.get("h") || "c").toLowerCase();
  const BG = q.has("bg") ? q.get("bg") : "1235";
  const on = (n) => BG.includes(String(n));
  const root = document.documentElement;
  root.classList.add(`lab-h-${H}`);
  for (let n = 1; n <= 5; n++) if (on(n)) root.classList.add(`lab-bg${n}`);

  const data = window.DATA || {};
  const site = data.site || {};
  const panels = data.panels || [];
  const mast = document.querySelector(".masthead");
  const stage = document.getElementById("stage");
  const slug = `~/${(site.name || "").trim().toLowerCase().replace(/\s+/g, "-")}`;
  const ACC = Object.fromEntries(
    ["info", "projects", "tech", "contact"].map((k) => [
      k,
      getComputedStyle(root).getPropertyValue(`--acc-${k}`).trim(),
    ]),
  );

  /* ── header markup ── */
  let head = null;
  const letters = (s) => {
    let i = 0;
    return [...s]
      .map((c) => (c === " " ? '<span class="lh-sp"></span>' : `<span class="lh-l" style="--i:${i++}">${c}</span>`))
      .join("");
  };
  if (H === "a" || H === "c") {
    const caret =
      H === "c"
        ? `<span class="lh-px" aria-hidden="true">${["info", "projects", "tech", "contact"].map((k) => `<i data-k="${k}"></i>`).join("")}</span>`
        : '<span class="lh-caret" aria-hidden="true"></span>';
    mast.insertAdjacentHTML(
      "beforeend",
      `<div class="lh">
        <p class="lh-name"><span class="lh-ink">${letters(site.name || "")}</span>${caret}</p>
        <p class="lh-meta">
          <span class="lh-path" style="--i:0">${slug}<b class="lh-sub"></b></span>
          <span style="--i:1">${site.role || ""}</span>
          <span class="lh-clock" style="--i:2">${site.based || ""} <b></b></span>
        </p>
      </div>`,
    );
    head = mast.querySelector(".lh");
  } else if (H === "b") {
    mast.insertAdjacentHTML(
      "beforeend",
      `<div class="lb"><b class="lb-sym"><span>~</span></b><span class="lb-name">${site.name || ""}</span>
        <span class="lb-role"><span>${site.role || ""}</span><span>${site.based || ""}</span></span></div>`,
    );
    head = mast.querySelector(".lb");
  }

  /* ── clock ── */
  const clock = mast.querySelector(".lh-clock b");
  const fmt = (opts) =>
    new Intl.DateTimeFormat("en-GB", { timeZone: site.timezone || "Europe/Istanbul", ...opts });
  const hm = fmt({ hour: "2-digit", minute: "2-digit" });
  if (clock) {
    const tick = () => (clock.textContent = hm.format(new Date()));
    tick();
    setInterval(tick, 10000);
  }

  /* ── state: which section is lit (hovered or open), mirrored from main.js ── */
  let litKey = null; // "info" | "projects" | …
  let unlitT = 0;
  const keyOf = (v) => (v.match(/--acc-([a-z]+)/) || [])[1] || null;
  function setLit(k) {
    if (!head) return;
    clearTimeout(unlitT);
    if (k) {
      litKey = k;
      head.style.setProperty("--lk", ACC[k]);
      head.classList.add("is-lit");
      symbol(k);
      cells(k);
    } else {
      // crossing the gutter between two corners shouldn't flicker the marker
      unlitT = setTimeout(() => {
        litKey = null;
        head.classList.remove("is-lit");
        symbol(null);
        cells(null);
      }, 140);
    }
  }
  new MutationObserver(() => setLit(keyOf(mast.style.getPropertyValue("--nacc")))).observe(mast, {
    attributes: true,
    attributeFilter: ["style"],
  });

  // C: the caret's cell for the lit section
  function cells(k) {
    mast.querySelectorAll(".lh-px i").forEach((i) => i.classList.toggle("is-on", i.dataset.k === k));
  }

  // B: the label's square shows the section's own symbol
  const symBox = mast.querySelector(".lb-sym");
  let symT = 0;
  function symbol(k) {
    if (!symBox) return;
    const p = panels.find((x) => x.id === `p-${k}`);
    const next = p ? p.detail.symbol : "~";
    const span = symBox.querySelector("span");
    if (span.textContent === next) return;
    clearTimeout(symT);
    symBox.classList.add("is-swap");
    symT = setTimeout(() => {
      span.textContent = next;
      symBox.classList.remove("is-swap");
    }, 220);
  }

  // A / C: the path types the open section onto itself, and backs out on close
  const sub = mast.querySelector(".lh-sub");
  let typed = "",
    want = "",
    typeT = 0;
  function typeStep() {
    let common = 0;
    while (common < typed.length && typed[common] === want[common]) common++;
    if (typed.length > common) typed = typed.slice(0, -1);
    else if (typed.length < want.length) typed = want.slice(0, typed.length + 1);
    else return;
    sub.textContent = typed;
    typeT = setTimeout(typeStep, typed.length > common ? 28 : 46);
  }
  if (sub)
    new MutationObserver(() => {
      const open = stage.classList.contains("is-open");
      const active = stage.querySelector(".panel.is-active");
      head.classList.toggle("is-open", open);
      const next = open && active ? `/${active.id.replace(/^p-/, "")}` : "";
      if (next === want) return;
      want = next;
      clearTimeout(typeT);
      typeT = setTimeout(typeStep, open ? 380 : 0);
    }).observe(stage, { attributes: true, subtree: true, attributeFilter: ["class"] });

  /* ── pointer ── */
  const ptr = { x: innerWidth / 2, y: innerHeight * 0.4, seen: false };
  const nameBox = mast.querySelector(".lh-name");
  addEventListener(
    "pointermove",
    (e) => {
      ptr.x = e.clientX;
      ptr.y = e.clientY;
      ptr.seen = true;
      if (nameBox) {
        nameBox.style.setProperty("--mx", ((e.clientX / innerWidth) * 2 - 1).toFixed(3));
        nameBox.style.setProperty("--my", ((e.clientY / innerHeight) * 2 - 1).toFixed(3));
      }
      if (margin) margin.querySelector("[data-xy]").textContent =
        `x ${String(Math.round(e.clientX)).padStart(4, "0")} · y ${String(Math.round(e.clientY)).padStart(4, "0")}`;
      wake();
    },
    { passive: true },
  );

  /* ── 4: marginalia ── */
  let margin = null;
  if (on(4)) {
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="lab-margin" aria-hidden="true"><span data-xy>x 0000 · y 0000</span><span data-vp></span></div>`,
    );
    margin = document.body.lastElementChild;
    const vp = margin.querySelector("[data-vp]");
    const size = () => (vp.innerHTML = `${innerWidth} × ${innerHeight} · <b>12</b> col`);
    size();
    addEventListener("resize", size);
  }

  /* ── 2 / 3: the desk canvas ── */
  const CROSS = on(2),
    LIGHT = on(3);
  let wake = () => {};
  if (CROSS || LIGHT) {
    root.classList.add("lab-canvas");
    const cv = document.createElement("canvas");
    cv.className = "lab-desk";
    cv.setAttribute("aria-hidden", "true");
    document.body.prepend(cv);
    const ctx = cv.getContext("2d");
    const INK = [134, 16, 36];
    const hex = (h) => {
      const n = parseInt(h.replace("#", ""), 16);
      return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
    };
    let W = 0,
      Hh = 0,
      dpr = 1,
      box = null;
    const lp = { x: ptr.x, y: ptr.y }; // the light trails the pointer
    let tint = 0; // 0..1, eases toward the lit section's accent
    let tintRGB = [255, 250, 240];
    let raf = 0;

    function size() {
      dpr = Math.min(2, devicePixelRatio || 1);
      W = innerWidth;
      Hh = innerHeight;
      cv.width = W * dpr;
      cv.height = Hh * dpr;
      cv.style.width = `${W}px`;
      cv.style.height = `${Hh}px`;
      const r = stage.getBoundingClientRect();
      box = { x: r.left, y: r.top, w: r.width, h: r.height };
      draw();
    }

    function draw() {
      if (!box) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, Hh);

      if (LIGHT && ptr.seen) {
        const R = Math.max(W, Hh) * 0.32;
        let g = ctx.createRadialGradient(lp.x, lp.y, 0, lp.x, lp.y, R);
        g.addColorStop(0, "rgba(255, 250, 240, .55)");
        g.addColorStop(1, "rgba(255, 250, 240, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, Hh);
        if (tint > 0.01) {
          const [r, gg, b] = tintRGB;
          g = ctx.createRadialGradient(lp.x, lp.y, 0, lp.x, lp.y, R * 1.25);
          g.addColorStop(0, `rgba(${r}, ${gg}, ${b}, ${0.3 * tint})`);
          g.addColorStop(1, `rgba(${r}, ${gg}, ${b}, 0)`);
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, W, Hh);
        }
      }

      // the marks sit on the stage's own 12-column pitch, square cells
      const pitch = box.w / 12;
      const x0 = box.x - Math.ceil(box.x / pitch) * pitch;
      const y0 = box.y - Math.ceil(box.y / pitch) * pitch;
      const NEAR = 220;
      const m = mast.getBoundingClientRect();
      for (let y = y0; y <= Hh + 1; y += pitch) {
        for (let x = x0; x <= W + 1; x += pitch) {
          if (y > m.top - 14 && y < m.bottom + 4) continue; // the title bar stays clean
          let a = CROSS ? 0.24 : 0.15,
            arm = 3.5;
          if (LIGHT && ptr.seen) {
            const d = Math.hypot(x - lp.x, y - lp.y);
            if (d < NEAR) {
              const k = (1 - d / NEAR) ** 2;
              a += 0.4 * k;
              arm += 1.5 * k;
            }
          }
          ctx.fillStyle = `rgba(${INK}, ${a})`;
          if (CROSS) {
            ctx.fillRect(Math.round(x - arm), Math.round(y), Math.round(arm * 2) + 1, 1);
            ctx.fillRect(Math.round(x), Math.round(y - arm), 1, Math.round(arm * 2) + 1);
          } else {
            ctx.beginPath();
            ctx.arc(x, y, 1.15, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // crop marks: short ticks out in the side margins, on the sheet's top and
      // bottom lines, the way a print sheet is marked for trimming
      if (CROSS) {
        const o = 8,
          L = 14;
        ctx.fillStyle = `rgba(${INK}, .5)`;
        for (const y of [box.y, box.y + box.h - 1]) {
          ctx.fillRect(Math.round(box.x - o - L), Math.round(y), L, 1);
          ctx.fillRect(Math.round(box.x + box.w + o), Math.round(y), L, 1);
        }
      }
    }

    function frame() {
      raf = 0;
      lp.x += (ptr.x - lp.x) * 0.075;
      lp.y += (ptr.y - lp.y) * 0.075;
      const goal = litKey ? 1 : 0;
      if (litKey) tintRGB = hex(ACC[litKey]);
      tint += (goal - tint) * 0.05;
      draw();
      if (Math.abs(ptr.x - lp.x) + Math.abs(ptr.y - lp.y) > 0.4 || Math.abs(goal - tint) > 0.005) wake();
    }
    wake = () => {
      if (LIGHT && !raf) raf = requestAnimationFrame(frame);
    };
    new ResizeObserver(size).observe(stage);
    addEventListener("resize", size);
    if (LIGHT) new MutationObserver(wake).observe(mast, { attributes: true, attributeFilter: ["style"] });
    size();
  }
})();
