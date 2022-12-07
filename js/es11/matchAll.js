const reg = /[0-3]/g
const data = '2021'
console.log(data.matchAll(reg)); // {}
console.log([...data.matchAll(reg)]);