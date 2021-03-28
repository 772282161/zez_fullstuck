const dogs = new Map();
const friends = new Map();
friends.set('王总','又去天上人间嫖娼又不给钱又想赊账');
friends.set('王燕姐','被抓了');

//遍历   key  value
console.log(friends);
friends.forEach((key,val)=>{
    console.log(key,val);
});

for(const [key,val] of friends){
    //解构 
    console.log(key,val);
}

const [a,b] = [1,2];
const { } = {"a":1,"b":3};//
console.log(a,b);

