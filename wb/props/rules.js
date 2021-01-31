const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  {
    test: /\.html$/,
    loader: 'html-loader',
  }, 
  { 
    test: /\.hbs$/, 
    loader: "handlebars-loader" 
  },
  {
    test: /\.s?[ac]ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ],
  },
]