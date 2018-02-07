const expect = require('chai').expect;
const main = require('../src/jsBinaryTree.js');

describe('JS Binary Tree', () => {
  beforeEach(() => {
    //Placeholder
  });

  it('Tree is created', () => {
    expect(main).to.exist;
  });
  it('Get function exists', () => {
    expect(main.get).to.be.a('function');
  });
  it('Post function exists', () => {
    expect(main.post).to.be.a('function');
  });
  it('Delete function exists', () => {
    expect(main.delete).to.be.a('function');
  });
});
