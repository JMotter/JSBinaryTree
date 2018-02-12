let remove = function(value) {

  let findNode = (parent, node, value) => {
    if (node.data === value) {
      return {parent, node};
    } else if ((node.data > value) && (node.left)) {
      return findNode(node, node.left, value);
    } else if ((node.data < value) && (node.right)) {
      return findNode(node, node.right, value);
    } else {
      return {parent: null, node: null};
    }
  };

  let deleteWithOneChild = (parent, child) => {
    if (child.left) {
      if (parent.data > child.data) {
        parent.left = child.left;
      } else {
        parent.right = child.left;
      }
    } else {
      if (parent.data > child.data) {
        parent.left = child.right;
      } else {
        parent.right = child.right;
      }
    }
    child.data = null;
    return 200;
  }

  let deleteWithTwoChild = (parent, child) => {
    //Not implemented yet
  }

  let deleteNode = (parent, child) => {
    if (!child.left && !child.right) {
      if (parent && (parent.data > child.data)) {parent.left = null}
      if (parent && (parent.data < child.data)) {parent.right = null}
      child.data = null;
      return 200;
    } else if ((child.left && !child.right) || (!child.left && child.right)) {
      return deleteWithOneChild(parent, child);
    } else {
      return deleteWithTwoChild(parent, child);
    }
  };

  //Local function encapsulates the root node from the client.
  if (isNaN(value) || !(this.root)) {
    return 409;
  }

  let {parent, node} = findNode(null, this.root, value);
  if (!node) {
    return 409;
  } else {
    return deleteNode(parent, node);
  }
};

module.exports = remove;
