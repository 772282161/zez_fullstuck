nginx  静态网页  http服务 html
动态 node 

1.centOS node
    - Nginx  wget   taobao mirrors .tar.gz  linux压缩包
    - 解压 tar -xvf node-v12.16.1-linux.x64.tar.gz
    - 删除压缩包  rm -rf node-v12.16.1-linux-x64.tar.gz
    - mv node-v12.16.1-linux-x64/ node 重命名
    - /usr/local/bin/node/bin   node npm npx
    - 全局命令   node  ln -s /usr/local/bin/node/bin/node /usr/bin/node 软链接
    - rm -rf /usr/bin/node 删除node


2.Koa node
```
const express = require('express')
const Koa = require('koa');//引入最好的node开发框架
const app = express();
const app = new Koa();
//中间件  middlewares  每一个中间件都是函数
app.get('/',(req,res)=>{
    res.send('hello wangzong');
})
// 这一次http服务流程  请求和响应的过程
//app.use 启用一个中间件
app.use(async ctx => {//ctx express  ctx = req+res 
        ctx.body = 'Hello World';// res  body  响应体
})
//在3000 端口 伺服
app.listen(3000);
```

访问3000端口

    node app.js 命令行一直霸占在那
    3000 任何人发出请求  ctx 伺服
    后台运行