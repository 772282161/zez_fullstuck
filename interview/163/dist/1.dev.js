"use strict";

// symbol  es6 引入的新的原始数据类型 表示独一无二的值
// var symbol = Symbol();
// var sym2 = Symbol('foo');
// var sym3 = Symbol('foo');
// console.log(sym2 == sym3);
// console.log(typeof symbol);//symbol 
// 1.函数来创建，原始数据类型 冲突的地方？  如何说明 函数用法上有什么区别
//new Symbol();// Symbol is not a constructor
//变量都是要分配内存空间的，原始数据类型 栈分配
//引用类型  堆
// Symbol（字符串）  字符串有何用？  做一个标识
// console.log(sym3.toString());
// 2.Symbol 有什么用？ 
// var mySymbol = Symbol();//初始化
// var shapeType = {
//     //形状的类型
//     triangle:'Triangle',//三角形
//     square:'Square',//正方形
// }
// 不用给值   可以用来偷懒滴
// var shapeType = {
//     //形状的类型
//     triangle:Symbol(),//三角形
//     square:Symbol(),//正方形
// }
// function getArea(shape,options){
//     var area = 0;
//     switch(shape){
//         case shapeType.triangle:
//             area = 0.5 * options.width * options.heigh;
//         break;
//         case shapeType.square:
//             area = options.width*options.heigh
//         break;
//     }
//     return area;
// }
// console.log(getArea(shapeType.triangle,{
//     width:100,
//     heigh:100,
// }))
// var s1 = Symbol('foo');
// console.log(s1 instanceof Symbol);//原始数据类型
// const obj = {
//     toString(){// 覆盖Object.protptype.toString()
//         return 'abc'
//     }
// }
// const sym = Symbol(obj);
// console.log(obj.toString());
// console.log(sym.toString());
// var sym2 = Symbol("My Symbol");
// console.log("your symbol is " + sym2);// 不能用作字符串拼接
var obj = {};
var a = Symbol("a"); //可以用于 JSON object key 表示唯一

var b = Symbol("b");
obj[a] = 'Hello';
obj[b] = 'World';
obj.cc = 'cc'; //常规 取个名字
// symbol 作为JSON key 第二种引用场景

console.log(Object.keys(obj));
console.log(Object.getOwnPropertySymbols(obj));

for (var key in obj) {
  console.log(obj[key]);
}

Object.getOwnPropertySymbols(obj).forEach(function (item) {
  console.log(obj[item]);
});