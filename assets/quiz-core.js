/* Pure semantic selection/grading. No DOM, storage, or search normalization. */
(() => {
  "use strict";
  const normalize = (value) =>
    String(value)
      .normalize("NFC")
      .toLocaleLowerCase("vi")
      .trim()
      .replace(/\s+/g, " ");
  const meanings = new Map();
  for (const [id, aliases, facets] of MEANING_GROUPS.groups) {
    for (const alias of aliases) {
      const key = normalize(alias);
      if (meanings.has(key) && meanings.get(key).id !== id)
        throw Error(`Nhóm nghĩa bị trùng: ${alias}`);
      meanings.set(key, { id, facets });
    }
  }
  function sense(meaning) {
    return (
      meanings.get(normalize(meaning)) || {
        id: `literal:${normalize(meaning)}`,
        facets: [],
      }
    );
  }
  function equivalent(left, right) {
    return (
      typeof left === "string" &&
      typeof right === "string" &&
      sense(left).id === sense(right).id
    );
  }
  function overlaps(left, right) {
    const a = sense(left),
      b = sense(right);
    return a.id === b.id || a.facets.some((f) => b.facets.includes(f));
  }
  const normalizeKana = (value) =>
    String(value || "")
      .normalize("NFKC")
      .trim()
      .replace(/\s+/g, " ");
  const audioKey = (value) =>
    String(value || "")
      .normalize("NFKC")
      .replace(/\((.*?)\)/g, "$1")
      .replace(/[～~]/g, "")
      .split("/")[0]
      .replace(/\s+/g, " ")
      .trim();
  const hasKanji = (word) =>
    Boolean(
      word && /[\u4e00-\u9faf\u3400-\u4dbf]/.test(word.k) && word.k !== word.h,
    );
  const formatJpOption = (word) =>
    word.k === word.h ? word.k : `${word.k}（${word.h}）`;
  function eligiblePool(mode, items) {
    return mode === "kanji-kana" ? items.filter(hasKanji) : [...items];
  }
  function correctAnswer(question, mode = "jp-vi") {
    if (mode === "vi-jp") return formatJpOption(question);
    if (mode === "kanji-kana") return question.h;
    return question.m;
  }
  function isCorrect(chosen, question, mode = "jp-vi") {
    if (typeof chosen !== "string" || !question) return false;
    if (mode === "vi-jp")
      return normalizeKana(chosen) === normalizeKana(formatJpOption(question));
    if (mode === "kanji-kana")
      return normalizeKana(chosen) === normalizeKana(question.h);
    return equivalent(chosen, question.m);
  }
  function options(question, scoped, bank, shuffle) {
    const selected = [question.m];
    // All senses of the same bare headword are unsafe distractors. They remain
    // separate study entries (e.g. 聞きます: hear / ask), never merged as answers.
    const ambiguous = bank.filter((w) => w.k === question.k).map((w) => w.m);
    const levels = [
      scoped.filter((w) => w.l === question.l && w.t === question.t),
      scoped,
      bank,
    ];
    for (const level of levels) {
      for (const word of shuffle(level)) {
        if (
          ambiguous.some((m) => overlaps(m, word.m)) ||
          selected.some((m) => overlaps(m, word.m))
        )
          continue;
        selected.push(word.m);
        if (selected.length === 4) return shuffle(selected);
      }
    }
    throw Error(
      `Không đủ 4 phương án khác nghĩa cho “${question.k}”. Hãy mở rộng phạm vi hoặc chọn từ khác.`,
    );
  }
  function optionsFor(mode, question, scoped, bank, shuffle) {
    if (!mode || mode === "jp-vi")
      return options(question, scoped, bank, shuffle);
    const levels = [
      scoped.filter((w) => w.l === question.l && w.t === question.t),
      scoped,
      bank,
    ];
    if (mode === "audio-vi") {
      const selected = [question.m];
      const qAudio = audioKey(question.h);
      const ambiguous = bank
        .filter((w) => w.k === question.k || audioKey(w.h) === qAudio)
        .map((w) => w.m);
      for (const level of levels) {
        for (const word of shuffle(level)) {
          if (
            ambiguous.some((m) => overlaps(m, word.m)) ||
            selected.some((m) => overlaps(m, word.m))
          )
            continue;
          selected.push(word.m);
          if (selected.length === 4) return shuffle(selected);
        }
      }
      throw Error(
        `Không đủ 4 phương án nghe khác nghĩa cho “${question.k}”. Hãy mở rộng phạm vi hoặc chọn từ khác.`,
      );
    }
    if (mode === "vi-jp") {
      const selected = [formatJpOption(question)];
      const chosenWords = [question];
      for (const level of levels) {
        for (const word of shuffle(level)) {
          const label = formatJpOption(word);
          if (
            selected.includes(label) ||
            chosenWords.some((s) => s.k === word.k || overlaps(s.m, word.m))
          )
            continue;
          selected.push(label);
          chosenWords.push(word);
          if (selected.length === 4) return shuffle(selected);
        }
      }
      throw Error(
        `Không đủ 4 phương án tiếng Nhật cho “${question.m}”. Hãy mở rộng phạm vi hoặc chọn từ khác.`,
      );
    }
    if (mode === "kanji-kana") {
      const selected = [question.h];
      const selectedNorm = [normalizeKana(question.h)];
      const kanaLevels = [
        scoped.filter(
          (w) => hasKanji(w) && w.l === question.l && w.t === question.t,
        ),
        scoped.filter(hasKanji),
        bank.filter(hasKanji),
        bank,
      ];
      for (const level of kanaLevels) {
        for (const word of shuffle(level)) {
          const norm = normalizeKana(word.h);
          if (word.k === question.k || selectedNorm.includes(norm)) continue;
          selected.push(word.h);
          selectedNorm.push(norm);
          if (selected.length === 4) return shuffle(selected);
        }
      }
      throw Error(
        `Không đủ 4 cách đọc Kana khác nhau cho “${question.k}”. Hãy mở rộng phạm vi hoặc chọn từ khác.`,
      );
    }
    return options(question, scoped, bank, shuffle);
  }
  window.QuizCore = {
    normalize,
    normalizeKana,
    audioKey,
    hasKanji,
    formatJpOption,
    eligiblePool,
    correctAnswer,
    isCorrect,
    sense,
    equivalent,
    overlaps,
    options,
    optionsFor,
  };
})();
