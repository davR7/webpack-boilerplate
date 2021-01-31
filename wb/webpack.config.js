const path = require('path');
const option = process.env.NODE_ENV !== 'build'
const devServer = require('./props/devServer')
const rules = require('./props/rules')
const plugins = require('./props/plugins')

module.exports = {
  entry: './app/main.js',
  mode: option ? 'development' : 'build',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  devServer,
  module: { rules },
  plugins
}