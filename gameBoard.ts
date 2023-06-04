const Ship = require('./ship');

const Gameboard = (name: string) => {

  const shipCoords = [];

  function getHorizontalLength(initial: number, size: number) {
    if (initial < 1 || initial > 10 || initial + size > 10) return 'Not within gameboard boundaries.'
    return [initial, initial + size];
  }

  const placeShip = (name: string, size: number, coords) => {
    let shipToPlace = {name: name,
      vertical: coords[0], 
      horizontal: getHorizontalLength(coords[1], size)};

      shipCoords.push(shipToPlace);
  }

  const getCoords = () => {
    return shipCoords;
  }

  return { name, placeShip, getCoords };
}

module.exports = Gameboard;