module.exports = {
  target: 'node',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'], // other stuff
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
    },
  },
}
