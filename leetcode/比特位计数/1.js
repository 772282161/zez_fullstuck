// 方法一：直接计算
// 最直观的方法是对从 0到 num 的每个数直接计算「一比特数」。
// 每个 int 型的数都可以用 32 位二进制数表示，只要遍历其二进制表示的每一位即可得到 1 的数目。
// 利用位运算的技巧，可以在一定程度上提升计算速度。按位与运算（&）的一个性质是：
// 对于任意整数 x，令 x=x &(x-1)，该运算将 x 的二进制表示的最后一个 1 变成 
// 0。因此，对 x 重复该操作，直到 x 变成 0，则操作次数即为 x 的「一比特数」。

// 另外，部分编程语言有相应的内置函数，例如 Java 的 Integer.bitCount，C++ 的
// __builtin_popcount，Go 的 bits.OnesCount 等，读者可以自行尝试。
// 需要注意的是，使用编程语言的内置函数时，不适用本方法的时间复杂度分析



var countBits = function(num) {
    const bits = new Array(num+1).fill(0)
    for(let i=0;i<=num;i++){
        bits[i]=countOnes(i);
    }
    return bits
};

const countOnes=(x)=>{
    let ones=0
    while(x>0){
        x&=(x-1)
        ones++
    }
    return ones
}