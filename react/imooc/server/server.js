const express = require('express')
const userRouter = require('./user')
const app = express()
// 开启一个中间件
app.use('/user',userRouter)
app.listen(8888,function(){
    console.log('node app start at port 8888')
})