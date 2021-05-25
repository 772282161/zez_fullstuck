npm init -y 
yarn add dayjs express mocker-api


- 后端 mocker  做一些 假数据
    url  ->  切成线上API地址就好了
    后端要等一等再给你接口，只要数据结构差不多，就可以只切一个  url
    文档定义一下   Restful / api/   data:{}

- PM2 node进程管理工具
    node index.js  有可能会挂  需要重启  cluster fork 多进程 
    node 服务器，PM2  
