const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let newArr = []
  const obj = {};
  let newArr2 = []

  for (let i = 0; i < domains.length; i++) {
    for (let j = 0 ; j < domains[i].length; j++) {
      if (domains[i][j] === '.' || j === 0) {
        arr.push(domains[i].slice(j))
      }
    }
  }


  for (let i = 0; i < arr.length; i++) {
    newArr.push('.' + arr[i].split('.').reverse().join('.'))
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][newArr[i].length-1] === '.') {
      newArr2.push(newArr[i].slice(0, newArr[i].length-1))
    } else {
      newArr2.push(newArr[i])
    }
  }

  newArr2.forEach(function(a){
    obj[a] = obj[a] + 1 || 1;
  })

  return obj;
  
}

module.exports = {
  getDNSStats
};
