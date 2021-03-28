const koa = require('koa');
const mount = require('koa-mount');
const fs = require('fs');
//静态文件 static  -> cdn 
const serve = require('koa-static');


const app = new koa();
// console.log(__dirname + '/static/')
//有什么问题  css小米官网更新了，页面就不行了
app.use(serve(__dirname + '/static/'));

app.use(
    mount('/',ctx=>{
        ctx.body = fs.readFileSync(__dirname + '/max_count.html','utf-8');
    })
);

app.listen(1314);