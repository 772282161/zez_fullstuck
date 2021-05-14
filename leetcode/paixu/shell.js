const shellSort = arr => {
  let len = arr.length,gap = 1,temp;
  console.time('希尔排序耗时')
  while(gap < len/3){
    gap = gap*3 + 1
  }
  for(gap;gap>0;gap = Math.floor(gap/3)){
    for(let i = gap;i<len;i++){
      temp = arr[i]
      let j = i - gap
      for(;j>=0 && arr[j]>temp;j-=gap){
        arr[j+gap] = arr[j]
      }
      arr[j+gap] = temp
    }
  }
  console.timeEnd('希尔排序耗时')
  return arr
}
const array = [35, 33, 42, 10, 14, 19, 27, 44];
console.log('原始array:', array);
console.log(shellSort(array))