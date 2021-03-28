// require 关键字， 引入库
// const fs = require('fs');//文件系统 内置模块
const nodemailer = require('nodemailer'); // 第三方库， 安装的
const { default: Axios } = require('axios');
const schedule = require('node-schedule');
// 模块 语法 -> 函数模块化  -> module (水电工、木工、..)
// 现代语言中， 一个文件就是一个模块 ....
// const modA = require('./a.js'); // 相对地址
// console.log(modA.add(1,2));
// fs.readFile('./readme.md', function(err, res) {
//   if (err) {
//     throw new Error(err);
//   }
//   console.log(res.toString());
// })
// async + await 
// 异步函数 
// 把土味的情话 
function getHoneyedWords() {
    const url = 'https://chp.shadiao.app/api.php';
    return Axios.get(url); 
}
// 把发邮件这件事， 封装给一个函数
async function sendMail(words) {
    let user = "772282161@qq.com"
    let pass = "bzgkwkymaynjbbbf"; //  授权码
    let to = "2660873682@qq.com";
    let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false,
    auth: {
        user: user,
        pass: pass
    }
    });
    let info = await transporter.sendMail({
    from: `你爹<${user}>`, // sender address
    to: `傻逼<${to}>`,
    subject: "写给傻逼的一封信",
    text: words
    })
    console.log("发送成功");
}

sendMail();
schedule.scheduleJob({hour: 22, minute: 46}, function() {
    console.log("启动任务：" + new Date());
    getHoneyedWords()
    .then(res => {
    sendMail(res.data);
    // console.log();
    })
})
