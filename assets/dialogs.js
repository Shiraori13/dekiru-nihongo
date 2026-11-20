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

window.StudyNotifications = (() => {
  const seenKey = "dekiru_notif_seen_v1";
  let dialog = null;
  let opener = null;

  function safeJson(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  }

  function collectItems() {
    const items = [];
    const exam = safeJson("dekiru_exam_attempt_v1");
    if (exam && exam.examId && !exam.submittedAt) {
      const answered = Array.isArray(exam.answers)
        ? exam.answers.filter((a) => a !== null && a !== undefined).length
        : 0;
      items.push({
        id: `exam:${exam.id || exam.examId}:${answered}`,
        urgent: true,
        title: "Đề thi đang làm dở",
        detail: `Đã chọn ${answered}/45 câu. Mở Luyện đề để làm tiếp bất cứ lúc nào.`,
        actionLabel: "Mở Luyện đề",
        mode: "exam",
      });
    }

    const grammar = safeJson("dekiru_grammar_v1");
    const weakCount = Array.isArray(grammar?.weak) ? grammar.weak.length : 0;
    if (weakCount > 0) {
      items.push({
        id: `weak:${weakCount}`,
        urgent: true,
        title: `${weakCount} câu ngữ pháp cần ôn lại`,
        detail:
          "Các câu bạn làm sai hoặc bỏ trống được giữ trong mục Ngữ pháp.",
        actionLabel: "Luyện câu yếu",
        mode: "grammar",
      });
    }

    const quizMistakes = safeJson("dekiru_quiz_mistakes_v1");
    const mistakeCount =
      typeof window.getQuizMistakeCount === "function"
        ? window.getQuizMistakeCount()
        : Array.isArray(quizMistakes)
          ? quizMistakes.length
          : 0;
    if (mistakeCount > 0) {
      items.push({
        id: `quiz-mistakes:${mistakeCount}`,
        urgent: true,
        title: `${mistakeCount} từ vựng hay sai cần ôn lại`,
        detail:
          "Các từ làm sai hoặc bỏ trống trong Kiểm tra từ vựng đã được lưu lại.",
        actionLabel: "Ôn từ sai",
        mode: "quiz",
        action: "mistakes",
      });
    }

    const streakBtn = document.getElementById("streakButton");
    const isLit = streakBtn?.dataset.lit === "true";
    if (!isLit) {
      items.push({
        id: `streak:${new Date().toDateString()}`,
        urgent: false,
        title: "Chuỗi học hôm nay chưa sáng",
        detail: "Học vài thẻ từ vựng hoặc làm bài ngắn để giữ nhịp mỗi ngày.",
        actionLabel: "Học ngay",
        mode: "flashcard",
      });
    }

    const favs = safeJson("dekiru_favs_v2");
    const favCount =
      typeof window.getFavoriteVocabCount === "function"
        ? window.getFavoriteVocabCount()
        : Array.isArray(favs)
          ? favs.length
          : 0;
    if (favCount > 0) {
      items.push({
        id: `favs:${favCount}`,
        urgent: false,
        title: `Đã lưu ${favCount} từ vựng yêu thích`,
        detail:
          'Bấm nút "Yêu thích" trong bộ lọc từ vựng hoặc bấm bên dưới để ôn tập ngay.',
        actionLabel: "Ôn từ yêu thích",
        mode: "flashcard",
        action: "favorites",
      });
    }

    if (!items.length) {
      items.push({
        id: "ready",
        urgent: false,
        title: "Mọi mục tiêu học hôm nay đã sẵn sàng",
        detail:
          "Kho dữ liệu offline gồm 921 từ vựng, 607 mục Hán tự, 71 bài đọc, 57 câu luyện nói, 666 câu ngữ pháp và 8 đề luyện.",
        actionLabel: null,
        mode: null,
      });
    }
    return items;
  }

  function signature(items) {
    return items
      .filter((item) => item.urgent || item.id.startsWith("streak:"))
      .map((item) => item.id)
      .join("|");
  }

  function refresh() {
    const dot = document.getElementById("notificationDot");
    if (!dot) return;
    const sig = signature(collectItems());
    let seen = "";
    try {
      seen = localStorage.getItem(seenKey) || "";
    } catch {
      seen = "";
    }
    const hasUnread = Boolean(sig && sig !== seen);
    dot.hidden = !hasUnread;
  }

  function markSeen() {
    const sig = signature(collectItems());
    try {
      localStorage.setItem(seenKey, sig);
    } catch {
      /* Ignore storage failure in restricted contexts. */
    }
    const dot = document.getElementById("notificationDot");
    if (dot) dot.hidden = true;
  }

  function render() {
    if (!dialog) {
      dialog = document.createElement("dialog");
      dialog.id = "notificationDialog";
      dialog.className = "notification-dialog";
      dialog.setAttribute("aria-labelledby", "notificationDialogTitle");
      dialog.innerHTML =
        '<div class="notification-dialog-head"><div><p class="notification-eyebrow">NHẮC NHỞ HỌC TẬP</p><h2 id="notificationDialogTitle">Thông báo của bạn</h2></div><button type="button" class="notification-close" data-notif-close aria-label="Đóng thông báo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button></div><div class="notification-list" id="notificationList"></div><p class="notification-privacy">Hoạt động hoàn toàn ngoại tuyến dựa trên tiến độ học lưu trên thiết bị này.</p>';
      document.body.append(dialog);
      window.StudyDialogs.trap(dialog);
      dialog.addEventListener("click", (event) => {
        if (event.target.closest("[data-notif-close]")) {
          close();
          return;
        }
        const action = event.target.closest("[data-notif-mode]");
        if (action) {
          const targetMode = action.dataset.notifMode;
          const targetAction = action.dataset.notifAction;
          close();
          if (targetAction === "favorites" && window.openFavoriteVocab) {
            window.openFavoriteVocab();
          } else if (targetAction === "mistakes" && window.openMistakeQuiz) {
            window.openMistakeQuiz();
          } else {
            window.switchMode?.(targetMode);
          }
          return;
        }
        if (event.target === dialog) {
          const r = dialog.getBoundingClientRect();
          if (
            event.clientX < r.left ||
            event.clientX > r.right ||
            event.clientY < r.top ||
            event.clientY > r.bottom
          ) {
            close();
          }
        }
      });
      dialog.addEventListener("keydown", (event) => event.stopPropagation());
      dialog.addEventListener("close", () => {
        const btn = document.getElementById("notificationBtn");
        btn?.setAttribute("aria-expanded", "false");
        if (opener?.isConnected) opener.focus({ preventScroll: true });
        opener = null;
      });
    }
    const list = dialog.querySelector("#notificationList");
    list.replaceChildren(
      ...collectItems().map((item) => {
        const card = document.createElement("div");
        card.className =
          "notification-item" + (item.urgent ? " is-urgent" : "");
        const title = document.createElement("strong");
        title.textContent = item.title;
        const detail = document.createElement("p");
        detail.textContent = item.detail;
        card.append(title, detail);
        if (item.mode && item.actionLabel) {
          const btn = document.createElement("button");
          btn.type = "button";
          btn.className = "notification-item-btn";
          btn.dataset.notifMode = item.mode;
          if (item.action) btn.dataset.notifAction = item.action;
          btn.textContent = item.actionLabel;
          card.append(btn);
        }
        return card;
      }),
    );
  }

  function open(trigger) {
    render();
    if (dialog.open) return;
    opener = trigger instanceof HTMLElement ? trigger : document.activeElement;
    document
      .getElementById("notificationBtn")
      ?.setAttribute("aria-expanded", "true");
    markSeen();
    dialog.showModal();
    dialog.querySelector("[data-notif-close]")?.focus({ preventScroll: true });
  }

  function close() {
    if (dialog?.open) dialog.close();
  }

  document.addEventListener("DOMContentLoaded", refresh);
  window.addEventListener("storage", refresh);
  return { open, close, refresh };
})();
