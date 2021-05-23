- 阮一峰

    1.JS 变量的数据类型由值来决定
        常量， es6以前没有常量  var
        -类型不可改变
        -简单类型的值是不可变的，复杂数据类型的值是可以改变的
        -数值型、字符串、布尔值、对象(数组、函数)、undefined、null、symbol

    2.typeof [1,2,3] 如何知道是数组？
        区分简单数据类型和复杂数据类型
        复杂数据类型中   function 
        typeof  可以正确（不够细致） 得到数据类型的
            number string  boolean null undefined symbol object(array、function)


    3.Object.prototype.toString.call()  核心
        Object   所有对象的原型对象  这种机制怎么构建
        prototype 
        call  借

- call  apply  借用方法  fn.call(绑定this,参数1,参数2,...)
    fn.cpply(绑定this,[参数1,参数2,...])



## 继承的几种方式

1.构造函数绑定  
2.prototype 模式
3.直接继承 prototype
4.利用空对象作为中介

2和3相比,3的优点：效率比较高(不用执行和建立Animal的实例)，缺点是：Cat.prototype 和Animal.prototype 指向同一对象, 在理解上有点不妥 会改变父类的原型对象