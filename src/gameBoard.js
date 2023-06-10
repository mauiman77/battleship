const Ship = require('./ship')
const Gameboard = function (name) {
  const shipCoords = []
  const hitCoords = []
  const shipsOnBoard = []

  function getVertical (coord) {
    if (coord >= 'A' && coord <= 'J') return coord
    else return false
  }

  function getHorizontalLength (initial, size) {
    if (initial < 1 || initial > 10 || initial + size > 10) { return false }
    return [initial, initial + size - 1]
  }

  const receiveAttack = (vertical, horizontal) => {
    if (hitCoords.find(i => i.vert === vertical && i.horiz === horizontal)) return 'Already hit.'
    const attackCoord = { vert: vertical, horiz: horizontal }
    hitCoords.push(attackCoord)

    const lookUpShipCoords = shipCoords.find(x => x.vertical === vertical && (horizontal >= x.horizontal[0] && horizontal <= x.horizontal[1]))
    if (lookUpShipCoords) {
      const shipToHit = shipsOnBoard.find(y => y.name === lookUpShipCoords.title)
      shipToHit.hit()
    }
    return attackCoord
  }

  const getHitCoords = () => {
    return hitCoords
  }

  const placeShip = function (name, size, coords) {
    const shipToPlace = {
      title: name,
      length: size,
      vertical: getVertical(coords[0]),
      horizontal: getHorizontalLength(coords[1], size)
    }

    if (shipCoords.find(y => y.vertical === shipToPlace.vertical && (shipToPlace.horizontal[0] >= y.horizontal[0] && shipToPlace.horizontal[1] <= y.horizontal[1]))) return 'Overlaps'

    if (shipToPlace.horizontal && shipToPlace.vertical) {
      shipCoords.push(shipToPlace)
    }
  }

  const storeShipVariable = (variable) => {
    shipsOnBoard.push(variable)
  }

  const getShipsOnBoard = (name = null) => {
    if (!name) return shipsOnBoard
    const toGet = shipsOnBoard.find(o => o.name === name)
    return toGet
  }

  const getCoords = function () {
    return shipCoords
  }

  const checkSunk = (current) => current.isSunk() === true

  const allSunk = () => {
    return shipsOnBoard.every(checkSunk)
  }

  return { name, placeShip, getCoords, receiveAttack, getHitCoords, storeShipVariable, getShipsOnBoard, allSunk }
}
module.exports = Gameboard
