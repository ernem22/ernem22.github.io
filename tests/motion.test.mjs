import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const source = readFileSync(new URL("../main.js", import.meta.url), "utf8");
const controls = source.slice(source.indexOf('  let state = "idle";'), source.indexOf("  const parts ="));

function harness({ keyboard = false, reduced = false } = {}) {
  const context = vm.createContext({
    reduced, root: { classList: { contains: () => keyboard } },
    OPEN: { css: "cubic-bezier(.23,1,.32,1)" }, queueMicrotask,
    getComputedStyle: (el) => ({ transform: el.transform, opacity: "1" }),
  });
  return vm.runInContext(`${controls}
    ({ act, motion, flush, setState: (value) => { state = value; } })`, context);
}

function element() {
  return {
    transform: "matrix(0.7, 0, 0, 0.7, 0, 12)", calls: [],
    animate(frames, options) {
      const animation = {
        effect: { target: this }, playState: "running",
        finish() { this.playState = "finished"; },
      };
      this.calls.push({ frames, options, animation });
      return animation;
    },
  };
}

for (const mode of [{ keyboard: true }, { reduced: true }, {}]) {
  test(`navigation timing: ${JSON.stringify(mode)}`, () => {
    const ui = harness(mode), el = element();
    ui.act(() => ui.motion(el, [{ transform: "none" }], { duration: 250 }));
    assert.equal(el.calls[0].options.duration, mode.keyboard || mode.reduced ? 0 : 250);
  });
}

test("a new navigation command retargets from the visible transform without waiting a frame", async () => {
  const ui = harness(), el = element();
  ui.act(() => {
    ui.setState("opening");
    ui.motion(el, [{ transform: "none" }], { duration: 250 });
  });
  ui.act(() => ui.motion(el, [{ transform: "none" }], { duration: 200 }));
  // Repeated commands in the same turn keep the captured position and latest intent.
  ui.act(() => ui.motion(el, [{ transform: "none" }], { duration: 160 }));
  assert.equal(el.calls[0].animation.playState, "finished");
  ui.setState("open");
  ui.flush();
  await Promise.resolve();
  assert.equal(el.calls.length, 2);
  assert.equal(el.calls[1].frames[0].transform, el.transform);
  assert.equal(el.calls[1].options.duration, 160);
});
