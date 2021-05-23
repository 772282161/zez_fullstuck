/**
 * @author zez
 * @example 王总嫖娼不给钱
 * @param {any} o 
 * @param {string} type
 * @return boolean 
 */


// const isTypeof =(o,type) => {
//     //打补丁
//     if(typeof o === type)
//         return typeof o === type;   //number string..
//     else{
//         console.log(Object.prototype.toString.call(O));

//     }
//         // console.log('是对象')
        
    
// }

const isTypeof = (o,type) =>{
    if(['number','boolean','function','string',].indexOf(type)>0){
        return typeof o === type;
    }
    return Object.prototype.toString.call(o).toLowerCase().indexOf(type)>0;
}




// let a = [1,2,3];
// let a = () =>{}
// let a = "hello";
// let a;
// let a = [1,2,3];
let a = null;
//null  array  是有问题的
// console.log(typeof a);
console.log(isTypeof(a,'null'));