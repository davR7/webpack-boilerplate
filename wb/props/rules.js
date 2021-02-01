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
  {
    test: /\.(png|jpe?g|gif)$/,
    use: [
      { 
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
          useRelativePath: true
        }
      }
    ],
  },
  {
    test: /\.m?js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', { targets: "defaults" }]
        ]
      }
    }
  }
]