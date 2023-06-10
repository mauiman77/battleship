// Create div element with id 'board'
// Create array 'vertical' with characters 'A' to 'J'
// Create array 'horizontal' with with integers 0 to 9
//
// Outer Loop starting at 0, ending at 9, increment by 1
//   Inner loop starting at 0, ending at 9, increment by 1
//    Create div element with id 'cell'
//    Append class vertical[outer loop increment]
//    Append class horizontal[inner loop increment]
//    Append div cell to board
const ui = (function () {
  const vertical = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  const makeGrid = (element) => {
    for (let outer = 0; outer <= 9; outer += 1) {
      for (let inner = 0; inner <= 9; inner += 1) {
        const cell = document.createElement('div')
        cell.setAttribute('id', 'cell')
        cell.classList.add(vertical[outer])
        cell.classList.add(inner.toString())
        element.appendChild(cell)
      }
    }
    return element
  }
  return { makeGrid }
})()

function make () {
  const board = document.createElement('div')
  board.setAttribute('id', 'board')
  ui.makeGrid(board)
  return board
}

const main = document.querySelector('main')
main.appendChild(make())
main.appendChild(make())
