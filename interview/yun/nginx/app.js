// const express = require('express')
const Koa = require('koa');//引入最好的node开发框架
// const app = express();
const app = new Koa();
//中间件  middlewares  每一个中间件都是函数
// app.get('/',(req,res)=>{
//     res.send('hello wangzong');
// })
// 这一次http服务流程  请求和响应的过程
//app.use 启用一个中间件
app.use(async ctx => {//ctx express  ctx = req+res 
        ctx.body = 'Hello World';// res  body  响应体
})
//在3000 端口 伺服
app.listen(3000);