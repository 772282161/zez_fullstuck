const arr = [3,4,5];
// 给出在数组尾部/头部  增加、删除的方法
arr.push(6);   //面向对象的语言   尾部添加   将参数添加到原数组末尾，并返回数组的长度 
console.log(arr.pop());// 在尾部删除    删除原数组最后一项，并返回删除元素的值；如果数组为空则返回undefined 

arr.unshift(1); //在头部插入  将参数添加到原数组开头，并返回数组的长度 
arr.shift(1);// 在头部删除  并返回删除的数组元素的值  如果数组为空则返回undefined 
//把数组打印出来， 有多少种方法
for(let num in arr){
    console.log(num);
}

arr.forEach(item =>{
    console.log(item);
})

console.log(arr.join(" "));

console.log(arr.splice(0,arr.length));

console.log(arr.map(item => item));   //map  对数组进行操作


