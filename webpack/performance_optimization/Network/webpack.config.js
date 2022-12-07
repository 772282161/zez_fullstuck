const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode:'production',
  // 编译入口
  entry: {
    main:'./src/index.js'
  },
  // 目标文件
  output: {
    path:path.json(__dirname,'dist/'),
    filename:'[name].js'
  },
  // dll相关配置
  plugins: [
    new webpack.DllReferencePlugin({
      context:__dirname,
      // manifest就是我们第一步中打包出来的JSON文件
      manifest:require('./dist/vendor-manifest.json'),
    })
  ]
}