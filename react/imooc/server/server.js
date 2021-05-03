const express = require('express')
const mongoose = require('mongoose')
// 连接MongoDB  并且使用imooc集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

// 类似于mysql的表，MongoDB里有文档，字段的概念
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

// User.remove({age:18},function(err,doc){
//     console.log(doc)
// })

User.updateMany({'user':'zez'},{'$set':{age:20}},function(err,doc){
    console.log(doc)
})

User.create({
    user:'zzz',
    age:18
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
})

const app = express()

app.get('/',function(req,res){
    res.send('<h1>Hello World</h1>')
})

app.get('/data',function(req,res){
    User.find({},function(err,doc){
        res.json(doc)
    })
    // res.json({name:'zez',type:'string'})
})



app.listen(8888,function(){
    console.log('node app start at port 8888')
})