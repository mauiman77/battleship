const ui = require('./ui.js')

function make () {
  const board = document.createElement('div')
  board.setAttribute('id', 'board')
  ui.makeGrid(board)
  return board
}

const main = document.querySelector('main')
main.appendChild(make())
main.appendChild(make())
