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

  describe('Get Function: Get full tree', () => {
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
  });
  describe('Get Function: Exact values', () => {
    it('Get an exact value on an empty tree', () => {
      expect(main.get(10)).to.equal(false);
    });
    it('Get an exact value that exists', () => {
      expect(main.post(10)).to.equal(201);
      expect(main.get(10)).to.equal(true);
      main.delete(10); //clean up until delete function is completed.
    });
    it('Get an exact value that does not exist', () => {
      expect(main.post(10)).to.equal(201);
      expect(main.get(15)).to.equal(false);
      main.delete(10); //clean up until delete function is completed.
    });
    it('Get an exact value that exists on second level right', () => {
      expect(main.post(10)).to.equal(201);
      expect(main.post(15)).to.equal(201);
      expect(main.get(15)).to.equal(true);
      main.delete(15); //clean up until delete function is completed.
      main.delete(10); //clean up until delete function is completed.
    });
    it('Get an exact value that exists on second level left', () => {
      expect(main.post(10)).to.equal(201);
      expect(main.post(5)).to.equal(201);
      expect(main.get(5)).to.equal(true);
      main.delete(5); //clean up until delete function is completed.
      main.delete(10); //clean up until delete function is completed.
    });
  })
  describe('Get Function: Min values', () => {
    it('Get min on an empty tree', () => {
      expect(main.get(null, 'min')).to.not.exist;
    });
    it('Get min on single level', () => {
      expect(main.post(10)).to.equal(201);
      expect(main.get(null, 'min')).to.equal(10);
      main.delete(10); //clean up until delete function is completed.
    });
    it('Get min when only rights', () => {
      expect(main.post(10)).to.equal(201);
      expect(main.post(15)).to.equal(201);
      expect(main.get(null, 'min')).to.equal(10);
      main.delete(15); //clean up until delete function is completed.
      main.delete(10); //clean up until delete function is completed.
    });
    it('Get min when with lefts', () => {
      expect(main.post(10)).to.equal(201);
      expect(main.post(5)).to.equal(201);
      expect(main.get(null, 'min')).to.equal(5);
      main.delete(5); //clean up until delete function is completed.
      main.delete(10); //clean up until delete function is completed.
    });
  });
});
