const gameBoardTest = require('./gameBoard')
const shipTest = require('./ship')

describe('Create board', () => {
  it('Create board called "Test"', () => {
    expect(gameBoardTest('Test')).toMatchObject({ name: 'Test' })
  })
})

describe('Place ships on board', () => {
  let boat
  const board = gameBoardTest('Ships')
  it('Place ship size 1 on board', () => {
    boat = shipTest('Wee Boat', 1)
    board.placeShip(boat, ['C', 3])
    expect(board.getCoords()).toEqual([{ name: 'Wee Boat', vertical: 'C', horizontal: [3, 3] }])
  })

  it('Place ship size 3 on board', () => {
    boat = shipTest('Big ship', 3)
    board.placeShip(boat, ['F', 6])
    expect(board.getCoords()).toEqual([{ name: 'Big Ship', vertical: 'F', horizontal: [6, 9] }])
  })
})
