const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    hot: true,
    historyApiFallback: true,
    contentBase: './dist',
    stats: 'minimal',
  },
});
