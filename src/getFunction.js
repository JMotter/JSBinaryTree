let get = function(value = null, filter = null) {

  let getFullTree = (node) => {
    if (!node) {return [];}

    let tree = [];
    if (node.left) {tree = getFullTree(node.left);}
    tree.push(node.data);
    if (node.right) {tree = tree.concat(getFullTree(node.right));}
    return tree;
  };

  let getExactValue = (value, node) => {
    if (!node) {return false;}

    if (node.data === value) {
      return true;
    } else if ((value < node.data) && (node.left)) {
      return getExactValue(value, node.left);
    } else if ((value > node.data) && (node.right)) {
      return getExactValue(value, node.right);
    }
    return false;
  }

  let getMin = (node) => {
    if (!node) {return null;}

    if (node.left) {
      return getMin(node.left);
    } else {
      return node.data;
    }
  }

  // Request Handler
  if (value) {
      switch (filter) {
        case 'prior':
          return getPrior(value);
          break;
        case 'next':
          return getNext(value);
          break;
        default:
          return getExactValue(value, this.root);
          break;
      }
  } else {
      switch (filter) {
        case 'min':
          return getMin(this.root);
          break;
        case 'max':
          return getMax(this.root);
          break;
        default:
          return getFullTree(this.root);
          break;
      }
  }
};

module.exports = get;
