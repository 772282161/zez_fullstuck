// [] Object  Array []  ![] 
// 直观上是矛盾的 

// 类型转换   只有三种 数值  字符串  布尔值
// []  转换  不会  Boolean
// 什么东西触发类型转换？  == 触发类型转化
// [] => false  Boolean
// console.log([]== true);
// console.log([] == ![]);// true 
console.log({} == {});//false
// ![] 优先级高 ![] 转换为布尔值
console.log(Boolean([])==Boolean(![]));//显示类型转换   数字