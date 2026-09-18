import test from 'node:test';
import assert from 'node:assert/strict';
import { reflectionContent } from '../app/free-bazi/report-content.mjs';

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
