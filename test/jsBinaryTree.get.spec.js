const expect = require('chai').expect;
const main = require('../src/jsBinaryTree.js');

describe('JS Binary Tree - Get Function', () => {
  beforeEach(() => {
    //Init the tree by deleting all nodes.
    /*let tree = main.get();
    tree.forEach((ele) => {
      main.delete(ele);
    });*/
  });

  it('Get an empty tree', () => {
      expect(main.get()).to.eql([null]);
  });
  it('Get the full tree', () => {
    expect(main.post(10)).to.equal(201);
    expect(main.post(20)).to.equal(201);
    expect(main.post(1)).to.equal(201);
    expect(main.get()).to.eql([1, 10, 20]);
    main.delete(1); //clean up until delete function is completed.
    main.delete(20); //clean up until delete function is completed.
    main.delete(10); //clean up until delete function is completed.
  });
  it('Get value from left', () => {
      //main.get();
  });
  it('Get value from right', () => {
      //main.get();
  });
  it('Get value from second level left', () => {
      //main.get();
  });
  it('Get value from second level right', () => {
    //  main.get();
  });
});
