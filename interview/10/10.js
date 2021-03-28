//有哪些情况会是undefined

let a;  //  声明，没有赋值
//变量声明时，JS类型由值 来 决定
console.log(typeof a);//undefined  第一种

// ？ 函数没有返回值
const fnNoReturn = ()=>{}
console.log(fnNoReturn());// 第二种 

// 参数不传值
const fn = (b)=>{
    //函数一运行就会有的  this ->  指针对象  指向一个对象   第三种
    console.log(arguments);
    console.log(typeof b);
}
console.log(fn(1,2,3));

//当对象调用不存在的属性时
const o = {c:'1'};
console.log(o.d);   //第四种   undefined


console.log(zr);//语法错误

console.log(null == undefined);//true   == 只要求值相等
console.log(null === undefined);//false   ===  全等 值和类型都相等