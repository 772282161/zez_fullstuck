//prototype 模式

function Animal(){
    this.species = '动物';
}

function Cat(name,color){
    this.name = name;
    this.color = color;
    
}
// cat1 -> Cat -> new Animal()  {species:}
Cat.prototype = new Animal();//副作用 constructor 属性被修改
Cat.prototype.constructor = Cat;
var cat1 = new Cat('王燕姐','屎黄');

console.log(cat1.species);
console.log(Cat.prototype.constructor);
