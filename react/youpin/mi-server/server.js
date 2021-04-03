const express = require('express');  //搭建服务
const app =express();
const fs = require('fs')
const productRouter = require('./routes/product')

app.listen(3002,()=>{
    console.log('server is OK')
});
// JSON过大 用异步
function pReadFile(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,'utf8',(err,data)=>{
            resolve(data)
        })
    })
}
// 解决异步方法  最基本的回调
// 我们如何把product.json 返回给用户

// 跨域问题  只允许3000端口跨域访问
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin",'http://localhost:3000');
	res.header("Access-Control-Allow-Credentials", true);
    
	res.header("Access-Control-Allow-Headers", 'Content-Type,Content-Length,Authorization, Accept,X-Requested-With');
	res.header("Access-Control-Allow-Methods", 'PUT,POST,GET,DELETE,OPTIONS,HEAD');
	req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next();
});

app .use(async(req,res,next)=>{
    //准备数据
    // res.end()  停止
    req.$PRODUCT_DATE =JSON.parse(await pReadFile('./mock/product.json')) 
    console.log(req.$PRODUCT_DATE);
    next();
})

app.use('/product',productRouter);  // /product路由中间件 得到整个商品列表，在首页显示出来