/* Option layout only: never replaces questions, controls, answers or their order. */
(() => {
  "use strict";
  const root = document.querySelector("main");
  const selector = "#quizOptions, .gr-options, .ex-options";
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const observed = new WeakSet();
  let scheduled = false;
  function refresh() {
    scheduled = false;
    for (const group of root.querySelectorAll(selector)) {
      if (!group.getClientRects().length) continue;
      if (!observed.has(group)) {
        observed.add(group);
        resize?.observe(group);
      }
      const labels = group.querySelectorAll(
        ".quiz-option-text, .gr-option span[lang], .ex-option > span",
      );
      const width = group.getBoundingClientRect().width;
      const room = Math.max(120, (width - 14) / 2 - 84);
      const long = [...labels].some((label) => {
        const text = label.textContent.trim();
        const style = getComputedStyle(label);
        context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
        return text.includes("\n") || context.measureText(text).width > room;
      });
      group.classList.toggle("options-long", long);
    }
  }
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(refresh);
  }
  const resize =
    typeof ResizeObserver === "function" ? new ResizeObserver(schedule) : null;
  new MutationObserver(schedule).observe(root, {
    childList: true,
    subtree: true,
    characterData: true,
  });
  addEventListener("resize", schedule);
  addEventListener("appearancechange", schedule);
  document.addEventListener("dekiru:feature-ready", schedule);
  document.fonts.ready.then(schedule);
  schedule();
})();
