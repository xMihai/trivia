const { interpolate } = require('./generic')

describe('generic', () => {
  test('interpolate empty', () => {
    expect(interpolate('', [])).toBe('')
  })

  test('interpolate no arguments', () => {
    expect(interpolate('abc xyz', [])).toBe('abc xyz')
  })

  test('interpolate no placeholders', () => {
    expect(interpolate('abc xyz', ['1'])).toBe('abc xyz')
  })

  test('interpolate one argument', () => {
    expect(interpolate('{}', ['1'])).toBe('1')
    expect(interpolate('first {}', ['1'])).toBe('first 1')
    expect(interpolate('first {}--', ['1'])).toBe('first 1--')
  })

  test('interpolate five arguments', () => {
    expect(interpolate('{}{}{}{}{}', ['1', '2', '3', '4', '5'])).toBe('12345')
    expect(interpolate('first {} second {} third {} fourth {} fifth {}', ['1', '2', '3', '4', '5'])).toBe(
      'first 1 second 2 third 3 fourth 4 fifth 5'
    )
  })
})
