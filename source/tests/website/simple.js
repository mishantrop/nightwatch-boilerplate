module.exports = {
  'Open website' : function (browser) {
    browser
      .go('https://quasi-art.ru/')
      .pause(5000)
      .end();
  }
};
