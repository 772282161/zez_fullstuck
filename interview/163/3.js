//  引用类型 
    //          基本数据类型        引用数据类型(Array  Function Object)
// 存储的元素        值                地址(指针)


const a = []
const b = a;
b.push(1);
console.log(a);