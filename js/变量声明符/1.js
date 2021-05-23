




var message;



var message = "hi";



var message = "hi";
message = 100; //合法，但不推荐


function test(){
    var message = "hi"; // 局部变量
}
test();
console.log(message);  // 出错！

function test(){
    message = "hi"; // 全局变量
}
test();
console.log(message);  // "hi"


var message = "hi",
    found = false,
age = 18;



function foo(){
    console.log(age);
    var age = 18;
}
foo(); // undefined

function foo(){
    var age;
    console.log(age);
    age = 18;
}
foo(); // undefined


function foo(){
    var age = 18;
    var age = 28;
    var age = 38;
    console.log(age);
}
foo(); //  38


if(true){
    var num =888;
    console.log(num); //888
}
console.log(num); //888


if(true){
    var age = 18;
    console.log(age); //18
}
console.log(age); //ReferenceError: age 没有定义


var name ;
var name ;

let age ;
let age ; //SyntaxError; 标识符age已经声明过了


var num = 8888;
console.log(num);  //8888
if(true){
    var num = 999;
    console.log(num);//999
}

let age = 20;
console.log(age);// 20
if(true){
    let age = 18;
    console.log(age);//18
}

var name;
let name;//SyntaxError

let age;
var age;//SyntaxError


//name 会被提升
console.log(name);//Undefined
var name = 'A';

//age 不会被提升
console.log(age);//ReferenceError: age没有定义
let age = 18;


var name = 'A';
console.log(window.name);//'A'

let age =18;
console.log(window.age);//undefined

for (var i=0;i<5;++i){
    //循环逻辑
}
console.log(i);// 5

for (let i = 0;i<5;++i){
    //循环逻辑
}
console.log(i);//ReferenceError:i没有定义

for (var i =0;i<5;++i){
    setTimeout(()=>console.log(i),0)
}
//你可能以为会输出 0 、 1 、 2 、 3 、 4 
//实际上会输出 5 、 5 、 5 、 5 、5

for(let i = 0;i<5;++i){
    setTimeout(()=>console.log(i),0)
}
// 输出 0 、 1 、2 、3 、4

const age= 18;
age = 20;// TypeError: 给常量赋值

// const也不允许重复声明
const name = 'A';
const name = 'D'; // SyntaxError

//const声明的作用域也是块
const num = 666;
if(true){
    const num = 888;
}
console.log(num); // 666

let i =0;
for(const j = 7; i< 5;++i){
    console.log(j);
}
//7,7,7,7,7

for(const key in {a:1,b:2}){
    console.log(key);
}
// a,b

for(const value of [1,2,3,4,5]){
    console.log(value);
}
// 1,2,3,4,5