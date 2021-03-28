"use strict";

// let a=[1,2,3];
// console.log(a.shift());
// && 与运算
// a.join=a.shift; // 其中一种
//对象  类型转化 1
var a = {
  // i:0,
  value: [3, 2, 1],
  // valueOf:function(){return ++this.i}
  valueOf: function valueOf() {
    return this.value.pop();
  }
}; // console.log(a ==1);

console.log(a == 1 && a == 2 && a == 3);