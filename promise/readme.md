# es6
    -js的最新版本
    传统es5 + 最新的es6 + 版本
    1.ES6手册 阮一峰   https://es6.ruanyifeng.com/
    2.ES6 15篇


    ES6 知识点通过大厂的审核
    阮一峰的ES6在线刷，每周一篇 
    冴羽的文章

    Fetch API 提供了一个 JavaScript 接口，用于访问和操纵 HTTP 管道的一些具体部分，例如请求和响应。它还提供了一个全局 fetch() 方法，该方法提供了一种简单，合理的方式来跨网络异步获取资源。

    这种功能以前是使用 XMLHttpRequest 实现的。Fetch 提供了一个更理想的替代方案，可以很容易地被其他技术使用，例如  Service Workers。Fetch 还提供了专门的逻辑空间来定义其他与 HTTP 相关的概念，例如 CORS 和 HTTP 的扩展。

    请注意，fetch 规范与 jQuery.ajax() 主要有三种方式的不同：

    当接收到一个代表错误的 HTTP 状态码时，从 fetch() 返回的 Promise 不会被标记为 reject， 即使响应的 HTTP 状态码是 404 或 500。相反，它会将 Promise 状态标记为 resolve （但是会将 resolve 的返回值的 ok 属性设置为 false ），仅当网络故障时或请求被阻止时，才会标记为 reject。
    fetch() 可以不会接受跨域 cookies；你也可以不能使用 fetch() 建立起跨域会话。其他网站的 Set-Cookie 头部字段将会被无视。
    fetch 不会发送 cookies。除非你使用了credentials 的初始化选项。（自 2017 年 8 月 25 日以后，默认的 credentials 政策变更为 same-origin。Firefox 也在 61.0b13 版本中进行了修改）



1.HTTP Server
    live-server 启动，HTTP服务，双击打开一个页面
    协议 http：//
    fetch(url) Promise的一个实例
        .then(data=>{

        }) //异步的，所以要等待
2.let p1=new Promise((resolve,reject)=>{
    resolve(2)
})  有费时的任务， 不能同步

3.p1.then()

4.同步
    一个CPU计算时间就可以快速执行完的指令
    加减 变量

5.异步， 多线程
    发端于耗时功能需求
    定时器以后发生  setTimeout()
    Promise 天生就是Promise的   fetch
    resolve()  帮助异步任务被解决
    回到执行流
    let p1=new Promise();
    let p2=new Promise();






@time 12/17
promise有三个状态：
    等待（PENDING)
    成功（RESOLVED）返回成功的结果，如果不写结果返回undefined
    失败（REJECTED）返回失败的原因，如果不写原因返回undefined


当请求成功后把数据resolve出去，或者请求失败之后把错误reject出去，也就是说promise必须支持异步
then方法返回的必须是一个promise，这样才能保证链式调用。
如果then内部的回调函数执行结果依然是一个promise那就把这个promise的结果resolve出去。
任何一个promise必须是resolve之后才能走到它then方法，从而创建下一个的promise。
什么时候走成功回调？then中返回一个普通值或者一个成功的promise
什么时候走失败回调？返回一个失败的promise，或者抛出异常


