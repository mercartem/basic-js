const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArray = [...arr];
  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] === '--discard-next' && i !== 0 && i != newArray.length-1) {
      newArray.splice(i, 2)
      break;
    }
    if (newArray[i] === '--discard-prev' && i !== 0 && i != newArray.length-1) {
      newArray.splice(i-1, 2)
      break;
    }
    if (newArray[i] === '--double-next' && i != newArray.length-1) {
      newArray[i] = arr[i+1]
    }
    if (newArray[i] === '--double-prev' && i !== 0 && i != newArray.length-1) {
      newArray[i] = arr[i-1]
    }
  }
  return newArray.filter(x => x !== '--discard-next' && x !== '--discard-prev' && x !== '--double-next' && x !== '--double-prev');
}

module.exports = {
  transform
};
