- react 全家桶 ，全面react hooks 函数化。
- 服务器端采用 egg.js + TS + mysql  提供API 服务
- 数据库的说明文件
    mysql 和 MongoDB 区别？
      mysql 关系型数据库  MongoDB NoSQL  JS 区别
      关系型业务适合mysql user  post comment 
      MongoDB 微博 表是collection集合  JSON文件组成，杂的数据，短视频
      数据库连接 egg.js 的 config.js 

      Redis  内存数据库  键值对存储 key-value  90% 查询都是重复的
      内存中的
      极大的 I/O 开销
      第一次查询，  index_posts:[{},] -> Redis  LRU 算法  localStorage

      后端程序和数据库是分离的，甚至在机器上是分离的
      mysql 2  数据库驱动  egg.js 的model层 egg.js 配置插件

      koa/express  轻量级的 node 服务端开发框架
      egg.js 企业级 标准，对新手更友好，约定大于一切，看文档就好了

      POST /login   提交数据经过哪些文件目录，进行哪些操作
      router.post('/login',autiruzation,(req,res)=>{验证数据的完整性 serverice(title,content)})
      1. app.ts 7001 启动web服务  
      2. http 访问有中间件打理
          路由器中间件  匹配到路由地址后，交给相应的controller，http.createServer((req,res)=>{})
      3. 校验表单 service 层 进行存储
          import POST model
          new POST save()

基类 

登录-> 种一个cookie(中间件获取userID) -> 
路由-> controller -> service -> model 
1.继承controller
2.评论要做什么
  - 参数校验
  - 用户id
  - 用户详情信息

1. node 考题
2. "业务"