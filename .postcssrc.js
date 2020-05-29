module.exports = {
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 100,
      minPixelValue: 2,
      propWhiteList: [],
    }),
  ],
}
