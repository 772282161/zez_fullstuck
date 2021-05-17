// 基数排序
const countingSort = (arr, place) => {
  let length = arr.length
  let count = new Array(length).fill(0);

  // 将为i的元素放入桶里面, 进行计数
  for(let i = 0; i < length; i++) {
      let index = parseInt(arr [i] / place)
      count[index % 10 ]++
  }
  // 对所有的计数进行累加
  for(let i = 1; i < count.length; i++) {
      count[i] += count[i-1]
  }
  // 倒序输出到新的里列表里
  let output = new Array(length);
  for(let i = length-1; i>=0; i--) {
      let index = parseInt(arr [i] / place)
      output[count[index%10]-1] = arr[i]
      count[index%10]--;
  }
  return output
}
const redixSort = (arr) => {
  // 求出几位数
  let max = Math.max(...arr);
  let place = 1;
  while(parseInt(max / place) > 0) {
      arr = countingSort(arr, place)
      place *= 10
  }
  return arr
}
let a = [27, 21, 33, 14, 18, 11, 9, 17, 19, 20]
console.log(redixSort(a))
// 时间: 2kn
// 空间:

// 时间复杂度:nlog(n)
// 空间复杂度: