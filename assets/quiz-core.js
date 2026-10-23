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
  window.QuizCore = { normalize, sense, equivalent, overlaps, options };
})();
