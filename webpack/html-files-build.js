const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';
const isStag = NODE_ENV === 'staging';
const isDevStag = isDev || isStag;
const rootFolder = `${__dirname}/..`;
const env = {
  isStaging: isDevStag,
  NODE_ENV: `"${NODE_ENV}"`,
};
Object.keys(process.env).forEach((key) => {
  env[key] = JSON.stringify(process.env[key]);
});

const minify = {
  removeAttributeQuotes: true,
  collapseWhitespace: true,
  html5: true,
  minifyCSS: true,
  removeComments: true,
  removeEmptyAttributes: true,
};

const config = {
  entry: {
    app: `${rootFolder}/webpack/prerender/stub.js`,
  },
  output: {
    //   this one sets the path to serve
    publicPath: '/',
    // filename: 'callback.html',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env,
    }),
  ],
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

module.exports = config;
