const HtmlPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  new HtmlPlugin({
    filename: 'index.html',
    title: 'Webpack Boilerplate',
    template: 'app/templates/home.hbs'
  }),
  new MiniCssExtractPlugin({
    filename: 'css/styles.css'
  })
]