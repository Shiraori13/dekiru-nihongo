/* Scope/matrix and independent lexical expectations for the new authored bank. */
'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const ctx={window:{},Blob};vm.createContext(ctx);
for(const file of ['data/vocabulary.js','data/grammar.js','data/exams.js','assets/exam-core.js']){
  vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});Object.assign(ctx,ctx.window);
}
const words=vm.runInContext('RAW_VOCAB',ctx),units=vm.runInContext('GRAMMAR_DATA.units',ctx),chapters=vm.runInContext('GRAMMAR_DATA.chapters',ctx),papers=ctx.DEKIRU_EXAMS;
const matrix={reading:6,spelling:8,vocabulary:1,grammar:21,dialogue:7,translation:2};
const histogram=questions=>questions.reduce((out,q)=>(out[q.category]=(out[q.category]||0)+1,out),{});
assert.deepEqual(JSON.parse(JSON.stringify(histogram(papers.find(e=>e.kind==='sample').questions))),matrix);
const oldHashes=[
  ['material-adapted-01','2516cafef045cc277bf71f8d940678c11d0918d6df91e355cf2a7c96fd848720'],
  ['chapter45-1','0339037c64a470401e2eebd3217a0f9310e39c68b1a7e47933f303137f10c430'],
  ['chapter45-2','1c1eb0ea7009d1cb4ce1b75753ed93696639cc8abd74a0b7beccda8caf38ec33'],
  ['chapter45-3','27b7f8f1c3026be8a67538389d01a2859e2a0ef3c49fa2ff5d9ecd77692d1bf1'],
];
for(const [id,wanted] of oldHashes){
  assert.equal(crypto.createHash('sha256').update(JSON.stringify(papers.find(e=>e.id===id))).digest('hex'),wanted,id+' original content/metadata must remain unchanged');
}
const added=papers.filter(e=>e.id.startsWith('chapter67-'));
assert.equal(added.length,4);assert.equal(papers.length,8);
const expectedUnits=units.filter(u=>[6,7].includes(u.lesson));assert.equal(expectedUnits.length,18);
const allPrompts=new Set(),allIds=new Set();
for(const [i,paper] of added.entries()){
  assert.equal(paper.id,`chapter67-${i+1}`);assert.equal(paper.minutes,45);
  assert.deepEqual(Array.from(paper.lessons),[6,7]);assert.equal(paper.questions.length,45);
  assert.deepEqual(histogram(paper.questions),matrix);
  assert.deepEqual([...new Set(paper.questions.filter(q=>q.unit).map(q=>q.unit))].sort(),Array.from(expectedUnits,u=>u.id).sort());
  assert.equal(new Set(paper.questions.map(q=>`${q.lesson}:${q.topic}`)).size,6);
  const lexicalTargets=new Set(),keys=[0,0,0,0];
  for(const [j,q] of paper.questions.entries()){
    assert.equal(q.id,`c67-${i+1}-${String(j+1).padStart(2,'0')}`);
    assert(!allIds.has(q.id));allIds.add(q.id);
    const canonical=q.prompt.normalize('NFKC').replace(/\s/g,'');
    assert(!allPrompts.has(canonical),q.id+' duplicate prompt');allPrompts.add(canonical);
    assert([6,7].includes(q.lesson));assert([0,1,2].includes(q.topic));
    if(q.unit){const u=expectedUnits.find(u=>u.id===q.unit);assert(u,q.id);assert.equal(q.lesson,u.lesson,q.id);assert.equal(q.topic,u.topic,q.id);}
    keys[q.answer]++;
    assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);
    assert(q.solution.completed&&q.solution.meaning&&q.solution.rule.length>70,q.id);
    assert.equal(q.solution.options.length,4);assert(q.solution.options.every(s=>s.length>10),q.id);
    assert.equal(q.explanation,q.solution.options[q.answer],q.id);
    assert(fs.existsSync(q.source.split('#')[0]),q.id+' source');
    if(['reading','spelling'].includes(q.category)){
      const target=q.prompt.match(/「([^」]+)」/)?.[1];assert(target,q.id+' must identify lexical target');
      // The PDF explicitly marks the optional polite prefix in (お)皿/(お)さら.
      const topic=chapters.find(c=>c.id===q.lesson).topics[q.topic];
      const candidates=words.filter(w=>w.l===q.lesson&&w.t===topic)
        .flatMap(w=>w.k.includes('(お)')?[{...w,k:w.k.replace('(お)',''),h:w.h.replace('(お)','')},{...w,k:w.k.replace('(お)','お'),h:w.h.replace('(お)','お')}]:[w]);
      const word=candidates.find(w=>q.category==='reading'?w.k===target:w.h===target);
      assert(word,q.id+' lexical target belongs to the PDF lesson/topic');
      const wanted=q.category==='reading'?word.h:word.k;
      assert.equal(q.options[q.answer],wanted,q.id+' independently matched PDF headword/reading');
      assert.equal(q.source,`sources/new-words.pdf#page=${word.p}`,q.id+' actual PDF page, including topics continued onto the next page');
      assert(!lexicalTargets.has(word.k),q.id+' repeats reading/spelling headword in same paper');lexicalTargets.add(word.k);
    }
  }
  assert(keys.every(n=>n>=10&&n<=13),'balanced keys '+keys);
  assert.equal(ctx.ExamCore.validate(ctx.ExamCore.documentOf(paper)).questions.length,45);
}
assert.equal(allIds.size,180);assert.equal(allPrompts.size,180);
// Expected forms specified from the grammar rules, independently of stored keys.
const newQuestions=added.flatMap(p=>Array.from(p.questions));
for(const [id,wanted] of [
  ['c67-1-16','しませんか'],['c67-1-24','よ'],
  ['c67-2-05','でんしれんじ'],['c67-2-12','歌'],
  ['c67-3-18','枚'],['c67-3-22','いいえ、まだです'],['c67-3-28','泳いで'],
  ['c67-3-29','貸してください'],['c67-3-31','使い方'],
  ['c67-4-21','で・が'],['c67-4-28','来て（きて）'],['c67-4-32','どれ'],
  ['c67-4-35','が'],['c67-4-44','すみませんが、窓を閉めてください。'],
]){
  const q=newQuestions.find(q=>q.id===id);assert(q,id);assert.equal(q.options[q.answer],wanted,id);
}
assert(!newQuestions.find(q=>q.id==='c67-1-24').prompt.includes('Chọn よ'));
assert(!newQuestions.find(q=>q.id==='c67-2-12').options.includes('哥'));
assert(!newQuestions.find(q=>q.id==='c67-4-21').options.includes('で・を'));
// Pure grading expectations fixed independently of stored question keys.
const fixture={questions:[{answer:1},{answer:3},{answer:0},{answer:2}]};
let result=ctx.ExamCore.grade(fixture,[1,0,null,2]);
assert.equal(result.correct,2);assert.equal(result.wrong,1);assert.equal(result.skipped,1);assert.equal(result.score,'5.00');
result=ctx.ExamCore.grade(fixture,[1,3,null,2]);assert.equal(result.correct,3);assert.equal(result.score,'7.50');
console.log('PASS: 4 new papers/180 distinct questions, exact sample matrix, all18 units/6topics each, 56 PDF lexical targets, detailed aligned solutions, balanced keys, independent grading, original four papers unchanged.');
