//es6 提供的新的数据结构
//1. 为了数组的优化而来 
//Set   Map  两种数据结构  存放特定的数据集合的
const people = new Set();//  []
people.add('王总');
people.add('去天上人间嫖娼');
people.add('不给钱');
people.add('王总');
for(const person of people){
    console.log(person);
}
// console.log(people);

const students = new Set(['王总','去天上人间','嫖娼','总不给钱',]);
students.add('还想赊账');
console.log(students);