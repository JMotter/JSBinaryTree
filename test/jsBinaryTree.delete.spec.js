const expect = require('chai').expect;
const main = require('../src/jsBinaryTree.js');

describe('JS Binary Tree - Delete Function', () => {
  beforeEach(() => {
    //Init the tree by deleting all nodes.
    /*let tree = main.get();
    tree.forEach((ele) => {
      main.delete(ele);
    });*/
  });

  it('Delete of non-number returns 409', () => {
    expect(main.delete('foo')).to.eql(409);
  });
  it('Delete of non-existing node returns 409', () => {
    expect(main.post(10)).to.equal(201);
    expect(main.delete(15)).to.eql(409);
    expect(main.delete(10)).to.eql(200); //clean up
  });
  it('Delete of node without children', () => {
    expect(main.post(10)).to.equal(201);
    expect(main.delete(10)).to.eql(200);
    expect(main.get()).to.eql([null]);
  });
  it('Delete of node with a single left child', () => {
    expect(main.post(10)).to.equal(201);
    expect(main.post(8)).to.equal(201);
    expect(main.post(6)).to.equal(201);
    expect(main.delete(8)).to.eql(200);
    expect(main.get()).to.eql([6, 10]);
    expect(main.delete(6)).to.eql(200);  //clean up
    expect(main.delete(10)).to.eql(200); //clean up
  });
  it('Delete of node with a single right child', () => {
    expect(main.post(10)).to.equal(201);
    expect(main.post(12)).to.equal(201);
    expect(main.post(14)).to.equal(201);
    expect(main.delete(12)).to.eql(200);
    expect(main.get()).to.eql([10, 14]);
    expect(main.delete(14)).to.eql(200);  //clean up
    expect(main.delete(10)).to.eql(200); //clean up
  });
});
