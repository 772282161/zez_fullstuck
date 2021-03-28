function duplicateCount(text){
    var str = text.toLowerCase().split('').sort().join('');
    
    //请得到所有的数字
    // var word = '123-4560-789';
    //    /\d+/ 正则 判断一个字符串是否符合规则
    // console.log(/\d+/.test(word));
    // console.log(word.match(/\d+/g));// g 全局   \d+  1个或多个
    // 相邻的字符是一样的，
    //  \n 之前匹配到的第几个小组  ([a-z])\1 相同的字符    RegExp.$1
    let arr = str.match(/(.)\1+/g);//   \1表示匹配的第一个单元   [a-z]小写字母 表示取值范围 
    // console.log(arr);
    return arr.length;
    console.log(str);
    
}

console.log(duplicateCount('wkiawjasakjwjwi'));