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
function createDreamTeam(unsortedArr) {
  let result = []
  if (unsortedArr == null) {
    return false
  }
  if (unsortedArr !== []) {
    let arr = unsortedArr
    let split = []
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string' && arr[i] !== '') {
        split.push(arr[i].trim())
      }
    }
    for (let i = 0; i < split.length; i++) {
      result.push(split[i][0].toUpperCase())
    }
  } else {
    return false
  }

  return result.sort().join('')
}

module.exports = {
  createDreamTeam
};
