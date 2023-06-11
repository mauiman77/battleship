import ui from './ui'

ui.initialSetup()

function make () {
  const board = document.createElement('div')
  board.setAttribute('id', 'board')
  ui.makeGrid(board)
  return board
}

const main = document.querySelector('main')
main.appendChild(make())
main.appendChild(make())

document.querySelector('#cell.A').classList.add('miss')
document.querySelector('#cell.B').classList.add('hit')
document.querySelector('#cell.C').classList.add('ship')
