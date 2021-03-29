// function foo(){
//     console.log(this.a)
// }

// var a=2;

// foo();// 2


// function foo(){
//     "use strict";
//     console.log(this.a);
// }
// var a=2;
// foo();//TypeError:this is undefined

// function foo(){
//     console.log(this.a)
// }

// var obj={
//     a:2,
//     foo:foo
// };
// obj.foo();// 2


// function foo(){
//     console.log(this.a);
// }
// var obj={
//     a:2
// }
// foo.call(obj);// 2

// function foo(something){
//     console.log(this.a,something);
//     return this.a+something;
// }
// var obj={
//     a:2
// }
// var bar=function(){
//     return foo.apply(obj,arguments)
// }
// var b=bar(3);// 2  3
// console.log(b); //5

// function foo(){
//     console.log("name:"+this.name);
// }
// var obj={name:"obj"},
//     obj2={name:"obj2"},
//     obj3={name:"obj3"};
// var fooOBJ=foo.softBind(obj);
// fooOBJ();  // name:obj
// obj2.foo=foo.softBind(obj);
// obj2.foo(); // name:obj2
// fooOBJ.call(obj3);//name:obj3
// setTimeout(obj2.foo,10);//name:obj 这里应用了软绑定

// function foo(a){
//     this.a=a;
// }
// var bar = new foo(2);
// console.log(bar.a)// 2

// function foo(){
//     console.log(this.a)
// }
// var obj1={
//     a:1,
//     foo:foo
// }
// var obj2={
//     a:2,
//     foo:foo
// }
// obj1.foo();//1
// obj2.foo();//2
// obj1.foo.call(obj2);//2
// obj2.foo.call(obj1);//1

// function foo(something){
//     this.a=something
// }
// var obj1={}
// var bar=foo.bind(obj1)
// bar(2)
// console.log(obj1.a)// 2
// var baz=new bar(3)
// console.log(obj1.a) // 2
// console.log(baz.a) //3


// function foo(){
//     //返回一个箭头函数
//     return (a)=>{
//         //this继承自foo()
//         console.log(this.a)
//     }
// }
// var obj1={
//     a:1
// }
// var obj2={
//     a:2
// }
// var bar =foo.call(obj1)
// bar.call(obj2) // 1 ,并不是2

if(!Function.prototype.softBind){
    Function.prototype.softBind=function(obj){
        var fn=this;
        //捕获所有curride 参数
        var curried=[].slice.call(arguments,1);
        var bound = function(){
            return fn.apply(
                (!this || this === (window || global))?obj:this,
                curried.concat.apply(curried,arguments)
            )
        }
        bound.prototype=Object.create(fn.prototype)
        return bound;
    }
}