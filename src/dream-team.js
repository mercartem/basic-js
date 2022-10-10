const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let res = []
  for (i in members) {
    if (typeof members[i] === 'string') {
      let trimSpace = members[i].trim();
      res.push(trimSpace[0].toUpperCase())
    }
  }
  let result = res.sort().join('');
  return result;
}


module.exports = {
  createDreamTeam
};
