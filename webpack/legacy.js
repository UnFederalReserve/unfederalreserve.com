const merge = require('webpack-merge');
const baseConfig = require('./base');

const rootFolder = `${__dirname}/..`;
const { NODE_ENV } = process.env;
const isDev = NODE_ENV === 'development';

const config = {
  name: 'legacyConfig',
  entry: {
    app: ['@babel/polyfill', 'whatwg-fetch', `${__dirname}/legacy-polyfills.js`, `${rootFolder}/src/index.js`],
  },
  output: {
    filename: isDev ? 'js-legacy/[name].js' : 'js-legacy/[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: file => (
          /node_modules/.test(file) && /hls\.js/.test(file)
        ),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'entry',
                  },
                ],
              ],
              plugins: ['@babel/plugin-syntax-dynamic-import'],
            },
          },
        ],
      },
    ],
  },
};
module.exports = merge(baseConfig, config);
