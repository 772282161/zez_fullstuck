
function Animal(){
    //call  apply
    //prototype new Animal()
    // this.species = '动物';
}

Animal.prototype.species = '动物';
function Cat(name,color){
    this.name = name;
    this.color = color;
}

Cat.prototype = Animal.prototype;

var cat1 = new Cat('王总','屎黄');

// console.log(Cat.prototype.constructor === Animal);
Cat.prototype.constructor = Cat;
console.log(cat1.species);

