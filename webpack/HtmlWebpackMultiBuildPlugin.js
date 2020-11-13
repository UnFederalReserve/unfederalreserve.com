function HtmlWebpackMultiBuildPlugin(options) {
  this.options = options;
  this.js = [];
}

HtmlWebpackMultiBuildPlugin.prototype = {
  apply(compiler) {
    if (compiler.hooks) {
      // webpack 4 support
      compiler.hooks.compilation.tap('HtmlWebpackMultiBuildPlugin', (compilation) => {
        compilation.hooks.htmlWebpackPluginBeforeHtmlGeneration.tapAsync(
          'HtmlWebpackMultiBuildPlugin',
          this.beforeHtmlGeneration.bind(this),
        );
      });
    } else {
      compiler.plugin('compilation', (compilation) => {
        compilation.plugin('html-webpack-plugin-before-html-generation', this.beforeHtmlGeneration.bind(this));
      });
    }
  },

  beforeHtmlGeneration(data, cb) {
    this.js = this.js.concat(data.assets.js);
    data.assets.js = this.js;
    if (!data.plugin.options.modernScripts || !data.plugin.options.modernScripts.length) {
      data.plugin.options.modernScripts = this.js.filter(value => value.indexOf('legacy') === -1);
    }
    if (!data.plugin.options.legacyScripts || !data.plugin.options.legacyScripts.length) {
      data.plugin.options.legacyScripts = this.js.filter(value => value.indexOf('legacy') > 0);
    }
    cb(null, data);
  },
};

module.exports = HtmlWebpackMultiBuildPlugin;
