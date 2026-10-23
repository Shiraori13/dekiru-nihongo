/* Expectations are calendar examples, independent of implementation counters. */
"use strict";
const assert = require("node:assert/strict");
const core = require("../assets/streak-core.js");
const today = "2026-10-23";

assert.equal(core.calculate([], today).current, 0);
assert.equal(core.calculate([], today).best, 0);
assert.equal(core.calculate([], today).lastVisit, null);

assert.deepEqual(core.calculate([today], today), {
  today,
  dates: [today],
  markedToday: true,
  current: 1,
  best: 1,
  totalDays: 1,
  lastVisit: today,
});
assert.equal(core.calculate([today, today, today], today).current, 1);
assert.equal(core.calculate([today, today], today).totalDays, 1);
const consecutive = core.calculate(["2026-10-22", "2026-10-21", today], today);
assert.equal(consecutive.current, 3);
assert.equal(consecutive.best, 3);
const gap = core.calculate(
  ["2026-10-18", "2026-10-19", "2026-10-20", today],
  today,
);
assert.equal(gap.current, 1);
assert.equal(gap.best, 3);
assert.equal(gap.totalDays, 4);
assert.equal(core.calculate(["2026-10-20"], today).current, 0);
assert.equal(core.calculate(["2026-10-22"], today).current, 1);
assert.equal(core.offsetDate("2026-01-01", -1), "2025-12-31");
assert.equal(core.offsetDate("2024-03-01", -1), "2024-02-29");
assert.equal(core.offsetDate("2026-03-01", -1), "2026-02-28");
assert.equal(core.offsetDate("2026-12-31", 1), "2027-01-01");
for (const value of [
  "2026-02-29",
  "2026-13-01",
  "2026-04-31",
  "0000-01-01",
  "bad",
  "2026-1-02",
  null,
]) {
  assert.equal(core.ordinal(value), null);
}
assert.equal(core.ordinal("2024-02-29") + 1, core.ordinal("2024-03-01"));
assert.equal(core.ordinal("2026-10-24") - core.ordinal(today), 1);

const key = core.prefix + today;
const record = core.recordFor(today);
assert.equal(core.parseRecord(key, record, today), today);
for (const raw of [
  "{}",
  "null",
  "broken{",
  JSON.stringify({ version: 2, date: today }),
  JSON.stringify({ version: 1, date: "2026-10-22" }),
]) {
  assert.equal(core.parseRecord(key, raw, today), null);
}
assert.equal(core.parseRecord("other:" + today, record, today), null);
assert.equal(
  core.parseRecord(
    core.prefix + "2026-10-24",
    core.recordFor("2026-10-24"),
    today,
  ),
  null,
);
assert.deepEqual(
  core.calculate(["2026-10-24", "2026-02-29", "bad", today], today).dates,
  [today],
);

// Independent date keys are commutative: a stale tab can only mark a day, never replace history.
const records = new Map();
records.set(core.prefix + "2026-10-21", core.recordFor("2026-10-21"));
records.set(core.prefix + "2026-10-22", core.recordFor("2026-10-22"));
records.set(key, record);
records.set(core.prefix + "2026-10-22", core.recordFor("2026-10-22"));
records.set(key, record);
const dates = [...records].map(([name, raw]) =>
  core.parseRecord(name, raw, today),
);
assert.equal(core.calculate(dates, today).current, 3);
assert.equal(records.size, 3);

// Test the same UTC instant in east/west local calendars; no UTC-date shortcut.
function inTimezone(timezone, read) {
  const previous = process.env.TZ;
  try {
    process.env.TZ = timezone;
    return read();
  } finally {
    if (previous === undefined) delete process.env.TZ;
    else process.env.TZ = previous;
  }
}
assert.equal(
  inTimezone("Asia/Ho_Chi_Minh", () =>
    core.dateKey(new Date("2026-10-23T18:30:00Z")),
  ),
  "2026-10-24",
);
assert.equal(
  inTimezone("America/Los_Angeles", () =>
    core.dateKey(new Date("2026-10-23T18:30:00Z")),
  ),
  "2026-10-23",
);
assert.equal(
  inTimezone(
    "America/New_York",
    () =>
      core.ordinal(core.dateKey(new Date(2026, 2, 9))) -
      core.ordinal(core.dateKey(new Date(2026, 2, 8))),
  ),
  1,
);
assert.equal(
  inTimezone(
    "America/New_York",
    () =>
      core.ordinal(core.dateKey(new Date(2026, 10, 2))) -
      core.ordinal(core.dateKey(new Date(2026, 10, 1))),
  ),
  1,
);
console.log(
  "PASS: visit streak calendar, same-day/tabs, gaps, best, invalid/future records, local midnight and DST.",
);
