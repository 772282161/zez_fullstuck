let ary = [1,[2,[3,[4,5],6],7],8]
let str = JSON.stringify(ary)

// es6中的flat方法
// ary = ary.flat(Infinity);
// console.log(ary,'flat')

// replace + split
// ary = str.replace(/(\[|\])/g, '').split(',')
// console.log(ary,'replace');

// replace + JSON.parse
// str = str.replace(/(\[|\])/g, '');
// str = '[' + str + ']';
// ary = JSON.parse(str);
// console.log(str)

// 普通递归
// let result = []
// let fn = function(ary){
//     for(let i=0;i<ary.length;i++){
//         let item = ary[i]
//         if(Array.isArray(ary[i])){
//             fn(item)
//         }else{
//             result.push(item)
//         }
//         return result
//     }
    
// }

// console.log(result)


// 利用reduce函数迭代
function faltten(ary){
    return ary.reduce((pre,cur)=>{
        return pre.concat(Array.isArray(cur)?faltten(cur):cur)
    },[])
}
// let ary = [1,2,[3,4],[5,[6,7]],8]
console.log(faltten(ary))

//扩展运算符
while (ary.some(Array.isArray())) {
    ary = [].concat(...ary);
}