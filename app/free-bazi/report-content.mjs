const generalQuestions = [
  'In which situations do you feel most able to use your strengths?',
  'When something changes, do you tend to plan first or learn by trying?',
  'What small adjustment this week could better support what matters to you?',
];

export function elementShares(counts) {
  const names = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];
  const total = names.reduce((sum, name) => sum + counts[name], 0);
  const maximum = Math.max(...names.map(name => counts[name]));
  return {total, leaders: maximum ? names.filter(name => counts[name] === maximum) : [],
    shares: names.map(name => ({name, count:counts[name], percent:total ? counts[name] / total * 100 : 0}))};
}

export function reflectionContent(explanation) {
  const personalized = explanation.status === 'available';
  return {
    personalized,
    summary: personalized ? explanation.summary : null,
    strengths: personalized ? explanation.strengths : [],
    questions: personalized ? explanation.reflections : generalQuestions,
    notice: explanation.status === 'disabled'
      ? 'Personalized AI interpretation is not enabled yet. Your calculated chart is available above.'
      : 'Personalized AI interpretation is temporarily unavailable. Your calculated chart is unaffected.',
  };
}
