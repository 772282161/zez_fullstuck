function Cat(name,color){
    //new 的过程一定会执行Cat
    this.name = name; //this 指向它实例
    this.color = color;
    // this.type = '猫科动物';
    // //prototype 要生成的原因，
    // this.eat = function(){
    //     console.log('老鼠');
    // }  //每次new都会分配内存空间
}
//prototype  原型对象   内存问题
Cat.prototype.eat= function(){
    console.log('老鼠');
}
Cat.prototype.type= '猫科'

//实例化
//new 的执行过程
var cat1 = new Cat("王总嫖娼不给钱","色色的黄");
var cat2 = new Cat("王总嫖娼被抓了","非常色色的黄");


console.log(cat1.constructor == cat2.constructor);//构造函数
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);
cat1.eat();