const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  minimizer: [
    new CssMinimizerPlugin(),
    new TerserPlugin({
      parallel: true
    })
  ]
}