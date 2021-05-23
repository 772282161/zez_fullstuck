// 函数是天生可以复用的，

// var Cat = {
//     name:'Tom',
//     color:'橘黄',
// }

//如何复用
function Cat(name,color){
    return{
        name,
        color
    }
}


var cat1 = Cat("王总","黄色");
var cat2 = Cat("嫖娼","黄色");
var cat3 = Cat("不给","黄色");
var cat4 = Cat("钱","黄色");