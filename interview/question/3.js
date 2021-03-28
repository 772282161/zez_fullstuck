var a = 0xa;  // ? 16进制 数  0x开头
console.log(typeof a);
var b = 010;// 八进制 
var c = 0b01;// 二进制数
console.log(c+3);//转为十进制

//JS  没有浮点数类型  Number  new Number()    不适合计算
// JS 转成二进制的时候，会无限循环  32位  舍弃一些位 
//二进制位相加   会导致不精确
console.log(0.1+0.2);//0.30000000000000004   JS 浮点数不精确
console.log((0.1).toString(2));//toString 传进制数
console.log((0.2).toString(2));
console.log((8).toString(8));

console.log(Number.parseInt('010',8));
console.log(Number.parseInt('20',2));//结果 NaN  not a number



//跟什么相关   上溢   大数字 BigInt  
//JS Number 类型 只能安全的表达 -9007199254740991（-2的53次方-1）
console.log(9999999999999999);//10000000000000000