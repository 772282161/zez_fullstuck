//  力求上岸，抓紧时间
// 写好类似 LeetCode 函数，测试用例，期待的答案

// 提供36位的表达 0-9 a-z
function getNums36(){
    var nums36 = []
    for(let i =0;i<36;i++){
        if(i>=0&&i<=9){
            nums36.push(i)
        }else{
            nums36.push(String.fromCharCode(i+87))
        }
    }
    return nums36
}
console.log(getNums36());
function scale36(n){
    const arr=[]
    var nums36=getNums36();
    while(n){
        var res = n % 36
        console.log(res,'res-------')
        arr.unshift(nums36[res])
        // 进位 
        n = parseInt(n/36)
        console.log(n,'n++++++')
    }
    // 单独的功能函数
    // 36 0-9 a-z 
    return arr
}

console.log(scale36(73));  //10