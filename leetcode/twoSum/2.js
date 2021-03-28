/**
 * @author zez
 * @date 20-11-20
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 */


//箭头函数
const twoSum = (nums,target) =>{
    // console.log('两数相加')
    let map= {}; //JSON Object  HashMap 哈希表
    let res= [];
    //编写功能  一个函数完成一个功能
    // nums.forEach((e,i) => {   //forEach 内置遍历函数 
    //     console.log(e,i);  //e当前值 i下标
    // })
    //es6更简洁
    // callback
    //for +执行功能
    nums.forEach((e,i)=>map[e]=i);  //时间 O(n)
    // console.log(map)
    for(let i=0;i<nums.length;i++){  //时间 O(n)
        let j=map[target-nums[i]];  //没有 undefined
        if(j&&j!==i){
            res=[i,j];
            break;
        }
    }
    return res;
}

console.log(twoSum([2,7,11,15],9));