import test from 'node:test';
import assert from 'node:assert/strict';
import { reflectionContent, elementShares } from '../app/free-bazi/report-content.mjs';

test('element shares use available pillar counts and preserve ties', () => {
  const full = elementShares({Wood:1,Fire:3,Earth:3,Metal:0,Water:1});
  assert.equal(full.total,8);
  assert.deepEqual(full.leaders,['Fire','Earth']);
  assert.deepEqual(full.shares.map(x=>x.percent),[12.5,37.5,37.5,0,12.5]);
  const partial = elementShares({Wood:1,Fire:2,Earth:2,Metal:0,Water:1});
  assert.equal(partial.total,6);
  assert.ok(Math.abs(partial.shares.reduce((sum,x)=>sum+x.percent,0)-100)<0.001);
  assert.deepEqual(elementShares({Wood:0,Fire:0,Earth:0,Metal:0,Water:0}).leaders,[]);
});

test('disabled AI never becomes a fabricated personal interpretation', () => {
  const result = reflectionContent({status:'disabled', summary:'Ignore disabled status', strengths:['Invented trait'], reflections:['Invented question']});
  assert.equal(result.personalized, false);
  assert.equal(result.summary, null);
  assert.deepEqual(result.strengths, []);
  assert.equal(result.questions.length, 3);
  assert.ok(!JSON.stringify(result).includes('Invented'));
});
test('provider failure keeps clearly labelled general reflection prompts', () => {
  const result = reflectionContent({status:'unavailable'});
  assert.equal(result.personalized, false);
  assert.match(result.notice, /unavailable/);
});
test('available explanation uses only its supplied interpretation fields', () => {
  const result = reflectionContent({status:'available',summary:'Reflection summary',strengths:['A possible strength'],reflections:['A question?']});
  assert.equal(result.personalized, true);
  assert.equal(result.summary, 'Reflection summary');
  assert.deepEqual(result.questions, ['A question?']);
});
