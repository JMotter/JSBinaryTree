let get = function(value = null, filter = null) {

  let getFullTree = (node) => {
    let tree = '';
    if (node.left) {tree += getFullTree(node.left);}
    tree += node.data + ' ';
    if (node.right) {tree += getFullTree(node.left);}
console.log('tree' + tree);
    return tree.trim();
  };

  // Request Handler
  if (value) {
      switch (filter) {
        case 'prior':
          return getPrior();
          break;
        case 'next':
          return getNext();
          break;
        default:
          return getExactValue();
          break;
      }
  } else {
      switch (filter) {
        case 'min':
          return getMin();
          break;
        case 'max':
          return getMax();
          break;
        default:
          return getFullTree(this.root);
          break;
      }
  }
};

module.exports = get;
