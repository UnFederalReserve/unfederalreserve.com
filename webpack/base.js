const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserUglifyJsPlugin = require('terser-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
// const Fibers = require('fibers');
const sass = require('sass');
const HtmlWebpackMultiBuildPlugin = require('./HtmlWebpackMultiBuildPlugin');
const lintPugConfig = require('../.pug-lintrc.js');

const { NODE_ENV, WEBPACK_DEV_SERVER } = process.env;
const isDevServer = WEBPACK_DEV_SERVER;
const isProd = NODE_ENV === 'production';
const isDev = NODE_ENV === 'development';
const isStag = NODE_ENV === 'staging';
const isDevStag = isDev || isStag;
const isAnalyze = process.argv.find(v => v.includes('--analyze'));
// const isHotStyles = process.argv.find(v => v.includes('--hot-styles'));
const rootFolder = `${__dirname}/..`;
const nodeModulesFolder = `${__dirname}/../node_modules`;
const env = {
  isStaging: isDevStag,
  NODE_ENV: `"${NODE_ENV}"`,
};
Object.keys(process.env).forEach((key) => {
  env[key] = JSON.stringify(process.env[key]);
});

const extractHTML = new HtmlWebpackPlugin({
  filename: isDevServer ? 'index.html' : 'index.html',
  inject: false,
  template: `${rootFolder}/index.html`,
  minify: {
    removeAttributeQuotes: true,
    collapseWhitespace: false,
    html5: true,
    minifyCSS: false,
    removeComments: true,
    removeEmptyAttributes: true,
  },
  environment: NODE_ENV,
  isLocalBuild: isDev,
  googleTagManagerId: process.env.GOOGLE_TAG_MANAGER_ID,
  frontendURL: process.env.FRONTEND_URL,
});

const config = {
  stats: 'errors-warnings',
  /**
   * You can use these too for bigger projects. For now it is 0 conf mode for me!
   */
  entry: {
    app: `${rootFolder}/src/index.js`,
  },
  output: {
    //   this one sets the path to serve
    publicPath: '/',
    filename: isDev ? 'js/[name].js' : 'js/[name].[hash].js',
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: {
      chunks: 'all', // Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
    },
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'source-map' : '',
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: {
      '/signed/**': {
        target: 'https://site-name', // ???
        secure: false,
        changeOrigin: true,
      },
    },
  },
  plugins: [
    extractHTML,
    new VueLoaderPlugin(),
    // Because for Lighthouse better to load css in js
    // new MiniCssExtractPlugin({
    // // Options similar to the same options in webpackOptions.output
    // // both options are optional
    //   filename: isDev ? 'css/[name].css' : `css/[name].${global.manualHash}.css`,
    //   chunkFilename: isDev ? 'css/[name].css' : `css/[name].${global.manualHash}.css`,
    //   ignoreOrder: true,
    // }),
    new webpack.DefinePlugin({
      'process.env': env,
      __jsVersion__: JSON.stringify(process.env.BUILD_ID),
    }),
    new HtmlWebpackMultiBuildPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-pug-lint-loader',
        enforce: 'pre',
        include: [`${rootFolder}/src`],
        options: lintPugConfig,
      }, {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [`${rootFolder}/src`],
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
      }, {
        test: /\.js$/,
        exclude: file => (
          /node_modules/.test(file) && !/\.vue\.js/.test(file)
        ),
      }, {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      }, {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     hmr: isHotStyles,
          //   },
          // },
          'style-loader',
          'css-loader',
        ],
      }, {
        test: /\.s(c|a)ss$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     hmr: isHotStyles,
          //   },
          // },
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              // fiber: Fibers,
              indentedSyntax: true, // optional
              data: '@import "~@/styles/settings/_variables.scss"',
            },
          },
        ],
      }, {
        test: /\/svg-icons\/.*?\.svg(\?.*)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: '2.0.0',
                    targets: {
                      esmodules: true,
                      ie: '11',
                    },
                  },
                ],
              ],
              plugins: ['@babel/plugin-proposal-object-rest-spread'],
            },
          }, {
            loader: 'vue-svg-loader',
            options: {
              svgo: {
                plugins: [
                  { removeDoctype: true },
                  { removeComments: true },
                  { removeViewBox: false },
                  { removeUselessDefs: false },
                  { removeEmptyAttrs: false },
                  { removeXMLNS: false },
                  { cleanupIDs: false },
                ],
                removeViewBox: false,
                removeUselessDefs: false,
              },
            },
          },
        ],
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        exclude: /svg-icons/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]',
        },
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac|m3u8|ts)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[ext]?[hash]',
        },
      }, {
        test: /\.(pdf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'docs/[name].[ext]',
        },
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',
        },
      },
    ],
  },
  resolveLoader: {
    modules: [
      nodeModulesFolder,
    ],
  },
  externals: (context, request, callback) => {
    if (/xlsx|canvg|pdfmake/.test(request)) {
      return callback(null, `commonjs ${request}`);
    }
    return callback();
  },
  resolve: {
    modules: [
      nodeModulesFolder,
    ],
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      Components: `${rootFolder}/src/components`,
      Config: `${rootFolder}/src/config`,
      Store: `${rootFolder}/src/store`,
      Router: `${rootFolder}/src/router`,
      Pages: `${rootFolder}/src/pages`,
      Helpers: `${rootFolder}/src/helpers`,
      Utils: `${rootFolder}/src/helpers/utils`,
      Mixins: `${rootFolder}/src/helpers/mixins`,
      '@': `${rootFolder}/src`,
      images: `${rootFolder}/staticdata/img`,
      Styles: `${rootFolder}/src/styles`,
      docs: `${rootFolder}/staticdata/docs`,
    },
  },
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

if (isProd || isStag) {
  config.optimization.minimizer = [
    // Enabled by default in production mode if
    // the `minimizer` option isn't overridden.
    new TerserUglifyJsPlugin({
      cache: true,
      parallel: true,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ];
}

if (isDevServer) {
  // Add callback page build for dev server
}

if (isAnalyze) {
  config.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = config;
