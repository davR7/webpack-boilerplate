const path = require('path');
const option = process.env.NODE_ENV !== 'build'
const devServer = require('./props/devServer')
const optimization = require('./props/optimization')
const rules = require('./props/rules')
const plugins = require('./props/plugins')

module.exports = {
  entry: './app/main.js',
  mode: option ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/bundle.js'
  },
  devServer,
  module: { rules },
  optimization,
  plugins
}