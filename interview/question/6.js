//隐式类型转换
//当一侧操作数为String类型，会优先将另一侧转换为字符串类型
console.log(1+'2');
//当一侧操作数为Number类型，另一侧会转换为Number类型
console.log(1+true);
//为Number类型，另一侧引用类型
console.log(1+{});
// 对象  在表达式 if ，== ， 数字或字符串，布尔值  通过toString()  转换类型进行运算  
// 对象提供了value 类型转化
console.log(3*{valueOf:function() {return 5}});

console.log(3+{},3*{});