module.exports = [
  {
    test: /\.html$/,
    loader: 'html-loader',
  }, 
  { 
    test: /\.hbs$/, 
    loader: "handlebars-loader" 
  }
]