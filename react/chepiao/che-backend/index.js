const express = require('express');
const path = require('path')// 路径模块
const apiMocker = require('mocker-api')
const app =express()

apiMocker(app,path.resolve('./mocker/mocker.js'))
app.listen(1234);