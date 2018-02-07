const expect = require('chai').expect;
const main = require('../src/jsBinaryTree.js');

describe('JS Binary Tree - Get Function', () => {
  beforeEach(() => {
    main.post(10);
  });

  it('Get the full tree', () => {
      expect(main.get()).to.equal('10');
  });
  it('Get value from left', () => {
      main.get();
  });
  it('Get value from right', () => {
      main.get();
  });
  it('Get value from second level left', () => {
      main.get();
  });
  it('Get value from second level right', () => {
      main.get();
  });
});
