/* Grammar study and practice work offline; answers are graded only on submission. */
(() => {
  "use strict";
  const { chapters, units, questions, teForms } = GRAMMAR_DATA;
  const $ = (id) => document.getElementById(id);
  const esc = escapeHTML;
  const norm = (value) =>
    String(value)
      .normalize("NFKC")
      .replace(/[\s。、，,.!?！？]/g, "");
  const searchNorm = (value) =>
    String(value)
      .normalize("NFKC")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .toLowerCase();
  const byId = new Map(units.map((u) => [u.id, u]));
  const questionById = new Map(questions.map((q) => [q.id, q]));
  const chapter = (u) => chapters.find((c) => c.id === u.lesson);
  const label = (u) => `Bài ${u.lesson} · ${chapter(u).labels[u.topic]}`;
  const names = {
    choice: "Chọn đáp án",
    fill: "Điền dạng từ",
    order: "Sắp xếp câu",
  };
  const shuffle = (list) => {
    const result = [...list];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  const storageKey = "dekiru_grammar_v1";
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {}
  if (typeof saved !== "object" || Array.isArray(saved)) saved = {};
  const done = new Set(
    (Array.isArray(saved.done) ? saved.done : []).filter((id) => byId.has(id)),
  );
  const weak = new Set(
    (Array.isArray(saved.weak) ? saved.weak : []).filter((id) =>
      questionById.has(id),
    ),
  );
  let active = byId.get(saved.active) || units[0];
  let panel = "learn",
    session = null,
    restoredNotice = false;
  const validAnswer = GrammarCore.validAnswer;
  if (saved.session && Array.isArray(saved.session.ids)) {
    let ids = [...new Set(saved.session.ids)]
      .filter((id) => questionById.has(id))
      .slice(0, questions.length);
    if (!saved.session.submitted) {
      const safe = [];
      ids.forEach((id) => {
        if (
          safe.every((other) =>
            GrammarSupport.compatible(
              questionById.get(id),
              questionById.get(other),
            ),
          )
        )
          safe.push(id);
      });
      ids = safe;
    }
    restoredNotice = ids.length !== saved.session.ids.length;
    if (ids.length) {
      const answers = {},
        hints = {};
      ids.forEach((id) => {
        const q = questionById.get(id),
          a = saved.session.answers?.[id];
        const compatible = saved.session.versions
          ? saved.session.versions[id] === GrammarCore.fingerprint(q)
          : !GRAMMAR_DATA.legacyInvalidIds.includes(id);
        if (compatible && validAnswer(q, a)) answers[id] = a;
        else if (a !== undefined) restoredNotice = true;
        if (saved.session.hints?.[id] === true) hints[id] = true;
      });
      const kanjiHints = {};
      ids.forEach((id) => {
        if (saved.session.kanjiHints?.[id] === true) kanjiHints[id] = true;
      });
      session = {
        ids,
        answers,
        hints,
        kanjiHints,
        hintOpen: Object.fromEntries(
          ids.map((id) => [
            id,
            saved.session.hintOpen
              ? saved.session.hintOpen[id] === true
              : hints[id] === true,
          ]),
        ),
        index: Math.min(
          ids.length - 1,
          Math.max(
            0,
            Number.isInteger(saved.session.index) ? saved.session.index : 0,
          ),
        ),
        submitted: saved.session.submitted === true && !restoredNotice,
      };
    }
  }
  let optionOrders =
    saved.session?.optionOrders &&
    typeof saved.session.optionOrders === "object" &&
    !Array.isArray(saved.session.optionOrders)
      ? saved.session.optionOrders
      : {};
  const root = $("grammarMode");
  root.innerHTML = `
    <div class="grammar-hero"><div><div class="eyebrow">CHAPTER 04 — 07</div><h1>Hiểu mẫu câu.<br><span>Dùng được trong hội thoại.</span></h1><p>Ôn theo bài và chủ đề, rồi luyện từng điểm dễ nhầm.</p></div><div class="grammar-stat"><strong id="grDoneCount"></strong><span>Mục đã tự đánh dấu nắm vững</span><progress id="grMasterProgress" max="${units.length}" value="0" aria-label="Tiến độ nắm vững ngữ pháp"></progress><small>${questions.length} bài tập · 3 dạng luyện</small></div></div>
    <details class="gr-source"><summary>Nội dung được đối chiếu từ đâu?</summary><p>New words list dùng xác định bài và topic; mẫu câu đối chiếu PDF ôn speaking và đề cương chính thức Dekiru sơ cấp. Giải thích tiếng Việt, ví dụ và bài tập là phần biên soạn bổ sung. Đây là bộ ôn tập bài 4–7, không phải toàn bộ giáo trình.</p><a href="sources/new-words.pdf" target="_blank" rel="noopener">PDF từ vựng ↗</a> · <a href="sources/speaking.pdf" target="_blank" rel="noopener">PDF ôn speaking ↗</a> · <a href="https://www.dekirunihongo.jp/?page_id=100" target="_blank" rel="noopener">Đề cương Dekiru ↗</a></details>
    <div class="gr-chapters" role="group" aria-label="Lọc theo bài"><button type="button" data-gr-chapter="all" aria-pressed="true">Tất cả<span>Bài 4–7</span></button>${chapters.map((c) => `<button type="button" data-gr-chapter="${c.id}" aria-pressed="false">Bài ${c.id}<span>${esc(c.vi)}</span></button>`).join("")}</div>
    <div class="gr-filters"><label>Chủ đề<select id="grTopic"><option value="all">Tất cả chủ đề</option></select></label><label>Tìm mẫu câu<input id="grSearch" type="search" placeholder="Ví dụ: thể て, so sánh, たい…"></label><label>Trạng thái<select id="grStatus"><option value="all">Tất cả</option><option value="new">Chưa nắm vững</option><option value="done">Đã nắm vững</option><option value="weak">Cần luyện lại</option></select></label></div>
    <details class="gr-source" id="grRecap"><summary>Mẫu ôn lại và mẫu xuất hiện sớm trong bài đọc</summary><div id="grRecapContent"></div></details>
    <div class="gr-tabs" role="group" aria-label="Cách ôn ngữ pháp"><button type="button" id="grLearnTab" aria-pressed="true">01 · Học mẫu câu</button><button type="button" id="grPracticeTab" aria-pressed="false">02 · Luyện tập <span id="grSessionBadge"></span></button></div>
    <div id="grLearn" class="gr-layout"><aside class="gr-sidebar"><p id="grUnitCount" role="status"></p><div id="grUnitList"></div></aside><article id="grDetail" class="gr-detail" aria-label="Chi tiết mẫu ngữ pháp"></article></div>
    <div id="grPractice" hidden><section class="gr-setup"><div><h2>Luyện trong phạm vi đang chọn</h2><p id="grPoolLabel"></p><p class="gr-muted">Mỗi đề chọn các câu không tiết lộ trực tiếp đáp án cho nhau. Bạn có thể quay lại sửa và chỉ chấm khi nộp bài.</p></div><form id="grSetupForm"><label>Dạng bài<select id="grType"><option value="all">Trộn 3 dạng</option><option value="choice">Chọn đáp án</option><option value="fill">Điền dạng từ</option><option value="order">Sắp xếp câu</option></select></label><label>Số câu<input id="grCount" type="number" min="1" step="1" value="10" required></label><button class="gr-primary" id="grStart" type="submit">Bắt đầu</button><button id="grWeakStart" type="button">Luyện câu cần ôn</button></form><p id="grSetupError" role="alert"></p></section><div id="grAttempt"></div></div>
    <p id="grUpdateNotice" class="gr-muted" ${restoredNotice ? "" : "hidden"}>Một số câu đã được thay nội dung hoặc tách khỏi câu tiết lộ đáp án. Bài đang lưu đã được cập nhật; các câu trả lời còn phù hợp được giữ lại.</p>
    <p id="grSaveStatus" class="gr-muted" role="status"></p>`;
  let selectedChapter = "all";
  function save() {
    if (session) {
      session.versions = Object.fromEntries(
        session.ids.map((id) => [
          id,
          GrammarCore.fingerprint(questionById.get(id)),
        ]),
      );
      session.optionOrders = optionOrders;
    }
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({
          done: [...done],
          weak: [...weak],
          active: active.id,
          session,
        }),
      );
      $("grSaveStatus").textContent =
        "Tiến độ và bài đang làm được lưu trên trình duyệt này.";
    } catch {
      $("grSaveStatus").textContent =
        "Trình duyệt không lưu được tiến độ. Bạn vẫn có thể học và làm bài trong phiên này.";
    }
  }
  function filtered() {
    const query = searchNorm($("grSearch").value.trim()),
      topic = $("grTopic").value,
      status = $("grStatus").value;
    return units.filter(
      (u) =>
        (selectedChapter === "all" || u.lesson === Number(selectedChapter)) &&
        (topic === "all" || `${u.lesson}-${u.topic}` === topic) &&
        (!query ||
          searchNorm(
            [
              u.title,
              u.formula,
              u.explain,
              u.category,
              chapter(u).topics[u.topic],
              chapter(u).labels[u.topic],
            ].join(" "),
          ).includes(query)) &&
        (status === "all" ||
          (status === "done" && done.has(u.id)) ||
          (status === "new" && !done.has(u.id)) ||
          (status === "weak" &&
            questions.some((q) => q.unit === u.id && weak.has(q.id)))),
    );
  }
  function pool(onlyWeak = false) {
    const ids = new Set(filtered().map((u) => u.id)),
      type = $("grType").value;
    return questions.filter(
      (q) =>
        ids.has(q.unit) &&
        (type === "all" || q.type === type) &&
        (!onlyWeak || weak.has(q.id)),
    );
  }
  function updateStats() {
    $("grDoneCount").textContent = `${done.size} / ${units.length}`;
    $("grMasterProgress").value = done.size;
    $("grSessionBadge").textContent = session
      ? session.submitted
        ? "· Kết quả"
        : "· Đang làm"
      : "";
  }
  function updatePool() {
    const available = pool(),
      count = $("grCount"),
      limit = GrammarSupport.capacity(available);
    count.max = String(limit || 1);
    if (Number(count.value) > limit || !count.value)
      count.value = String(Math.min(10, limit) || 1);
    $("grPoolLabel").textContent =
      `${filtered().length} mục ngữ pháp · ${available.length} câu trong ngân hàng · Tối đa ${limit} câu độc lập/lượt · ${pool(true).length} câu cần ôn lại.`;
    $("grStart").disabled = !available.length;
    $("grWeakStart").disabled = !pool(true).length;
    $("grStart").textContent = session ? "Bắt đầu bài mới" : "Bắt đầu";
    $("grSetupError").textContent = "";
  }
  function renderList() {
    const list = filtered();
    const recaps = {
      4: "Ôn lại Nです, NのN, Nも, NやNなど (liệt kê, bài 3). Đoạn đọc trang 5 còn có 来ました (quá khứ, học ở bài 5) và 来てください (lời mời/yêu cầu, học ở bài 7). Không xem những mẫu xuất hiện sớm này là nội dung mới của bài 4.",
      5: "Ôn lại を chỉ đối tượng, で chỉ nơi hành động, へ chỉ hướng đến, に chỉ thời điểm; Vます nói kế hoạch. Các câu kể lại dùng những trợ từ đó cùng các dạng quá khứ mới.",
      6: "Ôn lại が好きです, Vたいです, V bỏ ます + に行きます và から chỉ lý do (bài 5); に chỉ giờ hẹn (bài 3). Chúng kết hợp với mẫu rủ, so sánh và đề xuất của bài 6.",
      7: "Ôn lại lời rủ ませんか, lời đề nghị cùng làm ましょう (bài 6); Aい + N và Aな + な + N (bài 4). Đoạn đọc trang 8 có 作って、食べましょう: thể て nối hành động “làm rồi ăn”; cách nối này sẽ được học thành mục riêng ở bài 9.",
    };
    $("grRecapContent").innerHTML = chapters
      .filter(
        (c) => selectedChapter === "all" || c.id === Number(selectedChapter),
      )
      .map((c) => `<p><strong>Bài ${c.id}:</strong> ${esc(recaps[c.id])}</p>`)
      .join("");
    $("grUnitCount").textContent =
      `${list.length} mục · ${list.filter((u) => done.has(u.id)).length} đã nắm vững`;
    if (!list.some((u) => u.id === active.id) && list.length) active = list[0];
    $("grUnitList").innerHTML = list.length
      ? list
          .map(
            (u) =>
              `<button type="button" data-gr-unit="${u.id}" aria-current="${u.id === active.id ? "true" : "false"}"><small>${esc(label(u))}</small><strong>${esc(u.title)}</strong><span lang="ja">${esc(u.formula)}</span><em>${done.has(u.id) ? "✓ Đã nắm vững" : questions.some((q) => q.unit === u.id && weak.has(q.id)) ? "↺ Cần luyện lại" : "○ Chưa đánh dấu"}</em></button>`,
          )
          .join("")
      : '<p class="gr-empty">Không có mẫu câu phù hợp. Hãy đổi bộ lọc hoặc xóa từ khóa.</p>';
    renderDetail(list.length > 0);
    updateStats();
    updatePool();
  }
  function renderDetail(hasResults = true) {
    if (!hasResults) {
      $("grDetail").innerHTML =
        '<div class="gr-empty"><h2>Chưa có mục để hiển thị</h2><p>Thử chọn tất cả bài, tất cả trạng thái và xóa từ khóa tìm kiếm.</p></div>';
      return;
    }
    const u = active,
      c = chapter(u);
    $("grDetail").innerHTML =
      `<div class="gr-detail-top"><span class="gr-tag">${esc(label(u))}</span><span>${esc(u.category)}</span></div><h2 tabindex="-1" id="grDetailTitle">${esc(u.title)}</h2><p class="gr-topic" lang="ja">${esc(c.name)} / ${esc(c.topics[u.topic])}</p><div class="gr-formula" lang="ja">${esc(u.formula)}</div><h3>Cách dùng</h3><p>${esc(u.explain)}</p><aside class="gr-note"><strong>Điểm dễ nhầm</strong><p>${esc(u.note)}</p></aside><section class="gr-example"><div class="gr-detail-top"><h3>Ví dụ luyện tập</h3><button type="button" data-gr-audio aria-label="Nghe câu ví dụ">🔊 Nghe</button></div><p lang="ja">${esc(u.example.jp)}</p><details><summary>Xem cách đọc và nghĩa</summary><p lang="ja" class="gr-kana">${esc(u.example.kana)}</p><p>${esc(u.example.vi)}</p></details></section>
    ${u.id === "g7-te" ? `<details class="gr-te-table" open><summary>Bảng chia thể て · 16 động từ</summary><div class="gr-table-scroll"><table><thead><tr><th>Từ điển</th><th>Thể て</th><th>Nhóm / quy tắc</th></tr></thead><tbody>${teForms.map(([v, k, a, h, r]) => `<tr><td lang="ja">${esc(v)}<small>${esc(k)}</small></td><td lang="ja">${esc(a)}<small>${esc(h)}</small></td><td>${esc(r)}</td></tr>`).join("")}</tbody></table></div></details>` : ""}
    <div class="gr-detail-actions"><button type="button" data-gr-done aria-pressed="${done.has(u.id)}">${done.has(u.id) ? "✓ Đã nắm vững" : "○ Đánh dấu đã nắm vững"}</button><button type="button" class="gr-primary" data-gr-drill>Luyện mẫu này (${GrammarSupport.capacity(questions.filter((q) => q.unit === u.id))} câu/lượt)</button></div><footer class="gr-citations"><strong>Đối chiếu nội dung</strong><p>Topic từ vựng: <a href="sources/new-words.pdf#page=${c.pages[u.topic]}" target="_blank" rel="noopener">trang ${c.pages[u.topic]} ↗</a>. Mẫu liên quan trong ôn speaking: ${u.pages.map((p) => `<a href="sources/speaking.pdf#page=${p}" target="_blank" rel="noopener">tr. ${p} ↗</a>`).join(" · ")}.</p><p>Ví dụ trên được biên soạn mới. N = danh từ; V = động từ; A = tính từ; “bỏ ます” = gốc của động từ dạng ます. Số trang là trang của file PDF.</p></footer>`;
  }
  function showPanel(next) {
    panel = next;
    $("grLearn").hidden = panel !== "learn";
    $("grPractice").hidden = panel !== "practice";
    $("grLearnTab").setAttribute("aria-pressed", String(panel === "learn"));
    $("grPracticeTab").setAttribute(
      "aria-pressed",
      String(panel === "practice"),
    );
    if (panel === "practice") {
      updatePool();
      renderAttempt();
    }
  }
  function answerText(q, a) {
    return GrammarCore.text(q, a);
  }
  function answered(q) {
    return GrammarCore.answered(q, session.answers[q.id]);
  }
  function correct(q) {
    return GrammarCore.correct(q, session.answers[q.id]);
  }
  function mapMarkup() {
    return session.ids
      .map((id, i) => {
        const q = questionById.get(id),
          state = session.submitted
            ? correct(q)
              ? "correct"
              : answered(q)
                ? "wrong"
                : "skipped"
            : answered(q)
              ? "answered"
              : "empty";
        const labels = {
          correct: "Đúng",
          wrong: "Sai",
          skipped: "Bỏ trống",
          answered: "Đã trả lời",
          empty: "Chưa hoàn tất",
        };
        return `<button type="button" data-gr-jump="${i}" class="gr-map-${state}" aria-label="Câu ${i + 1}: ${labels[state]}" ${i === session.index ? 'aria-current="step"' : ""}>${i + 1}<small>${{ correct: "✓", wrong: "×", skipped: "—", answered: "✓", empty: "○" }[state]}</small></button>`;
      })
      .join("");
  }
  function updateAttemptProgress() {
    const n = session.ids.filter((id) => answered(questionById.get(id))).length;
    $("grAnswered").textContent = `${n} / ${session.ids.length} câu đã trả lời`;
    $("grProgress").value = n;
    $("grMap").innerHTML = mapMarkup();
    $("grSubmit").textContent =
      `Nộp bài${n < session.ids.length ? ` · còn ${session.ids.length - n} câu chưa xong` : ""}`;
  }
  function renderAttempt(focus = false) {
    if (!session) {
      $("grAttempt").innerHTML =
        '<p class="gr-empty">Chọn phạm vi ở phía trên và bắt đầu. Kết quả sẽ chỉ rõ mẫu cần ôn lại.</p>';
      return;
    }
    if (session.submitted) {
      renderResults();
      return;
    }
    const q = questionById.get(session.ids[session.index]),
      u = byId.get(q.unit),
      a = session.answers[q.id];
    const lexical = GrammarSupport.hintsFor(q);
    const kanjiHint = `<details id="grKanjiHints" class="gr-kanji-hints" ${session.kanjiHints?.[q.id] ? "open" : ""}><summary>Gợi ý chữ Hán · cách đọc và nghĩa (${lexical.words.length} từ)</summary><p class="gr-muted">Tra từ trong đề. Động từ và tính từ được giải nghĩa theo từ gốc; bạn tự chọn dạng ngữ pháp cần dùng.</p>${lexical.words.length ? `<dl>${lexical.words.map((w) => `<div><dt lang="ja">${esc(w.word)}</dt><dd lang="ja" class="gr-kanji-reading">${esc(w.reading)}</dd><dd>${esc(w.meaning)}</dd></div>`).join("")}</dl>` : "<p>Câu này không có từ Hán cần tra trong danh sách gợi ý.</p>"}${lexical.unknown.length ? `<p class="gr-muted">Chưa có mục từ cho: ${lexical.unknown.map(esc).join("、")}.</p>` : ""}</details>`;
    const base =
      q.type === "order" ? q.tokens.map((_, i) => i) : q.options || [];
    const old = optionOrders[q.id];
    if (
      !Array.isArray(old) ||
      old.length !== base.length ||
      new Set(old).size !== base.length ||
      !old.every((o) => base.includes(o))
    )
      optionOrders[q.id] = shuffle(base);
    save();
    let input = "";
    if (q.type === "choice")
      input = `<fieldset class="gr-options"><legend class="sr-only">Chọn một đáp án</legend>${optionOrders[q.id].map((opt, i) => `<label class="gr-option"><input type="radio" name="grAnswer" value="${esc(opt)}" ${a === opt ? "checked" : ""}><span><b>${String.fromCharCode(65 + i)}</b><span lang="ja">${esc(opt)}</span></span></label>`).join("")}</fieldset>`;
    if (q.type === "fill")
      input = `<label class="gr-fill">Câu trả lời của bạn<input id="grFill" type="text" lang="ja" maxlength="300" autocomplete="off" spellcheck="false" value="${esc(a || "")}" placeholder="Nhập chữ Nhật hoặc hiragana"></label><p class="gr-muted">Chấp nhận các cách viết Kanji/kana đã liệt kê trong đáp án. Khoảng trắng, dấu câu và chữ số toàn chiều rộng được chuẩn hóa; không nhận romaji.</p>`;
    if (q.type === "order") {
      const chosen = Array.isArray(a) ? a : [];
      input = `<p class="gr-muted">Chọn các mảnh theo thứ tự. Bấm mảnh đã chọn để bỏ ra; cần dùng hết các mảnh.</p><div class="gr-order-answer" aria-label="Câu đang ghép">${chosen.length ? chosen.map((n, i) => `<button type="button" data-gr-remove="${i}" lang="ja" aria-label="Bỏ mảnh ${esc(q.tokens[n])}">${esc(q.tokens[n])} <small>×</small></button>`).join("") : "<span>Ghép câu của bạn tại đây…</span>"}</div><div class="gr-token-bank">${optionOrders[q.id].map((n) => `<button type="button" data-gr-token="${n}" lang="ja" ${chosen.includes(n) ? "disabled" : ""}>${esc(q.tokens[n])}</button>`).join("")}</div>`;
    }
    $("grAttempt").innerHTML =
      `<section class="gr-session"><div class="gr-detail-top"><strong id="grAnswered"></strong><span>Đáp án chưa được chấm</span></div><progress id="grProgress" max="${session.ids.length}" value="0" aria-label="Số câu đã trả lời"></progress><nav id="grMap" class="gr-question-map" aria-label="Chuyển câu hỏi"></nav><div class="gr-question"><div class="gr-detail-top"><span class="gr-tag">Câu ${session.index + 1} · ${names[q.type]}</span><span>${esc(label(u))}</span></div><h2 id="grQuestionTitle" tabindex="-1">${esc(q.prompt)}</h2>${kanjiHint}${input}<button type="button" class="gr-hint-toggle" data-gr-hint aria-expanded="${!!session.hintOpen?.[q.id]}">${session.hintOpen?.[q.id] ? "Ẩn" : "Xem"} gợi ý ngữ pháp</button><p class="gr-hint" id="grHint" ${session.hintOpen?.[q.id] ? "" : "hidden"}>${esc(q.hint)}</p><div class="gr-question-actions"><button type="button" data-gr-prev ${session.index === 0 ? "disabled" : ""}>← Câu trước</button><button type="button" data-gr-clear>Xóa trả lời</button><button type="button" data-gr-next ${session.index === session.ids.length - 1 ? "disabled" : ""}>Câu sau →</button></div></div><div class="gr-submit-row"><span class="gr-muted">Bộ lọc chỉ áp dụng khi bắt đầu bài mới. Bài đang làm được giữ nguyên.</span><button type="button" id="grSubmit" class="gr-primary" data-gr-submit></button></div></section>`;
    updateAttemptProgress();
    if (focus) $("grQuestionTitle").focus({ preventScroll: true });
  }
  function renderResults() {
    const list = session.ids.map((id) => questionById.get(id));
    const right = list.filter(correct),
      skipped = list.filter((q) => !answered(q)),
      wrong = list.length - right.length - skipped.length;
    const needs = list.filter((q) => !correct(q));
    $("grAttempt").innerHTML =
      `<section class="gr-results"><div class="gr-result-header"><div><div class="eyebrow">KẾT QUẢ BÀI LUYỆN</div><h2 tabindex="-1" id="grResultTitle">${right.length} / ${list.length} câu đúng</h2><p>Đúng ${right.length} · Sai ${wrong} · Bỏ trống ${skipped.length} · ${Math.round((right.length / list.length) * 100)}%</p><p class="gr-muted">${Object.values(session.hints).filter(Boolean).length} câu đã mở gợi ý. Kết quả không tự đánh dấu nắm vững.</p></div><div class="gr-result-actions"><button type="button" data-gr-retry class="gr-primary" ${needs.length ? "" : "disabled"}>Luyện lại ${needs.length} câu sai / bỏ trống</button><button type="button" data-gr-again>Làm lại toàn bộ</button></div></div><div class="gr-weak-summary"><strong>Mẫu cần ôn</strong><p>${needs.length ? [...new Set(needs.map((q) => q.unit))].map((id) => `<button type="button" data-gr-review-unit="${id}">${esc(byId.get(id).title)}</button>`).join(" ") : "Bạn đã trả lời đúng toàn bộ bài này. Hãy thử một topic khác."}</p></div><div class="gr-review-list">${list
        .map((q, i) => {
          const ok = correct(q),
            missing = !answered(q),
            u = byId.get(q.unit),
            value = answerText(q, session.answers[q.id]);
          return `<article class="gr-review ${ok ? "is-correct" : missing ? "is-skipped" : "is-wrong"}"><div class="gr-detail-top"><strong>Câu ${i + 1} · ${ok ? "✓ Đúng" : missing ? "— Chưa hoàn tất" : "× Sai"}</strong><span>${esc(label(u))}</span></div><h3>${esc(q.prompt)}</h3><p>Bạn trả lời: <span lang="ja">${esc(value || "Chưa trả lời")}</span>${missing && value ? " (câu ghép chưa đủ mảnh)" : ""}</p><p class="gr-correct-answer">Đáp án${q.type === "order" ? " tham khảo" : ""}: <strong lang="ja">${esc(q.answer)}</strong></p>${q.answers?.length > 1 ? `<details><summary>Các cách viết được chấp nhận</summary><p lang="ja">${q.answers.map(esc).join(" / ")}</p></details>` : ""}<p>${esc(q.explanation)}</p><button type="button" data-gr-review-unit="${u.id}">Ôn lại: ${esc(u.title)}</button></article>`;
        })
        .join("")}</div></section>`;
  }
  function start(items, confirmed = false) {
    if (session && !session.submitted && !confirmed) {
      StudyDialogs.replace({
        message: "Bài ngữ pháp chưa nộp sẽ được thay nếu bạn bắt đầu bài mới.",
        onReplace: () => start(items, true),
        onContinue: () => {
          if (panel !== "practice") {
            showPanel("practice");
            $("grQuestionTitle")?.focus();
          }
        },
      });
      return;
    }
    if (!items.length) return;
    const selected = GrammarSupport.plan(items);
    session = {
      ids: selected.map((q) => q.id),
      answers: {},
      hints: {},
      kanjiHints: {},
      hintOpen: {},
      index: 0,
      submitted: false,
    };
    optionOrders = {};
    save();
    updateStats();
    showPanel("practice");
    $("grQuestionTitle").focus();
  }
  function selectUnit(id) {
    StudyAudio.stop();
    active = byId.get(id);
    save();
    renderList();
    showPanel("learn");
    $("grDetailTitle")?.focus({ preventScroll: true });
  }
  function refreshTopics() {
    $("grTopic").innerHTML =
      '<option value="all">Tất cả chủ đề</option>' +
      chapters
        .filter(
          (c) => selectedChapter === "all" || c.id === Number(selectedChapter),
        )
        .map((c) =>
          c.topics
            .map(
              (t, i) =>
                `<option value="${c.id}-${i}">Bài ${c.id} · ${esc(c.labels[i])} — ${esc(t)}</option>`,
            )
            .join(""),
        )
        .join("");
  }
  root.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn || btn.disabled) return;
    if (btn.hasAttribute("data-gr-chapter")) {
      selectedChapter = btn.dataset.grChapter;
      root
        .querySelectorAll("[data-gr-chapter]")
        .forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      refreshTopics();
      renderList();
      return;
    }
    if (btn.dataset.grUnit) {
      selectUnit(btn.dataset.grUnit);
      return;
    }
    if (btn.dataset.grReviewUnit) {
      selectedChapter = "all";
      root
        .querySelectorAll("[data-gr-chapter]")
        .forEach((b) =>
          b.setAttribute("aria-pressed", String(b.dataset.grChapter === "all")),
        );
      refreshTopics();
      $("grSearch").value = "";
      $("grStatus").value = "all";
      selectUnit(btn.dataset.grReviewUnit);
      return;
    }
    if (btn.id === "grLearnTab") {
      showPanel("learn");
      return;
    }
    if (btn.id === "grPracticeTab") {
      showPanel("practice");
      return;
    }
    if (btn.hasAttribute("data-gr-done")) {
      done.has(active.id) ? done.delete(active.id) : done.add(active.id);
      save();
      renderList();
      return;
    }
    if (btn.hasAttribute("data-gr-audio")) {
      playAudio(active.example.kana);
      return;
    }
    if (btn.hasAttribute("data-gr-drill")) {
      start(shuffle(questions.filter((q) => q.unit === active.id)));
      return;
    }
    if (btn.id === "grWeakStart") {
      start(shuffle(pool(true)));
      return;
    }
    if (!session) return;
    if (btn.hasAttribute("data-gr-retry")) {
      start(
        shuffle(
          session.ids
            .map((id) => questionById.get(id))
            .filter((q) => !correct(q)),
        ),
      );
      return;
    }
    if (btn.hasAttribute("data-gr-again")) {
      start(session.ids.map((id) => questionById.get(id)));
      return;
    }
    if (session.submitted) return;
    const q = questionById.get(session.ids[session.index]);
    if (btn.hasAttribute("data-gr-jump"))
      session.index = Number(btn.dataset.grJump);
    else if (btn.hasAttribute("data-gr-prev"))
      session.index = Math.max(0, session.index - 1);
    else if (btn.hasAttribute("data-gr-next"))
      session.index = Math.min(session.ids.length - 1, session.index + 1);
    else if (btn.hasAttribute("data-gr-clear")) delete session.answers[q.id];
    else if (btn.hasAttribute("data-gr-token")) {
      const a = session.answers[q.id] || [];
      const n = Number(btn.dataset.grToken);
      if (!a.includes(n)) session.answers[q.id] = [...a, n];
    } else if (btn.hasAttribute("data-gr-remove"))
      session.answers[q.id].splice(Number(btn.dataset.grRemove), 1);
    else if (btn.hasAttribute("data-gr-hint")) {
      // Remember that a hint was used even when subsequently collapsed.
      session.hints[q.id] = true;
      const hint = $("grHint");
      hint.hidden = !hint.hidden;
      session.hintOpen ??= {};
      session.hintOpen[q.id] = !hint.hidden;
      btn.setAttribute("aria-expanded", String(!hint.hidden));
      btn.textContent = hint.hidden
        ? "Xem gợi ý ngữ pháp"
        : "Ẩn gợi ý ngữ pháp";
      save();
      return;
    } else if (btn.hasAttribute("data-gr-submit")) {
      session.submitted = true;
      session.ids.forEach((id) => {
        correct(questionById.get(id)) ? weak.delete(id) : weak.add(id);
      });
      save();
      updateStats();
      renderList();
      renderAttempt();
      $("grResultTitle").focus();
      return;
    } else return;
    save();
    renderAttempt(true);
  });
  root.addEventListener("change", (e) => {
    if (["grTopic", "grStatus"].includes(e.target.id)) renderList();
    else if (e.target.id === "grType") updatePool();
    else if (e.target.name === "grAnswer" && session && !session.submitted) {
      session.answers[session.ids[session.index]] = e.target.value;
      save();
      updateAttemptProgress();
    }
  });
  root.addEventListener("input", (e) => {
    if (e.target.id === "grSearch") renderList();
    else if (e.target.id === "grFill" && session && !session.submitted) {
      session.answers[session.ids[session.index]] = e.target.value;
      save();
      updateAttemptProgress();
    }
  });
  root.addEventListener(
    "toggle",
    (e) => {
      if (
        e.target.id !== "grKanjiHints" ||
        !e.target.isConnected ||
        !session ||
        session.submitted
      )
        return;
      session.kanjiHints ??= {};
      session.kanjiHints[session.ids[session.index]] = e.target.open;
      save();
    },
    true,
  );
  $("grSetupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const count = Number($("grCount").value),
      available = pool();
    const limit = GrammarSupport.capacity(available);
    if (!Number.isInteger(count) || count < 1 || count > limit) {
      $("grSetupError").textContent =
        `Nhập số nguyên từ 1 đến ${limit} câu độc lập.`;
      return;
    }
    start(GrammarSupport.plan(available, count));
  });
  refreshTopics();
  renderList();
  save();
})();
