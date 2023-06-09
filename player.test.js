const playerTest = require('./player')
const gameBoardTest = require('./gameBoard')

describe('Player creation and player gameboard', () => {
  let player
  let computer

  let playerBoard
  let computerBoard

  it('Create player', () => {
    expect(player = playerTest('Human', false)).toMatchObject({ name: 'Human', computer: false })
  })

  it('Create computer', () => {
    expect(player = playerTest('Computer', true)).toMatchObject({ name: 'Computer', computer: true })
  })
})

describe('Computer attacks', () => {
  let player
  let computer

  let objTest

  let playerBoard
  let computerBoard

  it('Attacks a random coordinate', () => {
    computer = playerTest('Computer', true)
    objTest = computer.randomAttack()
    expect((objTest[0] >= 'A' && objTest[0] <= 'J') && (objTest[1] >= 0 && objTest[1] <= 9)).toBe(true)
  })
})

describe('Turns', () => {
  let player
  let computer

  let objTest

  let playerBoard
  let computerBoard

  it('Turn can toggle', () => {
    player = playerTest('Human', false)
    expect(player.toggleTurn()).toBe(true)
  })

  it('Turn can toggle twice', () => {
    player = playerTest('Human', false)
    player.toggleTurn()
    expect(player.toggleTurn()).toBe(false)
  })
})
