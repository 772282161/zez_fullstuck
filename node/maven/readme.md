- 全栈项目  node + ts
    BATJTMD  GO 

- 数据库
    端口通信 3306  -> 3000
    node fs http  比较复杂 比较慢

- MVC 
    数据库 -> Modul -> Controller -> Router (API)
    post 
    someone -> http -> req(url) ->controller -> Model -> mysql2(mysql驱动) 

- posts add 
    controller -> restful 路径
    mysql post表单 POST  /posts
    - router 在哪里？  路由
    - controller  控制
    - model service  映射
    

- 单点入口 

CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


- mysql 先建表 再操作 关系型数据库  SQL
    MongoDB 先操作，再建表  NOSQL  JSON