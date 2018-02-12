const expect = require('chai').expect;
const main = require('../src/jsBinaryTree.js');

let testResponse = [];

describe('JS Binary Tree - Post Function', () => {
  beforeEach(() => {
    //Init the tree by deleting all nodes.
    /*let tree = main.get();
    tree.forEach((ele) => {
      main.delete(ele);
    });*/
  });

  after(() => {
    //beforeEach will replace this once delete function is complete.  Until then...
    main.delete(5);
    main.delete(20);
    main.delete(15);
    main.delete(10);
  });

  it('Post a value', () => {
      const firstValue = 10;
      expect(main.post(firstValue)).to.equal(201);
      testResponse.push(firstValue);
      expect(main.get()).to.eql(testResponse);
  });
  it('Post a left value', () => {
      const secondValue = 5;
      expect(main.post(secondValue)).to.equal(201);
      testResponse.unshift(secondValue);
      expect(main.get()).to.eql(testResponse);
  });
  it('Post a right value', () => {
      const thirdValue = 15;
      expect(main.post(thirdValue)).to.equal(201);
      testResponse.push(thirdValue);
      expect(main.get()).to.eql(testResponse);
  });
  it('Cant post a duplicate', () => {
      const thirdValue = 15;
      expect(main.post(thirdValue)).to.equal(409);
      expect(main.get()).to.eql(testResponse);
  });
  it('Post to a third level', () => {
      const forthValue = 20;
      expect(main.post(forthValue)).to.equal(201);
      testResponse.push(forthValue);
      expect(main.get()).to.eql(testResponse);
  });
});
