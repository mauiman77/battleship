const Ship = require('./ship')
const Gameboard = function (name) {
  const shipCoords = []

  function getVertical (coord) {
    if (coord >= 'A' && coord <= 'J') return coord
    else return false
  }

  function getHorizontalLength (initial, size) {
    if (initial < 1 || initial > 10 || initial + size > 10) { return false }
    return [initial, initial + size - 1]
  }

  const placeShip = function (name, size, coords) {
    const shipToPlace = {
      title: name,
      length: size,
      vertical: getVertical(coords[0]),
      horizontal: getHorizontalLength(coords[1], size)
    }
    if (shipToPlace.horizontal && shipToPlace.vertical) {
      shipCoords.push(shipToPlace)
    }
  }

  const getCoords = function () {
    return shipCoords
  }

  return { name, placeShip, getCoords }
}
module.exports = Gameboard
