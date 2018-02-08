let remove = (value) => {

  let findAndDelete => (node, value) =>
    if (node.data === value) {

    } else if (value < node.data) {

    } else if (value > node.data) {

    }
  }

  //Local function encapsulates the root node from the client.
  findAndDelete(this.root, value);
};

module.exports = remove;
