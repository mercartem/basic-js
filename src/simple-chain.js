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
  addLink(arg) {
    let value = String(arg)
    if (value.length < 1) {
      this.chain.push(`( )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (this.getLength() >= position && position > 0) {
      this.chain.splice(position-1,1);
    } else {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let arr = this.chain.join('~~');
    this.chain = [];
    return arr;
  }
};

module.exports = {
  chainMaker
};
