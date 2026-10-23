/* Visits are browser-local calendar days, never exercise scores or completions. */
(function () {
  "use strict";

  const core = window.StreakCore;
  const host = document.getElementById("streakHost");
  if (!core || !host) return;
  let state;
  let cachedDates = [];
  const sessionDates = new Set();
  let opener = null;
  let midnightTimer;
  let animationTimer;
  let lastAnimatedDay = null;
  const flame = `<svg class="streak-flame" viewBox="0 0 24 28" aria-hidden="true"><path class="streak-flame-outer" d="M13 1c1 6-4 7-3 12-2-1-3-3-3-5C2 12 1 16 3 21c2 5 8 7 13 4 8-5 6-15 1-19 1 4-1 6-2 7 1-5 0-8-2-12Z"/><path class="streak-flame-inner" d="M12 14c1 3-3 4-2 7 1 3 5 4 7 1 2-3 0-5-1-7 0 2-2 2-2 3 0-2-1-3-2-4Z"/></svg>`;
  const button = document.createElement("button");
  button.type = "button";
  button.id = "streakButton";
  button.className = "streak-button";
  button.setAttribute("aria-haspopup", "dialog");
  button.setAttribute("aria-controls", "streakDialog");
  button.innerHTML = `${flame}<span class="streak-button-text"><strong id="streakCount">1</strong><span class="streak-label">ngày</span></span><span id="streakStorageFlag" class="streak-storage-flag" aria-hidden="true" hidden>!</span>`;
  const liveStatus = document.createElement("span");
  liveStatus.id = "streakStatus";
  liveStatus.className = "streak-sr-only";
  liveStatus.setAttribute("role", "status");
  liveStatus.setAttribute("aria-live", "polite");
  host.append(button, liveStatus);

  const dialog = document.createElement("dialog");
  dialog.id = "streakDialog";
  dialog.className = "streak-dialog";
  dialog.setAttribute("aria-labelledby", "streakTitle");
  dialog.setAttribute("aria-describedby", "streakDescription");
  dialog.innerHTML = `<div class="streak-dialog-head"><div><p class="streak-eyebrow">Mỗi ngày một chút</p><h2 id="streakTitle">Chuỗi truy cập</h2></div><button type="button" class="streak-close" aria-label="Đóng lịch truy cập" title="Đóng (Escape)"><svg aria-hidden="true" viewBox="0 0 24 24"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div><p id="streakDescription">Mở Dekiru Master mỗi ngày để giữ ngọn lửa. Mỗi ngày chỉ tính một lần theo lịch trên thiết bị; đây là số ngày truy cập, không phải số bài đã hoàn thành.</p><div class="streak-totals"><div><strong id="streakCurrent">1</strong><span>Liên tiếp</span></div><div><strong id="streakBest">1</strong><span>Dài nhất</span></div><div><strong id="streakTotalDays">1</strong><span>Ngày truy cập</span></div></div><h3>14 ngày gần đây</h3><ol id="streakCalendar" class="streak-calendar" aria-label="Lịch truy cập 14 ngày gần đây"></ol><p class="streak-legend"><span aria-hidden="true">✓</span> Đã truy cập <span aria-hidden="true">·</span> Chưa ghi nhận</p><p id="streakStorageStatus" class="streak-storage" role="status" aria-live="polite"></p><p class="streak-privacy">Lưu riêng trên trình duyệt này, không đồng bộ giữa thiết bị. Xóa dữ liệu trang sẽ xóa lịch truy cập.</p>`;
  document.body.append(dialog);
  window.StudyDialogs?.trap(dialog);
  const byId = (id) => document.getElementById(id);

  function readDates(today) {
    const dates = [];
    try {
      const storage = window.localStorage;
      for (let index = 0; index < storage.length; index++) {
        const key = storage.key(index);
        if (!key?.startsWith(core.prefix)) continue;
        const date = core.parseRecord(key, storage.getItem(key), today);
        if (date) dates.push(date);
      }
      cachedDates = dates;
      return { dates, available: true };
    } catch (_) {
      return { dates: cachedDates, available: false };
    }
  }

  function render(celebrate) {
    byId("streakCount").textContent = state.current;
    button.dataset.lit = String(state.markedToday);
    button.dataset.storage = state.storage;
    byId("streakStorageFlag").hidden = state.storage !== "session";
    button.setAttribute(
      "aria-label",
      `Chuỗi truy cập: ${state.current} ngày liên tiếp.${state.storage === "session" ? " Bộ nhớ bị chặn hoặc đầy; chỉ giữ trong phiên này." : ""} Mở lịch truy cập.`,
    );
    button.title = `${state.current} ngày truy cập liên tiếp · ${state.storage === "persistent" ? "Đã lưu trên trình duyệt này" : "Chỉ giữ trong phiên này"}`;
    byId("streakCurrent").textContent = state.current;
    byId("streakBest").textContent = state.best;
    byId("streakTotalDays").textContent = state.totalDays;
    const dates = new Set(state.dates);
    const fragment = document.createDocumentFragment();
    for (let offset = -13; offset <= 0; offset++) {
      const date = core.offsetDate(state.today, offset);
      if (!date) continue;
      const [year, month, day] = date.split("-");
      const visited = dates.has(date);
      const cell = document.createElement("li");
      cell.dataset.visited = String(visited);
      if (offset === 0) cell.setAttribute("aria-current", "date");
      cell.setAttribute(
        "aria-label",
        `${day}/${month}/${year}${offset === 0 ? ", hôm nay" : ""}: ${visited ? "Đã truy cập" : "Chưa ghi nhận"}`,
      );
      const time = document.createElement("time");
      time.dateTime = date;
      time.textContent = `${day}/${month}`;
      const mark = document.createElement("span");
      mark.setAttribute("aria-hidden", "true");
      mark.textContent = visited ? "✓" : "·";
      cell.append(time, mark);
      fragment.append(cell);
    }
    byId("streakCalendar").replaceChildren(fragment);
    const status = byId("streakStorageStatus");
    status.dataset.storage = state.storage;
    status.textContent =
      state.storage === "persistent"
        ? "Đã lưu ngày truy cập trên trình duyệt này."
        : "Bộ nhớ đang bị chặn hoặc đã đầy. Ngọn lửa vẫn hoạt động trong phiên này; lịch mới có thể mất khi đóng trang.";
    if (celebrate && lastAnimatedDay !== state.today) {
      lastAnimatedDay = state.today;
      button.classList.remove("streak-ignite");
      // Restart only when a new local calendar day is actually recorded.
      void button.offsetWidth;
      button.classList.add("streak-ignite");
      clearTimeout(animationTimer);
      animationTimer = setTimeout(
        () => button.classList.remove("streak-ignite"),
        1300,
      );
      liveStatus.textContent = `Ngọn lửa đã sáng! ${state.current} ngày truy cập liên tiếp.${state.storage === "session" ? " Bộ nhớ bị chặn; chỉ giữ trong phiên này." : ""}`;
    }
  }

  function refresh() {
    const today = core.dateKey(new Date());
    const visible = document.visibilityState !== "hidden";
    const saved = readDates(today);
    let available = saved.available;
    const wasMarked = saved.dates.includes(today) || sessionDates.has(today);
    let newlyMarked = false;
    if (visible && !wasMarked) {
      sessionDates.add(today);
      newlyMarked = true;
    }
    // Same-day tabs write an identical per-day value; no history is overwritten.
    if (visible && !saved.dates.includes(today)) {
      try {
        const key = core.prefix + today;
        const value = core.recordFor(today);
        window.localStorage.setItem(key, value);
        if (window.localStorage.getItem(key) !== value)
          throw new Error("Visit record was not retained");
        available = saved.available;
      } catch (_) {
        available = false;
      }
    }
    const previous = state;
    state = {
      ...core.calculate([...saved.dates, ...sessionDates], today),
      storage: available ? "persistent" : "session",
    };
    render(newlyMarked);
    if (previous && JSON.stringify(previous) !== JSON.stringify(state)) {
      window.dispatchEvent(
        new CustomEvent("streakchange", { detail: getState() }),
      );
    }
    scheduleMidnight();
    return getState();
  }

  function getState() {
    return state ? { ...state, dates: [...state.dates] } : null;
  }

  function scheduleMidnight() {
    clearTimeout(midnightTimer);
    const now = new Date();
    const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    // Local midnight handles DST days of 23 or 25 hours correctly.
    midnightTimer = setTimeout(refresh, next.getTime() - now.getTime() + 100);
  }

  function closeDialog() {
    if (dialog.open) dialog.close();
  }

  button.addEventListener("click", () => {
    refresh();
    if (dialog.open) return;
    opener = document.activeElement;
    dialog.showModal();
    dialog.querySelector(".streak-close").focus({ preventScroll: true });
  });
  dialog.querySelector(".streak-close").addEventListener("click", closeDialog);
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDialog();
  });
  dialog.addEventListener("close", () => {
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    opener = null;
  });
  dialog.addEventListener("keydown", (event) => event.stopPropagation());
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") refresh();
  });
  window.addEventListener("focus", refresh);
  window.addEventListener("pageshow", refresh);
  window.addEventListener("storage", (event) => {
    if (event.key === null || event.key.startsWith(core.prefix)) refresh();
  });
  // Detect a changed timezone/clock while the page stays focused as well.
  setInterval(() => {
    if (
      document.visibilityState === "visible" &&
      core.dateKey(new Date()) !== state?.today
    )
      refresh();
  }, 60000);

  refresh();
  window.VisitStreak = Object.freeze({
    getState,
    refresh,
    ready: Promise.resolve(getState()),
  });
})();
