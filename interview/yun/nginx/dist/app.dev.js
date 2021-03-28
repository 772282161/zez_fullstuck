"use strict";

// const express = require('express')
var Koa = require('koa'); //引入最好的node开发框架
// const app = express();


var app = new Koa(); //中间件  middlewares  每一个中间件都是函数
// app.get('/',(req,res)=>{
//     res.send('hello wangzong');
// })
// 这一次http服务流程  请求和响应的过程
//app.use 启用一个中间件

app.use(function _callee(ctx) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //ctx express  ctx = req+res 
          ctx.body = 'Hello World'; // res  body  响应体

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}); //在3000 端口 伺服

app.listen(3000);