const { resolve } = require('path');
const webpack = require('webpack');
const ChangedVendorPlugin = require('../src');

module.exports = {
  context: resolve(__dirname),

  plugins: [
    new ChangedVendorPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
  ],

  performance: {
    hints: false,
  },
  entry: {
    main: './index.js',
    vendor: './test.js',
  },
  output: {
    path: 'dist/',
    filename: `[hash].[name].js`,
    chunkFilename: `[hash].[id].chunk.js`,
    publicPath: '/',
  },
  devtool: 'inline-eval-cheap-source-map',
};
