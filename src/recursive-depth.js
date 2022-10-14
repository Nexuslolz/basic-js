const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 0;
    let newArr = arr.map((elem) => {
      if (Array.isArray(elem) && elem.length !== 0) {
        return elem
      } else if (!(Array.isArray(elem))) {
        return elem
      }
    })
    let elements = JSON.stringify(newArr).split('')
    let stack = elements.map((elem) => {
      if (elem === '[') {
        return count++
      }
    })
    return count
  }
}

module.exports = {
  DepthCalculator
};
