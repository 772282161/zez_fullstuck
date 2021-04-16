const express = require('express')
const app = express()
const port = 3000;
const path = require('path');
const fs = require('fs')
const md5 = require('md5')


app.get('/', (req, res) => {
        res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <title>
                Document
            </title>
        </head>
        <body>
            demo1
            <script src="/demo.js">
            </script>
        </body>
        </html>
    `)
    })
    // demo.js 的访问 
    // 路由是/demo.js
    // fs把它读取并发送流
app.get('/demo.js', (req, res) => {
    console.log('response here')
        // 如果浏览器带上一个？表达他有这个文件，且时间是什么
        // 返回文件
    const jsPath = path.resolve(__dirname, './static/js/demo.js')
        //path.resolve 给一个字符串，形成目录树，
    let status = fs.statSync(jsPath)
        // console.log(status, '-----------a')
    let lastModified = status.mtime.toUTCString() // UTC 是一种时间格式
    let cont = fs.readFileSync(jsPath)
    let etag = md5(cont) //
    if (req.headers['if-none-match'] === etag) {
        res.setHeader('ETag', etag)
        res.writeHead(304, 'Not Modified')
        res.end()
        return
    }
    // if (lastModified == req.headers['if-modified-since']) {
    //     res.writeHead(304, 'Not Modified')
    //     res.end() // 为空 304不需要响应体，请使用本地缓存
    //     return
    // }
    console.log(lastModified, '=======')
        //1.把文件返回
        //2.如何在返回文件的同时，应该要给他一个标志，加上时间，HTTP  叫做ETag

    //设置响应头，
    res.setHeader('Cache-Control', 'public,max-age=30')
    res.setHeader('Last-Modified', lastModified)
    res.setHeader('ETag', etag)
    res.writeHead(200, 'OK')
    res.end(cont)
})

app.listen(port, () => {
    console.log('listen...')
})