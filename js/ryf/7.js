//  阮一峰 面向对象 第二篇
function Animal(name){
    console.log(arguments,'---');
    this.name = name;
    this.species = "动物";
}
//Animal -> Function    函数是一等对象  Object()  
//拿到函数的原型链上的方法，靠它
// console.log(Animal.__proto__.__proto__);
function Cat(name,color){
    // this.name = name;
    this.color = color;
    //拿到Animal的属性，归Cat所有  借用一下，并且指定内部的this 为当前的this
    // console.log(arguments);
    Animal.apply(this,arguments);
    // Animal.call(this,name ,color);
}
var cat1 = new Cat("王总","嫖娼黄");
console.log(cat1.species);
//猫应该是Animal的子类， 继承
