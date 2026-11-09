// Run with: playwright-cli run-code --filename tests/boot.browser.js
async (page) => {
  const results = [];
  for (const viewport of [{ width: 1440, height: 960 }, { width: 390, height: 844 }, { width: 844, height: 390 }]) {
    const context = await page.context().browser().newContext({ viewport });
    try {
      const preview = await context.newPage();
      const errors = [];
      preview.on("pageerror", (error) => errors.push(error.message));
      await preview.addInitScript(() => {
        window.bootFlights = [];
        const animate = Element.prototype.animate;
        Element.prototype.animate = function (frames, options) {
          const animation = animate.call(this, frames, options);
          if (this.classList.contains("boot-q") && frames.some((frame) => frame.transform)) {
            animation.pause();
            window.bootFlights.push(animation);
          }
          return animation;
        };
      });
      await preview.goto(page.url());
      await preview.waitForFunction(() => document.querySelector(".boot-q.is-on"));
      const label = `${viewport.width}x${viewport.height}`;
      await preview.screenshot({ path: `output/playwright/boot-${label}-loading.png` });
      await preview.waitForFunction(() => window.bootFlights.length === 4);
      await preview.evaluate(() => window.bootFlights.forEach((animation) => {
        animation.currentTime = animation.effect.getTiming().duration;
      }));
      await preview.screenshot({ path: `output/playwright/boot-${label}-board.png` });
      const boardError = await preview.evaluate(() => Math.max(...window.bootFlights.map((animation, i) => {
        const actual = animation.effect.target.getBoundingClientRect();
        const target = document.querySelectorAll(".panel .win")[i].getBoundingClientRect();
        return Math.max(...["left", "top", "width", "height"].map((key) => Math.abs(actual[key] - target[key])));
      })));
      if (boardError > 2) throw new Error(`Board landing error: ${boardError}px at ${label}`);
      await preview.evaluate(() => window.bootFlights.forEach((animation) => animation.finish()));
      await preview.waitForFunction(() => window.bootFlights.length === 8);
      await preview.evaluate(() => window.bootFlights.slice(4).forEach((animation) => {
        animation.currentTime = animation.effect.getTiming().duration * .45;
      }));
      await preview.screenshot({ path: `output/playwright/boot-${label}-gather.png` });
      await preview.evaluate(() => window.bootFlights.slice(4).forEach((animation) => {
        animation.currentTime = animation.effect.getTiming().duration;
      }));
      const landed = await preview.evaluate(() => window.bootFlights.slice(4).map((animation) => {
        const { left, top, width, height } = animation.effect.target.getBoundingClientRect();
        return { left, top, width, height };
      }));
      await preview.evaluate(() => window.bootFlights.slice(4).forEach((animation) => animation.finish()));
      await preview.waitForFunction(() => !document.querySelector(".boot"));
      await preview.screenshot({ path: `output/playwright/boot-${label}-ready.png` });
      const markError = await preview.locator(".name .mark i").evaluateAll((cells, expected) =>
        Math.max(...cells.map((cell, i) => {
          const rect = cell.getBoundingClientRect();
          return Math.max(...["left", "top", "width", "height"].map((key) => Math.abs(rect[key] - expected[i][key])));
        })), landed);
      if (markError > 2) {
        const actual = await preview.locator(".name .mark i").evaluateAll((cells) => cells.map((cell) => {
          const { left, top, width, height } = cell.getBoundingClientRect();
          return { left, top, width, height };
        }));
        throw new Error(`Mark handover error: ${markError}px at ${label}; ${JSON.stringify({ landed, actual })}`);
      }
      if (errors.length) throw new Error(errors.join("\n"));
      results.push(`${label}: board and mark land within 2px; no page errors`);
    } finally {
      await context.close();
    }
  }
  return results;
}
