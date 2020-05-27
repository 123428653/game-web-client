
module.exports = {
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false,
  css: {
    sourceMap: true
  },
  devServer: {
    open: true,
    proxy: {
      // 配置多个代理
      '/api': {
        target: 'http://dev.whoolala.com:8765',
        changeOrigin: true,
        ws: true
      }
    }
  }
}
