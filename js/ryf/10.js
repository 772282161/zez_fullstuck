function Animal(){
    
}

Animal.prototype.species = '动物';
function Cat(name,color){
    this.name = name;
    this.color = color;
}

//F就负责执行一个链而已
var F = function(){};//空的构造函数  空对象
F.prototype = Animal.prototype;
Cat.prototype = new F();//内存不大  没有prototype模式的效率问题 也没有直接继承prototype的修改父的问题
// Cat.prototype = F.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat('小王','黑');
console.log(cat1.species);
console.log(Animal.prototype.constructor);