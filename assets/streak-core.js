/* Calendar-based visit history. Each day is independent, so tabs cannot replace a counter. */
(function (root, factory) {
  const core = factory();
  if (typeof module === "object" && module.exports) module.exports = core;
  if (root) root.StreakCore = core;
})(typeof window !== "undefined" ? window : null, function () {
  "use strict";

  const prefix = "dekiru_visit_v1:";
  const dayMilliseconds = 86400000;
  const pad = (value) => String(value).padStart(2, "0");

  function dateKey(date) {
    if (!(date instanceof Date) || !Number.isFinite(date.getTime()))
      return null;
    return `${String(date.getFullYear()).padStart(4, "0")}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  }

  function ordinal(value) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value))
      return null;
    const [year, month, day] = value.split("-").map(Number);
    if (year < 1 || month < 1 || month > 12 || day < 1 || day > 31) return null;
    const date = new Date(0);
    date.setUTCHours(0, 0, 0, 0);
    date.setUTCFullYear(year, month - 1, day);
    if (
      date.getUTCFullYear() !== year ||
      date.getUTCMonth() !== month - 1 ||
      date.getUTCDate() !== day
    )
      return null;
    return Math.floor(date.getTime() / dayMilliseconds);
  }

  function offsetDate(value, offset) {
    const start = ordinal(value);
    if (start === null || !Number.isInteger(offset)) return null;
    const date = new Date((start + offset) * dayMilliseconds);
    if (date.getUTCFullYear() < 1 || date.getUTCFullYear() > 9999) return null;
    return `${String(date.getUTCFullYear()).padStart(4, "0")}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`;
  }

  function recordFor(value) {
    return ordinal(value) === null
      ? null
      : JSON.stringify({ version: 1, date: value });
  }

  function parseRecord(key, raw, today) {
    if (typeof key !== "string" || !key.startsWith(prefix)) return null;
    const value = key.slice(prefix.length);
    const day = ordinal(value);
    const current = ordinal(today);
    if (day === null || current === null || day > current) return null;
    try {
      const record = JSON.parse(raw);
      return record?.version === 1 && record.date === value ? value : null;
    } catch (_) {
      return null;
    }
  }

  function calculate(values, today) {
    const currentDay = ordinal(today);
    const dates = [...new Set(values)]
      .filter((value) => {
        const day = ordinal(value);
        return day !== null && currentDay !== null && day <= currentDay;
      })
      .sort();
    const days = dates.map(ordinal);
    const markedToday = days.at(-1) === currentDay;
    let best = 0;
    let run = 0;
    let previous = null;
    for (const day of days) {
      run = previous !== null && day === previous + 1 ? run + 1 : 1;
      best = Math.max(best, run);
      previous = day;
    }
    // Before today's visit is marked, yesterday's chain is still continuable.
    let expected = markedToday ? currentDay : currentDay - 1;
    let current = 0;
    for (let index = days.length - 1; index >= 0; index--) {
      if (days[index] !== expected) break;
      current++;
      expected--;
    }
    return {
      today,
      dates,
      markedToday,
      current,
      best,
      totalDays: dates.length,
      lastVisit: dates.at(-1) || null,
    };
  }

  return Object.freeze({
    prefix,
    dateKey,
    ordinal,
    offsetDate,
    recordFor,
    parseRecord,
    calculate,
  });
});
