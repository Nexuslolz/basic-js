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
  let arr = []
  let litera
  let count = 1

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1] && i < str.length - 1) {
      litera = str[i]
      count++
    } else {
      if (count > 1) {
        arr.push(`${count}${litera}`)
      } else if (count === 1) {
        litera = str[i]
        arr.push(`${litera}`)
      }
      litera = ''
      count = 1
    }

  }
  return arr.join('')
}

module.exports = {
  encodeLine
};
