# ls  

1. ls 是如何运作的， 哪些常用的参数
    在Linux 里，一切皆文件  
    ls  文件列表？ ls /   / path  根路径
    - 理解根目录  一些意义
    /bin   binary   二进制文件   PATH 全局  ls   cat 命令 

    /dev  device 

    /etc  配置文件  mysql  ngnix  

    host  文件用来配置什么的?  在哪个引用场景下使用
    /usr 很多应用程序放在这个目录下
    /tmp 临时文件

    www.taobao.com    ip   dns 服务器   缓存   ->  网络服务商  
    hosts  文件，  先来这里检测一下， 
    127.0.0.1:1234  www.taobao.com:1234

    1. 你在淘宝做开发的时候
        www.babytree.com  本地 code mysql hosts， 
        git clone  www.taobao.com   branch 分支   /search 
        hosts 本地调试淘宝页面   
        git push  main  master  远程服务器 ，  

    
    drwxr-xr-x  
        第一位是文件类型  d 目录 dictionary  - 表示普通文件
        rwx  第二位到第四位，  权限  read  write  执行
        r-x  第五位到第七位  表示用户所具有的权限  r  x
        r-x  第八位到第十位  其他用户所具有的权限  r  x
