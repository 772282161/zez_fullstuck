//Promise 题目

const delay = (ms) => new Promise ((resolve)=>setTimeout(resolve,msg)); 

1.递归的高级套路
    数组的length + shift 操作
    run 只要调用一个API 就可以
    区分flow 跟普通函数、delay函数  标记 isFlow:true 
    slice
    flat 