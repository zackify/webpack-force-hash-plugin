const { resolve } = require('path');
const webpack = require('webpack');
const KeepHashedVendorPlugin = require('../src');

const FakeEnvVar = 'commit_hashs';

module.exports = {
  context: resolve(__dirname),

  plugins: [
    new KeepHashedVendorPlugin({ name: 'vendor' }),
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
    filename: `${FakeEnvVar}.[hash].[name].js`,
    chunkFilename: `[hash].[id].chunk.js`,
    publicPath: '/',
  },
  devtool: 'inline-eval-cheap-source-map',
};
