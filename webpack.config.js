module.exports = {
  entry: './src/index.js',
  output: {
    path: './',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: [
          'babel'
        ],
        include: './index.js',
        query: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  }
}
