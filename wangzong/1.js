let ran_num = Math.random();
console.log(ran_num);
console.log(Math.floor(2,3)); //向下取整
console.log(Math.ceil(7.1));//向上取整
console.log(Math.round(2.7));//四舍五入

//0-9之间的整数随机
console.log(Math.floor(Math.random()*10));

let max = 100;
min = 0;
//在最小值和最大值之间的随机数
console.log(parseInt(Math.random()*100));
console.log(Math.floor(Math.random()*(max-min))+min);