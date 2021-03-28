// JS 中类型转换有关
// 只有三种  转换成数字
//           转换成布尔值
//           转换成字符串
// 隐式类型扎转换
// 显示类型转换
let obj={name:'obj'}; //引用类型
console.log(obj.toString()); //结果：[object Object]  ||null
// console.log(typeof null);
console.log(Object.prototype.toString.call(null));


//  不可运行  ，'1' 简单数据类型， .toString  新手 
// 1. 谁的 prototype ? String 引用类型？ 转换
// string 简单类型
//包装类型  区别于 引用类型
// JS 提供了 Number() String() Boolean() 包装类型
//为了方便 "abc".split('a')
// 字符串 对象 
 console.log('1'.toString()); //可以执行吗？
 //console.log(typeof 'abc');
//Symbol BigInt
console.log("1".toString());
// "1".toString();//执行代码的瞬间
//立即 进行类型转换 转换成 包装类型
//  var s =new Object("1"); //类型转换
//  console.log(s);
// console.log(s.toString());
// s = null //清空  

var s1 = "some text";
console.log(typeof s1);
console.log(s1.toString());//暂时的
s1.color = "red";//对象，给动态设置属性
console.log(s1.color);//undefined
