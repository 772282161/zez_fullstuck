const express = require('express')
const app = express()
// 持久化 mysql  I/O ? redis
let count = 0

app.get('/',async(req,res)=>{
  // count++
  // I/O redis 内存数据库
  await redis 
  let count = await mysql 
  res.send(`当前访问次数是` + count)
})

app.listen(4200,()=>{
  console.log('服务器已启动');
})