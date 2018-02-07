let post = function (value) {
  if (this.root.data === null) {
    this.root.data = value;
  }
};

module.exports = post;
