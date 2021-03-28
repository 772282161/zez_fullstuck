// node 
// 自定义事件
const rencentTime = require('./tecenttime.js')
//事件监听是如何实现的，  订阅发布者模式
rencentTime.on('newlesson',({price})=>{
    if(price< 80){
        console.log('ok,buy it');
    }
})