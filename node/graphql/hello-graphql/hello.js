const express = require('express');
// 定义查询 buildSchema  Model 对查询进行建模
const {buildSchema} = require('graphql');
const graphqlHTTP = require('express-graphql').graphqlHTTP;


// 查询  支持自定义类型
// 带参数 
const schema = buildSchema(`
    type Account{
        name:String,
        age:Int,
        sex:String,
        department:String,
        salary(city:String):Int
    }
    type User{
        name:String,
        age:Int 
    }
    type Query{
        hero:String,
        user:User,
        getHero(teamName:String!):[String]
        account(username:String):Account
    }
`)

// 值来的地方
const root={
    account({username}){
        const name = username
        const sex = 'man'
        const age = 18
        const department = '百度凤巢前端研发部'
        const salary = ({city})=>{
            if (city== '北京' || city=='上海' || city=='广州' || city =='深圳'){
                return 30000
            }
            return 3000
        }
        return {
            name,
            sex,
            age,
            department,
            salary
        }
    },
    hero:() =>{
        return 'I am iron man ';
    },
    user:()=>{
        return {
            name:'leo',
            age:18
        }
    },
    getHero:({teamName})=>{
        // await egg.js service 
        const hero={
            '三国':['刘备','关羽','张飞'],
            '复仇者联盟':['钢铁侠','美国队长','太阳女神']
        }
        return hero[teamName];
    }
}

const app = express();
app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))
// 用expres 启动静态服务器
app.use(express.static('public'))

app.listen(8000)