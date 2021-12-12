const fs = require('fs')
const prompt = require('prompt')
const getVariation = require('./common/getVariation')
const { getRandomElement } = require('./common/generic')

let rawdata = fs.readFileSync('./data/data.json')
let data = JSON.parse(rawdata)

const getAnswer = async () =>
  new Promise((resolve, reject) => {
    prompt.start()
    prompt.get(['answer'], function (err, result) {
      if (err) reject(err)
      else resolve(+result.answer)
    })
  })

const runRound = async (questionData) => {
  const variation = getVariation(questionData)
  console.log(variation.question)
  variation.answers.forEach((answer, i) => {
    console.log(`[${i + 1}] ${answer}`)
  })

  const answer = await getAnswer()

  if (variation.answers[answer - 1] === variation.correctAnswer) console.log('Correct')
  else console.log(`Wrong (${variation.correctAnswer})`)
}

const runTwelve = async () => {
  for (let i = 0; i < 10; i++) {
    await runRound(getRandomElement(data.questions))
  }
}

runTwelve()
