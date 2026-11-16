/* 57 standardized JPD123 speaking Q&A items from sources/jpd123.docx. */
(() => {
  "use strict";
  const data = window.SPEAKING_DATA || { topics: [], questions: [], audio: {} };
  const questions = data.questions || [];
  const topics = data.topics || [];
  const topicMap = new Map(topics.map((t) => [t.id, t]));
  if (window.DEKIRU_AUDIO?.files && data.audio) {
    Object.assign(window.DEKIRU_AUDIO.files, data.audio);
  }

  const $ = (id) => document.getElementById(id);
  const esc = (text) =>
    String(text).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[c],
    );
  const normalize = (text) =>
    String(text)
      .normalize("NFKC")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .toLowerCase();

  const STORAGE_KEY = "dekiru_speaking_v1";
  const readStore = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  };
  const saved = readStore();
  const done = new Set(
    (Array.isArray(saved.done) ? saved.done : []).filter((id) =>
      questions.some((q) => q.id === id),
    ),
  );
  let active =
    questions.find((q) => q.id === saved.selected) || questions[0] || null;
  let filtered = [...questions];
  let currentView = saved.view === "list" ? "list" : "card";
  let showSamples = saved.showSamples !== false;

  const root = $("speakingMode");
  if (!root) return;

  root.innerHTML = `
    <div class="speaking-intro">
      <div>
        <span class="eyebrow">DEKIRU NIHONGO • VẤN ĐÁP JPD123</span>
        <h1>Luyện phản xạ 57 câu hỏi nói.</h1>
        <p>Bộ câu hỏi phỏng vấn chuẩn hóa từ tài liệu <code>sources/jpd123.docx</code> · Nghe câu hỏi, tự trả lời và đối chiếu gợi ý mẫu.</p>
      </div>
      <div class="reading-progress-card" aria-label="Tiến độ luyện nói">
        <span id="speakingProgressCount">0 / ${questions.length}</span>
        <progress id="speakingProgress" value="0" max="${questions.length}" aria-label="Tiến độ hoàn thành câu hỏi nói"></progress>
        <small>câu hỏi đã luyện phản xạ</small>
      </div>
    </div>

    <div class="speaking-layout">
      <aside class="speaking-sidebar" aria-label="Danh sách câu hỏi luyện nói">
        <div class="chooser-head">
          <h2>Danh sách câu hỏi</h2>
          <label for="speakingTopic">Chủ đề phỏng vấn</label>
          <select id="speakingTopic">
            <option value="all">Tất cả chủ đề (${questions.length} câu)</option>
            ${topics.map((t) => `<option value="${esc(t.id)}">${esc(t.label)}</option>`).join("")}
          </select>
          <label for="speakingLesson">Bài học trọng tâm</label>
          <select id="speakingLesson">
            <option value="all">Tất cả bài (Bài 4 – 7)</option>
            <option value="4">Bài 4 · Quê hương, mùa & món ăn</option>
            <option value="5">Bài 5 · Ngày nghỉ, quá khứ & mong muốn</option>
            <option value="6">Bài 6 · Rủ rê, so sánh & trải nghiệm</option>
            <option value="7">Bài 7 · Vị trí, công cụ & người thực hiện</option>
          </select>
          <label for="speakingStatusFilter">Trạng thái luyện</label>
          <select id="speakingStatusFilter">
            <option value="all">Tất cả trạng thái</option>
            <option value="todo">Chưa đánh dấu luyện</option>
            <option value="done">Đã luyện xong</option>
          </select>
          <label for="speakingSearch">Tìm câu hỏi</label>
          <input id="speakingSearch" type="search" placeholder="Số câu, từ tiếng Nhật hoặc nghĩa Việt...">
          <div class="chooser-count">
            <span id="speakingResultCount" role="status" aria-live="polite">${questions.length} câu phù hợp</span>
            <button type="button" class="link-btn" id="clearSpeakingFilters">Xóa lọc</button>
          </div>
        </div>
        <div id="speakingList" class="speaking-item-list" role="list"></div>
      </aside>

      <div class="speaking-main">
        <div class="speaking-toolbar">
          <div class="speaking-view-tabs" role="group" aria-label="Chế độ hiển thị luyện nói">
            <button type="button" class="speaking-tab-btn" id="speakingViewCard" aria-pressed="true">01 · Thẻ phỏng vấn</button>
            <button type="button" class="speaking-tab-btn" id="speakingViewList" aria-pressed="false">02 · Danh sách 57 câu</button>
          </div>
          <button type="button" class="speaking-action-btn" id="speakingRandomBtn">🎲 Bốc ngẫu nhiên 1 câu</button>
        </div>

        <div id="speakingEmpty" class="empty-panel" hidden>
          <h3>Không tìm thấy câu hỏi phù hợp</h3>
          <p>Thử đổi chủ đề, bài học hoặc xóa từ khóa tìm kiếm.</p>
          <button type="button" class="btn-action" id="resetSpeakingEmpty">Hiện tất cả 57 câu</button>
        </div>

        <div id="speakingCardPanel">
          <article class="speaking-card" id="speakingArticle">
            <div class="speaking-card-head">
              <div class="speaking-badges">
                <span class="speaking-num-badge" id="speakingTitle">Câu 01</span>
                <span class="badge-topic" id="speakingTopicBadge"></span>
                <span class="kind-pill" id="speakingLessonBadge"></span>
              </div>
              <a class="source-link" href="sources/jpd123.docx" download>Tải file jpd123.docx chuẩn hóa ↗</a>
            </div>

            <div class="speaking-controls" aria-label="Tùy chỉnh hiển thị câu hỏi">
              <label class="hint-chip"><input type="checkbox" id="speakingHintFurigana" checked> Furigana trên chữ Hán</label>
              <label class="hint-chip"><input type="checkbox" id="speakingHintKana" checked> Dòng cách đọc Kana</label>
              <label class="hint-chip"><input type="checkbox" id="speakingHintVi" checked> Nghĩa tiếng Việt</label>
              <label class="size-control" for="speakingRate">Tốc độ nghe
                <select id="speakingRate" aria-label="Tốc độ đọc câu hỏi">
                  <option value="0.75">Chậm</option>
                  <option value="0.88" selected>Vừa</option>
                  <option value="1"> Tự nhiên</option>
                </select>
              </label>
            </div>

            <div class="speaking-question-box">
              <h2 class="speaking-question-jp" id="speakingQuestionJp" lang="ja" tabindex="-1"></h2>
              <p class="speaking-question-kana" id="speakingQuestionKana" lang="ja"></p>
              <p class="speaking-question-vi" id="speakingQuestionVi"></p>
              <div class="speaking-question-actions">
                <button type="button" class="speaking-action-btn primary" id="listenSpeakingQuestion">🔊 Nghe câu hỏi</button>
                <button type="button" class="speaking-action-btn" id="speakingToggleSamples" aria-expanded="true">Ẩn gợi ý trả lời</button>
                <button type="button" class="speaking-action-btn" id="completeSpeaking" aria-pressed="false">✓ Đánh dấu đã luyện</button>
              </div>
            </div>

            <div class="speaking-guide-grid">
              <div class="speaking-guide-box">
                <small>Mẫu câu / Cấu trúc trọng tâm</small>
                <p id="speakingPattern"></p>
              </div>
              <div class="speaking-guide-box">
                <small>Lưu ý khi trả lời phỏng vấn</small>
                <p id="speakingTip"></p>
              </div>
            </div>

            <div class="speaking-samples-section" id="speakingSamplesSection">
              <div class="speaking-samples-head">
                <h3>Câu trả lời mẫu gợi ý (bấm loa để nghe phát âm)</h3>
              </div>
              <div class="speaking-samples-list" id="speakingSamplesList"></div>
            </div>
          </article>

          <div class="reader-navigation">
            <button type="button" class="small-btn" id="previousSpeaking">← Câu trước</button>
            <span id="speakingPosition" role="status">1 / ${questions.length}</span>
            <button type="button" class="small-btn" id="nextSpeaking">Câu tiếp →</button>
          </div>
        </div>

        <div id="speakingListPanel" class="speaking-all-list" hidden></div>

        <p id="speakingSaveStatus" class="study-footer" role="status"></p>
      </div>
    </div>
  `;

  if (saved.furigana === false) $("speakingHintFurigana").checked = false;
  if (saved.kana === false) $("speakingHintKana").checked = false;
  if (saved.vi === false) $("speakingHintVi").checked = false;
  if (saved.rate) $("speakingRate").value = String(saved.rate);

  const searchIndex = new Map(
    questions.map((q) => [
      q.id,
      normalize(
        `cau ${q.id} #${q.id} ${String(q.id).padStart(2, "0")} bai ${q.lesson} ${topicMap.get(q.topic)?.label || ""} ${q.jp} ${q.spaced} ${q.kana} ${q.vi} ${q.pattern} ${q.tip} ${q.samples.map((s) => `${s.jp} ${s.kana} ${s.vi}`).join(" ")}`,
      ),
    ]),
  );

  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          selected: active?.id || 1,
          done: [...done],
          view: currentView,
          showSamples,
          furigana: $("speakingHintFurigana").checked,
          kana: $("speakingHintKana").checked,
          vi: $("speakingHintVi").checked,
          rate: $("speakingRate").value,
        }),
      );
    } catch {
      $("speakingSaveStatus").textContent =
        "Trình duyệt chưa cho phép lưu tiến độ. Bạn vẫn có thể luyện nói bình thường.";
    }
  }

  function playText(kanaText) {
    window.StudyAudio?.play(kanaText, {
      rate: Number($("speakingRate").value) || 0.88,
    });
  }

  function updateProgress() {
    $("speakingProgressCount").textContent =
      `${done.size} / ${questions.length}`;
    $("speakingProgress").max = questions.length;
    $("speakingProgress").value = done.size;
    const isDone = Boolean(active && done.has(active.id));
    $("completeSpeaking").setAttribute("aria-pressed", String(isDone));
    $("completeSpeaking").textContent = isDone
      ? "✓ Đã luyện · Bỏ đánh dấu"
      : "✓ Đánh dấu đã luyện";
  }

  function applyHints() {
    const showFuri = $("speakingHintFurigana").checked;
    const showKana = $("speakingHintKana").checked;
    const showVi = $("speakingHintVi").checked;
    $("speakingQuestionJp").classList.toggle("hide-furigana", !showFuri);
    $("speakingQuestionKana").hidden = !showKana;
    $("speakingQuestionVi").hidden = !showVi;
    $("speakingSamplesSection").hidden = !showSamples;
    $("speakingToggleSamples").setAttribute(
      "aria-expanded",
      String(showSamples),
    );
    $("speakingToggleSamples").textContent = showSamples
      ? "Ẩn gợi ý trả lời"
      : "Hiện gợi ý trả lời";
    saveState();
  }

  function renderSidebarList() {
    $("speakingResultCount").textContent = `${filtered.length} câu phù hợp`;
    $("speakingList").innerHTML = filtered
      .map((q) => {
        const t = topicMap.get(q.topic);
        const num = String(q.id).padStart(2, "0");
        return `<button type="button" class="speaking-item" data-speaking-id="${q.id}" aria-current="${active?.id === q.id}"><small>CÂU ${num} · BÀI ${q.lesson} · ${esc(t?.label || "")}</small><strong>${esc(q.jp)}</strong><span>${esc(q.vi)}</span>${done.has(q.id) ? '<span class="exercise-check" aria-label="Đã luyện">✓</span>' : ""}</button>`;
      })
      .join("");
  }

  function renderCard() {
    const hasActive = Boolean(active);
    $("speakingEmpty").hidden = hasActive;
    $("speakingCardPanel").hidden = !hasActive || currentView !== "card";
    $("speakingListPanel").hidden = !hasActive || currentView !== "list";
    $("speakingViewCard").setAttribute(
      "aria-pressed",
      String(currentView === "card"),
    );
    $("speakingViewList").setAttribute(
      "aria-pressed",
      String(currentView === "list"),
    );

    if (!active) return;

    const num = String(active.id).padStart(2, "0");
    const t = topicMap.get(active.topic);
    $("speakingTitle").textContent = `Câu ${num}`;
    $("speakingTopicBadge").textContent = t ? `${t.label}` : "";
    $("speakingLessonBadge").textContent = `Bài ${active.lesson}`;
    $("speakingQuestionJp").innerHTML = active.ruby;
    $("speakingQuestionKana").textContent = active.kana;
    $("speakingQuestionVi").textContent = active.vi;
    $("speakingPattern").textContent = active.pattern;
    $("speakingTip").textContent = active.tip;

    $("speakingSamplesList").innerHTML = active.samples
      .map(
        (s, idx) => `
        <div class="speaking-sample-item">
          <div class="speaking-sample-text">
            <p class="speaking-sample-jp" lang="ja">${esc(s.jp)}</p>
            <p class="speaking-sample-kana" lang="ja">${esc(s.kana)}</p>
            <p class="speaking-sample-vi">${esc(s.vi)}</p>
          </div>
          <button type="button" class="speaking-sample-audio" data-sample-index="${idx}" aria-label="Nghe câu trả lời mẫu ${idx + 1}">🔊 Nghe mẫu ${idx + 1}</button>
        </div>
      `,
      )
      .join("");

    const index = filtered.findIndex((q) => q.id === active.id);
    $("previousSpeaking").disabled = index <= 0;
    $("nextSpeaking").disabled = index < 0 || index === filtered.length - 1;
    $("speakingPosition").textContent = `${index + 1} / ${filtered.length}`;

    if (currentView === "list") {
      renderAllList();
    }
    updateProgress();
    applyHints();
  }

  function renderAllList() {
    const showFuri = $("speakingHintFurigana").checked;
    $("speakingListPanel").innerHTML = filtered
      .map((q) => {
        const num = String(q.id).padStart(2, "0");
        const t = topicMap.get(q.topic);
        const firstSample = q.samples[0];
        return `
          <article class="speaking-list-card">
            <div class="speaking-list-top">
              <div class="speaking-badges">
                <span class="speaking-num-badge">Câu ${num}</span>
                <span class="badge-topic">${esc(t?.label || "")}</span>
                <span class="kind-pill">Bài ${q.lesson}</span>
              </div>
              ${done.has(q.id) ? '<span class="badge-topic">✓ Đã luyện</span>' : ""}
            </div>
            <h3 class="speaking-list-jp${showFuri ? "" : " hide-furigana"}" lang="ja">${q.ruby}</h3>
            <p class="speaking-list-vi">${esc(q.vi)}</p>
            ${firstSample ? `<p class="speaking-list-sample"><strong>Gợi ý:</strong> <span lang="ja">${esc(firstSample.jp)}</span> — ${esc(firstSample.vi)}</p>` : ""}
            <div class="speaking-list-actions">
              <button type="button" class="speaking-sample-audio" data-list-play="${q.id}">🔊 Nghe câu hỏi</button>
              <button type="button" class="speaking-action-btn" data-list-open="${q.id}">Luyện chi tiết câu ${num} →</button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function filterSpeaking() {
    const topic = $("speakingTopic").value;
    const lesson = $("speakingLesson").value;
    const status = $("speakingStatusFilter").value;
    const query = normalize($("speakingSearch").value.trim());

    filtered = questions.filter((q) => {
      if (topic !== "all" && q.topic !== topic) return false;
      if (lesson !== "all" && q.lesson !== Number(lesson)) return false;
      if (status === "done" && !done.has(q.id)) return false;
      if (status === "todo" && done.has(q.id)) return false;
      if (query && !searchIndex.get(q.id).includes(query)) return false;
      return true;
    });

    if (!filtered.some((q) => q.id === active?.id)) {
      active = filtered[0] || null;
    }
    renderCard();
    renderSidebarList();
  }

  function selectQuestion(id, switchToCard = false) {
    const found =
      filtered.find((q) => q.id === id) || questions.find((q) => q.id === id);
    if (!found) return;
    active = found;
    if (switchToCard) currentView = "card";
    renderCard();
    renderSidebarList();
    const pickerFold = document.querySelector(
      '[data-mobile-key="speaking-picker"]',
    );
    if (pickerFold && window.innerWidth <= 1180) pickerFold.open = false;
  }

  $("speakingTopic").addEventListener("change", filterSpeaking);
  $("speakingLesson").addEventListener("change", filterSpeaking);
  $("speakingStatusFilter").addEventListener("change", filterSpeaking);
  $("speakingSearch").addEventListener("input", filterSpeaking);

  const resetAllFilters = () => {
    $("speakingTopic").value = "all";
    $("speakingLesson").value = "all";
    $("speakingStatusFilter").value = "all";
    $("speakingSearch").value = "";
    filterSpeaking();
  };
  $("clearSpeakingFilters").addEventListener("click", resetAllFilters);
  $("resetSpeakingEmpty").addEventListener("click", resetAllFilters);

  $("speakingList").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-speaking-id]");
    if (btn) selectQuestion(Number(btn.dataset.speakingId), true);
  });

  $("speakingViewCard").addEventListener("click", () => {
    currentView = "card";
    renderCard();
  });
  $("speakingViewList").addEventListener("click", () => {
    currentView = "list";
    renderCard();
  });

  $("speakingRandomBtn").addEventListener("click", () => {
    const pool = filtered.length ? filtered : questions;
    if (!pool.length) return;
    const candidates =
      pool.length > 1 ? pool.filter((q) => q.id !== active?.id) : pool;
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    selectQuestion(pick.id, true);
  });

  $("listenSpeakingQuestion").addEventListener("click", () => {
    if (active) playText(active.kana);
  });

  $("speakingToggleSamples").addEventListener("click", () => {
    showSamples = !showSamples;
    applyHints();
  });

  $("completeSpeaking").addEventListener("click", () => {
    if (!active) return;
    if (done.has(active.id)) done.delete(active.id);
    else done.add(active.id);
    updateProgress();
    renderSidebarList();
    if (currentView === "list") renderAllList();
    saveState();
  });

  $("speakingSamplesList").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-sample-index]");
    if (!btn || !active) return;
    const sample = active.samples[Number(btn.dataset.sampleIndex)];
    if (sample) playText(sample.kana);
  });

  $("speakingListPanel").addEventListener("click", (e) => {
    const playBtn = e.target.closest("[data-list-play]");
    if (playBtn) {
      const q = questions.find(
        (item) => item.id === Number(playBtn.dataset.listPlay),
      );
      if (q) playText(q.kana);
      return;
    }
    const openBtn = e.target.closest("[data-list-open]");
    if (openBtn) {
      selectQuestion(Number(openBtn.dataset.listOpen), true);
    }
  });

  [
    "speakingHintFurigana",
    "speakingHintKana",
    "speakingHintVi",
    "speakingRate",
  ].forEach((id) =>
    $(id).addEventListener("change", () => {
      applyHints();
      if (currentView === "list") renderAllList();
    }),
  );

  $("previousSpeaking").addEventListener("click", () => {
    const idx = filtered.findIndex((q) => q.id === active?.id);
    if (idx > 0) selectQuestion(filtered[idx - 1].id);
  });

  $("nextSpeaking").addEventListener("click", () => {
    const idx = filtered.findIndex((q) => q.id === active?.id);
    if (idx >= 0 && idx < filtered.length - 1)
      selectQuestion(filtered[idx + 1].id);
  });

  renderSidebarList();
  renderCard();
})();
