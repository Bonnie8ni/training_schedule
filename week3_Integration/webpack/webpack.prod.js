const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  jsRules, cssRules, scssRules, imageRules, svgIconRules,
} = require('./commonModuleRules');

class WebpackProdConfig {
  constructor() {
    this.config = {
      entry: {
        bundle: ['./src/js/main.js'],
      },
      output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash].js',
      },
      module: {
        rules: [
          jsRules(false),
          cssRules,
          scssRules,
          imageRules,
          svgIconRules,
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/index.html',
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production'),
        }),
      ],
    };
  }
}

module.exports = WebpackProdConfig;
