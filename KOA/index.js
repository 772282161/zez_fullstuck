const Koa = require('./lib/application')
const app = new Koa()

app.use((ctx)=>{// 箭头函数称为中间件  ctx 对象代指本身
    
})

app.listen(3000,()=>{
    console.log('王总嫖娼不给钱')
}) // 不写，use内的函数参数不执行

// koa优势，让开发显著的提高开发效率，在koa 中中间件的概念特别明显，可以链式调用中间件，
// 洋葱模型 use 方法内具备连个参数，ctx参数，next参数， listen 方法

// let http = require('http')

// let server= http.createServer((req,res)=>{
//     res.end('Hello 王总嫖娼不给钱')
// })

// cosole.log(server.listen(4000))