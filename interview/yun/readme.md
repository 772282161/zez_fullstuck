# 当你在浏览器输入一个URL后，看到页面前发生了什么？


# 当你有了一台服务器后，可以干什么
    docker 一台物理主机 虚拟出来很多
    -IP  121.36.255.248  ？
        提供什么服务  可以看到网页
        浏览器通过域名或IP访问，HTTPS   www.baidu.com 绑定IP地址
        centOS 7   没有安装web服务器，
        Nginx 是一个高性能的http和方向代理的web服务器

    -putty   远程ssh 链接  华为云的服务器
        root  password
    - web服务  Ngnix 安装
        安装agnix依赖
            yum -y install gcc  gcc-c++ autoconf pcre-devel make automake
            yum -y install wget httpd-tools vim

            yum list | grep nginx
            yum install nginx  安装
            nginx -v  版本
            nginx  启动服务器
            ps aux | grep nginx
            vi /etc/nginx/nginx.conf  更改路径
            ngnix -s reload  重启
            
