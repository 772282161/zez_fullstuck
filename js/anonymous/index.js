

//事件执行函数，叫什么名字无所谓
// addEventListener('click',()=>{

// });

// 函数定义，不适合匿名函数的使用场景
// function (){
    
// }
//驼峰式命名
//立即执行函数
let res = (function(foo , bar) {//匿名函数
    return foo*bar;
})(20,3);
console.log(res);
// foo，bar 值传过去

// 交给外界

