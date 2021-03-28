1. HTTP协议
    TCP/IP HTTP是上层
    Web Server  RestFul 


    JSON 资源，HTTP提供下服务  R请求 Q响应
    url http://127.0.0.1/players.json
    动作 GET 
    live-server 静态资源
    json-server

    url -> 资源 resources 
    跨域 （域名不一样 协议不一样 HTTP -> HTTPS  3000 -> 8000） 解决方案
    json-server 自带跨域能力 
    js 是不允许跨域的
    不支持 解决方案 JSON JSONwith padding


    用 DOM 编程 ，script=document.createElement("script")
    script.src="https://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction" 请求  返回
    document.body.appendChild(script)


-文章 
    用前端实现底层
    1.fetch Promise 的实例  thenable 去服务器端通信，
    
    HTTP底层协议 
        请求响应 URL+ method
        数据格式是  JSON

    跨域  为了安全  域名  端口
    json-server 本地 自己自带解决方案
    JSONP fn(data) 在页面端预留一个函数fn   fn为函数名  

    response 来到客户端
    script 返回  fn(data)


    代码有一定的功能区分时，请写函数
    createUserElement=()=>{
        const user=createElement;
        return user;
    }

    es6  for of

    2.DOM API 
    tree
    document.createElement()
    父节点 .appendchild(子节点)
    document.createTextNode() 文本节点