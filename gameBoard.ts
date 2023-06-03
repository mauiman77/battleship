const Ship = require('./ship');

const Gameboard = (name: string) => {

  const shipCoords = [];

  const placeShip = (name: string, size: number, coords: Array<string | number>) => {
    let shipToPlace = {name: name,
      vertical: coords[0], 
      horizontal: getHorizontalLength(coords[1], size)};
  }

  return { name };
}

module.exports = Gameboard;