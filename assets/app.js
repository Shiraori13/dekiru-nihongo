function safeGet(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}
function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    const status = document.getElementById("featureStatus");
    if (status) {
      status.hidden = false;
      status.textContent =
        "Không lưu được tùy chọn trên trình duyệt. Thay đổi chỉ được giữ trong phiên này.";
    }
  }
}
function readFavorites() {
  try {
    const value = JSON.parse(safeGet("dekiru_favs_v2", "[]"));
    return Array.isArray(value)
      ? value.filter((x) => typeof x === "string")
      : [];
  } catch {
    return [];
  }
}
function escapeHTML(value) {
  const span = document.createElement("span");
  span.textContent = String(value);
  return span.innerHTML.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// State Variables
let currentFiltered = [...RAW_VOCAB];
let currentIndex = 0;
let isFlipped = false;
let currentMode = "flashcard";
let favorites = readFavorites();

// Quiz State
let quizIndex = 0;
let quizQuestions = [];
let quizScore = 0;
let quizTimer = null;
let quizState = "setup";
let quizGrading = "submit";
let quizAnswers = [];
let quizOptionSets = [];
let quizScope = "";
let quizRun = 0;

// Bản dịch tiếng Việt của các chủ đề, dùng để hỗ trợ lựa chọn bộ từ vựng.
const TOPIC_DETAILS = {
  "私の名前・国・仕事": "Tên, quốc tịch và công việc của tôi",
  私の誕生日: "Sinh nhật của tôi",
  私の趣味: "Sở thích của tôi",
  どこですか: "Ở đâu?",
  いくらですか: "Bao nhiêu tiền?",
  レストラン: "Nhà hàng",
  何時までですか: "Đến mấy giờ?",
  私のスケジュール: "Lịch trình của tôi",
  "どんな毎日?": "Mỗi ngày như thế nào?",
  "どこ?": "Ở đâu?",
  "どんなところ?": "Là nơi như thế nào?",
  "季節・料理": "Mùa và ẩm thực",
  週末: "Cuối tuần",
  休みの後で: "Sau kỳ nghỉ",
  今度の休みに: "Kỳ nghỉ tới",
  一緒に行きませんか: "Đi cùng nhau nhé?",
  どちらがいいですか: "Cái nào tốt hơn?",
  約束: "Lời hẹn",
  道がわかりません: "Tôi không biết đường",
  パーティーの準備: "Chuẩn bị tiệc",
  みんなで楽しいパーティー: "Bữa tiệc vui vẻ cùng mọi người",
  "家族・友達": "Gia đình và bạn bè",
  こんな人: "Người như thế này",
  プレゼント: "Quà tặng",
  いろいろな趣味: "Nhiều sở thích khác nhau",
  "できること・できないこと": "Những việc có thể và không thể làm",
  楽しい週末: "Cuối tuần vui vẻ",
  私の集合: "Điểm hẹn của tôi",
  いろいろな注意: "Những lưu ý khác nhau",
  動物園で: "Ở sở thú",
  今の生活: "Cuộc sống hiện tại",
  "今の私・前の私": "Tôi hiện tại và trước đây",
  友達と: "Cùng bạn bè",
  体の調子: "Tình trạng sức khỏe",
  アドバイス: "Lời khuyên",
  病院で: "Ở bệnh viện",
  私の経験から: "Từ kinh nghiệm của tôi",
  おすすめします: "Đề xuất và khuyên dùng",
  教えてください: "Hãy cho tôi biết",
  "初めて見た!初めて聞いた!": "Lần đầu thấy! Lần đầu nghe!",
  "ルール・マナー": "Quy tắc và phép lịch sự",
  私の意見: "Ý kiến của tôi",
  "これ、知ってる?": "Bạn có biết cái này không?",
  雑誌を見て町へ: "Xem tạp chí rồi đi vào thị trấn",
  町を歩いて: "Đi dạo trong thị trấn",
};

// Elements
const lessonSelect = document.getElementById("lessonSelect");
const topicSelect = document.getElementById("topicSelect");
const searchBox = document.getElementById("searchBox");
const VOCAB_TYPES = window.VOCAB_TYPE_LIST || [];
const VOCAB_TYPE_MAP = new Map(VOCAB_TYPES);
const VOCAB_ITEM_TYPE = new Map(
  RAW_VOCAB.map((item, idx) => [
    item,
    (window.VOCAB_TYPE_CODES || "")[idx] || "e",
  ]),
);
const selectedTypes = new Set();
let favOnly = false;

function getVocabKey(item) {
  return `${item.l}::${item.k}::${item.h}`;
}

function isFavoriteItem(item) {
  if (!item) return false;
  return favorites.includes(getVocabKey(item)) || favorites.includes(item.k);
}

function getFavoriteCount() {
  return RAW_VOCAB.filter(isFavoriteItem).length;
}

window.getFavoriteVocabCount = getFavoriteCount;

function updateFavFilterButton() {
  const btn = document.getElementById("favOnlyToggle");
  const label = document.getElementById("favOnlyLabel");
  if (!btn || !label) return;
  const count = getFavoriteCount();
  btn.classList.toggle("is-active", favOnly);
  btn.setAttribute("aria-pressed", String(favOnly));
  label.textContent = `Yêu thích (${count})`;
}

function toggleFavOnlyFilter(force) {
  favOnly = typeof force === "boolean" ? force : !favOnly;
  onFilterChange();
}

window.openFavoriteVocab = () => {
  favOnly = true;
  lessonSelect.value = "all";
  updateTopicList();
  topicSelect.value = "all";
  searchBox.value = "";
  selectedTypes.clear();
  switchMode("flashcard");
  onFilterChange();
};

function getVocabTypeCode(item) {
  return VOCAB_ITEM_TYPE.get(item) || "e";
}

function getVocabTypeLabel(item) {
  return VOCAB_TYPE_MAP.get(getVocabTypeCode(item)) || "Khác";
}

function getVocabTypeSummary() {
  if (!selectedTypes.size) return "";
  return [...selectedTypes]
    .map((code) => VOCAB_TYPE_MAP.get(code))
    .filter(Boolean)
    .join(", ");
}

window.getVocabTypeShortSummary = () => {
  const parts = [];
  if (selectedTypes.size) parts.push(`${selectedTypes.size} tính chất`);
  if (favOnly) parts.push("Yêu thích ★");
  return parts.join(" · ");
};

function getTopicLabel(topic) {
  if (topic === "all") return "Tất cả các chủ đề";
  const detail = TOPIC_DETAILS[topic] || "Chủ đề từ vựng";
  return `${topic} — ${detail}`;
}

function updateTopicDetail() {
  const parts = [`Chủ đề đang chọn: ${getTopicLabel(topicSelect.value)}`];
  const summary = getVocabTypeSummary();
  if (summary) parts.push(`Tính chất (${selectedTypes.size}): ${summary}`);
  if (favOnly) parts.push("Chỉ từ yêu thích ★");
  document.getElementById("topicDetail").textContent = parts.join(" · ");
}

function renderTypeFilterOptions(scopeItems) {
  const host = document.getElementById("typeFilterChecks");
  if (!host) return;
  const counts = Object.fromEntries(VOCAB_TYPES.map(([code]) => [code, 0]));
  scopeItems.forEach((item) => {
    const code = getVocabTypeCode(item);
    counts[code] = (counts[code] || 0) + 1;
  });
  host.innerHTML = VOCAB_TYPES.map(([code, label]) => {
    const checked = selectedTypes.has(code);
    const n = counts[code] || 0;
    return `<label class="type-check-chip${n === 0 && !checked ? " is-empty" : ""}" data-type-code="${code}"><input type="checkbox" value="${code}"${checked ? " checked" : ""}><span class="type-check-name">${escapeHTML(label)}</span><span class="type-check-count">${n}</span></label>`;
  }).join("");
  updateTypeFilterButton(scopeItems.length);
}

function updateTypeFilterButton(scopeTotal) {
  const btn = document.getElementById("typeFilterToggle");
  const label = document.getElementById("typeFilterBtnLabel");
  if (!btn || !label) return;
  const active = selectedTypes.size > 0;
  btn.classList.toggle("is-active", active);
  if (!active) {
    label.textContent = `Tính chất từ: Tất cả (${scopeTotal})`;
  } else {
    const names = [...selectedTypes]
      .map((c) => VOCAB_TYPE_MAP.get(c))
      .filter(Boolean);
    const preview =
      names.length <= 2
        ? names.join(", ")
        : `${names.slice(0, 2).join(", ")} +${names.length - 2}`;
    label.textContent = `Tính chất (${names.length}): ${preview} · ${currentFiltered.length} thẻ`;
  }
}

function toggleTypeFilterPanel(force) {
  const btn = document.getElementById("typeFilterToggle");
  const panel = document.getElementById("typeFilterPanel");
  if (!btn || !panel) return;
  const open = typeof force === "boolean" ? force : panel.hidden;
  panel.hidden = !open;
  btn.setAttribute("aria-expanded", String(open));
}

function selectAllVocabTypes() {
  VOCAB_TYPES.forEach(([code]) => selectedTypes.add(code));
  onFilterChange();
}

function clearVocabTypes() {
  selectedTypes.clear();
  onFilterChange();
}

document.getElementById("typeFilterChecks")?.addEventListener("change", (e) => {
  const input = e.target.closest('input[type="checkbox"]');
  if (!input) return;
  if (input.checked) selectedTypes.add(input.value);
  else selectedTypes.delete(input.value);
  onFilterChange();
});

document.getElementById("typeFilterPanel")?.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    e.stopPropagation();
    toggleTypeFilterPanel(false);
    document.getElementById("typeFilterToggle")?.focus();
  }
});

function initLessons() {
  for (let i = 1; i <= 15; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `Bài ${i} (第${i}課)`;
    lessonSelect.appendChild(opt);
  }
  updateTopicList();
}

function updateTopicList() {
  const curL = lessonSelect.value;
  topicSelect.innerHTML = '<option value="all">Tất cả các chủ đề</option>';
  const topics = [
    ...new Set(
      RAW_VOCAB.filter((item) => curL === "all" || item.l == curL).map(
        (i) => i.t,
      ),
    ),
  ];
  topics.forEach((t) => {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = getTopicLabel(t);
    topicSelect.appendChild(opt);
  });
  updateTopicDetail();
}

function onLessonChange() {
  updateTopicList();
  onFilterChange();
}

function onFilterChange(preserveIndex = false) {
  clearTimeout(quizTimer);
  const l = lessonSelect.value;
  const t = topicSelect.value;
  const normalizeSearch = (s) =>
    s
      .normalize("NFKC")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .toLowerCase();
  const q = normalizeSearch(searchBox.value.trim());

  const scoped = RAW_VOCAB.filter((item) => {
    const matchL = l === "all" || item.l == l;
    const matchT = t === "all" || item.t === t;
    const matchFav = !favOnly || isFavoriteItem(item);
    const matchQ =
      !q ||
      normalizeSearch(item.k).includes(q) ||
      normalizeSearch(item.h).includes(q) ||
      normalizeSearch(item.m).includes(q);
    return matchL && matchT && matchFav && matchQ;
  });

  currentFiltered = scoped.filter(
    (item) =>
      selectedTypes.size === 0 || selectedTypes.has(getVocabTypeCode(item)),
  );

  updateTopicDetail();
  updateFavFilterButton();
  renderTypeFilterOptions(scoped);

  currentIndex = preserveIndex
    ? Math.min(currentIndex, Math.max(0, currentFiltered.length - 1))
    : 0;
  document.getElementById("vocabCount").textContent =
    `${currentFiltered.length} thẻ trong phạm vi chọn · ${RAW_VOCAB.length} thẻ đã đối chiếu PDF`;
  updateUI();
  window.MobileUI?.modeChanged(currentMode);
}

let modeRequest = 0;
const AREA_CONTEXT = {
  flashcard: {
    title: "Thẻ ghi nhớ",
    subtitle: "Ghi nhớ từ mới, theo nhịp của bạn.",
    search: "searchBox",
    scope: "từ vựng",
  },
  quiz: {
    title: "Kiểm tra từ vựng",
    subtitle: "Chọn mục tiêu, luyện tập và theo dõi kết quả.",
    search: "searchBox",
    scope: "từ vựng",
  },
  list: {
    title: "Danh sách từ vựng",
    subtitle: "Tra chữ, cách đọc và nghĩa trong từng bài học.",
    search: "searchBox",
    scope: "từ vựng",
  },
  reading: {
    title: "Luyện đọc",
    subtitle: "Đọc, nghe và hiểu thêm từng câu tiếng Nhật.",
    search: "readingSearch",
    scope: "bài đọc",
  },
  speaking: {
    title: "Luyện nói",
    subtitle: "57 câu hỏi phỏng vấn và gợi ý trả lời JPD123.",
    search: "speakingSearch",
    scope: "câu luyện nói",
  },
  kanji: {
    title: "Hán tự",
    subtitle: "Hiểu chữ, nhớ từ và luyện từng nét viết.",
    search: "kanjiSearch",
    scope: "Hán tự",
  },
  grammar: {
    title: "Ngữ pháp",
    subtitle: "Nắm mẫu câu, luyện cách dùng trong ngữ cảnh.",
    search: "grSearch",
    scope: "mẫu câu",
  },
  exam: {
    title: "Luyện đề",
    subtitle: "Làm bài theo nhịp của bạn, xem lại để tiến bộ.",
  },
};

function updateShellContext() {
  const context = AREA_CONTEXT[currentMode];
  document.getElementById("studyShortcuts").hidden = ![
    "flashcard",
    "quiz",
  ].includes(currentMode);
  document.getElementById("areaTitle").textContent = context.title;
  document.getElementById("areaSubtitle").textContent = context.subtitle;
  document.getElementById("mobileAreaName").textContent = context.title;
  const button = document.getElementById("contextSearchToggle");
  const target = context.search && document.getElementById(context.search);
  button.hidden = !target || (currentMode === "quiz" && quizState !== "setup");
  if (target) {
    const label = `Tìm trong ${context.scope}`;
    document.getElementById("contextSearchLabel").textContent = label;
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
    button.setAttribute("aria-controls", target.id);
  } else button.removeAttribute("aria-controls");
}

function focusContextSearch() {
  if (document.getElementById("contextSearchToggle").hidden) return;
  const context = AREA_CONTEXT[currentMode];
  const input = context.search && document.getElementById(context.search);
  if (!input) return;
  for (let parent = input.parentElement; parent; parent = parent.parentElement)
    if (parent.tagName === "DETAILS") parent.open = true;
  input.scrollIntoView({ block: "center", behavior: "instant" });
  input.focus({ preventScroll: true });
}

function returnToFlashcards() {
  if (currentMode !== "flashcard") switchMode("flashcard");
}

async function switchMode(mode) {
  if (
    ![
      "flashcard",
      "quiz",
      "list",
      "reading",
      "speaking",
      "kanji",
      "grammar",
      "exam",
    ].includes(mode)
  )
    return;
  const request = ++modeRequest;
  clearTimeout(quizTimer);
  if (window.stopReadingAudio) window.stopReadingAudio();
  window.StudyAudio?.stop();
  if (window.stopKanjiAnimation) window.stopKanjiAnimation();
  currentMode = mode;
  document.querySelectorAll("[data-mode]").forEach((btn) => {
    const selected = btn.dataset.mode === mode;
    btn.classList.toggle("active", selected);
    btn.setAttribute("aria-pressed", String(selected));
  });
  [
    "flashcard",
    "quiz",
    "list",
    "reading",
    "speaking",
    "kanji",
    "grammar",
    "exam",
  ].forEach((name) => {
    document.getElementById(name + "Mode").style.display =
      mode === name ? (name === "flashcard" ? "flex" : "block") : "none";
  });
  ["vocabIntro", "vocabFilters", "vocabCoverage"].forEach(
    (id) =>
      (document.getElementById(id).hidden = [
        "reading",
        "speaking",
        "kanji",
        "grammar",
        "exam",
      ].includes(mode)),
  );
  updateUI();
  updateShellContext();
  window.MobileUI?.modeChanged(mode);
  const status = document.getElementById("featureStatus");
  status.hidden = true;
  if (["reading", "speaking", "kanji", "grammar", "exam"].includes(mode)) {
    status.hidden = false;
    status.textContent = "Đang mở nội dung học…";
    try {
      await FeatureLoader.ensure(mode);
      if (request !== modeRequest) return;
      status.hidden = true;
      updateShellContext();
      window.MobileUI?.modeChanged(mode);
    } catch (error) {
      if (request !== modeRequest) return;
      document.getElementById(mode + "Mode").style.display = "none";
      status.replaceChildren(document.createTextNode(error.message + " "));
      const retry = document.createElement("button");
      retry.textContent = "Thử lại";
      retry.onclick = () => switchMode(mode);
      status.append(retry);
    }
  }
}

/* FLASHCARD LOGIC */
function syncCardFaces() {
  const front = document.querySelector(".flashcard-front");
  const back = document.querySelector(".flashcard-back");
  const hiddenFace = isFlipped ? front : back;
  if (hiddenFace.contains(document.activeElement)) {
    document
      .querySelector(".flashcard-container")
      .focus({ preventScroll: true });
  }
  document
    .getElementById("flashcardInner")
    .classList.toggle("is-flipped", isFlipped);
  front.inert = isFlipped;
  back.inert = !isFlipped;
  front.setAttribute("aria-hidden", String(isFlipped));
  back.setAttribute("aria-hidden", String(!isFlipped));
}

function flipCard() {
  if (!currentFiltered.length) return;
  isFlipped = !isFlipped;
  syncCardFaces();
}

function syncFlashcardFavButtons() {
  const empty = currentFiltered.length === 0;
  const isFav = !empty && isFavoriteItem(currentFiltered[currentIndex]);
  document.querySelectorAll("#fcFavBtn, [data-fc-fav]").forEach((btn) => {
    btn.disabled = empty;
    btn.classList.toggle("active", isFav);
    btn.setAttribute("aria-pressed", String(isFav));
  });
}

function updateCardUI() {
  isFlipped = false;
  syncCardFaces();
  const empty = currentFiltered.length === 0;
  document.getElementById("fcPrev").disabled = empty || currentIndex === 0;
  document.getElementById("fcNext").disabled =
    empty || currentIndex === currentFiltered.length - 1;
  document.getElementById("fcShuffle").disabled = currentFiltered.length < 2;
  document
    .querySelectorAll("[data-fc-audio]")
    .forEach((btn) => (btn.disabled = empty));
  document
    .querySelector(".flashcard-container")
    .setAttribute("aria-disabled", String(empty));
  if (currentFiltered.length === 0) {
    document.getElementById("fcKanji").textContent = "Không có từ";
    document.getElementById("fcKana").textContent = "";
    document.getElementById("fcMeaning").textContent = favOnly
      ? "Chưa có từ yêu thích trong phạm vi này"
      : "Đổi bộ lọc tra cứu";
    document.getElementById("fcProgressText").textContent = "0 / 0";
    document.getElementById("fcProgressBar").style.width = "0%";
    document.getElementById("fcTopicTag").textContent = "Không có kết quả";
    document.getElementById("fcTagFront").textContent = "Đổi bộ lọc";
    document.getElementById("fcTypeFront").hidden = true;
    document.getElementById("fcTypeBack").hidden = true;
    syncFlashcardFavButtons();
    return;
  }

  const item = currentFiltered[currentIndex];
  const typeCode = getVocabTypeCode(item);
  const typeLabel = getVocabTypeLabel(item);
  document.getElementById("fcKanji").textContent = item.k;
  document.getElementById("fcKana").textContent = item.h;
  document.getElementById("fcMeaning").textContent = item.m;
  document.getElementById("fcTagFront").textContent = `Bài ${item.l}`;
  ["fcTypeFront", "fcTypeBack"].forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.hidden = false;
    el.textContent = typeLabel;
    el.title = typeLabel;
    el.dataset.typeCode = typeCode;
  });
  document.getElementById("fcTopicTag").textContent = item.t;
  document.getElementById("fcProgressText").textContent =
    `${currentIndex + 1} / ${currentFiltered.length}`;
  document.getElementById("fcProgressBar").style.width =
    `${((currentIndex + 1) / currentFiltered.length) * 100}%`;

  syncFlashcardFavButtons();
}

function nextCard() {
  if (currentIndex < currentFiltered.length - 1) {
    window.StudyAudio.stop();
    currentIndex++;
    updateCardUI();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    window.StudyAudio.stop();
    currentIndex--;
    updateCardUI();
  }
}

function shuffleCards() {
  window.StudyAudio.stop();
  currentFiltered.sort(() => Math.random() - 0.5);
  currentIndex = 0;
  updateCardUI();
}

function playAudioCurrent() {
  if (currentFiltered.length > 0) {
    playAudio(currentFiltered[currentIndex].h);
  }
}

function toggleFavItem(item, source = "flashcard") {
  if (!item) return;
  const key = getVocabKey(item);
  if (favorites.includes(key) || favorites.includes(item.k)) {
    if (favorites.includes(item.k)) {
      favorites = favorites.filter((x) => x !== item.k);
      RAW_VOCAB.forEach((other) => {
        if (other !== item && other.k === item.k) {
          const otherKey = getVocabKey(other);
          if (!favorites.includes(otherKey)) favorites.push(otherKey);
        }
      });
    }
    favorites = favorites.filter((x) => x !== key);
  } else {
    favorites.push(key);
  }
  safeSet("dekiru_favs_v2", JSON.stringify(favorites));
  updateFavFilterButton();
  if (favOnly && source !== "quiz-review") {
    onFilterChange(true);
  } else if (source === "flashcard") {
    syncFlashcardFavButtons();
  }
  window.StudyNotifications?.refresh();
}

function toggleFavCurrent() {
  if (currentFiltered.length === 0) return;
  toggleFavItem(currentFiltered[currentIndex], "flashcard");
}

function playAudio(text) {
  window.StudyAudio.play(text, { rate: 0.85 });
}

/* QUIZ SETUP & LOGIC */
function showQuizSetup(confirmed = false) {
  if (quizState === "running" && !confirmed) {
    StudyDialogs.replace({
      message: "Thiết lập đề mới sẽ thay bài kiểm tra từ vựng chưa nộp.",
      onReplace: () => showQuizSetup(true),
    });
    return;
  }
  clearTimeout(quizTimer);
  quizRun++;
  quizState = "setup";
  document.getElementById("quizSetup").style.display = "block";
  document.getElementById("quizBox").style.display = "none";
  document.getElementById("quizResult").style.display = "none";

  const count = currentFiltered.length;
  const lName =
    lessonSelect.value === "all"
      ? "Tất cả các bài"
      : `Bài ${lessonSelect.value}`;
  const tName = getTopicLabel(topicSelect.value);
  const scopeParts = [lName, tName];
  if (selectedTypes.size > 0) {
    scopeParts.push(
      `Tính chất (${selectedTypes.size}): ${getVocabTypeSummary()}`,
    );
  }
  if (favOnly) scopeParts.push("Chỉ từ yêu thích ★");
  document.getElementById("setupDesc").textContent =
    `Phạm vi: ${scopeParts.join(" • ")} (Tổng: ${count} từ vựng)`;

  document.getElementById("quizAllDetail").textContent = `${count} câu`;
  updateQuizCountInput();
  syncQuizChrome();
}

function syncQuizChrome() {
  document.getElementById("quizMode").dataset.state = quizState;
  if (currentMode === "quiz") {
    ["vocabIntro", "vocabFilters", "vocabCoverage"].forEach(
      (id) => (document.getElementById(id).hidden = quizState !== "setup"),
    );
    updateShellContext();
  }
}

function shuffledQuizItems(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function clearQuizCountError() {
  document.getElementById("quizCountError").hidden = true;
  document.getElementById("quizCustomCount").removeAttribute("aria-invalid");
}

function updateQuizCountInput() {
  const custom = getQuizCountChoice() === "custom";
  document.getElementById("quizCustomBody").hidden = !custom;
  document
    .getElementById("quizCustomGroup")
    .classList.toggle("is-active", custom);
  document.getElementById("quizCustomCount").max = currentFiltered.length;
  document.getElementById("quizCountHint").textContent = currentFiltered.length
    ? custom
      ? `Nhập từ 1 đến ${currentFiltered.length} câu · Mỗi câu là một từ trong phạm vi đã chọn.`
      : `Có ${currentFiltered.length} từ để ôn tập. Số câu tối đa bằng số từ đang chọn.`
    : "Chưa có từ để kiểm tra. Hãy đổi bộ lọc hoặc từ khóa.";
  clearQuizCountError();
  updateQuizCountPreview();
}

function getQuizCountChoice() {
  return document.querySelector('input[name="quizCount"]:checked').value;
}

function updateQuizCountPreview() {
  const choice = getQuizCountChoice();
  const total = currentFiltered.length;
  const input = document.getElementById("quizCustomCount");
  const entered = Number(input.value);
  const valid =
    input.value.trim() &&
    Number.isSafeInteger(entered) &&
    entered >= 1 &&
    entered <= total;
  const count =
    choice === "custom"
      ? valid
        ? entered
        : null
      : choice === "all"
        ? total
        : Math.min(Number(choice), total);
  document.getElementById("quizCountPreview").textContent = !total
    ? "Chưa có từ"
    : count === null
      ? "Chờ bạn chọn số câu"
      : `${count} câu hỏi`;
  document.getElementById("quizCountDecrease").disabled =
    !total || (valid && entered <= 1);
  document.getElementById("quizCountIncrease").disabled =
    !total || (valid && entered >= total);
}

function adjustQuizCount(delta) {
  const total = currentFiltered.length;
  if (!total) return;
  const input = document.getElementById("quizCustomCount");
  const value = Number(input.value);
  const base = input.value.trim() && Number.isSafeInteger(value) ? value : 0;
  input.value = Math.min(total, Math.max(1, base + delta));
  clearQuizCountError();
  updateQuizCountPreview();
}

function startQuizEngine() {
  clearTimeout(quizTimer);
  const total = currentFiltered.length;
  if (!total) {
    document.getElementById("quizCountError").textContent =
      "Không có từ trong phạm vi chọn. Hãy đổi bộ lọc trước khi bắt đầu.";
    document.getElementById("quizCountError").hidden = false;
    return;
  }

  const countChoice = getQuizCountChoice();
  const customInput = document.getElementById("quizCustomCount");
  const entered = Number(customInput.value);
  if (
    countChoice === "custom" &&
    (!customInput.value.trim() ||
      !Number.isSafeInteger(entered) ||
      entered < 1 ||
      entered > total)
  ) {
    document.getElementById("quizCountError").textContent =
      `Vui lòng nhập số nguyên từ 1 đến ${total}.`;
    document.getElementById("quizCountError").hidden = false;
    customInput.setAttribute("aria-invalid", "true");
    customInput.focus();
    return;
  }
  clearQuizCountError();
  const qNum =
    countChoice === "custom"
      ? entered
      : countChoice === "all"
        ? total
        : Math.min(Number(countChoice), total);

  quizQuestions = shuffledQuizItems(currentFiltered).slice(0, qNum);
  try {
    quizOptionSets = quizQuestions.map((question) =>
      QuizCore.options(question, currentFiltered, RAW_VOCAB, shuffledQuizItems),
    );
  } catch (error) {
    document.getElementById("quizCountError").textContent = error.message;
    document.getElementById("quizCountError").hidden = false;
    return;
  }
  quizGrading = document.querySelector(
    'input[name="quizGrading"]:checked',
  ).value;
  quizScope = `${lessonSelect.value === "all" ? "Tất cả các bài" : `Bài ${lessonSelect.value}`} · ${getTopicLabel(topicSelect.value)}`;
  beginQuizAttempt();
}

function beginQuizAttempt() {
  clearTimeout(quizTimer);
  quizRun++;
  quizIndex = 0;
  quizScore = 0;
  quizAnswers = Array(quizQuestions.length).fill(null);
  document.getElementById("quizQuestionMap").replaceChildren();
  quizState = "running";
  document.getElementById("quizSubmitNotice").hidden = true;
  document.getElementById("quizReviewList").replaceChildren();
  document.getElementById("quizSetup").style.display = "none";
  document.getElementById("quizBox").style.display = "block";
  document.getElementById("quizResult").style.display = "none";
  syncQuizChrome();
  renderQuizQuestion();
  window.MobileUI?.modeChanged("quiz");
  document.getElementById("quizProgress").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "instant" });
}

function retryQuiz() {
  if (quizState === "submitted" && quizQuestions.length) beginQuizAttempt();
}

function renderQuizView() {
  if (quizState === "setup") {
    showQuizSetup();
    return;
  }
  syncQuizChrome();
  if (quizState === "submitted") return;
  // If a tab change stopped the feedback timer, resume at the next question.
  if (quizGrading === "instant" && getQuizAnswer(quizIndex) !== null) {
    quizIndex++;
    if (quizIndex === quizQuestions.length) {
      showQuizResult();
      return;
    }
  }
  renderQuizQuestion();
}

function getQuizAnswer(index) {
  const answer = quizAnswers[index];
  return typeof answer === "string" && quizOptionSets[index]?.includes(answer)
    ? answer
    : null;
}

function updateQuizProgress() {
  const answered = quizQuestions.filter(
    (_, index) => getQuizAnswer(index) !== null,
  ).length;
  const percent = Math.round((answered / quizQuestions.length) * 100);
  document.getElementById("quizAnsweredLabel").textContent =
    `Đã trả lời ${answered} / ${quizQuestions.length} câu`;
  document.getElementById("quizPercent").textContent = `${percent}%`;
  const progress = document.getElementById("quizProgressBar");
  progress.max = quizQuestions.length;
  progress.value = answered;
  document.getElementById("quizScore").textContent = `Điểm: ${quizScore}`;
  const map = document.getElementById("quizQuestionMap");
  if (quizGrading === "submit") {
    if (map.children.length !== quizQuestions.length) {
      map.replaceChildren(
        ...quizQuestions.map((_, index) => {
          const button = document.createElement("button");
          button.className = "quiz-map-button";
          button.innerHTML = `<span>${index + 1}</span><span class="quiz-map-answer-mark" aria-hidden="true">○</span>`;
          button.onclick = () => goToQuizQuestion(index);
          return button;
        }),
      );
    }
    [...map.children].forEach((button, index) => {
      const hasAnswer = getQuizAnswer(index) !== null;
      const viewing = index === quizIndex;
      const label = `Câu ${index + 1}: ${hasAnswer ? "đã trả lời" : "chưa trả lời"}${viewing ? " · đang xem" : ""}`;
      button.classList.toggle("is-answered", hasAnswer);
      button.querySelector(".quiz-map-answer-mark").textContent = hasAnswer
        ? "✓"
        : "○";
      button.setAttribute("aria-current", viewing ? "step" : "false");
      button.setAttribute("aria-label", label);
      button.title = label;
    });
    const currentStatus = document.getElementById("quizMapCurrentStatus");
    const hasCurrentAnswer = getQuizAnswer(quizIndex) !== null;
    currentStatus.textContent = `Câu ${quizIndex + 1}: ${hasCurrentAnswer ? "Đã trả lời" : "Chưa trả lời"}`;
    currentStatus.classList.toggle("is-answered", hasCurrentAnswer);
  }
  document.getElementById("quizPreviousQuestion").disabled = quizIndex === 0;
  document.getElementById("quizNextQuestion").disabled =
    quizIndex === quizQuestions.length - 1;
}

function renderQuizQuestion() {
  if (quizState !== "running") return;
  const q = quizQuestions[quizIndex];
  const questionIndex = quizIndex;
  const selected = getQuizAnswer(quizIndex);
  const instant = quizGrading === "instant";
  document.getElementById("quizProgress").textContent =
    `Câu hỏi ${quizIndex + 1} / ${quizQuestions.length}`;
  document.getElementById("quizScore").hidden = !instant;
  document.getElementById("quizSessionInfo").textContent =
    `${quizScope} · ${instant ? "Chấm ngay sau mỗi câu." : "Mỗi câu chọn một đáp án. Bạn có thể đổi lựa chọn trước khi nộp."}`;
  document.getElementById("quizQuestionNavigator").hidden = instant;
  document.getElementById("quizExamActions").hidden = instant;
  document.getElementById("quizKanji").textContent = q.k;
  document.getElementById("quizKana").textContent = q.h;
  document.getElementById("quizContext").textContent =
    `Nghĩa theo Bài ${q.l} · ${getTopicLabel(q.t)} · PDF tr. ${q.p}`;
  document.getElementById("quizAnswerStatus").textContent =
    selected === null
      ? "Chọn một đáp án bên dưới."
      : instant
        ? QuizCore.equivalent(selected, q.m)
          ? "✓ Chính xác."
          : `✕ Chưa đúng. Đáp án: ${q.m}`
        : "Đã ghi nhận lựa chọn. Bạn có thể xem lại hoặc chuyển câu.";
  const optsBox = document.getElementById("quizOptions");
  optsBox.replaceChildren();
  quizOptionSets[quizIndex].forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt-btn";
    btn.classList.toggle("is-selected", selected === opt);
    btn.setAttribute("aria-label", opt);
    btn.setAttribute("aria-pressed", String(selected === opt));
    btn.innerHTML = `<span class="quiz-option-letter" aria-hidden="true">${"ABCD"[index]}</span><span class="quiz-option-text">${escapeHTML(opt)}</span>`;
    if (instant && selected !== null) {
      btn.disabled = true;
      btn.classList.toggle("correct", QuizCore.equivalent(opt, q.m));
      btn.classList.toggle(
        "incorrect",
        selected === opt && !QuizCore.equivalent(opt, q.m),
      );
    }
    btn.onclick = () => handleQuizAnswer(opt, questionIndex);
    optsBox.appendChild(btn);
  });
  updateQuizProgress();
}

function handleQuizAnswer(chosen, index) {
  if (
    quizState !== "running" ||
    index !== quizIndex ||
    !quizOptionSets[index].includes(chosen)
  )
    return;
  if (quizGrading === "instant" && getQuizAnswer(index) !== null) return;
  quizAnswers[index] = chosen;
  document.getElementById("quizSubmitNotice").hidden = true;
  if (quizGrading === "submit") {
    // Keep the selected button focused; editing an answer does not advance.
    [...document.getElementById("quizOptions").children].forEach(
      (button, i) => {
        const selected = quizOptionSets[index][i] === chosen;
        button.classList.toggle("is-selected", selected);
        button.setAttribute("aria-pressed", String(selected));
      },
    );
    document.getElementById("quizAnswerStatus").textContent =
      "Đã ghi nhận lựa chọn. Bạn có thể xem lại hoặc chuyển câu.";
    updateQuizProgress();
    return;
  }
  if (QuizCore.equivalent(chosen, quizQuestions[index].m)) quizScore += 10;
  renderQuizQuestion();
  const run = quizRun;
  quizTimer = setTimeout(() => {
    if (quizRun !== run || quizState !== "running" || currentMode !== "quiz")
      return;
    quizIndex++;
    if (quizIndex < quizQuestions.length) {
      renderQuizQuestion();
      document.getElementById("quizProgress").focus({ preventScroll: true });
    } else {
      showQuizResult();
    }
  }, 900);
}

function goToQuizQuestion(index) {
  if (
    quizState !== "running" ||
    quizGrading !== "submit" ||
    index < 0 ||
    index >= quizQuestions.length
  )
    return;
  quizIndex = index;
  document.getElementById("quizSubmitNotice").hidden = true;
  renderQuizQuestion();
  document.getElementById("quizProgress").focus({ preventScroll: true });
  const map = document.getElementById("quizQuestionMap");
  const button = map.children[index];
  if (
    button &&
    (button.offsetTop < map.scrollTop ||
      button.offsetTop + button.offsetHeight > map.scrollTop + map.clientHeight)
  )
    map.scrollTop = button.offsetTop - map.clientHeight / 2;
}

function goToFirstUnanswered() {
  const index = quizQuestions.findIndex((_, i) => getQuizAnswer(i) === null);
  if (index !== -1) goToQuizQuestion(index);
}

function requestQuizSubmission() {
  if (quizState !== "running" || quizGrading !== "submit") return;
  const skipped = quizQuestions.filter(
    (_, index) => getQuizAnswer(index) === null,
  ).length;
  if (!skipped) {
    submitQuiz();
    return;
  }
  document.getElementById("quizSubmitNoticeText").textContent =
    `Còn ${skipped} câu chưa trả lời. Nếu nộp ngay, các câu này sẽ được tính là bỏ trống và không có điểm.`;
  document.getElementById("quizSubmitNotice").hidden = false;
}

function submitQuiz() {
  if (quizState !== "running" || quizGrading !== "submit") return;
  showQuizResult();
}

function showQuizResult() {
  if (quizState !== "running" || !quizQuestions.length) return;
  clearTimeout(quizTimer);
  quizRun++;
  quizState = "submitted";
  const correct = quizQuestions.filter((question, index) =>
    QuizCore.equivalent(getQuizAnswer(index), question.m),
  ).length;
  const skipped = quizQuestions.filter(
    (_, index) => getQuizAnswer(index) === null,
  ).length;
  const wrong = quizQuestions.length - correct - skipped;
  quizScore = correct * 10;
  document.getElementById("quizBox").style.display = "none";
  document.getElementById("quizResult").style.display = "block";
  const pct = Math.round((correct / quizQuestions.length) * 100);
  document.getElementById("finalScore").textContent = `${pct}%`;
  document.getElementById("resultSubtitle").textContent =
    `Bạn đã trả lời đúng ${correct} / ${quizQuestions.length} câu · ${quizScore} / ${quizQuestions.length * 10} điểm.`;
  document.getElementById("quizCorrectCount").textContent = correct;
  document.getElementById("quizWrongCount").textContent = wrong;
  document.getElementById("quizSkippedCount").textContent = skipped;
  syncQuizChrome();
  renderQuizReview("all");
  document.getElementById("quizResultTitle").focus({ preventScroll: true });
  document
    .getElementById("quizResult")
    .scrollIntoView({ block: "start", behavior: "instant" });
}

function renderQuizReview(filter) {
  if (quizState !== "submitted") return;
  document
    .getElementById("quizReviewAll")
    .setAttribute("aria-pressed", String(filter === "all"));
  document
    .getElementById("quizReviewMistakes")
    .setAttribute("aria-pressed", String(filter === "mistakes"));
  const wrongCount = quizQuestions.filter(
    (question, index) => !QuizCore.equivalent(getQuizAnswer(index), question.m),
  ).length;
  document.getElementById("quizReviewAll").textContent =
    `Tất cả (${quizQuestions.length})`;
  document.getElementById("quizReviewMistakes").textContent =
    `Sai / bỏ trống (${wrongCount})`;
  document.getElementById("quizReviewList").innerHTML =
    quizQuestions
      .map((question, index) => {
        const chosen = getQuizAnswer(index);
        const correct = QuizCore.equivalent(chosen, question.m);
        if (filter === "mistakes" && correct) return "";
        const state =
          chosen === null ? "skipped" : correct ? "correct" : "incorrect";
        const label =
          chosen === null ? "— Bỏ trống" : correct ? "✓ Đúng" : "✕ Sai";
        const options = quizOptionSets[index]
          .map((option, i) => {
            const right = QuizCore.equivalent(option, question.m),
              selected = option === chosen;
            return `<div class="quiz-review-option${right ? " is-correct" : selected ? " is-incorrect" : ""}"><span class="quiz-option-letter" aria-hidden="true">${"ABCD"[i]}</span><span class="quiz-option-text">${escapeHTML(option)}</span>${right || selected ? `<strong>${right ? (selected ? "✓ Bạn chọn · Đúng" : "✓ Đáp án đúng") : "✕ Bạn chọn · Sai"}</strong>` : ""}</div>`;
          })
          .join("");
        const fav = isFavoriteItem(question);
        return `<article class="quiz-review-card ${state}" data-review-index="${index}"><div class="quiz-review-meta"><h4>Câu ${index + 1}</h4><div class="quiz-review-meta-actions"><button type="button" class="quiz-review-fav${fav ? " active" : ""}" data-quiz-fav="${index}" aria-pressed="${fav}" aria-label="Lưu từ ${escapeHTML(question.k)} vào yêu thích">${fav ? "★ Đã lưu" : "☆ Lưu từ"}</button><span class="quiz-review-status">${label}</span></div></div><p class="quiz-review-word" lang="ja">${escapeHTML(question.k)}</p><p class="quiz-review-kana" lang="ja">${escapeHTML(question.h)}</p>${chosen === null ? '<p class="quiz-skipped-note">Bạn chưa chọn đáp án cho câu này.</p>' : ""}<div class="quiz-review-options">${options}</div><p class="quiz-review-source">Bài ${question.l} · ${escapeHTML(getTopicLabel(question.t))} · <a class="source-link" href="sources/new-words.pdf#page=${question.p}" target="_blank" rel="noopener">PDF trang ${question.p} ↗</a></p></article>`;
      })
      .join("") ||
    '<p class="empty-state">Bạn đã trả lời đúng tất cả các câu. Không có câu sai hoặc bỏ trống.</p>';
}
document.getElementById("quizReviewList").addEventListener("click", (e) => {
  const favBtn = e.target.closest("[data-quiz-fav]");
  if (!favBtn) return;
  const q = quizQuestions[Number(favBtn.dataset.quizFav)];
  if (!q) return;
  toggleFavItem(q, "quiz-review");
  const fav = isFavoriteItem(q);
  favBtn.classList.toggle("active", fav);
  favBtn.setAttribute("aria-pressed", String(fav));
  favBtn.textContent = fav ? "★ Đã lưu" : "☆ Lưu từ";
});

/* LIST VIEW */
function renderListView() {
  const tbody = document.getElementById("vocabTableBody");
  tbody.innerHTML = currentFiltered.length
    ? currentFiltered
        .map((i, index) => {
          const fav = isFavoriteItem(i);
          return `
        <tr class="vocab-row">
          <td lang="ja">${escapeHTML(i.k)}<span class="source-cell" lang="vi">Bài ${i.l} · PDF tr. ${i.p} · <span class="vocab-type-badge" data-type-code="${getVocabTypeCode(i)}">${escapeHTML(getVocabTypeLabel(i))}</span></span></td>
          <td class="kana-cell" lang="ja">${escapeHTML(i.h)}</td>
          <td class="meaning-cell">${escapeHTML(i.m)}</td>
          <td><div class="vocab-row-actions"><button type="button" class="icon-btn vocab-fav-btn${fav ? " active" : ""}" data-vocab-fav="${index}" aria-pressed="${fav}" aria-label="Lưu từ ${escapeHTML(i.k)} vào yêu thích" title="${fav ? "Bỏ lưu yêu thích" : "Lưu từ yêu thích"}">${fav ? "★" : "☆"}</button><button type="button" class="icon-btn" data-vocab-audio="${index}" aria-label="Nghe ${escapeHTML(i.k)}" title="Nghe phát âm">🔊</button></div></td>
        </tr>
      `;
        })
        .join("")
    : `<tr><td colspan="4" class="empty-state">${favOnly ? "Chưa có từ yêu thích nào trong phạm vi này. Bấm ★ trên thẻ hoặc bỏ lọc Yêu thích." : "Không tìm thấy từ. Hãy đổi bộ lọc hoặc từ khóa."}</td></tr>`;
}
document.getElementById("vocabTableBody").addEventListener("click", (e) => {
  const audioBtn = e.target.closest("[data-vocab-audio]");
  if (audioBtn) {
    playAudio(currentFiltered[Number(audioBtn.dataset.vocabAudio)].h);
    return;
  }
  const favBtn = e.target.closest("[data-vocab-fav]");
  if (favBtn) {
    const item = currentFiltered[Number(favBtn.dataset.vocabFav)];
    if (!item) return;
    toggleFavItem(item, "list");
    if (!favOnly) {
      const fav = isFavoriteItem(item);
      favBtn.classList.toggle("active", fav);
      favBtn.setAttribute("aria-pressed", String(fav));
      favBtn.title = fav ? "Bỏ lưu yêu thích" : "Lưu từ yêu thích";
      favBtn.textContent = fav ? "★" : "☆";
    }
  }
});

function updateUI() {
  if (currentMode === "flashcard") updateCardUI();
  else if (currentMode === "list") renderListView();
  else if (currentMode === "quiz") renderQuizView();
}

/* THEME TOGGLE */
function toggleTheme() {
  window.Appearance.toggleTheme();
}

/* KEYBOARD SHORTCUTS */
document.addEventListener("keydown", (e) => {
  const target = document.activeElement;
  if (
    e.defaultPrevented ||
    e.isComposing ||
    e.ctrlKey ||
    e.altKey ||
    e.metaKey ||
    e.shiftKey ||
    document.querySelector("dialog[open]")
  )
    return;
  if (
    target.isContentEditable ||
    target.closest('input, select, textarea, [role="textbox"]')
  )
    return;

  // D is available on ordinary controls, while typing/dialogs stay isolated.
  if (e.key.toLowerCase() === "d") {
    e.preventDefault();
    if (!e.repeat) toggleTheme();
    return;
  }

  // Override native Enter activation on card controls, including Shuffle.
  // Space still activates focused buttons for keyboard accessibility.
  const nativeControl = target.closest('button, a, summary, [role="button"]');
  const inCards = target.closest("#flashcardMode");
  if (currentMode === "flashcard" && (!nativeControl || inCards)) {
    const flipKey =
      ["Enter", "ArrowUp", "ArrowDown"].includes(e.key) ||
      (e.code === "Space" && !nativeControl);
    if (flipKey || e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      if (e.repeat) return;
      if (flipKey) flipCard();
      else if (e.key === "ArrowRight") nextCard();
      else prevCard();
      return;
    }
  }
  if (nativeControl) return;

  if (currentMode === "flashcard") {
    if (e.key.toLowerCase() === "a") {
      playAudioCurrent();
    } else if (e.key.toLowerCase() === "s") {
      toggleFavCurrent();
    }
  }
});

// Chạy ứng dụng
initLessons();
onFilterChange();
updateShellContext();
window.StudyNotifications?.refresh();

AttemptStore.hasActive()
  .then((active) => {
    if (active) return FeatureLoader.ensure("exam");
  })
  .catch(() => {
    /* Opening Exam displays actionable errors/retry. */
  });
