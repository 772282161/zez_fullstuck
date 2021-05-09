// 服务器端渲染
// react 有 VirtualDOM -> 服务器端生成 HTML String 不能挂载
// express 启动服务器端端口，将react组件-> string 用工作流(npm ，run dev 等等) 来打理转译解决后端处理react 组件
// var express = require('express')
import React from 'react'
import express from 'express'
import {renderToString} from 'react-dom/server'
import Home from '../containers/Home'

const app = express()
const content = renderToString(<Home/>)

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>hello</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <h1>hello</h1>
        <p>world</p>  
      </body>
    </html>
  `)
})

app.listen(3001,()=>{
  console.log('服务器端 3001端口')
})