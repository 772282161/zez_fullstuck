//数据范围   2的53次方 - 1   
//bigint 
// 高精度的时间戳， MySql  id  大数据
const theBiggestInt = 9007199254740991;
// console.log(typeof theBiggestInt);
const alsoHuge = BigInt(9007199254740991);

const b1 = BigInt(Number.Max_SAFE_INTEGER);
console.log(b1);
console.log(BigInt(Number.MIN_SAFE_INTEGER));

const maxPlusOne = b1 + 1n;
console.log(maxPlusOne);