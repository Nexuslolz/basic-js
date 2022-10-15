const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArr = arr.filter((elem) => {
    return elem !== -1
  })
  let sortArr = newArr.sort((a, b) => {
    return a - b
  })

  for (let i = 0; i < sortArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== -1) {
        arr.splice(j, 1, sortArr[i])
        i++
      }
    }
  }
  return arr
}

module.exports = {
  sortByHeight
};
