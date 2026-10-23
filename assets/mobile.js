/* Responsive presentation: move the original controls and preserve study state. */
(() => {
  "use strict";
  const mq = matchMedia("(max-width: 760px)"),
    compactPickers = matchMedia("(max-width: 1180px)"),
    $ = (id) => document.getElementById(id);
  const names = {
    flashcard: "Thẻ ghi nhớ",
    reading: "Luyện đọc",
    grammar: "Ngữ pháp",
    exam: "Luyện đề",
    quiz: "Kiểm tra từ vựng",
    list: "Danh sách",
    kanji: "Hán tự",
  };
  const subtitles = {
    flashcard: "Chạm thẻ để lật nghĩa.",
    reading: "Đọc theo nhịp của bạn.",
    grammar: "Học mẫu câu, luyện cách dùng.",
    exam: "45 câu mỗi đề · Chấm sau khi nộp",
    quiz: "Ôn từ vựng theo mục tiêu của bạn.",
    list: "Tra từ, cách đọc và nghĩa.",
    kanji: "Hiểu chữ, nhớ từ, luyện nét.",
  };
  const tabs = document.querySelector(".mode-tabs"),
    buttons = [...tabs.querySelectorAll("[data-mode]")],
    states = new Map();
  const compactStudyFolds = new Set(["grammar-setup", "quiz-map"]);
  let queued = false,
    navigationIsMobile = mq.matches,
    pickersAreCompact = compactPickers.matches,
    listLimit = 50,
    listFirst = null,
    listCount = 0;
  const more = document.createElement("button");
  more.id = "mobileMore";
  more.type = "button";
  more.className = "mobile-more";
  more.setAttribute("aria-haspopup", "dialog");
  more.setAttribute("aria-controls", "mobileMenu");
  more.setAttribute("aria-label", "Các chế độ khác");
  more.setAttribute("aria-expanded", "false");
  more.innerHTML =
    '<span class="mobile-nav-symbol" aria-hidden="true"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg></span><span class="mobile-more-label">Khác</span>';
  const menu = document.createElement("dialog");
  menu.id = "mobileMenu";
  menu.className = "mobile-menu";
  menu.setAttribute("aria-labelledby", "mobileMenuTitle");
  menu.innerHTML =
    '<div class="mobile-menu-head"><div><p>DEKIRU MASTER</p><h2 id="mobileMenuTitle">Bạn muốn học gì?</h2></div><button type="button" class="mobile-menu-close" aria-label="Đóng menu"><svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button></div><div class="mobile-menu-items"></div><p class="mobile-menu-note">Đổi chế độ không xóa bài đang làm.</p>';
  document.body.append(menu);
  StudyDialogs.trap(menu);
  tabs.setAttribute("aria-label", "Các chế độ học");
  buttons.forEach((b) => {
    const label = document.createElement("span");
    label.className = "mobile-tab-label";
    const symbol = document.createElement("span");
    symbol.className = "mobile-nav-symbol";
    symbol.setAttribute("aria-hidden", "true");
    symbol.append(b.querySelector(".nav-icon").cloneNode(true));
    const name = document.createElement("span");
    name.textContent = names[b.dataset.mode];
    label.append(symbol, name);
    b.append(label);
    b.setAttribute("aria-label", names[b.dataset.mode]);
  });
  more.onclick = () => {
    menu.showModal();
    more.setAttribute("aria-expanded", "true");
    menu.querySelector(".mobile-menu-close").focus();
  };
  menu.querySelector(".mobile-menu-close").onclick = () => menu.close();
  menu.addEventListener("click", (e) => {
    if (e.target === menu) {
      const r = menu.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        menu.close();
    }
  });
  menu.addEventListener("close", () => {
    more.setAttribute("aria-expanded", "false");
    if (mq.matches) more.focus({ preventScroll: true });
  });
  const crumb = $("mobileAreaName");
  function heading(parent, key) {
    const h = document.createElement("div");
    h.className = "mobile-page-heading";
    h.dataset.mobileHeading = key;
    h.innerHTML =
      '<div><p class="mobile-eyebrow">DEKIRU NIHONGO</p><h1></h1><p class="mobile-page-subtitle"></p></div><span class="mobile-heading-stat"></span>';
    parent.prepend(h);
    return h;
  }
  heading($("vocabIntro").parentElement, "vocab");
  for (const mode of ["reading", "kanji"]) heading($(mode + "Mode"), mode);
  function setText(node, value) {
    if (node && node.textContent !== value) node.textContent = value;
  }
  function fold(
    nodes,
    key,
    title,
    caption = "",
    kind = "",
    initialOpen = false,
  ) {
    nodes = nodes.filter(Boolean);
    if (!nodes.length) return null;
    if (
      nodes[0].parentElement?.classList.contains("mobile-fold-body") &&
      nodes[0].parentElement.parentElement.dataset.mobileKey === key
    )
      return nodes[0].parentElement.parentElement;
    const d = document.createElement("details");
    d.className = "mobile-fold" + (kind ? " mobile-fold--" + kind : "");
    d.dataset.mobileKey = key;
    const s = document.createElement("summary"),
      label = document.createElement("span"),
      strong = document.createElement("strong"),
      hint = document.createElement("span");
    label.className = "mobile-fold-label";
    strong.className = "mobile-fold-title";
    hint.className = "mobile-fold-caption";
    label.append(strong, hint);
    s.append(label);
    d.append(s);
    const body = document.createElement("div");
    body.className = "mobile-fold-body";
    d.append(body);
    nodes[0].before(d);
    nodes.forEach((n) => body.append(n));
    d._mobileTitle = title;
    d._mobileCaption = caption;
    d._mobileDefault = initialOpen;
    setText(strong, typeof title === "function" ? title() : title);
    setText(hint, typeof caption === "function" ? caption() : caption);
    const compact =
      compactStudyFolds.has(key) ||
      mq.matches ||
      (kind === "picker" && compactPickers.matches);
    d.open = !compact || (states.get(key) ?? initialOpen);
    d.addEventListener("toggle", () => {
      if (
        compactStudyFolds.has(key) ||
        mq.matches ||
        (d.dataset.mobilePicker === "true" && compactPickers.matches)
      )
        states.set(key, d.open);
    });
    return d;
  }
  const text = (id) => $(id)?.textContent.trim() || "";
  const selected = (id) => $(id)?.selectedOptions[0]?.textContent || "";
  const vocab = fold(
    [$("vocabFilters")],
    "vocab-filters",
    "Bài học & bộ lọc",
    () => `${selected("lessonSelect")} · ${selected("topicSelect")}`,
    "filters",
  );
  const prepared = new Set();
  function prepare(mode) {
    if (prepared.has(mode)) return;
    if (mode === "reading" && document.querySelector(".reading-sidebar")) {
      const picker = fold(
        [...document.querySelector(".reading-sidebar").children],
        "reading-picker",
        "Chọn bài đọc",
        () => text("readingTitle"),
        "picker",
      );
      picker.dataset.mobilePicker = "true";
      fold(
        [document.querySelector(".reader-controls")],
        "reading-tools",
        "Gợi ý & cỡ chữ",
        "Furigana, kana, romaji và cỡ chữ",
        "tools",
      );
      fold(
        [$("readingGlossary")?.closest(".glossary-card")],
        "reading-glossary",
        "Từ vựng trong bài",
        () => text("glossaryCount"),
        "tools",
      );
    } else if (mode === "grammar" && document.querySelector(".gr-sidebar")) {
      const picker = fold(
        [...document.querySelector(".gr-sidebar").children],
        "grammar-picker",
        "Chọn mẫu câu",
        () => text("grDetailTitle"),
        "picker",
      );
      picker.dataset.mobilePicker = "true";
      fold(
        [
          ...document.querySelectorAll(
            "#grammarMode > .gr-source, #grammarMode > .gr-chapters, #grammarMode > .gr-filters",
          ),
        ],
        "grammar-filters",
        "Bài học & chủ đề",
        () => `${text("grUnitCount")} · Chạm để đổi phạm vi`,
        "filters",
      );
    } else if (mode === "kanji" && document.querySelector(".kanji-sidebar")) {
      const picker = fold(
        [...document.querySelector(".kanji-sidebar").children],
        "kanji-picker",
        "Chọn từ Hán",
        () => `${text("kanjiWordTitle")} · ${text("kanjiWordMeaning")}`,
        "picker",
      );
      picker.dataset.mobilePicker = "true";
      fold(
        [document.querySelector(".kanji-related")],
        "kanji-related",
        "Từ khác có chữ này",
        "Mở để xem các từ liên quan",
        "tools",
      );
      const writing = [
        ...document.querySelector(".kanji-writing-grid").children,
      ];
      const writeTabs = document.createElement("div");
      writeTabs.className = "mobile-writing-tabs";
      writeTabs.setAttribute("role", "group");
      writeTabs.setAttribute("aria-label", "Cách luyện viết");
      writeTabs.innerHTML =
        '<button type="button" data-mobile-writing="0" aria-pressed="true">01 · Xem nét</button><button type="button" data-mobile-writing="1" aria-pressed="false">02 · Tự viết</button>';
      document.querySelector(".kanji-writing-grid").before(writeTabs);
      writing.forEach((n, i) => (n.dataset.mobileWritingPanel = String(i)));
      writing[0].classList.add("mobile-writing-current");
      writeTabs.onclick = (e) => {
        const b = e.target.closest("[data-mobile-writing]");
        if (!b) return;
        const i = Number(b.dataset.mobileWriting);
        writing.forEach((n, j) =>
          n.classList.toggle("mobile-writing-current", j === i),
        );
        writeTabs
          .querySelectorAll("button")
          .forEach((n) => n.setAttribute("aria-pressed", String(n === b)));
        if (i === 1) window.stopKanjiAnimation?.();
      };
    } else return;
    prepared.add(mode);
  }
  fold(
    [...$("quizQuestionNavigator").children],
    "quiz-map",
    "Đi đến câu",
    () => text("quizAnsweredLabel"),
    "map",
  );
  document.addEventListener("dekiru:feature-ready", (e) => {
    if (["grammar", "exam"].includes(e.detail))
      heading($(e.detail + "Mode"), e.detail);
    prepare(e.detail);
    schedule();
  });
  const listMore = document.createElement("div");
  listMore.className = "mobile-list-more";
  listMore.innerHTML =
    '<p role="status"></p><button type="button">Xem thêm 50 từ</button>';
  $("listMode").append(listMore);
  function updateList() {
    const rows = [...$("vocabTableBody").querySelectorAll(".vocab-row")];
    if (rows[0] !== listFirst || rows.length !== listCount) {
      listLimit = 50;
      listFirst = rows[0];
      listCount = rows.length;
    }
    rows.forEach((r, i) =>
      r.classList.toggle("mobile-list-pending", i >= listLimit),
    );
    setText(
      listMore.querySelector("p"),
      `Đang hiển thị ${Math.min(listLimit, rows.length)} / ${rows.length} từ`,
    );
    const b = listMore.querySelector("button"),
      hideButton = listLimit >= rows.length,
      hideFooter = rows.length === 0;
    if (b.hidden !== hideButton) b.hidden = hideButton;
    if (listMore.hidden !== hideFooter) listMore.hidden = hideFooter;
  }
  listMore.querySelector("button").onclick = () => {
    const next = $("vocabTableBody").querySelectorAll(".vocab-row")[listLimit];
    listLimit += 50;
    updateList();
    if (next) {
      next.tabIndex = -1;
      next.focus({ preventScroll: true });
      next.scrollIntoView({ block: "start", behavior: "instant" });
    }
  };
  function responsive() {
    navigationIsMobile = mq.matches;
    pickersAreCompact = compactPickers.matches;
    if (menu.open) menu.close();
    if (mq.matches) {
      document.querySelector("main").before(tabs);
      $("mobileAppearanceHost").append($("appearanceToggle"));
      ["flashcard", "reading", "grammar", "exam"].forEach((mode) =>
        tabs.append(buttons.find((b) => b.dataset.mode === mode)),
      );
      tabs.append(more);
      ["quiz", "list", "kanji"].forEach((mode) =>
        menu
          .querySelector(".mobile-menu-items")
          .append(buttons.find((b) => b.dataset.mode === mode)),
      );
    } else {
      $("sidebarNavigation").append(tabs);
      $("sidebarFooter").prepend($("appearanceToggle"));
      buttons.forEach((b) => tabs.append(b));
      more.remove();
    }
    document.querySelectorAll(".mobile-fold").forEach((d) => {
      const compact =
        compactStudyFolds.has(d.dataset.mobileKey) ||
        mq.matches ||
        (d.dataset.mobilePicker === "true" && compactPickers.matches);
      d.open =
        !compact ||
        (states.get(d.dataset.mobileKey) ?? d._mobileDefault ?? false);
    });
    update();
  }
  function reviews(selector, key) {
    const cards = [...document.querySelectorAll(selector)];
    cards.forEach((card, i) => {
      if (card.querySelector(":scope > .mobile-fold")) return;
      const prompt =
        card.querySelector(".ex-prompt, h3, .quiz-review-word")?.textContent ||
        "";
      const status =
        card.querySelector(
          ".ex-tag, .gr-detail-top strong, .quiz-review-meta h4",
        )?.textContent || `Câu ${i + 1}`;
      fold(
        [...card.children],
        `${key}:${prompt}`,
        status,
        prompt,
        "review",
        i === 0,
      );
    });
  }
  function update() {
    const mode = currentMode;
    if (mode === "list") updateList();
    document.body.dataset.mobileMode = mode;
    const quizActive = $("quizBox").style.display !== "none",
      examActive = $("exRun") && !$("exRun").hidden;
    document.body.classList.toggle(
      "mobile-quiz-active",
      mode === "quiz" && quizActive,
    );
    document.body.classList.toggle(
      "mobile-exam-active",
      mode === "exam" && examActive,
    );
    if (vocab.hidden !== $("vocabFilters").hidden)
      vocab.hidden = $("vocabFilters").hidden;
    document.querySelectorAll("[data-mobile-heading]").forEach((h) => {
      const m = h.dataset.mobileHeading,
        isVocab = m === "vocab",
        actual = isVocab ? mode : m;
      const hide = isVocab && !["flashcard", "quiz", "list"].includes(mode);
      if (h.hidden !== hide) h.hidden = hide;
      setText(h.querySelector("h1"), names[actual]);
      setText(h.querySelector(".mobile-page-subtitle"), subtitles[actual]);
      setText(
        h.querySelector(".mobile-heading-stat"),
        m === "reading"
          ? text("readingProgressCount") + " đã luyện"
          : m === "kanji"
            ? text("kanjiProgressCount") + " đã học"
            : m === "grammar"
              ? text("grDoneCount") + " đã nắm"
              : "",
      );
    });
    setText(crumb, names[mode]);
    more.setAttribute(
      "aria-pressed",
      String(["quiz", "list", "kanji"].includes(mode)),
    );
    setText(
      more.querySelector(".mobile-more-label"),
      ["quiz", "list", "kanji"].includes(mode) ? names[mode] : "Khác",
    );
    const paper = document.querySelector(".ex-paper");
    if (paper && !paper.querySelector(".mobile-paper-progress")) {
      const bar = document.createElement("div");
      bar.className = "mobile-paper-progress";
      bar.innerHTML =
        '<div><span></span><time aria-label="Thời gian làm đề"></time></div><progress max="45" aria-label="Số câu đã chọn trong đề"></progress>';
      paper.prepend(bar);
    }
    const bar = document.querySelector(".mobile-paper-progress");
    if (bar) {
      setText(bar.querySelector("span"), text("exAnsweredCount"));
      setText(
        bar.querySelector("time"),
        `${document.querySelector("#exClock > span")?.textContent || ""} ${text("exClockValue")}`,
      );
      bar.querySelector("progress").value =
        Number(document.querySelector(".ex-sidebar progress")?.value) || 0;
    }
    const exSidebar = document.querySelector(".ex-sidebar");
    if (exSidebar)
      fold(
        [
          ...exSidebar.querySelectorAll(
            ":scope > .ex-legend, :scope > .ex-map, :scope > #exMapStatus, :scope > [data-ex-first-empty]",
          ),
        ],
        "exam-map",
        "Bảng câu hỏi",
        () => text("exAnsweredCount"),
        "map",
      );
    const grMap = $("grMap");
    if (grMap)
      fold(
        [grMap],
        "grammar-map",
        "Đi đến câu",
        "Mở bảng số để chuyển nhanh",
        "map",
      );
    if ($("grQuestionTitle") || $("grResultTitle"))
      fold(
        [document.querySelector(".gr-setup")],
        "grammar-setup",
        "Thiết lập bài luyện",
        "Bài đang làm được giữ khi đổi bộ lọc",
        "tools",
      );
    const result = document.querySelector(".ex-result");
    if (result)
      fold(
        [...result.querySelectorAll(":scope > .ex-map, :scope > .ex-legend")],
        "exam-result-map",
        "Kết quả từng câu",
        "Mở bảng số để đến phần giải thích",
        "map",
      );
    document.querySelectorAll(".ex-card").forEach((card) => {
      const p = card.querySelector(":scope > p");
      if (p)
        fold(
          [p],
          `paper-info:${card.querySelector("h2").textContent}`,
          "Nội dung đề",
          "Xem phạm vi và lưu ý",
          "card-info",
        );
    });
    reviews(".ex-review", "exam-review");
    reviews(".gr-review", "grammar-review");
    reviews(".quiz-review-card", "quiz-review");
    document.querySelectorAll(".mobile-fold").forEach((d) => {
      setText(
        d.querySelector(":scope > summary .mobile-fold-title"),
        typeof d._mobileTitle === "function"
          ? d._mobileTitle()
          : d._mobileTitle,
      );
      setText(
        d.querySelector(":scope > summary .mobile-fold-caption"),
        typeof d._mobileCaption === "function"
          ? d._mobileCaption()
          : d._mobileCaption,
      );
    });
    // Native focus scrolling should leave room for the small mobile header.
    document.documentElement.style.setProperty(
      "--mobile-header-height",
      `${Math.ceil(document.querySelector("header").getBoundingClientRect().height)}px`,
    );
  }
  function schedule() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      update();
    });
  }
  const observer = new MutationObserver(schedule);
  observer.observe(document.querySelector("main"), {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["hidden"],
  });
  document.addEventListener("input", schedule);
  document.addEventListener("change", schedule);
  document.addEventListener("click", schedule);
  document.addEventListener(
    "click",
    (e) => {
      const jump = e.target.closest("[data-ex-jump]");
      if (mq.matches && jump && document.querySelector(".ex-result"))
        requestAnimationFrame(() => {
          update();
          const row = document.querySelector(
              `[data-ex-review="${Number(jump.dataset.exJump)}"]`,
            ),
            d = row?.querySelector(".mobile-fold");
          if (d) {
            d.open = true;
            row.scrollIntoView({ block: "start", behavior: "instant" });
          }
        });
      const b = e.target.closest(
          "[data-reading], [data-kanji-word], [data-gr-unit]",
        ),
        d = e.target.closest("[data-mobile-picker]");
      if (!(mq.matches || compactPickers.matches) || !b || !d) return;
      const mode = currentMode;
      setTimeout(() => {
        d.open = false;
        states.set(d.dataset.mobileKey, false);
        const target =
          mode === "reading"
            ? $("readingTitle")
            : mode === "kanji"
              ? $("kanjiWordTitle")
              : $("grDetailTitle");
        if (target) {
          target.tabIndex = -1;
          target.focus({ preventScroll: true });
          target.scrollIntoView({ block: "start", behavior: "instant" });
        }
        schedule();
      }, 0);
    },
    true,
  );
  window.MobileUI = {
    modeChanged() {
      if (menu.open) menu.close();
      if (mq.matches) {
        if ($("wordDetail")) $("wordDetail").hidden = true;
        window.scrollTo({ top: 0, behavior: "instant" });
      }
      update();
    },
  };
  mq.addEventListener("change", responsive);
  compactPickers.addEventListener("change", responsive);
  window.addEventListener("resize", () => {
    if (
      navigationIsMobile !== mq.matches ||
      pickersAreCompact !== compactPickers.matches
    )
      responsive();
    schedule();
  });
  window.visualViewport?.addEventListener("resize", () => {
    const editing = document.activeElement?.matches(
      "input:not([type=checkbox]):not([type=radio]),textarea,select",
    );
    document.body.classList.toggle(
      "mobile-keyboard",
      mq.matches && editing && innerHeight - visualViewport.height > 120,
    );
  });
  document.addEventListener("focusout", () =>
    document.body.classList.remove("mobile-keyboard"),
  );
  responsive();
  document.body.dataset.mobileReady = "true";
})();
