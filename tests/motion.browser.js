// Run with: playwright-cli run-code --filename tests/motion.browser.js
async (page) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const check = (condition, message) => { if (!condition) throw new Error(message); };
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.addInitScript(() => {
    window.motionCalls = [];
    const animate = Element.prototype.animate;
    Element.prototype.animate = function (frames, options) {
      window.motionCalls.push({ classes: this.className, frames, duration: options.duration, delay: options.delay || 0 });
      return animate.call(this, frames, options);
    };
  });
  await page.reload();
  await page.waitForFunction(() => !document.querySelector(".boot"));
  const bootCalls = await page.evaluate(() => window.motionCalls);
  check(bootCalls.length > 0, "Boot animation was not exercised");
  check(bootCalls.every((call) => call.delay === 0), "Boot tiles do not start together");
  check(bootCalls.every((call) => call.frames.every((frame) =>
    !["left", "top", "width", "height"].some((key) => key in frame))), "Boot animates layout");

  await page.locator("#p-info .face").click();
  await page.waitForFunction(() => document.querySelector("#p-info.is-expanded"));
  check(await page.evaluate(() => window.motionCalls.some((call) => call.classes === "win" && call.duration === 250)), "Pointer open timing");
  await page.keyboard.press("Escape");
  await page.waitForFunction(() => !document.querySelector(".panel.is-active"));

  await page.locator("#p-info .face").click();
  check(await page.locator("#p-info").evaluate((el) => !el.classList.contains("is-expanded")), "Interruption was not exercised during opening");
  await page.keyboard.press("Escape");
  await page.waitForFunction(() => !document.querySelector(".panel.is-active"));
  check(await page.evaluate(() => [...document.querySelectorAll(".face")].every((face) => face.tabIndex === 0)), "Escape left faces unfocusable");

  await page.locator("#p-tech .face").click();
  await page.waitForFunction(() => document.querySelector("#p-tech.is-expanded"));
  check(await page.locator(".tk button").evaluateAll((buttons) => buttons.every((button) => {
    const style = getComputedStyle(button);
    return style.opacity === "1" && !style.animationName.includes("burst-out") &&
      !getComputedStyle(button, "::after").animationName.includes("nudge");
  })), "Tech tiles have a second entrance after the window opens");
  await page.keyboard.press("Escape");
  await page.waitForFunction(() => !document.querySelector(".panel.is-active"));

  await page.locator("#p-info .face").focus();
  await page.evaluate(() => { window.motionCalls = []; });
  await page.keyboard.press("Enter");
  await page.waitForFunction(() => document.querySelector("#p-info.is-expanded"));
  await page.keyboard.press("ArrowRight");
  await page.waitForFunction(() => document.querySelector("#p-projects.is-expanded"));
  await page.keyboard.press("ArrowRight");
  await page.waitForFunction(() => document.querySelector("#p-tech.is-expanded"));
  check(await page.evaluate(() => window.motionCalls.every((call) => call.duration === 0)), "Keyboard triggered motion");
  await page.locator(".tk button").first().focus();
  await page.keyboard.press("Enter");
  check(await page.locator("#take").isVisible(), "Tech popover failed to open");
  await page.keyboard.press("Escape");
  check(await page.locator("#take").isHidden(), "Escape did not close the popover");
  const tiles = page.locator(".tk button");
  await tiles.first().dispatchEvent("pointerdown", { pointerType: "mouse" });
  await tiles.first().dispatchEvent("click", { detail: 1 });
  check(await page.locator(".take-x").evaluate((button) => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true, detail: 1 }));
    const take = document.querySelector("#take");
    return !take.hidden && take.inert && take.classList.contains("is-closing");
  }), "Pointer close skipped the exit");
  await tiles.nth(1).dispatchEvent("click", { detail: 1 });
  await page.waitForTimeout(200);
  check(await page.locator("#take").evaluate((el) => !el.hidden && !el.inert && !el.classList.contains("is-closing")), "Old close timer hid the new popover");
  await page.locator(".take-x").dispatchEvent("click", { detail: 1 });
  await page.waitForFunction(() => document.querySelector("#take").hidden);
  await page.keyboard.press("Escape");
  await page.waitForFunction(() => !document.querySelector(".panel.is-active"));

  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.evaluate(() => { window.motionCalls = []; });
  await page.locator("#p-info .face").click();
  await page.waitForFunction(() => document.querySelector("#p-info.is-expanded"));
  check(await page.evaluate(() => window.motionCalls.every((call) => call.duration === 0)), "Reduced motion still moves panels");
  check(await page.locator("#p-info .rv").first().evaluate((el) => getComputedStyle(el).transform === "none"), "Reduced content still moves");
  await page.keyboard.press("Escape");
  await page.waitForFunction(() => !document.querySelector(".panel.is-active"));
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.locator("#p-contact .face").click();
  await page.waitForFunction(() => document.querySelector("#p-contact.is-expanded"));
  await page.evaluate(() => {
    window.copiedValues = [];
    Object.defineProperty(navigator.clipboard, "writeText", { configurable: true, value: async (text) => { window.copiedValues.push(text); } });
  });
  const copy = page.locator("[data-copy]");
  await copy.click();
  check(await copy.evaluate((el) => el.classList.contains("is-copied")), "Copy success indicator missing");
  check(await copy.locator(".copy-check").getAttribute("aria-hidden") === "true", "Success icon duplicates the status announcement");
  check(await page.evaluate(() => window.copiedValues[0] === document.querySelector("[data-copy]").dataset.copy), "Copy wrote the wrong value");
  await page.waitForTimeout(1100);
  await copy.click();
  await page.waitForTimeout(800);
  check(await copy.evaluate((el) => el.classList.contains("is-copied")), "Old reset timer erased the latest success");
  await page.waitForFunction(() => !document.querySelector("[data-copy]").classList.contains("is-copied"));
  await page.evaluate(() => {
    Object.defineProperty(navigator.clipboard, "writeText", { configurable: true, value: async () => { throw new Error("clipboard unavailable"); } });
  });
  await copy.click();
  check(await copy.evaluate((el) => !el.classList.contains("is-copied")), "Copy failure displayed success");
  check((await copy.locator("span").first().textContent()) === await page.evaluate(() => window.DATA.site.ui.copyFallback), "Copy fallback missing");
  await page.keyboard.press("Escape");
  await page.waitForFunction(() => !document.querySelector(".panel.is-active"));
  await page.mouse.move(1, 1);
  await page.screenshot({ path: "output/playwright/motion-overview.png" });
  const mobileContext = await page.context().browser().newContext({
    viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: "reduce",
  });
  try {
    const mobile = await mobileContext.newPage();
    mobile.on("pageerror", (error) => errors.push(error.message));
    await mobile.goto(page.url());
    await mobile.waitForFunction(() => !document.querySelector(".boot"));
    check(await mobile.evaluate(() => !matchMedia("(hover: hover) and (pointer: fine)").matches), "Touch emulation failed");
    check(await mobile.evaluate(() => {
      const html = getComputedStyle(document.documentElement);
      const body = getComputedStyle(document.body);
      const button = getComputedStyle(document.querySelector(".face"));
      const viewport = document.querySelector('meta[name="viewport"]').content;
      return html.overscrollBehaviorY === "none" && body.overscrollBehaviorY === "none" &&
        html.webkitTextSizeAdjust === "100%" && button.userSelect === "none" &&
        button.touchAction === "manipulation" && body.userSelect !== "none" &&
        viewport.includes("viewport-fit=cover") && !/user-scalable=no|maximum-scale=1/.test(viewport);
    }), "Mobile scrolling, text selection or zoom baseline is incorrect");
    await mobile.locator("#p-tech .face").tap();
    await mobile.waitForFunction(() => document.querySelector("#p-tech.is-expanded"));
    await mobile.locator(".tk button").first().tap();
    check(await mobile.locator("#take").isVisible(), "Mobile popover failed to open");
    const bounds = await mobile.locator("#take").boundingBox();
    check(bounds.x >= 0 && bounds.x + bounds.width <= 390, "Mobile popover overflows");
    await mobile.locator(".take-x").tap();
    check(await mobile.locator("#take").evaluate((el) => getComputedStyle(el).transform === "none"), "Reduced-motion close still scales");
    await mobile.waitForFunction(() => document.querySelector("#take").hidden);
    await mobile.locator(".tk button").first().tap();
    await mobile.screenshot({ path: "output/playwright/motion-mobile.png" });
    await mobile.locator(".take-x").tap();
    await mobile.setViewportSize({ width: 844, height: 390 });
    check(await mobile.evaluate(() => {
      const stage = document.querySelector("#stage").getBoundingClientRect();
      return stage.left >= 0 && stage.right <= innerWidth && stage.top >= 0 &&
        stage.bottom <= innerHeight && document.documentElement.scrollWidth <= innerWidth;
    }), "Landscape layout overflows the visible viewport");
    await mobile.locator("#p-tech .d-body").evaluate((el) => { el.scrollTop = 100; });
    check(await mobile.locator("#p-tech .d-body").evaluate((el) => el.scrollTop > 0), "Landscape content cannot scroll");
    await mobile.screenshot({ path: "output/playwright/motion-mobile-landscape.png" });
  } finally {
    await mobileContext.close();
  }
  check(errors.length === 0, errors.join("\n"));
  return "PASS: navigation, interruptible popover exit, copy success/retry/reset/failure (mock clipboard), reduced motion and mobile touch; no page errors.";
}
