http://localhost:8080?a=1&b=2&c=3&a=4&keyword=%E6%89%8B%E6%9C%BA
1. { } url所有的数据
2. ？ split 
3. = 切割一下
4. {} key:value
5. a 出现过两次
6. keyword 被编码过后的，中文


- 围绕着URL的考题有很多
    1. 从输入URL到看到页面，发生了什么，越详细越好
    2. 跨域问题 协议:域名/路径:端口?查询字符串组成
    3. http/https http2 区别
    4. 如何解析查询字符串为对象


- 如何解析查询字符串对象 
    1.如何得到？后面的查询字符
        ```
         /.+\?(.+)$.exec(url)[0]/
        ```
        正则 ?(.+) 匹配的单元，\? 转译
        exec 执行正则表达式 $1 就是结果 [0]整个字符串   [1] 第一个分组 

- 切割 = 后形成的key:value 使用了es6数组解构，
    当然之前使用test来验证正确性也是OK的
    1. a=1 a=4 两项a   应该是a=[1,4]
    ```
    // if(key in paramsObj)  过时了
        if(paramsObj.hasOwnProperty(key)){
            paramsObj[key] = [].concat(paramsObj[key],val)
            // 有图有真相 [].concat 可以吧两个值组成数组，并不是意识中的第一个参数也得是数组
            ![]()
        }else{
            paramsObj[key]=val
        }
    ```
    2. decode 过程 
    

- 解析查询参数的过程 有几个规则
    值都需要decode解码, 重复出现的key 组成数组，只有key 没有值的默认为true

- 想去名企不如通过做总结，写文章，发讨论的方式教别人去名企