# JS 常考考点

-要加一个用户怎么办？

    ES6 / 红宝书    /你不知道的JS
    单线程的语言，数据通信相关   VUE / react

1.npm init -y
2.npm i json-server
    命令行      启动db.json 成后台数据源
    http server  3000/users  db.json  作为数据源提供出来访问  后台准备好了
    http GET http://localhost:3000/users     users[]
    post  用来保存表单   name ->  http://localhost:3000/users 
3.db.json 数据文件
    json 是 JS 前端和后端通信的数据文件
- promise     异步     五星指数  


- postman  可以用来做http访问代理
    POST 提交数据

- 前端 + 后端
    live-server http 前端服务   index.html 5500端口
    json-server  后端数据  3000端口
    前端和后端要数据通信
    get  3000  /users 
    post 3000  

- ajax 
    JS 最重要的考点  XMLHttpRequest  对象
    1.历史性的突破，带来前端主动请求数据的能力 Ajax 应用
        前端更主动  ajax + 动态DOM  页面变得丰富，动态
    2， http://localhost:3000/users   一切皆资源  Restfull 数据资源  get请求动作  path /users  []   
        POST 新增的 /users {name:'王总'}
    3.XMLHttpRequest  的前身是  ActiveXObject("Microsoft.XMLHTTP")
        浏览器嗅探  if else
        let httpRequest;    http 协议  Request  Response
        - 创建好对象
        - .open('GET',url,true)  打开一个请求通道
          .send() 这个请求 发送
          .onreadystatechange  事件监听
          XMLHttpRequest.Done  完成
          JSON.parse(httpRequest.responseText)  返回的数据
          json  数组 -> HTML 数组   用map `<li>${user.id}-${user.name}</li>`  innerHTML.join('')   .join('')  转化成字符串 用空格连接
