const { shuffle, getRandomElement, interpolate } = require('./generic')

const getQuestionVariation = (questionData) => {
  const first = getRandomElement(questionData.variations)

  const incorrectAnswers = questionData.variations
    .reduce((result, { correctAnswers }) => [...result, ...correctAnswers], [])
    .filter((answer) => !first.correctAnswers.includes(answer))

  const correctAnswer = getRandomElement(first.correctAnswers)

  return {
    question: interpolate(questionData.question, first.arguments),
    answers: shuffle([correctAnswer, incorrectAnswers[0], incorrectAnswers[1], incorrectAnswers[2]]),
    correctAnswer,
  }
}

module.exports = getQuestionVariation
