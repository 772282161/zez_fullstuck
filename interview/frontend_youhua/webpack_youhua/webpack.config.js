const path = require('path')
// js压缩  webpack 4.0手动安装，webpack5.0 内置
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:development,
  entry:{
    index:'./src/index.js',
    page:'./src/page.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    // [name] 为entry 文件作用
    filename:'[name].bundle.js',
    // [hash:8] 版本号
    chunkFilename:'[name].[hash:8].js' // 指定分离出来的代码 文件 的名称
  },
  optimization:{
    minimize:true,
    useExports:true,
    sidiEffects:true,
    splitChunks:{
      cacheGroups:{
        vendor:{
          chunks:'initial',
          test:path.resolve(__dirname,'node_modules'),
          name:'vendor',
          enforce:true
        }
      }
    }
  }
}