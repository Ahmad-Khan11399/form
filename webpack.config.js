module.exports = {
  // ...
  resolve: {
    fallback: {
      buffer: require.resolve('buffer/'),
      os: require.resolve("os-browserify/browser"),
      dns: require.resolve('dns-js'),
    },
  },
};
