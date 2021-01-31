const path = require('path');
const option = mode !== 'build'

module.exports = {
  entry: '../app/main.js',
  mode: option ? 'development' : 'build',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  }
};