const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:{
        app:'./src/index.js'
    },
    output:{
        // 出口文件 打包路径和文件名
        path:path.resolve(__dirname,'./dist'),//__dirname 获取当前文件的绝对路径
        filename:'[name].bundle.js',//webpack 5  [name] 默认 为app
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'王总嫖娼不给钱',
            template:path.resolve(__dirname,'./public/index.html'),
            filename:'index.html',
        })
    ]
}