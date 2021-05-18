const mime = require('mime-types')
const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res)=>{
  const url = new URL('http://root:123456@1.2.3.4:8080/path?query=123#id片段')
  res.write(`protocol:${url.protocol}\n`)
  res.write(url.username+'\n')
  res.write(url.password+'\n')
  res.write(url.host+'\n')
  res.write(url.port+'\n')
  res.write(url.pathname+'\n')
  res.write(url.search+'\n')
  res.write(url.hash+'\n')
  res.end()
})

server.listen(8080,()=>{
  console.log('web server start')
})