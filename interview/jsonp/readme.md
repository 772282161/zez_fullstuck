# 跨域 
    - 后端的跨域解决方案
    - JSONP json with padding
        https://photo.sina.cn/aj/index?page=1&cate=recommend

        同源机制 

    1.通过<script/img src="" /> 跨域 向sina发出了请求 完成一次http 规避了js 代码xhr
        fetch 同源机制  JSON   如何让JS代码能够使用
    2.&callback=callback 
        sina 在页面上有一个callback的函数，等待你的调用 

    3.callback({}) JSON + padding  


    xhr/fetch 因运行在沙箱中的JS同源机制  无法请求跨域sina资源
        迂回到使用script标签  有跨域访问资源的能力，http请求中带上&callback=callback 这个padding，sina服务器就在JSON数据外面包一层callback函数
        将这个带有padding的，可以在script得到后运行的函数，页面上准备好了这个函数，从而效果一样




JSONP 的理念就是，与服务端约定好一个回调函数名，服务端接收到请求后，将返回一段 Javascript，
在这段 Javascript 代码中调用了约定好的回调函数，并且将数据作为参数进行传递。
当网页接收到这段 Javascript 代码后，就会执行这个回调函数，这时数据已经成功传输到客户端了。
JSONP 的缺点是：它只支持 GET 请求，而不支持 POST 请求等其他类型的 HTTP 请求。
