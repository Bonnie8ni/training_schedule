const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
  jsRules, cssRules, scssRules, imageRules, svgIconRules, htmlRules,
} = require('./commonModuleRules');

class WebpackDevConfig {
  constructor() {
    this.config = {
      devtool: 'cheap-module-eval-source-map',
      entry: {
        bundle: ['./src/js/main.js'],
      },
      output: {
        path: path.resolve(__dirname, '../dist'),
      },
      module: {
        rules: [
          jsRules(true),
          cssRules,
          scssRules,
          imageRules,
          svgIconRules,
          htmlRules,
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
      ],
      devServer: {
        hot: true,
        inline: true,
        overlay: {
          errors: true,
          warnings: false,
        },
      },
    };
  }
}

module.exports = WebpackDevConfig;
