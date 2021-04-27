# webpack
1、初始化，把文件变为node模块
2、入口文件 src 创建index.html 挂载点
3、js入口文件 index.ts
4、tsconfig.json 文件

安装 babel依赖
npm install babel-loader @babel/cli @babel/core @babel/preset-env --save-dev
安装webpack依赖
npm i webpack@4.42.1 webpack-cli@3.3.11 webpack-dev-server@3.10.3 --save-dev
安装 ts 依赖
yarn add  typescript awesome-typescript-loader --save-dev
安装css 依赖
yarn add css-loader style-loader url-loader file-loader --save-dev
安装 React react-dom  不需要--save-dev
yarn add react react-dom @types/react @types/react-dom 

## 编写index.tsx文件 挂载组件 
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

## 编写组件文件 App.tsx
import React from 'react'

const App = (props)=>{
    return(
        <div>
            App
        </div>
    )
}

export default App

## 配置webpack.config.js文件
// 模块文件 向外输出 运行在webpack环境下  node模块化 用commonJS 规范
var path = require('path')
var basePath = __dirname;


module.exports={
    context: path.join(basePath, "src"),// 路径定义
    entry:[

        "./index.tsx"
    ],
    output:{
        path:path.join(basePath, "dist"),
        filename:'bundle.js'
    }
}

## 配置node运行
修改package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build":"webpack --model=development",
    "dev":"webpack-dev-server --model=development"
  },

## 配置webpack.config.js
// 模块文件 向外输出 运行在webpack环境下  node模块化 用commonJS 规范
var path = require('path')
var basePath = __dirname;
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    context: path.join(basePath, "src"),// 路径定义
    entry: [
        "./index.tsx"
    ],
    output: {
        path: path.join(basePath, "dist"),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: "awesome-typescript-loader",
                    options: {
                        useBabel: true,
                        babelCore: "@babel/core",
                    }
                },
                test: /\.css$/,
                use: ["css-loader"]
                // use: ["style-loader","css-loader?sourceMap"]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "assets/img/[name].[ext]?[hash]"
                }
            },
        ]
    },
    devServer: {
        contentBase: "./dist", // Content base
        inline: true, // Enable watch and live reload
        host: "localhost",
        port: 8080,
        stats: "errors-only"
    },
    plugins: [
        //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: "index.html", //Name of file in ./dist/
            template: "index.html", //Name of template in ./src
            hash: true
        })
    ]
}