function Cat(name,color){
    this.name = name; //this 指向它实例
    this.color = color;
}

//实例化
var cat1 = new Cat("王总嫖娼不给钱","色色的黄");
var cat2 = new Cat("王总嫖娼被抓了","非常色色的黄");


console.log(cat1.constructor == cat2.constructor);//构造函数
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);