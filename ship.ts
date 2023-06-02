const Ship = (name : string, size : number) => {
  if (size > 10 || size < 1 || name.length < 1) return 'Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.';
  let hits = size;

  return {name, size};
}

module.exports = Ship