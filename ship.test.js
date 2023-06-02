const shipTest = require('./ship')

describe('create various ships', () => {
  test('Boat, size 4', () => {
    expect(shipTest('Boat', 4)).toMatchObject({ name: 'Boat', size: 4 })
  })

  test('Tiny Boat, size 1', () => {
    expect(shipTest('Tiny Boat', 1)).toMatchObject({ name: 'Tiny Boat', size: 1 })
  })

  test('Big Boat, size 10', () => {
    expect(shipTest('Big Boat', 10)).toMatchObject({ name: 'Big Boat', size: 10 })
  })

  test('Illegal item: Impossible Boat, size 0', () => {
    expect(shipTest('Impossible Boat', 10)).toBe('Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.')
  })

  test('Illegal item: Negative Boat, size -5', () => {
    expect(shipTest('Neagtive Boat', 10)).toBe('Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.')
  })

  test('Illegal item: Massive Boat, size 35', () => {
    expect(shipTest('Massive Boat', 10)).toBe('Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.')
  })
})
