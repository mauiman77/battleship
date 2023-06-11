const Ship = function (name, size) {
  if (size > 10 || size < 1 || name.length < 1) { return 'Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.' }
  let lives = size
  let sunk = false
  const hit = function () {
    return lives--
  }
  const getLives = function () {
    return lives
  }
  const isSunk = function () {
    if (lives < 1) sunk = true
    return lives < 1
  }
  return { name, size, hit, getLives, isSunk }
}
// module.exports = Ship
export default Ship
