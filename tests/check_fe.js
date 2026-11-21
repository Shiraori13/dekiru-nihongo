/* Matrix, hashtag, passage-group shuffle and independent expectations for the 7 #Thi FE papers. */
'use strict';
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');

const ctx = { window: {}, Blob };
vm.createContext(ctx);
for (const file of ['data/grammar.js', 'data/exams.js', 'assets/exam-core.js']) {
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: file });
  Object.assign(ctx, ctx.window);
}
const papers = ctx.DEKIRU_EXAMS;
const ex = ctx.ExamCore;
const units = vm.runInContext('GRAMMAR_DATA.units', ctx);
const unitIds = new Set(units.map((u) => u.id));

const sourceFe = papers.filter((p) => p.kind === 'fe-source');
const authoredFe = papers.filter((p) => p.kind === 'fe-authored');
const allFe = [...sourceFe, ...authoredFe];
assert.equal(sourceFe.length, 3);
assert.equal(authoredFe.length, 4);
assert.equal(allFe.length, 7);
assert.equal(papers.length, 15);
assert.equal(papers.reduce((sum, p) => sum + p.questions.length, 0), 571);
assert.equal(allFe.reduce((sum, p) => sum + p.questions.length, 0), 211);

const histogram = (questions) =>
  questions.reduce((out, q) => ((out[q.category] = (out[q.category] || 0) + 1), out), {});
const canon = (s) => s.normalize('NFKC').replace(/\s+/g, '');

const mockMatrix = {
  reading: 3,
  spelling: 3,
  grammar: 11,
  dialogue: 4,
  vocabulary: 6,
  comprehension: 3,
};

const nonMockPrompts = new Set(
  papers
    .filter((p) => p.kind !== 'fe-authored')
    .flatMap((p) => p.questions.map((q) => canon(q.prompt))),
);
const mockPrompts = new Set();
const allIds = new Set();

for (const paper of allFe) {
  assert.deepEqual(Array.from(paper.tags), ['Thi FE'], paper.id);
  assert.equal(paper.minutes, 30, paper.id);
  assert.deepEqual(Array.from(paper.lessons), [4, 5, 6, 7], paper.id);
  const validated = ex.validate(ex.documentOf(paper));
  assert.equal(validated.questions.length, paper.questions.length, paper.id);
  assert.deepEqual(Array.from(validated.tags), ['Thi FE'], paper.id);

  if (paper.kind === 'fe-authored') {
    assert.equal(paper.questions.length, 30, paper.id);
    assert.deepEqual(histogram(paper.questions), mockMatrix, paper.id);
  } else {
    assert([30, 31].includes(paper.questions.length), paper.id);
  }

  const keys = [0, 0, 0, 0];
  const paperPrompts = new Set();
  for (const q of paper.questions) {
    assert(!allIds.has(q.id), q.id);
    allIds.add(q.id);
    const key = canon(q.prompt);
    assert(!paperPrompts.has(key), `duplicate in ${paper.id}: ${q.prompt}`);
    paperPrompts.add(key);
    if (paper.kind === 'fe-authored') {
      assert(!mockPrompts.has(key), `duplicate mock: ${q.prompt}`);
      assert(!nonMockPrompts.has(key), `mock repeats existing: ${q.prompt}`);
      mockPrompts.add(key);
    }
    if (q.unit) assert(unitIds.has(q.unit), `${q.id}: unknown unit ${q.unit}`);
    assert.equal(q.options.length, 4, q.id);
    assert.equal(new Set(q.options.map(canon)).size, 4, q.id);
    assert(q.solution.completed && q.solution.meaning && q.solution.rule.length > 70, q.id);
    assert.equal(q.solution.options.length, 4, q.id);
    assert(q.solution.options.every((t) => t.length > 10), q.id);
    assert.equal(q.explanation, q.solution.options[q.answer], q.id);
    assert(fs.existsSync(q.source.split('#')[0]), `${q.id} source missing`);
    if (q.category === 'comprehension') {
      assert(q.passage && q.passageId && q.passageTitle, q.id);
    }
    keys[q.answer]++;
  }
  assert(keys.every((n) => n >= 6 && n <= 9), `${paper.id} unbalanced keys ${keys}`);

  // Passage questions must stay contiguous in original order at the end when shuffled.
  const n = paper.questions.length;
  const readingCount = paper.questions.filter((q) => q.passageId).length;
  const expectedTail = Array.from({ length: readingCount }, (_, i) => n - readingCount + i);
  let prev = [];
  for (let round = 0; round < 30; round++) {
    const order = ex.shuffleExamOrder(paper, prev);
    assert(ex.validOrder(order, n), paper.id);
    assert(!order.every((v, i) => v === i), paper.id);
    if (prev.length) assert(!order.every((v, i) => v === prev[i]), paper.id);
    assert.deepEqual(Array.from(order.slice(n - readingCount)), expectedTail, paper.id);
    prev = order;
  }
}

// Independent expected answers & editorial fixes verification.
const feQuestions = allFe.flatMap((p) => Array.from(p.questions));
for (const [id, wanted] of [
  ['fe-su26-re-1-01', 'らいにち'],
  ['fe-su26-re-1-17', 'どのくらい'],
  ['fe-su26-re-1-30', '私は しんじゅくへ くつを 買いに 行きました。'],
  ['fe-su26-fe-2-01', 'はんとし'],
  ['fe-su26-fe-2-24', 'コップ'],
  ['fe-su26-b5re-3-11', 'で'],
  ['fe-su26-b5re-3-28', 'よくなかったです'],
  ['fe-mock-1-01', 'にちようび'],
  ['fe-mock-1-28', 'ラーメンを食べました'],
  ['fe-mock-2-08', 'が'],
  ['fe-mock-2-28', 'およぎに行きました'],
  ['fe-mock-3-07', 'あるいて'],
  ['fe-mock-3-29', 'つくりかた'],
  ['fe-mock-4-14', 'まって'],
  ['fe-mock-4-29', '会いたいです'],
]) {
  const q = feQuestions.find((item) => item.id === id);
  assert(q, id);
  assert.equal(q.options[q.answer], wanted, id);
}

// Editorial fixes must stay applied.
assert(!feQuestions.find((q) => q.id === 'fe-su26-re-1-17').options.includes('どれくらい'));
assert(!feQuestions.find((q) => q.id === 'fe-su26-re-1-30').options.some((o) => o.includes('来周')));
assert(feQuestions.find((q) => q.id === 'fe-su26-b5re-3-11').prompt.includes('かいてください'));
assert(!feQuestions.find((q) => q.id === 'fe-mock-2-11').options.includes('食べてたいです'));

console.log('PASS: 7 #Thi FE papers (3 SU26 source 30/30/31 + 4 authored FE mock 4x30 = 211 questions), exact FE matrix, passage-preserving shuffle, balanced keys, editorial fixes and aligned 4-option solutions.');
