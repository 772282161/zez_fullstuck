restful 替代品
来自于Facebook 良心出品的查询方案 2015年

json-server 
    缺点
    基于restful的概念，一切皆资源
    url + action 
    db.json 资源中心
    /resutls list都请求到了


数据库 还是db.json  查询时 一起被查询出来， select * 
多好多我们不要的数据， select name,sex from user
在这个基础上设计了graphql 查询设计语言
1、你要什么，设计查询方案，就得到什么
2、合并传统后端在拿到数据的时候要连n张表进行查询，  一次就够了

- 启动 graphql 
    1、启动express
    2、加入graphql 中间件 ，每次查询graphql 都会介入，使用graphqlHTTP  playGround 
    3、scehma hero + rootValue 就有了
    4、graphql 可以省去很多的请求浪费