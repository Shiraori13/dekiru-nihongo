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

function getTopicLabel(topic) {
  if (topic === "all") return "Tất cả các chủ đề";
  const detail = TOPIC_DETAILS[topic] || "Chủ đề từ vựng";
  return `${topic} — ${detail}`;
}

function updateTopicDetail() {
  document.getElementById("topicDetail").textContent =
    `Chủ đề đang chọn: ${getTopicLabel(topicSelect.value)}`;
}

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

function onFilterChange() {
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

  updateTopicDetail();

  currentFiltered = RAW_VOCAB.filter((item) => {
    const matchL = l === "all" || item.l == l;
    const matchT = t === "all" || item.t === t;
    const matchQ =
      !q ||
      normalizeSearch(item.k).includes(q) ||
      normalizeSearch(item.h).includes(q) ||
      normalizeSearch(item.m).includes(q);
    return matchL && matchT && matchQ;
  });

  currentIndex = 0;
  document.getElementById("vocabCount").textContent =
    `${currentFiltered.length} thẻ trong phạm vi chọn · ${RAW_VOCAB.length} thẻ đã đối chiếu PDF`;
  updateUI();
}

let modeRequest = 0;
async function switchMode(mode) {
  if (
    ![
      "flashcard",
      "quiz",
      "list",
      "reading",
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
  ["flashcard", "quiz", "list", "reading", "kanji", "grammar", "exam"].forEach(
    (name) => {
      document.getElementById(name + "Mode").style.display =
        mode === name ? (name === "flashcard" ? "flex" : "block") : "none";
    },
  );
  ["vocabIntro", "vocabFilters", "vocabCoverage"].forEach(
    (id) =>
      (document.getElementById(id).hidden = [
        "reading",
        "kanji",
        "grammar",
        "exam",
      ].includes(mode)),
  );
  updateUI();
  window.MobileUI?.modeChanged(mode);
  const status = document.getElementById("featureStatus");
  status.hidden = true;
  if (["reading", "kanji", "grammar", "exam"].includes(mode)) {
    status.hidden = false;
    status.textContent = "Đang mở nội dung học…";
    try {
      await FeatureLoader.ensure(mode);
      if (request !== modeRequest) return;
      status.hidden = true;
      window.MobileUI?.modeChanged(mode);
    } catch (error) {
      if (request !== modeRequest) return;
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

function updateCardUI() {
  isFlipped = false;
  syncCardFaces();
  const empty = currentFiltered.length === 0;
  document.getElementById("fcPrev").disabled = empty || currentIndex === 0;
  document.getElementById("fcNext").disabled =
    empty || currentIndex === currentFiltered.length - 1;
  document.getElementById("fcShuffle").disabled = currentFiltered.length < 2;
  document.getElementById("fcFavBtn").disabled = empty;
  document
    .querySelectorAll("[data-fc-audio]")
    .forEach((btn) => (btn.disabled = empty));
  document
    .querySelector(".flashcard-container")
    .setAttribute("aria-disabled", String(empty));
  if (currentFiltered.length === 0) {
    document.getElementById("fcKanji").textContent = "Không có từ";
    document.getElementById("fcKana").textContent = "";
    document.getElementById("fcMeaning").textContent = "Đổi bộ lọc tra cứu";
    document.getElementById("fcProgressText").textContent = "0 / 0";
    document.getElementById("fcProgressBar").style.width = "0%";
    document.getElementById("fcTopicTag").textContent = "Không có kết quả";
    document.getElementById("fcTagFront").textContent = "Đổi bộ lọc";
    document.getElementById("fcFavBtn").classList.remove("active");
    document.getElementById("fcFavBtn").setAttribute("aria-pressed", "false");
    return;
  }

  const item = currentFiltered[currentIndex];
  document.getElementById("fcKanji").textContent = item.k;
  document.getElementById("fcKana").textContent = item.h;
  document.getElementById("fcMeaning").textContent = item.m;
  document.getElementById("fcTagFront").textContent = `Bài ${item.l}`;
  document.getElementById("fcTopicTag").textContent = item.t;
  document.getElementById("fcProgressText").textContent =
    `${currentIndex + 1} / ${currentFiltered.length}`;
  document.getElementById("fcProgressBar").style.width =
    `${((currentIndex + 1) / currentFiltered.length) * 100}%`;

  const isFav = favorites.includes(item.k);
  document.getElementById("fcFavBtn").classList.toggle("active", isFav);
  document
    .getElementById("fcFavBtn")
    .setAttribute("aria-pressed", String(isFav));
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

function toggleFavCurrent() {
  if (currentFiltered.length === 0) return;
  const k = currentFiltered[currentIndex].k;
  if (favorites.includes(k)) favorites = favorites.filter((x) => x !== k);
  else favorites.push(k);
  safeSet("dekiru_favs_v2", JSON.stringify(favorites));
  updateCardUI();
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
  document.getElementById("setupDesc").textContent =
    `Phạm vi: ${lName} • ${tName} (Tổng: ${count} từ vựng)`;

  document.getElementById("quizAllDetail").textContent = `${count} câu`;
  updateQuizCountInput();
  syncQuizChrome();
}

function syncQuizChrome() {
  if (currentMode === "quiz") {
    ["vocabIntro", "vocabFilters", "vocabCoverage"].forEach(
      (id) => (document.getElementById(id).hidden = quizState !== "setup"),
    );
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
  document.getElementById("quizProgress").focus({ preventScroll: true });
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
        return `<article class="quiz-review-card ${state}" data-review-index="${index}"><div class="quiz-review-meta"><h4>Câu ${index + 1}</h4><span class="quiz-review-status">${label}</span></div><p class="quiz-review-word" lang="ja">${escapeHTML(question.k)}</p><p class="quiz-review-kana" lang="ja">${escapeHTML(question.h)}</p>${chosen === null ? '<p class="quiz-skipped-note">Bạn chưa chọn đáp án cho câu này.</p>' : ""}<div class="quiz-review-options">${options}</div><p class="quiz-review-source">Bài ${question.l} · ${escapeHTML(getTopicLabel(question.t))} · <a class="source-link" href="sources/new-words.pdf#page=${question.p}" target="_blank" rel="noopener">PDF trang ${question.p} ↗</a></p></article>`;
      })
      .join("") ||
    '<p class="empty-state">Bạn đã trả lời đúng tất cả các câu. Không có câu sai hoặc bỏ trống.</p>';
}

/* LIST VIEW */
function renderListView() {
  const tbody = document.getElementById("vocabTableBody");
  tbody.innerHTML = currentFiltered.length
    ? currentFiltered
        .map(
          (i, index) => `
        <tr class="vocab-row">
          <td lang="ja">${escapeHTML(i.k)}<span class="source-cell" lang="vi">Bài ${i.l} · PDF tr. ${i.p}</span></td>
          <td class="kana-cell" lang="ja">${escapeHTML(i.h)}</td>
          <td class="meaning-cell">${escapeHTML(i.m)}</td>
          <td><button class="icon-btn" data-vocab-audio="${index}" aria-label="Nghe ${escapeHTML(i.k)}">🔊</button></td>
        </tr>
      `,
        )
        .join("")
    : '<tr><td colspan="4" class="empty-state">Không tìm thấy từ. Hãy đổi bộ lọc hoặc từ khóa.</td></tr>';
}
document.getElementById("vocabTableBody").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-vocab-audio]");
  if (btn) playAudio(currentFiltered[Number(btn.dataset.vocabAudio)].h);
});

function updateUI() {
  if (currentMode === "flashcard") updateCardUI();
  else if (currentMode === "list") renderListView();
  else if (currentMode === "quiz") renderQuizView();
}

/* THEME TOGGLE */
function toggleTheme() {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  document.getElementById("themeToggle").textContent = isDark ? "🌙" : "☀️";
  safeSet("dekiru_theme", newTheme);
}

// Khởi tạo Theme
const savedTheme = safeGet("dekiru_theme", "light");
document.body.setAttribute("data-theme", savedTheme);
document.getElementById("themeToggle").textContent =
  savedTheme === "dark" ? "☀️" : "🌙";

/* KEYBOARD SHORTCUTS */
document.addEventListener("keydown", (e) => {
  const target = document.activeElement;
  if (
    e.defaultPrevented ||
    e.isComposing ||
    e.ctrlKey ||
    e.altKey ||
    e.metaKey ||
    e.shiftKey
  )
    return;
  if (
    target.isContentEditable ||
    target.closest('input, select, textarea, [role="textbox"]')
  )
    return;

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

  if (e.key.toLowerCase() === "d") {
    toggleTheme();
  } else if (currentMode === "flashcard") {
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

AttemptStore.hasActive()
  .then((active) => {
    if (active) return FeatureLoader.ensure("exam");
  })
  .catch(() => {
    /* Opening Exam displays actionable errors/retry. */
  });
