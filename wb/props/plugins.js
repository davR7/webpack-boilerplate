const HtmlPlugin = require('html-webpack-plugin')

module.exports = [
  new HtmlPlugin({
    filename: 'index.html',
    title: 'Webpack Boilerplate',
    template: 'app/templates/home.hbs'
  })
]