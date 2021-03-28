// app 的创建以及基本配置  中间件 
// es6  modul  typescript => => js 

import express from 'express';
import postRouter from '../post/post.router';
import {defaultErrorHandler} from './app.middleware';


const app = express();

//body处理 要加中间件 bodyParser
const bodyParser = require('body-parser');
//app 处于侍服状态 eventEmitter
//等
app.use(bodyParser.urlencoded())
//中间件来打理 函数
//所有的路由在这里汇总

// 所有的路由都在这里汇集
app.use(//不一定是路由，只要是函数就可以
    //文章模块的路由 增,删,改,查
    postRouter,
    //用户路由
    //...
)
//处理各种错误
app.use(defaultErrorHandler);
export default app;