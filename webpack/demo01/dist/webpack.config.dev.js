"use strict";

// 与 parcel的不同， 配置繁琐  
//npm run build   webpack --mode = development
//一定会去根目录下找到webpack.config.js 配置文件
//  module     node中的 模块化文件  commonjs  module.exports
//  import export  es6  export defult
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  }
};