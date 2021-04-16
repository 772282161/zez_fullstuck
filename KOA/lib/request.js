// 为什么koa里面没有req，
let url = require('url')
let request ={
    // ctx.url ===ctx.request.url
    get url(){ // get 运行url函数不用带括号，
        console.log(this);
        return this.req.url
    },
    get path(){// 只取路径名
        return url.parse(this.req.url).pathname
    }
}

module.exports = request