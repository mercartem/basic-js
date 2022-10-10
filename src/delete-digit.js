const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let a = String(n).split('');
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    arr.push(Number(a.filter((f,j) => j !== i).join('')));
  }
  return Math.max.apply(null, arr);
}

deleteDigit(1001);

module.exports = {
  deleteDigit
};
