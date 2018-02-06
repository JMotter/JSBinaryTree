const get = require('./getFunction.js');

let jsBinaryTree = () => {
  let post = () => {console.log('posting');};
  let remove = () => {console.log('deleting');};

  return jsBinaryTree = {
    get: get,
    post: post,
    delete: remove
  };
};

module.exports = jsBinaryTree();
