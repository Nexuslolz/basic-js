const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(link) {
    if (!arguments.length) {
      this.chain.push('')
      return this
    } else {
      this.chain.push(link)
      return this
    }
  },
  removeLink(position) {
    if (typeof position === 'number' || Number.isInteger(position) || position > 1 || position < this.chain.length) {
      this.chain.splice(position - 1, 1)
      return this
    } else {
      throw new Error("You can't remove incorrect link!")
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = this.chain.map(item => `( ${item} )`).join('~~')
    this.chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
