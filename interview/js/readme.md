# 把面试题当高考题
    1.以题目来检验当前js所学
        黄冈中学  出试卷
    2.衡水一中
        清北方法论

        1.打卡  课后做的任何事情
        2.能力增长点
            JS能力


- null 和 undefined  的区别是什么？
    Object.prototype.__proto__ == null 

    Undefined  意义是类型，当一个声明了一个变量为初始化时，得到的是 undefined 
    1.箭头函数 和 普通函数不一样
        ES5时代的arguments  也是有用的
        =>  不只是便利， 也被干掉了arguments
        () => {}   省略了function  () {} 都可以省    但是ES6 里提供了 ... reset 运算符
            arguments

        function(){}

    2.Object 的原型对象
        new Object()
        Object(函数).prototype
        父(原型)对象  
        Object(函数).prototype.__proto__
        为什么?  到顶了， 不该有原型
        null 此处没有对象， 不该有值

- 选择元素可以通过 标签、ID、选择器（）、类名、子元素（），
    任何元素都有这些方法，不仅限document 对象

         通过ID获取（getElementById）
         通过name属性（getElementsByName）
         通过标签名（getElementsByTagName）
         通过类名（getElementsByClassName）
         通过选择器获取一个元素（querySelector）
         通过选择器获取一组元素（querySelectorAll）
         获取html的方法（document.documentElement）
         document.documentElement是专门获取html这个标签的
         获取body的方法（document.body）
         document.body是专门获取body这个标
