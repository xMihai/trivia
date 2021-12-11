const shuffle = (array) => {
  const length = array == null ? 0 : array.length
  if (!length) return []

  let index = -1
  const lastIndex = length - 1
  const result = [...array]
  while (++index < length) {
    const rand = index + Math.floor(Math.random() * (lastIndex - index + 1))
    const value = result[rand]
    result[rand] = result[index]
    result[index] = value
  }
  return result
}

const interpolate = (str, args) => {
  const chunks = str.split('{}')
  const trimmedArgs = args.slice(0, chunks.length - 1)
  return chunks.reduce((result, chunk, i) => result + chunk + (trimmedArgs[i] || ''), '')
}

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)]

module.exports = { shuffle, interpolate, getRandomElement }
