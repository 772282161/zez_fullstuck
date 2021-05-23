// 函数  对象
// js 类型


// let a;//声明变量 类型 undefined  类型未定义
const arr=[1,2,3];
console.log(typeof arr);//object
const obj = {a:1};
obj.b=2;
arr.push(4);
console.log(arr);
const a="hello";
console.log(typeof a);
a = 1;
console.log(typeof a);

function Cart(){
    this.type = "择耳";
}

Cart.prototype.sayHello = function(){
    console.log('喵');
}