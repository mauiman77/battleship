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

  xit('Test store ship variables', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('Boat', 3)
    board.placeShip(boat.name, boat.size, ['A', 3])
    board.storeShipVariable(boat)
    expect(board.getShipsOnBoard()).toStrictEqual({})
  })
})

describe('Tests for receiving hits', () => {
  let boat
  let board = gameBoardTest('Ships')

  it('Attack a co-ordinate', () => {
    board = gameBoardTest('Ships')
    expect(board.receiveAttack('A', 3)).toMatchObject({ vert: 'A', horiz: 3 })
  })

  it('Records hit co-ordinates', () => {
    board = gameBoardTest('Ships')
    board.receiveAttack('D', 5)
    expect(board.getHitCoords()).toStrictEqual([{ vert: 'D', horiz: 5 }])
  })

  it('Records multiple hit co-ordinates', () => {
    board = gameBoardTest('Ships')
    board.receiveAttack('D', 5)
    board.receiveAttack('E', 4)
    board.receiveAttack('B', 2)
    expect(board.getHitCoords()).toStrictEqual([{ vert: 'D', horiz: 5 }, { vert: 'E', horiz: 4 }, { vert: 'B', horiz: 2 }])
  })

  it('Does not allow multiple hits on same co-ordinate', () => {
    board = gameBoardTest('Ships')
    board.receiveAttack('D', 5)
    board.receiveAttack('D', 5)
    expect(board.getHitCoords()).toStrictEqual([{ vert: 'D', horiz: 5 }])
  })

  it('Boats on hit coord lose lives', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('Boat', 3)
    board.placeShip(boat.name, boat.size, ['D', 4])
    board.storeShipVariable(boat)
    board.receiveAttack('D', 4)
    expect(boat.getLives()).toBe(2)
  })

  it('Boats on hit coord lose many lives', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('Boat', 3)
    board.placeShip(boat.name, boat.size, ['D', 4])
    board.storeShipVariable(boat)
    board.receiveAttack('D', 4)
    board.receiveAttack('D', 5)
    expect(boat.getLives()).toBe(1)
  })

  it('Boats on hit coord lose many lives', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('Boat', 3)
    board.placeShip(boat.name, boat.size, ['D', 4])
    board.storeShipVariable(boat)
    board.receiveAttack('D', 4)
    board.receiveAttack('D', 5)
    expect(boat.getLives()).toBe(1)
  })

  it('Boats can sink', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('Boat', 3)
    board.placeShip(boat.name, boat.size, ['E', 4])
    board.storeShipVariable(boat)
    board.receiveAttack('E', 4)
    board.receiveAttack('E', 5)
    board.receiveAttack('E', 6)
    expect(boat.isSunk()).toBe(true)
  })

  it('Boats don\'t sink too early', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('Boat', 3)
    board.placeShip(boat.name, boat.size, ['E', 4])
    board.storeShipVariable(boat)
    board.receiveAttack('E', 4)
    board.receiveAttack('E', 5)
    expect(boat.isSunk()).toBe(false)
  })

  it('Boats can\'t lose multiple lives from same attack coordinate', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('Boat', 3)
    board.placeShip(boat.name, boat.size, ['E', 4])
    board.storeShipVariable(boat)
    board.receiveAttack('E', 4)
    board.receiveAttack('E', 4)
    expect(boat.getLives()).toBe(2)
  })
})

describe('Check for all ships sunk on board', () => {
  let boat
  let otherBoat
  let board = gameBoardTest('Ships')

  it('Not all sunk with one on board', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('SinkMe', 3)
    board.placeShip(boat.name, boat.size, ['E', 4])
    board.storeShipVariable(boat)
    expect(board.allSunk()).toBe(false)
  })

  it('All sunk with one on board', () => {
    board = gameBoardTest('Ships')
    boat = shipTest('SinkMe', 3)
    board.placeShip(boat.name, boat.size, ['E', 4])
    board.storeShipVariable(boat)
    board.receiveAttack('E', 4)
    board.receiveAttack('E', 5)
    board.receiveAttack('E', 6)
    expect(board.allSunk()).toBe(true)
  })
})

// it('Boats can\'t lose multiple lives from same attack coordinate', () => {
//   board = gameBoardTest('Ships')
//   boat = shipTest('Boat', 3)
//   board.placeShip(boat.name, boat.size, ['E', 4])
//   board.storeShipVariable(boat)
//   expect(board.getShipsOnBoard()).toStrictEqual([])
// })
