/* Native modal supplies focus trapping/Escape. Every exit restores the trigger. */
window.StudyDialogs = {
  trap(dialog) {
    dialog.addEventListener("keydown", (event) => {
      if (event.key !== "Tab") return;
      const controls = [
        ...dialog.querySelectorAll(
          'button, a[href], input, select, textarea, [tabindex="0"]',
        ),
      ].filter((e) => !e.disabled && e.getClientRects().length);
      if (!controls.length) {
        event.preventDefault();
        return;
      }
      const index = controls.indexOf(document.activeElement);
      if (event.shiftKey && index <= 0) {
        event.preventDefault();
        controls.at(-1).focus();
      } else if (
        !event.shiftKey &&
        (index < 0 || index === controls.length - 1)
      ) {
        event.preventDefault();
        controls[0].focus();
      }
    });
  },
  replace({
    title = "Bạn có bài chưa nộp",
    message,
    onReplace,
    onContinue = () => {},
  }) {
    const trigger = document.activeElement;
    const dialog = document.createElement("dialog");
    dialog.className = "study-confirm";
    dialog.setAttribute("aria-labelledby", "studyConfirmTitle");
    dialog.innerHTML =
      '<h2 id="studyConfirmTitle"></h2><p></p><div class="study-confirm-actions"><button type="button" data-continue>Tiếp tục bài đang làm</button><button type="button" data-replace>Bắt đầu bài mới</button></div>';
    dialog.querySelector("h2").textContent = title;
    dialog.querySelector("p").textContent = message;
    let finished = false;
    const finish = (action) => {
      if (finished) return;
      finished = true;
      dialog.close();
      dialog.remove();
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
      action?.();
    };
    dialog.querySelector("[data-continue]").onclick = () => finish(onContinue);
    dialog.querySelector("[data-replace]").onclick = () => finish(onReplace);
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      finish();
    });
    dialog.addEventListener("close", () => finish(), { once: true });
    document.body.append(dialog);
    this.trap(dialog);
    dialog.showModal();
    dialog.querySelector("[data-continue]").focus();
  },
};
