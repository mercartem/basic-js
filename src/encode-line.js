const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length < 1) {
    return str;
  }
  return str.match(/(.)\1*/g).map(string => string.length > 1 ? string.length + string[0] : string[0]).join('');
}

module.exports = {
  encodeLine
};
