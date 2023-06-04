const gameBoardTest = require('./gameBoard')
const shipTest = require('./ship')

describe('Create board', () => {
  it('Create board called "Test"', () => {
    expect(gameBoardTest('Test')).toMatchObject({ name: 'Test' })
  })
})

describe('Place ships on board', () => {
  let boat
  let board = gameBoardTest('Ships')

  it('Place ship size 1 on board', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('Wee Boat', 1)
    board.placeShip(boat.name, boat.size, ['C', 3])
    expect(board.getCoords()).toStrictEqual([{ title: 'Wee Boat', length: 1, vertical: 'C', horizontal: [3, 3] }])
  })

  it('Place ship size 3 on board', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('Big Boat', 3)
    board.placeShip(boat.name, boat.size, ['C', 3])
    expect(board.getCoords()).toStrictEqual([{ title: 'Big Boat', length: 3, vertical: 'C', horizontal: [3, 5] }])
  })

  it('Illegal item: Place ship size 6 on board', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('Massive Boat', 6)
    board.placeShip(boat.name, boat.size, ['A', 7])
    expect(board.getCoords()).toStrictEqual([])
  })

  it('Illegal item: Place ship on illegal vertical co-ordinate', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('Far out Boat', 6)
    board.placeShip(boat.name, boat.size, ['S', 3])
    expect(board.getCoords()).toStrictEqual([])
  })
})
