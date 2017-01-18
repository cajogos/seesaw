SEESAW.Math = {};

/**
 * Return a random int from a given min and max value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
SEESAW.Math.randInt = function (min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};