// 重复次数

// 编写一个函数，返回distinct不区分大小写的字母字符和数字在输入字符串中多次出现的。
// 可以假定输入字符串只包含字母
// （大写和小写）和数字。

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


// 给定一个字符串比如说是 aabbcaAb，忽略大小写，a和b重复，返回2，返回的是重复的字母个数，而不是重复次数
// 对于 aabbcaAb，
// 1、先把所有字母变成小写，toLowerCase()(string对象的属性)
// 2、把字符串转成数组并且按照字典顺序排序，.split().sort()，['a','a','a','a','b','b','b','c']
// 3、把得到的数组组合成字符串，join(''),'aaaabbbc'
// 4、用正则表达式匹配重复字母 返回 ['aaaa','bbb','c']
// 5、返回以上数组长度


function duplicateCount(text){
    return (text.toLowerCase().split().sort().join('').match(/([^])\1+/g) || []).length;
}

console.log(duplicateCount(" "));
console.log(duplicateCount("aA11bbsssssksajg"));