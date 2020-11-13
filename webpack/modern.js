const merge = require('webpack-merge');
const baseConfig = require('./base');

const config = {
  name: 'modernConfig',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: file => (
          /node_modules/.test(file) && !/\.vue\.js|vuetify/.test(file)
        ),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    targets: {
                      esmodules: true,
                    },
                  },
                ],
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-transform-classes',
                '@babel/plugin-transform-spread',
                '@babel/plugin-proposal-object-rest-spread',
              ],
            },
          },
        ],
      },
    ],
  },
};

module.exports = merge(baseConfig, config);
