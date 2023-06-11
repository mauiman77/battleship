import ui from './ui'
import Ship from './ship'
import Gameboard from './gameBoard'
import player from './player'

ui.initialSetup()

function make (gameBoard = '') {
  const board = document.createElement('div')
  board.setAttribute('id', 'board')
  board.classList.add(gameBoard)
  ui.makeGrid(board)
  return board
}

const playerBoard = Gameboard('Player')
const computerBoard = Gameboard('Computer')

const main = document.querySelector('main')
main.appendChild(make(playerBoard.name))
main.appendChild(make(computerBoard.name))

document.querySelector('#cell.A').classList.add('miss')
document.querySelector('#cell.B').classList.add('hit')
document.querySelector('#cell.C').classList.add('ship')

const submarine = Ship('Submarine', 3)

playerBoard.placeShip(submarine.name, submarine.size, ['D', 4])
playerBoard.storeShipVariable(submarine)

function colorBoard () {
  const board = document.querySelector('div#board.Player')
  const colorMe = playerBoard.getCoords()[0]
  let rightSquare
  for (let i = colorMe.horizontal[0]; i <= colorMe.horizontal[1]; i += 1) {
    const rightSquare = document.querySelector(`div.${colorMe.vertical}.N${i}`)
    rightSquare.classList.add('ship')
  }
  return rightSquare
}

colorBoard()
