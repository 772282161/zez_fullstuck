"use strict";
exports.__esModule = true;
exports.memberAPI = void 0;
var mockData_1 = require("./mockData");
// 前端会来这里请求
// ts : 函数返回值的类型 Promise 
// ? Promise 约定  resolve 后的数据是什么
// :Promise<MemberEntity[]> 
// 获取数据的动作
var fetchMembers = function () {
    // ts keypoint + react 
    // Promise 上的静态方法
    // Promise.resolve().then
    return Promise.resolve(mockData_1.members);
};
exports.memberAPI = {
    fetchMembers: fetchMembers
};
