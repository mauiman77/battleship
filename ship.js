const Ship = function (name, size) {
  if (size > 10 || size < 1 || name.length < 1) { return 'Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.' }
  let lives = size
  const hit = function () {
    return lives -= 1
  }
  const getLives = function () {
    return lives
  }
  const isSunk = function () {
    return lives < 1
  }
  return { name, size, hit, getLives, isSunk }
}
module.exports = Ship
