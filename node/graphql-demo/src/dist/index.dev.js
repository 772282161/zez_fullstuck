"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    type Query{\n        hello:String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var express = require('express'); // 引入库


var _require = require('apollo-server-express'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

var app = express(); // 防止端口充突 

var port = process.env.PORT || 4000; // middlewares 

app.get('/', function (req, res) {
  // express 不知道用什么编码给用户 
  // npm run dev  -> process.env.PORT执行空间    -> 运行之前
  // 响应头
  res.set({
    'Content-Type': 'text/html;charset=utf-8'
  }); // 响应用户的请求的， 返回res-> 响应头() ->内容

  res.end('<h1>您好</h1>'); // res.send('您好')
}); // graphql 服务, API 服务的新形式
// GET /api/posts  定义url

var typeDefs = gql(_templateObject()); //graphql  提供了定义查询的新语言   模型定义
// 具体的查找
//  ts+react + graphql + koa

var resolvers = {
  Query: {
    hello: function hello() {
      return "Hello World";
    }
  }
};
var server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers
}); // Apollo 服务器

server.applyMiddleware({
  //  /api graphql 交互界面
  app: app,
  // 给当前 APP添加一个中间件
  path: '/api' // 提供API服务   api 开发 /api/posts Restful 
  // 后端做整站 

});
app.listen(port);