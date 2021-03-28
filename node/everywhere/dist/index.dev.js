"use strict";

var express = require('express');

var app = express(); //process node 的内置对象 进程 前端的window
// 进程里  运行环境 env PORT 端口
// 如何从运行环境之中 拿到PORT 设置 , 默认 4000

var port = process.env.PORT || 4000;
console.log(process.env.PORT);
app.get('/', function (req, res) {
  return res.send("hello world,王总嫖娼不给钱");
}); //

app.listen(port, function () {
  return console.log("Listing on port ".concat(port, "!"));
});