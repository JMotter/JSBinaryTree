const expect = require('chai').expect;
const main = require('../src/jsBinaryTree.js');

describe('JS Binary Tree', () => {
  beforeEach(() => {

  });

  describe('Test POST function', () => {
    it('Post value of 10', () => {
      //main.post(10);
      //expect(window.jsBinaryTree.get(10).to.equal(true));*/

      main.get();
      main.delete();
      main.post();
      //expect(main.get()).to.equal(10);
    });
//    it('Post multiple values', () => {
      /*window.jsBinaryTree.post(10);
      window.jsBinaryTree.post(20);
      window.jsBinaryTree.post(30);
      window.jsBinaryTree.post(5);
      expect(window.jsBinaryTree.get(5).to.equal(true));
      expect(window.jsBinaryTree.get(10).to.equal(true));
      expect(window.jsBinaryTree.get(20).to.equal(true));
      expect(window.jsBinaryTree.get(30).to.equal(true));*/
//    });
  });
});
