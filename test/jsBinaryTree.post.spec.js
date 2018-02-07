const expect = require('chai').expect;
const main = require('../src/jsBinaryTree.js');

describe('JS Binary Tree - Post Function', () => {
  beforeEach(() => {

  });

  it('Post value of 10', () => {
      main.post(10);
      expect(main.get()).to.equal('10');
  });
});
