# Nginx
yum info nginx 显示nginx相关信息
yum install nginx -y 默认允许


## nginx文件目录下
conf.d 是所有Nginx配置的目录
default.d Nginx默认配置文件
fastcgi.conf ngx_http_fastcgi_module 模块对应的参数文件
nginx.conf Nginx配置文件


// HTTP 服务器
http{
  log_format  日志的格式
  access_log  日志的存储位置
  keepalive_timeout  60; 长连接的超时时间，单位s

  // 配置方向代理
  server{
    listen 80;  监听的端口号
    server_name  ;监听的地址

    // 匹配的路径
    location{
      root 资源的根目录(作为静态资源代理时使用)
      expires  过期时间


      proxy_pass  转发到某个服务地址
    }

    error_page 404 /404.html //配置错误页面
    location = /404.html {
    }
  }
}


// src.js
const http = require('http');
const server = http.createServer((req,res)=>{
  const {url,method,headers} = req;
  res.write(`url:${url}\n`);
  res.write(`method:${method}\n`);
  res.write(`headers:${JSON.stringify(headers,null,' ' )}\n`);
  res.end();
})


nohup node src.js 后台启动
kill + 进程号  
master 进程，创建并守护子进程
worker 子进程


headers 里的 use-agent 电脑内核及浏览器版本号
headers 里的 accept  表示客户端可以接收的格式
accept-encoding  接受的编码格式 gzip基于deflate协议
upgrade-insecure-

