module.exports = function(env) {
  global.manualHash = String(Math.floor(Math.random() * 1e10));
  if (process.env.WEBPACK_DEV_SERVER) {
    if (env && env.legacy) {
      return require('./webpack/legacy');
    }
    return require('./webpack/modern');
  }

  if (env && env.legacy) {
    return [
      require('./webpack/modern'),
      require('./webpack/legacy'),
      require('./webpack/html-files-build'),
    ];
  } else {
    return [
      require('./webpack/modern'),
      require('./webpack/html-files-build'),
    ];
  }

};
