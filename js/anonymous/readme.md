# JS的灵魂在函数，函数的灵魂在匿名函数


- 匿名函数
    JS
        ()  => {}
        function (){}
        和立即执行结合起来
        (function (){

        })()


- 作为图书管理系统，写一个书的入库类
    JS 面向对象 class 关键字来的比较晚，用function来构造类
    JS 类有点像火车，火车头，车身  
    ```
    JS
    //单独构造函数就可以成为一个类
    function Book(isbn,title,author){
        this.isbn = isbn;
        this.title = title;
        this.author = author;
    }
    ```

- 构造函数与普通函数的区别
    生产实例 constructor ？
    this....
    this....
    一步步来，构造过程
    
    1.构造函数函数名首字母大写
    2.运行的方式()()直接运行   new fn()
        new 的时候会把构造函数执行一下，并且this 指向当前对象
    3.this 指向实例
    4.对象上，原型对象都是 Object 
    5.Object 是顶层对象 也是一个函数 new Object(){}
    6.任何一个函数都有一个prototype 属性，火车身
    7.任何一个对象实例都一定有__proto__ 私有属性
        指向原型对象，基于原型的
        js_dontknow.display();基于原型继承父类的方法
    8.原型链
        Book.prototype.isPrototypeOf(js_dontknow)
        js_dontknow.hsOwnProperty('display')
         