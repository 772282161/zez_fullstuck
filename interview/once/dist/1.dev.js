"use strict";

// 函数 console.log  函数执行了  返回值记忆起来
var funcA = function funcA() {
  console.log('call');
  return 3;
}; // 闭包？ 怎样去记忆结果   延长作用域，


function once(f) {
  // 第一次的话，执行并返回值
  // 直接返回值
  var result;
  var revoked = false; //有没有调用过

  return function () {
    if (revoked) return result;
    var r = f.apply(void 0, arguments);
    result = r;
    revoked = true;
    return r;
  };
}

var once_f = once(funcA); //先不执行，返回一个新的函数

once_f(); //  call

once_f(); //  不执行