# node 自动发邮件
- 每天发一条消息
    npm i -g stylus   global 全局
    npm i nodemailer   安装在当前项目


-JS  require + module.exports common.js  模块化
    1.内置模块
    2.自己封装模块   一个文件就是一个模块，一个文件夹就是一个模块组
        原始 -> 封装(module + require)  ->  资本主义社会(docker + k8s 省钱，快速运维) -> 共产主义(投资人)

    3.nodemailer  常用的邮件模块

    // const madA = require('./a.js');// 相对地址
// console.log(modA.add(1,2));
// fs.readFile('./readme.md',function(err,res){
//     if (err){
//         throw new Error(err);
//     }
//     console.log(res.toString());
// })