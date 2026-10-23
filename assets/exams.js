/* Dedicated full-paper mode. All imported documents and pictures stay in this browser. */
(() => {
  "use strict";
  const root = document.getElementById("examMode"),
    $ = (id) => document.getElementById(id),
    esc = escapeHTML;
  const {
    categories,
    validate,
    documentOf,
    fingerprint,
    grade,
    validOrder,
    shuffleOrder,
    orderedExam,
    store,
  } = ExamCore;
  const key = "dekiru_exam_attempt_v1",
    historyKey = "dekiru_exam_history_v1";
  const uid = () =>
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const copy = (v) => JSON.parse(JSON.stringify(v));
  const letters = ["A", "B", "C", "D"];
  const get = (k, fallback) => {
    try {
      return JSON.parse(localStorage.getItem(k)) ?? fallback;
    } catch {
      return fallback;
    }
  };
  let exams = [...DEKIRU_EXAMS],
    attempt = null,
    viewing = null,
    history = [],
    draft = null,
    editorIndex = 0,
    pending = null,
    tab = "library",
    reviewFilter = "all",
    libraryScope = "all",
    libraryMinutes = "45";
  let attemptStore,
    connected = false,
    saving = false,
    revision = 0,
    contentUpdated = false;
  let storageReady = false,
    busy = false,
    dialogAction = null,
    dialogFocus = null;
  let libraryRefresh = null,
    libraryRetryAt = 0,
    libraryReadFailed = false;
  root.innerHTML = `
    <div class="ex-hero"><div><div class="eyebrow">DEKIRU · PHÒNG LUYỆN ĐỀ</div><h1>45 câu hỏi.<br><span>Một lượt ôn trọn bài.</span></h1><p class="ex-muted">Làm đề theo mẫu, giữ nhịp làm bài và xem lại từng lỗi sau khi nộp.</p></div><div class="ex-stamp"><strong>45</strong><span>CÂU / ĐỀ</span></div></div>
    <div class="ex-tabs" role="group" aria-label="Khu vực luyện đề"><button data-ex-tab="library" aria-pressed="true">01 · Chọn đề</button><button data-ex-tab="builder" aria-pressed="false">02 · Thêm đề</button><button data-ex-tab="history" aria-pressed="false">03 · Lịch sử</button></div>
    <p id="exNotice" class="ex-banner" role="status" aria-live="polite"></p>
    <div id="exLibraryStatus" class="ex-banner" role="status" hidden></div><div id="exOwnership" class="ex-banner" role="status"></div><div id="exLibrary"></div><div id="exBuilder" hidden></div><div id="exHistory" hidden></div><div id="exRun" hidden></div><div id="exPreview" hidden></div>
    <p id="exSaveStatus" class="ex-muted" role="status"></p>
    <dialog id="exConfirm" class="ex-confirm" aria-labelledby="exConfirmTitle"><h2 id="exConfirmTitle"></h2><p id="exConfirmText"></p><div class="ex-actions"><button id="exConfirmCancel" type="button">Quay lại</button><button id="exConfirmAccept" class="ex-primary" type="button">Xác nhận</button></div></dialog>
    <dialog id="exImageViewer" class="ex-confirm ex-image-viewer" aria-labelledby="exImageTitle"><div class="ex-question-top"><h2 id="exImageTitle">Ảnh câu hỏi</h2><div class="ex-actions"><button data-ex-zoom aria-pressed="false">Kích thước gốc</button><button data-ex-image-close>Đóng ảnh</button></div></div><p class="ex-muted">Bật kích thước gốc rồi cuộn để đọc chữ nhỏ. Nhấn Escape để đóng.</p><div id="exImageViewport" class="ex-image-viewport"><img id="exZoomImage" alt="Ảnh câu hỏi phóng to"></div></dialog>`;
  StudyDialogs.trap($("exConfirm"));
  StudyDialogs.trap($("exImageViewer"));
  function picture(src, alt, lazy = false) {
    return `<button class="ex-picture" data-ex-picture type="button" aria-label="Phóng to ${esc(alt)}"><img class="ex-question-image" src="${src}" alt="${esc(alt)}" ${lazy ? 'loading="lazy"' : ""}><span class="ex-muted">⤢ Phóng to ảnh</span></button>`;
  }
  $("exImageViewer").addEventListener("close", () =>
    $("exZoomImage").removeAttribute("src"),
  );
  function notice(message) {
    $("exNotice").textContent = message;
  }
  function ownership() {
    if (!attemptStore || !connected) return;
    const unresolved = missingImported(attemptStore.current?.attempt),
      locked =
        unresolved ||
        (attempt && !attempt.submittedAt && !attemptStore.editable());
    const box = $("exOwnership");
    box.hidden = !locked || unresolved;
    if (locked && !unresolved && !box.firstChild)
      box.innerHTML =
        "<strong>Bài này đang ở chế độ chỉ xem.</strong><p>Tab khác đang giữ quyền chỉnh sửa, hoặc quyền đã hết hạn. Chuyển quyền sang tab này để tiếp tục; đáp án mới nhất sẽ được nạp trước khi sửa.</p><button data-ex-takeover>Tiếp tục ở tab này</button>";
    root
      .querySelectorAll(
        "[data-ex-answer], [data-ex-clear], [data-ex-flag], [data-ex-submit], [data-ex-start], [data-ex-restart]",
      )
      .forEach((b) => {
        if (locked) {
          if (!b.disabled) b.dataset.ownerDisabled = "true";
          b.disabled = true;
        } else if (b.dataset.ownerDisabled) {
          b.disabled = false;
          delete b.dataset.ownerDisabled;
        }
      });
    $("exSaveStatus").textContent = unresolved
      ? "Bài đã lưu đang chờ tải đề. Dữ liệu gốc vẫn được giữ."
      : attemptStore.persistent
        ? `Đã lưu trên trình duyệt · Bản ${revision}${locked ? " · Chỉ xem" : " · Tab này có thể chỉnh sửa"}.`
        : "Chỉ giữ trong phiên hiện tại: trình duyệt chặn bộ nhớ. Không đồng bộ giữa các tab; hãy xuất kết quả trước khi đóng.";
  }
  function receive(row, result = {}) {
    const previous = attempt,
      oldRevision = revision;
    revision = row.revision;
    attempt = sanitizeAttempt(row.attempt);
    history = (row.history || [])
      .map(sanitizeAttempt)
      .filter((h) => h?.submittedAt);
    if (!connected) return;
    // Read-only navigation is local; it must never write another tab's position.
    if (
      previous?.id === attempt?.id &&
      !attemptStore.editable() &&
      attempt &&
      !attempt.submittedAt
    )
      attempt.index = previous.index;
    if (result.error) notice(result.error);
    if (result.conflict)
      notice(
        "Quyền chỉnh sửa hoặc lượt làm bài đã thay đổi. Đã nạp dữ liệu mới nhất; thao tác cũ không được ghi đè.",
      );
    if (revision !== oldRevision || result.libraryReload) {
      if ($("exConfirm").open) $("exConfirm").close();
      if (tab === "run" && !viewing) renderRun();
      if (tab === "library") renderLibrary();
      if (tab === "history") renderHistory();
    }
    ownership();
    libraryStatus();
    if (missingImportedIds(row).length) refreshLibrary();
  }
  async function mutate(change) {
    if (
      saving ||
      !attempt ||
      attempt.submittedAt ||
      (viewing && change.type !== "submit")
    )
      return false;
    saving = true;
    root.dataset.saving = "true";
    $("exSaveStatus").textContent = "Đang lưu thao tác…";
    $("exRun").inert = true;
    const snapshot = copy(attempt),
      previousHistory = copy(history);
    try {
      const result = await attemptStore.change(attempt.id, revision, change);
      if (result.conflict) ownership();
      return result.changed;
    } catch (error) {
      attemptStore.fallback(snapshot, previousHistory);
      const result = await attemptStore.change(attempt.id, revision, change);
      notice(
        "Bộ nhớ vừa bị chặn hoặc đầy. Đã chuyển sang bản sao chỉ giữ trong tab này để bạn tiếp tục. Bài lưu trước đó không bị ghi đè; hãy xuất kết quả trước khi đóng.",
      );
      return result.changed;
    } finally {
      saving = false;
      root.dataset.saving = "false";
      $("exRun").inert = false;
      ownership();
    }
  }
  function byId(id) {
    return exams.find((e) => e.id === id);
  }
  function missingImported(s) {
    return (
      typeof s?.examId === "string" &&
      s.examId.startsWith("import-") &&
      !byId(s.examId)
    );
  }
  function missingImportedIds(row = attemptStore?.current) {
    return [
      ...new Set(
        [row?.attempt, ...(row?.history || [])]
          .filter(missingImported)
          .map((s) => s.examId),
      ),
    ];
  }
  function libraryStatus() {
    const box = $("exLibraryStatus"),
      missing = missingImportedIds().length;
    box.hidden = !missing;
    if (!missing) return;
    box.replaceChildren();
    const message = document.createElement("p");
    message.textContent = libraryRefresh
      ? "Đang tải đề đã nhập ở tab khác. Bài làm và lịch sử vẫn được giữ."
      : libraryReadFailed
        ? "Chưa đọc được đề đã nhập. Bài làm và lịch sử vẫn được giữ; hãy thử tải lại đề."
        : "Chưa tìm thấy một số đề đã nhập. Bài làm và lịch sử vẫn được giữ; hãy thử tải lại đề.";
    box.append(message);
    if (!libraryRefresh) {
      const retry = document.createElement("button");
      retry.type = "button";
      retry.dataset.exLibraryRetry = "";
      retry.textContent = "Tải lại đề đã nhập";
      box.append(retry);
    }
  }
  function loadImported(documents) {
    for (const e of documents) {
      if (typeof e.id !== "string" || !e.id.startsWith("import-")) continue;
      try {
        const imported = { ...validate(documentOf(e)), id: e.id };
        const index = exams.findIndex((item) => item.id === e.id);
        if (index < 0) exams.push(imported);
        else exams[index] = imported;
      } catch {
        notice("Một đề đã lưu không còn hợp lệ; đề đó đã được bỏ qua.");
      }
    }
  }
  async function refreshLibrary(force = false) {
    if (libraryRefresh) return libraryRefresh;
    if (!force && Date.now() < libraryRetryAt) return;
    libraryRefresh = (async () => {
      try {
        const documents = await store.list();
        storageReady = true;
        const recovered = libraryReadFailed;
        libraryReadFailed = false;
        loadImported(documents);
        if (recovered && !missingImportedIds().length)
          notice("Đã tải lại đề đã nhập. Bài làm và lịch sử được giữ nguyên.");
      } catch {
        libraryReadFailed = true;
      } finally {
        libraryRetryAt = Date.now() + 3000;
        libraryRefresh = null;
        if (connected && attemptStore.current)
          receive(attemptStore.current, { libraryReload: true });
      }
    })();
    libraryStatus();
    return libraryRefresh;
  }
  // An absent local document is not proof that another tab's saved work is invalid.
  function sanitizeStoredAttempt(s) {
    return missingImported(s) ? s : sanitizeAttempt(s);
  }
  function examFor(s) {
    const e = s && byId(s.examId);
    return e ? orderedExam(e, s.order) : null;
  }
  function show(name) {
    tab = name;
    ["library", "builder", "history", "run", "preview"].forEach(
      (n) => ($("ex" + n[0].toUpperCase() + n.slice(1)).hidden = n !== name),
    );
    root
      .querySelectorAll("[data-ex-tab]")
      .forEach((b) =>
        b.setAttribute("aria-pressed", String(b.dataset.exTab === name)),
      );
  }
  function confirmAction(title, message, action, label = "Xác nhận") {
    dialogAction = action;
    dialogFocus = document.activeElement;
    $("exConfirmTitle").textContent = title;
    $("exConfirmText").textContent = message;
    $("exConfirmAccept").textContent = label;
    $("exConfirm").showModal();
    $("exConfirmCancel").focus();
  }
  $("exConfirmCancel").onclick = () => $("exConfirm").close();
  $("exConfirmAccept").onclick = () => {
    const action = dialogAction;
    $("exConfirm").close();
    action?.();
  };
  $("exConfirm").addEventListener("close", () => {
    dialogAction = null;
    if (dialogFocus?.isConnected) dialogFocus.focus();
  });
  function download(value, name) {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(value, null, 2)], {
        type: "application/json;charset=utf-8",
      }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = name;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function lessonScope(lessons) {
    const sorted = [...new Set(lessons)].sort((a, b) => a - b);
    return sorted.length > 1 && sorted.every((l, i) => l === sorted[0] + i)
      ? `${sorted[0]}–${sorted.at(-1)}`
      : sorted.join(", ");
  }
  function scopeWords(lessons) {
    return RAW_VOCAB.filter((w) => lessons.includes(w.l));
  }
  function vocabularyGuide(lessons) {
    const words = scopeWords(lessons),
      groups = [...new Set(words.map((w) => `${w.l}:${w.t}`))];
    return `<details class="ex-coverage" data-ex-vocabulary="${lessons.join("-")}"><summary>Từ vựng ôn đề · Đủ ${words.length} mục từ bài ${lessonScope(lessons)} / ${groups.length} topic</summary><p class="ex-muted">Danh mục đầy đủ từ PDF để tự ôn trước hoặc sau khi làm đề. Từng đề dùng một phần từ vựng trong ngữ cảnh; danh mục này không hiện trong màn hình làm bài.</p>${groups
      .map((group) => {
        const list = words.filter((w) => `${w.l}:${w.t}` === group);
        return `<details class="ex-vocabulary-group"><summary>Bài ${list[0].l} · <span lang="ja">${esc(list[0].t)}</span> · ${list.length} mục</summary><dl class="ex-vocabulary-list">${list.map((w) => `<div><dt lang="ja">${esc(w.k)}</dt><dd lang="ja">${esc(w.h)}</dd><dd>${esc(w.m)}</dd></div>`).join("")}</dl></details>`;
      })
      .join("")}</details>`;
  }
  function coverage(exam) {
    if (exam.kind !== "authored") return "";
    const lessons = [...new Set(exam.lessons)].sort((a, b) => a - b),
      unitIds = new Set(exam.questions.map((q) => q.unit)),
      scopedUnits = GRAMMAR_DATA.units.filter(
        (u) => lessons.includes(u.lesson) && unitIds.has(u.id),
      ),
      topics = new Set(scopedUnits.map((u) => `${u.lesson}:${u.topic}`)),
      words = scopeWords(lessons),
      pages = [...new Set(words.map((w) => w.p))].sort((a, b) => a - b),
      counts = Object.keys(categories)
        .map(
          (c) =>
            `${exam.questions.filter((q) => q.category === c).length} ${categories[c].toLowerCase()}`,
        )
        .join(" · ");
    return `<details class="ex-coverage"><summary>Phạm vi và cấu trúc ${exam.questions.length} câu</summary><p class="ex-muted">${esc(counts)}. Đủ ${scopedUnits.length} mục ngữ pháp / ${topics.size} topic của bài ${lessonScope(lessons)}. Từ vựng được luân phiên giữa các đề; ${exam.questions.length} câu không kiểm tra riêng từng từ trong toàn bộ ${words.length} mục từ.</p><div class="ex-coverage-grid">${lessons
      .map(
        (l) =>
          `<div><h3>Bài ${l}</h3><ul>${scopedUnits
            .filter((u) => u.lesson === l)
            .map((u) => `<li>${esc(u.title)}</li>`)
            .join("")}</ul></div>`,
      )
      .join(
        "",
      )}</div><p class="ex-muted">Từ vựng đối chiếu New words list, trang ${pages[0]}–${pages.at(-1)}. Các mẫu bài 1–${lessons[0] - 1} được dùng làm kiến thức nền.</p></details>`;
  }
  function renderLibrary() {
    const resume = attempt && byId(attempt.examId),
      catalog = exams
        .filter((e) => {
          if (libraryScope === "all") return true;
          if (["sample", "imported"].includes(libraryScope))
            return e.kind === libraryScope;
          return e.kind === "authored" && e.lessons.join("-") === libraryScope;
        })
        .filter((e) => e.kind !== "sample")
        .concat(
          exams.filter(
            (e) =>
              e.kind === "sample" && ["all", "sample"].includes(libraryScope),
          ),
        );
    $("exLibrary").innerHTML =
      `${resume ? `<div class="ex-banner"><strong>${attempt.submittedAt ? "Kết quả gần nhất" : "Bạn có bài đang làm"}: ${esc(resume.title)}</strong><p class="ex-muted">${attempt.answers.filter(Number.isInteger).length}/45 câu đã chọn${attempt.submittedAt ? " · Đã nộp" : ""}.</p><button data-ex-resume class="ex-primary">${attempt.submittedAt ? "Xem kết quả" : "Tiếp tục làm bài"}</button></div>` : ""}
      <div class="ex-toolbar"><label>Lọc đề theo bài<select id="exScope">${[
        ["all", "Tất cả"],
        ["4-5", "Bài 4–5"],
        ["6-7", "Bài 6–7"],
        ["sample", "Đề mẫu từ ảnh"],
        ["imported", "Đề của bạn"],
      ]
        .map(
          ([value, label]) =>
            `<option value="${value}" ${libraryScope === value ? "selected" : ""}>${label}</option>`,
        )
        .join(
          "",
        )}</select></label><label>Thời gian làm bài<select id="exMinutes">${[
        ["45", "45 phút"],
        ["30", "30 phút"],
        ["60", "60 phút"],
        ["0", "Không giới hạn"],
      ]
        .map(
          ([value, label]) =>
            `<option value="${value}" ${libraryMinutes === value ? "selected" : ""}>${label}</option>`,
        )
        .join(
          "",
        )}</select></label><p class="ex-muted">Mỗi lần bắt đầu, 45 câu được xáo trộn. Chọn một đáp án mỗi câu và sửa trước khi nộp.<br>Đáp án, giải thích và ảnh gốc chỉ hiện ở phần xem lại.</p></div>
      <p id="exCatalogStatus" class="ex-muted" role="status" aria-live="polite">${catalog.length ? `${catalog.length} đề trong nhóm đã chọn.` : "Chưa có đề trong nhóm này. Dùng mục Thêm đề để nhập đề của bạn."}</p>
      <div class="ex-catalog">${catalog
        .map(
          (e) =>
            `<article class="ex-card" data-ex-id="${esc(e.id)}"><span class="ex-tag">${e.kind === "sample" ? "TỪ ẢNH · ĐÃ HIỆU ĐÍNH" : e.kind === "imported" ? "ĐỀ CỦA BẠN" : `BÀI ${lessonScope(e.lessons)} · BIÊN SOẠN MỚI`}</span><h2>${esc(e.title)}</h2><p class="ex-muted">${esc(e.description)}</p><div class="ex-legend"><span>45 câu · 4 lựa chọn</span><span>Bài ${e.lessons.join(", ")}</span></div><div class="ex-actions"><button class="ex-primary" data-ex-start="${esc(e.id)}">Làm đề</button><button data-ex-export="${esc(e.id)}" aria-label="Xuất file đề ${esc(e.title)}">Xuất đề</button>${e.kind === "imported" ? `<button class="ex-danger" data-ex-delete="${esc(e.id)}" aria-label="Xóa đề ${esc(e.title)}">Xóa</button>` : ""}</div>${coverage(e)}</article>`,
        )
        .join("")}</div>
      <details class="ex-coverage"><summary>Về đề từ ảnh và câu 18</summary><p class="ex-muted">Material có 44 ảnh cho đề 45 câu, thiếu câu số 18. Bản này chép 44 câu, sửa lỗi gõ/đáp án trùng và thêm ngữ cảnh ở câu có nhiều cách trả lời. Câu 18 là câu bổ sung, không phải bản chép từ ảnh. Ảnh không có đáp án; đáp án và giải thích là phần biên soạn. Đề mẫu có cả bài 6 và chữ Hán mở rộng. Các đề biên soạn chia riêng theo bài 4–5 và bài 6–7; phạm vi nội dung mới ghi trên từng thẻ đề.</p><a class="source-link" href="EXAM_AUDIT.md" target="_blank" rel="noopener">Xem ghi chú đối chiếu ↗</a></details>${[
        [4, 5],
        [6, 7],
      ]
        .map(vocabularyGuide)
        .join("")}`;
    ownership();
  }
  function sanitizeAttempt(s) {
    if (!s || typeof s !== "object") return null;
    const e = byId(s.examId);
    const migrated = e?.migrations?.[s.fingerprint];
    if (
      !e ||
      (s.fingerprint !== fingerprint(e) &&
        !e.legacyFingerprints?.includes(s.fingerprint) &&
        !migrated) ||
      !Array.isArray(s.answers) ||
      s.answers.length !== 45 ||
      typeof s.id !== "string" ||
      !Number.isFinite(s.startedAt) ||
      s.startedAt <= 0 ||
      s.startedAt > Date.now() + 60000 ||
      !Number.isInteger(s.minutes) ||
      s.minutes < 0 ||
      s.minutes > 180
    )
      return null;
    const order =
      s.order === undefined ? Array.from({ length: 45 }, (_, i) => i) : s.order;
    if (!validOrder(order, 45)) return null;
    if (migrated?.length) {
      contentUpdated = true;
      if (s.submittedAt) return null;
    }
    return {
      id: s.id,
      examId: e.id,
      fingerprint: fingerprint(e),
      order: [...order],
      answers: s.answers.map((a, i) =>
        !migrated?.includes(order[i]) && Number.isInteger(a) && a >= 0 && a < 4
          ? a
          : null,
      ),
      flags: Array.from({ length: 45 }, (_, i) => s.flags?.[i] === true),
      index: Number.isInteger(s.index) ? Math.max(0, Math.min(44, s.index)) : 0,
      startedAt: s.startedAt,
      minutes: s.minutes,
      submittedAt:
        Number.isFinite(s.submittedAt) && s.submittedAt > 0
          ? s.submittedAt
          : null,
      reason: s.reason === "timeout" ? "timeout" : "manual",
    };
  }
  function start(id, minutes) {
    const e = byId(id);
    if (!e) return;
    const expectedId = attempt?.id || null;
    const run = async () => {
      root.dataset.saving = "true";
      const previous = active()?.examId === e.id ? active().order : [];
      const next = {
        id: uid(),
        examId: e.id,
        fingerprint: fingerprint(e),
        order: shuffleOrder(e.questions.length, previous),
        answers: Array(45).fill(null),
        flags: Array(45).fill(false),
        index: 0,
        startedAt: Date.now(),
        minutes,
        submittedAt: null,
        reason: "manual",
      };
      try {
        const result = await attemptStore.start(next, expectedId);
        if (!result.changed) {
          notice(
            "Không thể thay bài từ tab chỉ xem hoặc bài đã đổi ở tab khác. Hãy tiếp tục bài mới nhất.",
          );
          return;
        }
        viewing = null;
        reviewFilter = "all";
        notice("");
        show("run");
        renderRun(true);
        ownership();
        tick();
      } catch (error) {
        notice(`Không tạo được bài: ${error.message}`);
      } finally {
        root.dataset.saving = "false";
      }
    };
    if (attempt && !attempt.submittedAt)
      confirmAction(
        "Bắt đầu đề mới?",
        `Bài “${byId(attempt.examId)?.title}” đang làm sẽ được thay bằng đề mới. Bạn có thể quay lại để nộp bài trước.`,
        run,
        "Bắt đầu đề mới",
      );
    else run();
  }
  function active() {
    return viewing || attempt;
  }
  function stateLabel(state) {
    return { correct: "Đúng", wrong: "Sai", skipped: "Bỏ trống" }[state];
  }
  function questionMap(s, e, result) {
    return e.questions
      .map((q, i) => {
        const answered = Number.isInteger(s.answers[i]),
          label = result
            ? stateLabel(result.states[i])
            : answered
              ? `Đã chọn ${letters[s.answers[i]]}`
              : "Chưa chọn";
        return `<button data-ex-jump="${i}" type="button" class="${answered ? "is-answered " : ""}${s.flags[i] ? "is-flagged " : ""}${result ? "is-" + result.states[i] : ""}" aria-current="${!result && s.index === i}" aria-label="Câu ${i + 1}: ${label}${s.flags[i] ? ", đã đánh dấu" : ""}">${i + 1}</button>`;
      })
      .join("");
  }
  function renderRun(focus = false) {
    const s = active(),
      e = examFor(s);
    if (!e) {
      show("library");
      return;
    }
    if (s.submittedAt) {
      renderResult(focus);
      return;
    }
    const q = e.questions[s.index],
      answered = s.answers.filter(Number.isInteger).length,
      selected = s.answers[s.index];
    $("exRun").innerHTML =
      `<div class="ex-attempt-head"><div><button data-ex-back>← Danh sách đề</button><h2 style="margin-top:16px">${esc(e.title)}</h2><p class="ex-muted">Câu hỏi đã xáo trộn · Chỉ chấm khi nộp · Phím 1–4 để chọn khi không nhập văn bản</p></div><div id="exClock" class="ex-clock" role="timer" aria-label="Thời gian còn lại"><span class="ex-muted">${s.minutes ? "Còn lại" : "Đã làm"}</span><strong id="exClockValue"></strong></div></div>
      <div class="ex-attempt-layout"><article class="ex-paper"><div class="ex-question-top"><span class="ex-tag">Câu ${s.index + 1} / 45 · ${esc(categories[q.category])}</span><button data-ex-flag aria-pressed="${s.flags[s.index]}">${s.flags[s.index] ? "⚑ Đã đánh dấu" : "⚐ Xem lại sau"}</button></div><h2 id="exQuestionHeading" tabindex="-1" class="ex-focus-heading">Chọn đáp án đúng</h2><p class="ex-prompt" lang="ja">${esc(q.prompt)}</p>${q.origin === "added" ? '<p class="ex-muted">Câu biên soạn bổ sung cho vị trí thiếu trong ảnh.</p>' : ""}${q.image ? picture(q.image, `ảnh đề câu ${s.index + 1}`) : ""}<div class="ex-options" role="group" aria-label="Bốn lựa chọn">${q.options.map((o, i) => `<button class="ex-option" data-ex-answer="${i}" type="button" aria-pressed="${selected === i}"><b>${letters[i]}</b><span lang="ja">${esc(o)}</span></button>`).join("")}</div><p id="exAnswerStatus" class="ex-muted" role="status" aria-live="polite">${Number.isInteger(selected) ? "Đã chọn " + letters[selected] : "Chưa chọn đáp án"}</p><div class="ex-question-nav"><button data-ex-prev ${s.index === 0 ? "disabled" : ""}>← Câu trước</button><button data-ex-clear ${!Number.isInteger(selected) ? "disabled" : ""}>Bỏ lựa chọn</button><button data-ex-next ${s.index === 44 ? "disabled" : ""}>Câu sau →</button></div></article>
      <aside class="ex-sidebar"><strong id="exAnsweredCount">${answered}/45 đã chọn</strong><progress class="ex-progress" max="45" value="${answered}" aria-label="Số câu đã chọn"></progress><div class="ex-legend"><span>• Đã chọn</span><span>Trống: chưa chọn</span><span>Viền trên: xem lại</span></div><div class="ex-map" aria-label="Đi đến câu hỏi">${questionMap(s, e)}</div><p id="exMapStatus" class="ex-muted">Câu ${s.index + 1}: ${Number.isInteger(selected) ? "Đã chọn " + letters[selected] : "Chưa chọn"}</p><button data-ex-first-empty>Đến câu chưa chọn</button><button data-ex-submit class="ex-primary">Nộp bài</button></aside></div>`;
    ownership();
    tick();
    if (focus && $("exQuestionHeading")) {
      $("exQuestionHeading").focus({ preventScroll: true });
      root
        .querySelector(".ex-paper")
        .scrollIntoView({ block: "start", behavior: "instant" });
    }
  }
  async function setAnswer(value) {
    if (!attempt || attempt.submittedAt || viewing) return;
    if (await mutate({ type: "answer", index: attempt.index, value })) {
      renderRun();
      if (value !== null)
        root
          .querySelector(`[data-ex-answer="${value}"]`)
          ?.focus({ preventScroll: true });
    }
  }
  async function move(index) {
    const s = active();
    if (!s) return;
    if (s.submittedAt) {
      reviewFilter = "all";
      renderResult();
      root
        .querySelector(`[data-ex-review="${index}"]`)
        ?.scrollIntoView({ behavior: "instant", block: "start" });
      return;
    }
    const next = Math.max(0, Math.min(44, index));
    if (!attemptStore.editable()) {
      s.index = next;
      renderRun(true);
      return;
    }
    if (await mutate({ type: "move", index: next })) renderRun(true);
  }
  async function submit(reason = "manual") {
    if (!attempt || attempt.submittedAt || !attemptStore.editable()) return;
    if (await mutate({ type: "submit", reason })) {
      if (!viewing) {
        reviewFilter = "all";
        renderResult(true);
      } else
        notice(
          "Bài đang làm đã hết giờ và được nộp tự động. Mở kết quả từ danh sách đề.",
        );
    }
  }
  function requestSubmit() {
    tick();
    if (!attempt || attempt.submittedAt) return;
    const missing = attempt.answers.filter((a) => !Number.isInteger(a)).length,
      flags = attempt.flags.filter(Boolean).length;
    confirmAction(
      "Nộp và chấm bài?",
      `Đã chọn ${45 - missing}/45 câu. ${missing ? `${missing} câu chưa chọn sẽ tính là bỏ trống. ` : ""}${flags ? `${flags} câu đang đánh dấu xem lại. ` : ""}Sau khi nộp, bài làm được khóa và hiện giải thích.`,
      () => submit(),
      "Nộp bài",
    );
  }
  function tick() {
    if (!attempt || attempt.submittedAt) return;
    const elapsed = Math.max(0, Date.now() - attempt.startedAt),
      remaining = attempt.minutes * 60000 - elapsed;
    if (attempt.minutes && remaining <= 0 && attemptStore && !saving) {
      if ($("exConfirm").open) $("exConfirm").close();
      saving = true;
      root.dataset.saving = "true";
      attemptStore
        .expire(attempt.id)
        .catch((error) => notice(error.message))
        .finally(() => {
          saving = false;
          root.dataset.saving = "false";
        });
      if (tab !== "run")
        notice(
          "Bài luyện đề vừa hết giờ và đã được nộp tự động. Mở kết quả ở Danh sách đề.",
        );
      return;
    }
    if ($("exClockValue") && !viewing) {
      const seconds = Math.floor(
        (attempt.minutes ? Math.max(0, remaining) : elapsed) / 1000,
      );
      $("exClockValue").textContent =
        `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
      $("exClock").classList.toggle(
        "is-urgent",
        attempt.minutes > 0 && remaining < 300000,
      );
    }
  }
  setInterval(tick, 1000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tick();
  });
  function solutionHTML(q) {
    const s = q.solution;
    if (!s)
      return `<section class="ex-solution"><h3>Giải thích đáp án</h3><p>${esc(q.explanation || "Người thêm đề chưa cung cấp giải thích. Đáp án ở trên được chấm theo khóa của đề; ứng dụng không tự suy đoán lời giải.")}</p></section>`;
    return `<section class="ex-solution" aria-label="Lời giải chi tiết"><h3>Giải thích đáp án</h3><p class="ex-solution-answer"><strong>Đáp án ${letters[q.answer]}</strong><span lang="ja">${esc(q.options[q.answer])}</span></p><div class="ex-solution-standard"><h4>Từ / câu hoàn chỉnh</h4><p lang="ja">${esc(s.completed)}</p><p>${esc(s.meaning)}</p></div><h4>Vì sao chọn đáp án này?</h4><p>${esc(s.options[q.answer])}</p><h4>Điểm cần nhớ</h4><p>${esc(s.rule)}</p><details class="ex-option-analysis"><summary>Phân tích cả 4 lựa chọn</summary><dl>${q.options.map((option, i) => `<div class="${i === q.answer ? "is-key" : ""}"><dt><b>${letters[i]}${i === q.answer ? " · Đúng" : ""}</b><span lang="ja">${esc(option)}</span></dt><dd>${esc(s.options[i])}</dd></div>`).join("")}</dl></details></section>`;
  }
  function renderResult(focus = false) {
    const s = active(),
      e = examFor(s),
      r = grade(e, s.answers);
    $("exRun").innerHTML =
      `<div class="ex-attempt-head"><div><button data-ex-back>← Danh sách đề</button><h2 style="margin-top:16px">${esc(e.title)}</h2><p class="ex-muted">${s.reason === "timeout" ? "Hết giờ · Tự động nộp" : "Đã nộp"} · ${new Date(s.submittedAt).toLocaleString("vi-VN")} · ${Math.max(1, Math.round((s.submittedAt - s.startedAt) / 60000))} phút</p></div><span class="ex-tag">${r.percent}% CHÍNH XÁC</span></div><section class="ex-result"><h2 id="exResultHeading" tabindex="-1">Kết quả và những câu cần ôn</h2><div class="ex-scores"><div><strong id="exScore">${r.score}</strong><span>Điểm / 10</span></div><div><strong id="exCorrect">${r.correct}</strong><span>Đúng</span></div><div><strong id="exWrong">${r.wrong}</strong><span>Sai</span></div><div><strong id="exSkipped">${r.skipped}</strong><span>Bỏ trống</span></div></div><div class="ex-actions"><button class="ex-primary" data-ex-restart>Làm lại đề này</button><button data-ex-result-export>Xuất kết quả</button></div><div class="ex-map" aria-label="Kết quả từng câu">${questionMap(s, e, r)}</div><div class="ex-legend"><span>Đúng: viền xanh</span><span>Sai: viền đỏ</span><span>Bỏ trống: chưa chọn</span></div></section>
      <div class="ex-toolbar"><label>Xem lại<select id="exReviewFilter"><option value="all">Tất cả 45 câu</option><option value="wrong">Chỉ câu sai</option><option value="skipped">Chỉ câu bỏ trống</option><option value="flagged">Câu đã đánh dấu</option></select></label><p id="exReviewCount" class="ex-muted"></p></div><div id="exReviewList"></div>`;
    $("exReviewFilter").value = reviewFilter;
    const visible = e.questions
      .map((q, i) => ({ q, i, state: r.states[i] }))
      .filter(
        ({ i, state }) =>
          reviewFilter === "all" ||
          (reviewFilter === "flagged" && s.flags[i]) ||
          state === reviewFilter,
      );
    $("exReviewCount").textContent = `${visible.length} câu đang hiển thị`;
    $("exReviewList").innerHTML =
      visible
        .map(
          ({ q, i, state }) =>
            `<article class="ex-review is-${state}" data-ex-review="${i}"><div class="ex-question-top"><span class="ex-tag">Câu ${i + 1} · ${stateLabel(state)}</span><span class="ex-muted">Bài ${q.lesson} · ${esc(categories[q.category])}${s.flags[i] ? " · ⚑" : ""}</span></div><p class="ex-prompt" lang="ja">${esc(q.prompt)}</p>${q.image ? picture(q.image, `ảnh câu ${i + 1}`, true) : ""}<ul>${q.options.map((o, j) => `<li class="${j === q.answer ? "is-key" : s.answers[i] === j ? "is-choice-wrong" : ""}"><b>${letters[j]}.</b> ${esc(o)}${j === q.answer ? " · ✓ Đáp án đúng" : ""}${s.answers[i] === j ? " · Bạn chọn" : ""}</li>`).join("")}</ul>${solutionHTML(q)}${q.origin === "added" ? '<p class="ex-muted">Câu bổ sung cho vị trí 18 trong đề ảnh gốc.</p>' : ""}${q.source ? `<a href="${esc(encodeURI(q.source))}" target="_blank" rel="noopener">${q.source.split("#")[0].toLowerCase().endsWith(".pdf") ? "Đối chiếu PDF nguồn" : "Đối chiếu ảnh gốc"} ↗</a>` : ""}</article>`,
        )
        .join("") || '<p class="ex-banner">Không có câu trong nhóm này.</p>';
    if (focus && currentMode === "exam") {
      $("exResultHeading").focus({ preventScroll: true });
      $("exRun").scrollIntoView({ block: "start", behavior: "instant" });
    }
  }
  function renderHistory() {
    $("exHistory").innerHTML =
      `<h2>Lịch sử làm đề</h2><p class="ex-muted">Giữ tối đa 30 lượt gần nhất trên trình duyệt này. Xóa dữ liệu trang hoặc đổi thiết bị sẽ không mang theo lịch sử.</p><div style="margin-top:20px">${
        history
          .map((h) => {
            const e = examFor(h),
              r = grade(e, h.answers);
            return `<article class="ex-history-row"><div><strong>${esc(e.title)}</strong><span class="ex-muted">${new Date(h.submittedAt).toLocaleString("vi-VN")} · ${r.correct}/45 đúng · ${r.wrong} sai · ${r.skipped} trống</span></div><div class="ex-actions"><span class="ex-tag">${r.score}/10</span><button data-ex-history="${esc(h.id)}">Xem lại</button></div></article>`;
          })
          .join("") ||
        '<p class="ex-banner">Chưa có bài đã nộp. Chọn một đề để bắt đầu.</p>'
      }</div>`;
  }
  function blankQuestion() {
    return {
      prompt: "",
      options: ["", "", "", ""],
      answer: -1,
      category: "grammar",
      lesson: 4,
      topic: 0,
      unit: "",
      explanation: "",
    };
  }
  function newDraft() {
    return {
      title: "",
      description: "",
      minutes: 45,
      questions: Array.from({ length: 45 }, blankQuestion),
    };
  }
  function restoreDraft(value) {
    if (
      !value ||
      !Array.isArray(value.questions) ||
      value.questions.length !== 45
    )
      return null;
    const str = (v, n) => (typeof v === "string" ? v.slice(0, n) : "");
    return {
      title: str(value.title, 140),
      description: str(value.description, 1200),
      minutes:
        Number.isInteger(value.minutes) &&
        value.minutes >= 1 &&
        value.minutes <= 180
          ? value.minutes
          : 45,
      questions: value.questions.map((item) => {
        const q = item && typeof item === "object" ? item : {},
          result = {
            ...blankQuestion(),
            prompt: str(q.prompt, 2500),
            options: Array.from({ length: 4 }, (_, i) =>
              str(q.options?.[i], 1000),
            ),
            answer:
              Number.isInteger(q.answer) && q.answer >= 0 && q.answer < 4
                ? q.answer
                : -1,
            category: Object.hasOwn(categories, q.category)
              ? q.category
              : "grammar",
            lesson:
              Number.isInteger(q.lesson) && q.lesson >= 1 && q.lesson <= 15
                ? q.lesson
                : 4,
            topic: [0, 1, 2].includes(q.topic) ? q.topic : 0,
            explanation: str(q.explanation, 2000),
          };
        if (
          typeof q.image === "string" &&
          q.image.length <= 2000000 &&
          /^data:image\/(?:png|jpeg|webp);base64,[a-zA-Z0-9+/=]+$/.test(q.image)
        )
          result.image = q.image;
        if (q.solution)
          try {
            result.solution = ExamCore.validateSolution(q.solution, "Bản nháp");
          } catch {
            /* Keep the editable question without malformed optional notes. */
          }
        return result;
      }),
    };
  }
  function ready(q) {
    return (
      q.prompt.trim() &&
      q.options.every((o) => o.trim()) &&
      new Set(q.options.map((o) => o.normalize("NFKC").replace(/\s/g, "")))
        .size === 4 &&
      Number.isInteger(q.answer) &&
      q.answer >= 0 &&
      q.answer < 4
    );
  }
  function collectEditor() {
    if (!draft || !$("exEditPrompt")) return;
    const q = draft.questions[editorIndex],
      before = JSON.stringify([
        q.prompt,
        q.options,
        q.answer,
        q.category,
        q.lesson,
        q.topic,
        q.explanation,
      ]);
    q.prompt = $("exEditPrompt").value;
    q.options = letters.map((_, i) => $("exEditOption" + i).value);
    q.answer = Number($("exEditAnswer").value);
    q.category = $("exEditCategory").value;
    q.lesson = Number($("exEditLesson").value);
    q.topic = Number($("exEditTopic").value);
    q.explanation = $("exEditWhy").value;
    if (
      q.solution &&
      before !==
        JSON.stringify([
          q.prompt,
          q.options,
          q.answer,
          q.category,
          q.lesson,
          q.topic,
          q.explanation,
        ])
    )
      delete q.solution;
    draft.title = $("exEditTitle").value;
    draft.description = $("exEditDescription").value;
    draft.minutes = Number($("exEditMinutes").value);
  }
  function renderEditor() {
    draft ??= newDraft();
    const q = draft.questions[editorIndex];
    $("exBuilder").innerHTML =
      `<section class="ex-import"><h2>Thêm đề của bạn</h2><p class="ex-muted">Nhập file JSON đã có nội dung và đáp án, hoặc dùng trình nhập bên dưới. File và ảnh được xử lý trên trình duyệt; đề mới chỉ lưu ở thiết bị này.</p><div class="ex-actions"><button data-ex-template>Tải đề mẫu JSON</button><label>Nhập file đề JSON<input id="exImportFile" type="file" accept="application/json,.json" ${!storageReady ? "disabled" : ""}></label></div><details><summary>Cách thêm đề từ ảnh</summary><p class="ex-muted">Tải các ảnh PNG/JPEG/WebP ở phần soạn đề, rồi nhập hoặc dán câu hỏi, 4 lựa chọn và đáp án A–D tương ứng. Ảnh hiện kèm câu hỏi khi làm bài. Ứng dụng không tự đọc chữ hay tự đoán đáp án từ ảnh; có thể chỉ dùng ảnh và đặt đề bài “Chọn đáp án trong ảnh”. Mỗi đề cần đủ 45 câu đã có đáp án.</p></details></section>
      <section class="ex-editor"><div class="ex-question-top"><h2>Soạn đề 45 câu</h2><button data-ex-draft-save ${!storageReady ? "disabled" : ""}>Lưu bản nháp</button></div><div class="ex-editor-meta"><label>Tên đề<input id="exEditTitle" maxlength="140" placeholder="Ví dụ: Ôn bài 4–5 · Đề của tôi" value="${esc(draft.title)}"></label><label>Mô tả<textarea id="exEditDescription" rows="2" maxlength="1200">${esc(draft.description)}</textarea></label><label>Thời gian gợi ý (phút)<input id="exEditMinutes" type="number" min="1" max="180" value="${draft.minutes}"></label></div>
      <label>Thêm nhiều ảnh theo thứ tự (tối đa 45 ảnh, mỗi ảnh ≤ 5 MB)<input id="exImportImages" type="file" accept="image/png,image/jpeg,image/webp" multiple></label><p class="ex-muted">Ảnh được gán từ câu đang mở; tên file được sắp xếp theo số. Mỗi ảnh tương ứng một câu; ảnh không cho biết số câu gốc, hãy kiểm tra lại trước khi lưu.</p><div id="exEditorMap" class="ex-editor-map" aria-label="Các câu trong bản nháp"></div><p id="exEditorReady" class="ex-muted"></p><h3>Câu ${editorIndex + 1} / 45</h3><div id="exEditImage">${q.image ? `${picture(q.image, `ảnh bản nháp câu ${editorIndex + 1}`)}<button data-ex-remove-image>Xóa ảnh câu này</button>` : ""}</div><label>Đề bài<textarea id="exEditPrompt" rows="3" maxlength="2500" placeholder="Nhập câu hỏi hoặc hướng dẫn đọc ảnh">${esc(q.prompt)}</textarea></label><div class="ex-editor-options">${letters.map((l, i) => `<label>Lựa chọn ${l}<input id="exEditOption${i}" maxlength="1000" value="${esc(q.options[i])}"></label>`).join("")}</div><div class="ex-editor-tags"><label>Đáp án đúng<select id="exEditAnswer"><option value="-1">Chưa chọn</option>${letters.map((l, i) => `<option value="${i}" ${q.answer === i ? "selected" : ""}>${l}</option>`).join("")}</select></label><label>Bài<select id="exEditLesson">${Array.from({ length: 15 }, (_, i) => `<option value="${i + 1}" ${q.lesson === i + 1 ? "selected" : ""}>Bài ${i + 1}</option>`).join("")}</select></label><label>Topic<select id="exEditTopic">${[0, 1, 2].map((i) => `<option value="${i}" ${q.topic === i ? "selected" : ""}>Topic ${i + 1}</option>`).join("")}</select></label><label>Dạng câu<select id="exEditCategory">${Object.entries(
        categories,
      )
        .map(
          ([c, name]) =>
            `<option value="${c}" ${q.category === c ? "selected" : ""}>${name}</option>`,
        )
        .join(
          "",
        )}</select></label></div><label>Giải thích (hiện sau khi nộp)<textarea id="exEditWhy" rows="3" maxlength="2000">${esc(q.explanation)}</textarea></label><p id="exEditorError" role="alert"></p><div class="ex-question-nav"><button data-ex-editor-prev ${!editorIndex ? "disabled" : ""}>← Câu trước</button><button data-ex-editor-next ${editorIndex === 44 ? "disabled" : ""}>Câu tiếp →</button></div><div class="ex-actions" style="margin-top:22px"><button class="ex-primary" data-ex-editor-preview ${!storageReady ? "disabled" : ""}>Kiểm tra và xem trước đề</button><button data-ex-editor-export>Xuất bản nháp JSON</button><button data-ex-editor-reset>Bản nháp mới</button></div><p class="ex-muted">Lưu bản nháp trước khi đóng trang. Xuất JSON để giữ bản sao riêng; file bản nháp chưa đủ 45 câu hoàn chỉnh sẽ cần sửa trước khi nhập làm đề.</p></section>`;
    renderEditorMap();
  }
  function renderEditorMap() {
    if (!$("exEditorMap")) return;
    $("exEditorMap").innerHTML = draft.questions
      .map(
        (q, i) =>
          `<button data-ex-edit-jump="${i}" class="${ready(q) ? "is-ready" : ""}" aria-label="Soạn câu ${i + 1}${ready(q) ? ", đã đủ dữ liệu" : ""}" aria-current="${editorIndex === i}">${i + 1}</button>`,
      )
      .join("");
    $("exEditorReady").textContent =
      `${draft.questions.filter(ready).length}/45 câu đã nhập đủ đề bài, 4 lựa chọn và đáp án.`;
  }
  function preview(document) {
    pending = validate(document);
    show("preview");
    $("exPreview").innerHTML =
      `<section class="ex-editor"><span class="ex-tag">XEM TRƯỚC · CHƯA LƯU</span><h2 style="margin-top:16px">${esc(pending.title)}</h2><p class="ex-muted">45 câu hợp lệ · Bài ${pending.lessons.join(", ")} · ${pending.minutes} phút gợi ý. Kiểm tra đáp án trước khi thêm vào danh sách.</p><div class="ex-actions"><button class="ex-primary" data-ex-import-confirm>Thêm đề vào danh sách</button><button data-ex-import-cancel>Quay lại chỉnh sửa</button></div><div class="ex-preview-list">${pending.questions.map((q, i) => `<article><strong>Câu ${i + 1} · ${esc(categories[q.category])} · Bài ${q.lesson}</strong><p>${esc(q.prompt)}</p>${q.image ? picture(q.image, `ảnh xem trước câu ${i + 1}`, true) : ""}<p>${q.options.map((o, j) => `${letters[j]}. ${esc(o)}${j === q.answer ? " ✓" : ""}`).join("<br>")}</p><p class="ex-muted">${esc(q.explanation)}</p></article>`).join("")}</div></section>`;
  }
  async function acceptImport() {
    if (!pending || busy) return;
    busy = true;
    $("exPreview").querySelector("[data-ex-import-confirm]").disabled = true;
    try {
      const e = { ...pending, id: "import-" + uid(), kind: "imported" };
      await store.put(e);
      exams.push(e);
      pending = null;
      show("library");
      renderLibrary();
      notice(
        "Đã thêm đề vào trình duyệt này. Dùng “Xuất đề” để sao lưu hoặc gửi sang thiết bị khác.",
      );
    } catch (error) {
      notice(error.message);
      if ($("exPreview").querySelector("[data-ex-import-confirm]"))
        $("exPreview").querySelector("[data-ex-import-confirm]").disabled =
          false;
    } finally {
      busy = false;
    }
  }
  function imageData(file) {
    return new Promise((resolve, reject) => {
      if (
        !["image/png", "image/jpeg", "image/webp"].includes(file.type) ||
        file.size > 5 * 1024 * 1024
      ) {
        reject(Error(`${file.name}: chỉ nhận PNG/JPEG/WebP, tối đa 5 MB.`));
        return;
      }
      const url = URL.createObjectURL(file),
        im = new Image();
      im.onload = () => {
        try {
          const scale = Math.min(
              1,
              1600 / im.naturalWidth,
              1600 / im.naturalHeight,
            ),
            canvas = document.createElement("canvas");
          canvas.width = Math.max(1, Math.round(im.naturalWidth * scale));
          canvas.height = Math.max(1, Math.round(im.naturalHeight * scale));
          const ctx = canvas.getContext("2d");
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(im, 0, 0, canvas.width, canvas.height);
          resolve(canvas.toDataURL("image/jpeg", 0.85));
        } catch {
          reject(Error(`Không đọc được ảnh ${file.name}.`));
        } finally {
          URL.revokeObjectURL(url);
        }
      };
      im.onerror = () => {
        URL.revokeObjectURL(url);
        reject(Error(`${file.name} không phải ảnh đọc được.`));
      };
      im.src = url;
    });
  }
  root.addEventListener("input", (event) => {
    if (event.target.closest("#exBuilder")) {
      collectEditor();
      renderEditorMap();
    }
  });
  root.addEventListener("change", async (event) => {
    const target = event.target;
    if (target.id === "exMinutes") libraryMinutes = target.value;
    if (target.id === "exScope") {
      libraryScope = target.value;
      renderLibrary();
      $("exScope").focus();
    }
    if (target.id === "exReviewFilter") {
      reviewFilter = target.value;
      renderResult();
      $("exReviewFilter").focus();
    }
    if (target.id === "exImportFile") {
      try {
        const file = target.files[0];
        if (!file) return;
        if (file.size > 30 * 1024 * 1024)
          throw Error("File đề lớn hơn 30 MB. Hãy giảm dung lượng ảnh.");
        preview(JSON.parse(await file.text()));
        notice("");
      } catch (error) {
        notice(
          error instanceof SyntaxError
            ? "File JSON chưa đúng cú pháp. Hãy dùng file đề mẫu."
            : error.message,
        );
      } finally {
        target.value = "";
      }
    }
    if (target.id === "exImportImages") {
      collectEditor();
      const files = [...target.files].sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { numeric: true }),
      );
      if (files.length > 45 - editorIndex) {
        notice(
          `Còn ${45 - editorIndex} vị trí từ câu đang mở. Hãy chọn ít ảnh hơn.`,
        );
        target.value = "";
        return;
      }
      if (!files.length) return;
      const currentDraft = draft,
        startIndex = editorIndex;
      root.inert = true;
      try {
        const images = [];
        for (const file of files) images.push(await imageData(file));
        images.forEach((image, i) => {
          currentDraft.questions[startIndex + i].image = image;
        });
        renderEditor();
        notice(
          `Đã gắn ${images.length} ảnh từ câu ${startIndex + 1}. Nhập đề bài và đáp án cho từng câu rồi lưu bản nháp.`,
        );
      } catch (error) {
        notice(error.message);
      } finally {
        root.inert = false;
      }
    }
  });
  root.addEventListener("click", async (event) => {
    const b = event.target.closest("button");
    if (!b || b.disabled) return;
    if (root.dataset.ready !== "true" && !b.closest("dialog")) {
      notice("Đang mở bộ nhớ đề, vui lòng thử lại sau một chút.");
      return;
    }
    if (b.hasAttribute("data-ex-library-retry")) {
      await refreshLibrary(true);
      return;
    }
    if (b.hasAttribute("data-ex-picture")) {
      $("exZoomImage").src = b.querySelector("img").src;
      $("exZoomImage").style.width = "100%";
      $("exImageViewport").scrollTo(0, 0);
      root
        .querySelector("[data-ex-zoom]")
        .setAttribute("aria-pressed", "false");
      $("exImageViewer").showModal();
      root.querySelector("[data-ex-image-close]").focus();
      return;
    }
    if (b.hasAttribute("data-ex-zoom")) {
      const zoom = b.getAttribute("aria-pressed") !== "true";
      b.setAttribute("aria-pressed", String(zoom));
      $("exZoomImage").style.width = zoom
        ? `${$("exZoomImage").naturalWidth}px`
        : "100%";
      return;
    }
    if (b.hasAttribute("data-ex-image-close")) {
      $("exImageViewer").close();
      return;
    }
    if (b.hasAttribute("data-ex-tab")) {
      collectEditor();
      const name = b.dataset.exTab;
      show(name);
      notice("");
      if (name === "library") renderLibrary();
      if (name === "builder") renderEditor();
      if (name === "history") renderHistory();
      return;
    }
    if (b.hasAttribute("data-ex-start")) {
      start(b.dataset.exStart, Number($("exMinutes").value));
      return;
    }
    if (b.hasAttribute("data-ex-resume")) {
      if (attempt && !attempt.submittedAt) await attemptStore.claim(attempt.id);
      viewing = null;
      show("run");
      renderRun(true);
      ownership();
      tick();
      return;
    }
    if (b.hasAttribute("data-ex-takeover")) {
      const id = attempt?.id;
      confirmAction(
        "Tiếp tục bài ở tab này?",
        "Tab đang chỉnh sửa sẽ chuyển sang chỉ xem. Mọi thao tác ghi đều kiểm tra quyền trong bộ nhớ trước khi lưu.",
        async () => {
          try {
            const result = await attemptStore.claim(id, true);
            if (result.changed) {
              viewing = null;
              show("run");
              renderRun(true);
              tick();
            } else notice("Lượt làm bài đã thay đổi. Hãy mở bài mới nhất.");
          } catch (error) {
            notice(error.message);
          }
        },
        "Chuyển quyền sang tab này",
      );
      return;
    }
    if (b.hasAttribute("data-ex-back")) {
      viewing = null;
      show("library");
      renderLibrary();
      return;
    }
    if (b.hasAttribute("data-ex-export")) {
      const e = byId(b.dataset.exExport);
      download(documentOf(e), `${e.id}.json`);
      return;
    }
    if (b.hasAttribute("data-ex-delete")) {
      const id = b.dataset.exDelete,
        e = byId(id);
      confirmAction(
        "Xóa đề khỏi thiết bị?",
        `Đề “${e.title}”, bài đang làm và lịch sử thuộc đề này sẽ bị xóa khỏi trình duyệt này. Hãy xuất đề trước nếu cần giữ bản sao.`,
        async () => {
          try {
            const result = await attemptStore.removeExam(id);
            if (result.conflict) {
              notice("Đề đang làm ở tab khác. Chuyển quyền trước khi xóa.");
              return;
            }
            await store.remove(id);
            exams = exams.filter((e) => e.id !== id);
            renderLibrary();
            notice("Đã xóa đề khỏi trình duyệt này.");
          } catch (error) {
            notice(error.message);
          }
        },
        "Xóa đề",
      );
      return;
    }
    if (b.hasAttribute("data-ex-answer")) {
      setAnswer(Number(b.dataset.exAnswer));
      return;
    }
    if (b.hasAttribute("data-ex-clear")) {
      setAnswer(null);
      return;
    }
    if (b.hasAttribute("data-ex-prev")) {
      move(attempt.index - 1);
      return;
    }
    if (b.hasAttribute("data-ex-next")) {
      move(attempt.index + 1);
      return;
    }
    if (b.hasAttribute("data-ex-jump")) {
      move(Number(b.dataset.exJump));
      return;
    }
    if (b.hasAttribute("data-ex-flag")) {
      if (
        attempt &&
        !attempt.submittedAt &&
        (await mutate({
          type: "flag",
          index: attempt.index,
          value: !attempt.flags[attempt.index],
        }))
      ) {
        renderRun();
        root.querySelector("[data-ex-flag]").focus();
      }
      return;
    }
    if (b.hasAttribute("data-ex-first-empty")) {
      const i = attempt.answers.findIndex((a) => !Number.isInteger(a));
      if (i >= 0) move(i);
      else notice("Bạn đã chọn đủ 45 câu. Có thể xem lại hoặc nộp bài.");
      return;
    }
    if (b.hasAttribute("data-ex-submit")) {
      requestSubmit();
      return;
    }
    if (b.hasAttribute("data-ex-restart")) {
      start(active().examId, active().minutes);
      return;
    }
    if (b.hasAttribute("data-ex-history")) {
      viewing = copy(history.find((h) => h.id === b.dataset.exHistory));
      reviewFilter = "all";
      show("run");
      renderResult();
      return;
    }
    if (b.hasAttribute("data-ex-result-export")) {
      const s = active(),
        e = examFor(s),
        r = grade(e, s.answers);
      download(
        {
          format: "dekiru-exam-result",
          version: 1,
          title: e.title,
          order: [...s.order],
          startedAt: new Date(s.startedAt).toISOString(),
          submittedAt: new Date(s.submittedAt).toISOString(),
          ...r,
          questions: e.questions.map((q, i) => ({
            number: i + 1,
            sourceNumber: s.order[i] + 1,
            prompt: q.prompt,
            options: q.options,
            chosen: s.answers[i],
            correct: q.answer,
            status: r.states[i],
            explanation: q.explanation,
            ...(q.solution ? { solution: q.solution } : {}),
          })),
        },
        "dekiru-ket-qua.json",
      );
      return;
    }
    if (b.hasAttribute("data-ex-template")) {
      download(
        documentOf(DEKIRU_EXAMS.find((e) => e.kind === "authored")),
        "dekiru-de-mau-45-cau.json",
      );
      return;
    }
    if (
      b.hasAttribute("data-ex-edit-jump") ||
      b.hasAttribute("data-ex-editor-prev") ||
      b.hasAttribute("data-ex-editor-next")
    ) {
      collectEditor();
      editorIndex = b.hasAttribute("data-ex-edit-jump")
        ? Number(b.dataset.exEditJump)
        : editorIndex + (b.hasAttribute("data-ex-editor-next") ? 1 : -1);
      renderEditor();
      return;
    }
    if (b.hasAttribute("data-ex-remove-image")) {
      collectEditor();
      delete draft.questions[editorIndex].image;
      renderEditor();
      return;
    }
    if (b.hasAttribute("data-ex-draft-save")) {
      collectEditor();
      try {
        await store.put({ id: "_draft", kind: "draft", document: copy(draft) });
        notice("Đã lưu bản nháp trên trình duyệt này.");
      } catch (error) {
        notice(error.message);
      }
      return;
    }
    if (b.hasAttribute("data-ex-editor-export")) {
      collectEditor();
      download(
        { format: "dekiru-exam", version: 1, exam: draft },
        "dekiru-ban-nhap.json",
      );
      return;
    }
    if (b.hasAttribute("data-ex-editor-preview")) {
      collectEditor();
      try {
        preview({ format: "dekiru-exam", version: 1, exam: draft });
        notice("");
      } catch (error) {
        $("exEditorError").textContent = error.message;
        $("exEditorError").scrollIntoView({ block: "center" });
      }
      return;
    }
    if (b.hasAttribute("data-ex-editor-reset")) {
      confirmAction(
        "Tạo bản nháp mới?",
        "Nội dung đang nhập sẽ được thay bằng 45 câu trống. Hãy xuất bản nháp nếu muốn giữ lại.",
        async () => {
          draft = newDraft();
          editorIndex = 0;
          renderEditor();
          try {
            await store.remove("_draft");
          } catch (error) {
            notice(error.message);
          }
        },
        "Tạo bản nháp mới",
      );
      return;
    }
    if (b.hasAttribute("data-ex-import-confirm")) {
      await acceptImport();
      return;
    }
    if (b.hasAttribute("data-ex-import-cancel")) {
      if (pending) {
        draft = copy(pending);
        editorIndex = 0;
      }
      pending = null;
      show("builder");
      renderEditor();
      return;
    }
  });
  document.addEventListener("keydown", (event) => {
    if (
      currentMode !== "exam" ||
      tab !== "run" ||
      !attempt ||
      attempt.submittedAt ||
      viewing ||
      $("exConfirm").open ||
      $("exImageViewer").open ||
      event.repeat ||
      event.ctrlKey ||
      event.altKey ||
      event.metaKey ||
      event.shiftKey ||
      event.target.closest('input,textarea,select,[contenteditable="true"]')
    )
      return;
    if (/^[1-4]$/.test(event.key)) {
      event.preventDefault();
      setAnswer(Number(event.key) - 1);
    }
  });
  async function init() {
    renderLibrary();
    $("exSaveStatus").textContent = "Đang mở bộ nhớ đề…";
    try {
      const documents = await store.list();
      storageReady = true;
      loadImported(documents);
      for (const e of documents) {
        try {
          if (e.id === "_draft" && e.kind === "draft") {
            draft = restoreDraft(e.document);
            continue;
          }
        } catch {
          notice("Một đề đã lưu không còn hợp lệ; đề đó đã được bỏ qua.");
        }
      }
    } catch {
      libraryReadFailed = true;
      notice(
        "Trình duyệt đang chặn bộ nhớ đề. Bạn vẫn làm được đề có sẵn; bật lưu dữ liệu trang để nhập và lưu đề mới.",
      );
    }
    const saved = get(key, null);
    attempt = sanitizeAttempt(saved);
    if (saved && !attempt && !missingImported(saved))
      notice(
        "Bài đang lưu không còn khớp với nội dung đề hoặc dữ liệu chưa hợp lệ. Hãy bắt đầu lại để chấm đúng.",
      );
    const savedHistory = get(historyKey, []),
      preservedHistory = (Array.isArray(savedHistory) ? savedHistory : [])
        .map(sanitizeStoredAttempt)
        .filter((h) => h?.submittedAt)
        .slice(0, 30);
    attemptStore = new AttemptStore(receive);
    await attemptStore.init(
      sanitizeStoredAttempt(saved),
      preservedHistory,
      sanitizeStoredAttempt,
    );
    connected = true;
    if (missingImportedIds().length) await refreshLibrary(true);
    if (attempt && !attempt.submittedAt) await attemptStore.claim(attempt.id);
    renderLibrary();
    if (tab === "builder") renderEditor();
    if (tab === "history") renderHistory();
    if (contentUpdated)
      notice(
        "Nội dung đề đã được hiệu đính. Giữ thứ tự, thời gian và đáp án ở câu còn tương thích; câu đã đổi nội dung cần trả lời lại. Kết quả cũ không còn khớp đã được bỏ khỏi lịch sử để tránh chấm lại sai.",
      );
    ownership();
    libraryStatus();
    tick();
    root.dataset.ready = "true";
  }
  init().catch((error) => {
    notice(
      `Không mở được phần luyện đề: ${error.message}. Hãy tải lại trang để thử lại.`,
    );
    root.dataset.ready = "error";
  });
})();
