const shipTest = require('./ship')

describe('create various ships', () => {
  it('Boat, size 4', () => {
    expect(shipTest('Boat', 4))
      .toMatchObject({ name: 'Boat', size: 4 })
  })

  it('Tiny Boat, size 1', () => {
    expect(shipTest('Tiny Boat', 1))
      .toMatchObject({ name: 'Tiny Boat', size: 1 })
  })

  it('Big Boat, size 10', () => {
    expect(shipTest('Big Boat', 10))
      .toMatchObject({ name: 'Big Boat', size: 10 })
  })

  it('Illegal item: Impossible Boat, size 0', () => {
    expect(shipTest('Impossible Boat', 0))
      .toBe('Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.')
  })

  it('Illegal item: Negative Boat, size -5', () => {
    expect(shipTest('Neagtive Boat', -5))
      .toBe('Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.')
  })

  it('Illegal item: Massive Boat, size 35', () => {
    expect(shipTest('Massive Boat', 35))
      .toBe('Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.')
  })

  it('Illegal item: No-name boat, size 5', () => {
    expect(shipTest('', 5))
      .toBe('Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.')
  })
})

describe('Test boat hit function', () => {
  let boat
  beforeEach(() => {
    boat = shipTest('Boat', 5)
  })

  it('Boat damage', () => {
    boat.hit()
    expect(boat.getLives())
      .toBe(4)
  })

  it('Multiple boat damage', () => {
    for (let i = 0; i < 4; i++) {
      boat.hit()
    }
    expect(boat.getLives())
      .toBe(1)
  })

  it('Hit until lives are 0', () => {
    for (let i = 0; i < 5; i++) {
      boat.hit()
    }
    expect(boat.getLives())
      .toBe(0)
  })
})

describe('Test if boat can sink', () => {
  let boat
  beforeEach(() => {
    boat = shipTest('Boat', 5)
  })

  it('Boat not sunk', () => {
    boat.hit()
    expect(boat.isSunk())
      .toBe(false)
  })

  it('Boat sunk', () => {
    for (let i = 0; i < 5; i++) {
      boat.hit()
    }
    expect(boat.isSunk())
      .toBe(true)
  })
})
