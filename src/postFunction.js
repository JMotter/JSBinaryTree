let post = function (value) {

  let localPost = (node, value) => {
    if (node.data === null) {
      node.data = value;
      return 201;
    } else if (value < node.data) {
      if (!node.left) {node.left = Object.assign({}, this.node)}
      return localPost(node.left, value);
    } else if (value > node.data) {
      if (!node.right) {node.right = Object.assign({}, this.node)}
      return localPost(node.right, value);
    } else if (value === node.data) {
      return 409;   //This tree will not accept duplicates.
    }
  }

  //The exposed interface will not require client to pass the root node.
  return localPost(this.root, value);

};
module.exports = post;
