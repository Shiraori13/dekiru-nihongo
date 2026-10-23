/* Explicit accepted forms, independent from presentation and search. */
(() => {
  "use strict";
  const normalize = (value) =>
    String(value)
      .normalize("NFKC")
      .replace(/[\s。、，,.!?！？]/g, "");
  function validAnswer(q, value) {
    if (q.type === "choice")
      return typeof value === "string" && q.options.includes(value);
    if (q.type === "fill")
      return typeof value === "string" && value.length <= 300;
    return (
      Array.isArray(value) &&
      value.every(
        (n) => Number.isInteger(n) && n >= 0 && n < q.tokens.length,
      ) &&
      new Set(value).size === value.length
    );
  }
  function text(q, value) {
    return q.type === "order" && validAnswer(q, value)
      ? value.map((i) => q.tokens[i]).join("")
      : typeof value === "string"
        ? value
        : "";
  }
  function answered(q, value) {
    return (
      validAnswer(q, value) &&
      (q.type === "order" ? value.length === q.tokens.length : !!value.trim())
    );
  }
  function correct(q, value) {
    return (
      answered(q, value) &&
      [q.answer, ...(q.answers || []), ...(q.alternatives || [])].some(
        (a) => normalize(a) === normalize(text(q, value)),
      )
    );
  }
  function fingerprint(q) {
    return JSON.stringify([
      q.type,
      q.prompt,
      q.options,
      q.tokens,
      q.answer,
      q.answers,
      q.alternatives,
    ]);
  }
  window.GrammarCore = {
    normalize,
    validAnswer,
    text,
    answered,
    correct,
    fingerprint,
  };
})();
