/**
 *  功能：获得唯一ID
 * @author zez
 * @date 12-13
 * @return {string}
 */


// const uniqueID = () =>{
//     let t = + new Date();//+ 会进行类型转换
//     let ranNum = Math.ceil(Math.random()*10000);
//     return t  +""+ranNum;
// }
const uniqueID=()=>+new Date() +'' +Math.ceil(Math.random()*10000);
console.log(uniqueID());