var Ship = function (name, size) {
    if (size > 10 || size < 1 || name.length < 1)
        return 'Boat\'s name must have a character. Boat\'s size must be greater than 1 and less than 11.';
    var lives = size;
    var hit = function () {
        return lives -= 1;
    };
    var getLives = function () {
        return lives;
    };
    return { name: name, size: size, hit: hit, getLives: getLives };
};
module.exports = Ship;
