var Ship = function (name, size) {
    if (size > 10 || size < 1 || name.length < 1)
        return 'Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.';
    var hits = size;
    return { name: name, size: size };
};
module.exports = Ship;
