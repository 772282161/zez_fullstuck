// var anotherObject = {
//     a:2
// }
// // 创建一个关联anotherObject 的对象
// var myObject = Object.create(anotherObject)

// myObject.a // 2

// console.log(myObject.a)

var anotherObject = {
    a:2
}
// 创建一个关联anotherObject 的对象
var myObject = Object.create(anotherObject)

for (var k in myObject){
    console.log(k)
}
// 2
("a" in myObject);//true