const Ship = (name : string, size : number) => {
  if (size > 10 || size < 1 || name.length < 1) return 'Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.';
  let lives = size;

  const hit = () => {
    return lives -= 1;
  }

  const getLives = () => {
    return lives;
  }

  return {name, size, hit, getLives};
}

module.exports = Ship