const get = require('./getFunction.js');
const remove = require('./removeFunction.js');
const post = require('./postFunction.js');

let jsBinaryTree = () => {
  let node = {
    data: null,
    left: null,
    right: null
  };

  let self = {
    node: node,
    root: Object.assign({}, node)
  };

  return jsBinaryTree = {
    get: get.bind(self),
    post: post.bind(self),
    delete: remove.bind(self)
  };
};

module.exports = jsBinaryTree();
