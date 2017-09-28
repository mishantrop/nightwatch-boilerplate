/*
  eslint-disable
  func-names
*/

exports.command = function (url) {
  this
    .perform(() => {
      this
        .url(url);
    });

  return this;
};
