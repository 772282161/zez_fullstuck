## 排序算法
### 时间复杂度和空间复杂度
时间复杂度  O(n) 渐近记法 最好Ω 最差O 平均θ
空间复杂度  树 log2(n) = 树的高数

### 内存分配
高地址 -> 低地址
依次为  内核虚拟内存  栈  堆   数据  data  Text
创建函数和局部变量 在栈上 从高到低创建
动态分配的空间  malloc  calloc  new  在堆上  从低到高创建

data 静态分配的空间、比如字符串、全局变量
text 机器运行时  只读  存放程序和常量


### 冒泡
`
const bubbleSort = arr =>{
  if (arr.length<=1) return 
  for (let i =0;i<arr.length-1;i++){
    for(let j = 0;j < arr.length-i-1;j++){
      if(arr[j] < arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
}
`
`
优化
const bubbleSort2 = arr =>{
  if(arr.length<=1) return
  for (let i = 0;i< arr.length -1 ; i++){
    let hashChange = false
    for ( let j = 0;i< arr.length -i -1;j++){
      if(arr[j]> arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        hashChange = true
      }
    }
      if(!hashChange) return
  }
}


`




### 选择
const sellectSort = arr =>{
  var minIndex, temp
  for(let i = 0; i< arr.length - 1;i++){
    minIndex = i
    for(let j=i+1;j< arr.length;j++){
      if(arr[j]<arr[minIndex]){
        minInex = j
      }
    [temp,arr[i]]=[arr[i],arr[minIndex]]
  }
  return arr
}

### 插入
const insertionSort = arr =>{
  if(arr.length<=1) return
  let current, preIndex
  for(let i = 1;i< arr.length;i++){
    preIndex = i-1
    current = arr[i]
    while(preIndex>=0&&arr[preIndex]>current){
      arr[preIndex+1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex+1] = current
  }
}

优化
`
const binaryInsertionSort = array => {
  let lenght = array.length
  if(length <= 1) return
  for ( let i = 1;i < length;i++){
    let low = 0
    let hight = i-1
    let current = array[i]
    while(low <= hight){
      let m = (low + hight) >> 1
      if(array[i] >= array[m]){
        low = m+1
      }else{
        hight = m-1
      }
    }
    for(let j = i ; j< left ; j--){
      array[j] = array[j-1]
    }
  }
  return array
}

`

### shell排序
`
const shellSort = arr => {
  let len = arr.length,temp,gap = 1;
  console.time('希尔排序耗时');

  while(gap < len/3){
    //动态定义间隔序列
    gap = gap*3 + 1
  }
  for(gap;gap>0;gap = Math.floor(gap/3)) {
    for (let i = gap;i< len ;i++) {
      temp = arr[i]
      let j = i - gap
      for(;j >= 0 && arr[j] > temp; j-= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j+gap] = temp
    }
  }
  console.timeEnd('希尔排序耗时')
  return arr
}

`


### 快速排序
const quickSort = arr =>{
  if(arr.length <= 1) return arr
  // 取基准点
  const middleIndex = Math.floor(arr.length/2)
  // 取基准点的值，splice(index,1) 返回的是含有被删除的元素的数组
  const valArr = arr.splice(middleIndex,1)
  const middleIndexVal = valArr[0]
  const left = [] //存放比基准点小的数组
  const right = [] // 存放比基准点大的数组
  // 遍历数组，进行判断分配
  for (let i = 0;i< arr.length;i++) {
    if(arr[i] < middleIndexVal) {
      left.push(arr[i]) //比基准点小的放在左边数组
    }else{
      right.push(arr[i]) // 比基准点大的放在左边数组
    }
  }
  // 递归执行以上操作，对左右两个数组进行操作，知道数组长度为 <= 1
  return quickSort(legt).concat(middleIndexVal,quickSort(right))
}
const array2 = [5, 4, 3, 2, 1];
console.log('quickSort1 ', quickSort1(array2));




### 四路归并



堆排序

基数排序
### 计数排序
`
const countingSort2 = (arr, maxValue) => {
	console.time('计数排序耗时');
	maxValue = maxValue || arr.length;
	let bucket = new Array(maxValue + 1),
		sortedIndex = 0;
	(arrLen = arr.length), (bucketLen = maxValue + 1);

	for (let i = 0; i < arrLen; i++) {
		if (!bucket[arr[i]]) {
			bucket[arr[i]] = 0;
		}
		bucket[arr[i]]++;
	}

	for (let j = 0; j < bucketLen; j++) {
		while (bucket[j] > 0) {
			arr[sortedIndex++] = j;
			bucket[j]--;
		}
	}
	console.timeEnd('计数排序耗时');
	return arr;
};

const array2 = [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2];
console.log('原始 array2: ', array2);
const newArr2 = countingSort2(array2, 21);
console.log('newArr2: ', newArr2);
// 原始 array:  [2, 2, 3, 8, 7, 1, 2, 2, 2, 7, 3, 9, 8, 2, 1, 4, 2, 4, 6, 9, 2]
// 计数排序耗时:   0.043212890625ms
// newArr:  	 [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 6, 7, 7, 8, 8, 9, 9]



`



### 桶排序

// 桶排序
const bucketSort = (array, bucketSize) => {
  if (array.length === 0) {
    return array;
  }

  console.time('桶排序耗时');
  let i = 0;
  let minValue = array[0];
  let maxValue = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i]; //输入数据的最小值
    } else if (array[i] > maxValue) {
      maxValue = array[i]; //输入数据的最大值
    }
  }

  //桶的初始化
  const DEFAULT_BUCKET_SIZE = 5; //设置桶的默认数量为 5
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  //利用映射函数将数据分配到各个桶中
  for (i = 0; i < array.length; i++) {
    buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
  }

  array.length = 0;
  for (i = 0; i < buckets.length; i++) {
    quickSort(buckets[i]); //对每个桶进行排序，这里使用了快速排序
    for (var j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]);
    }
  }
  console.timeEnd('桶排序耗时');

  return array;
};

// 快速排序
const quickSort = (arr, left, right) => {
	let len = arr.length,
		partitionIndex;
	left = typeof left != 'number' ? 0 : left;
	right = typeof right != 'number' ? len - 1 : right;

	if (left < right) {
		partitionIndex = partition(arr, left, right);
		quickSort(arr, left, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, right);
	}
	return arr;
};

const partition = (arr, left, right) => {
	//分区操作
	let pivot = left, //设定基准值（pivot）
		index = pivot + 1;
	for (let i = index; i <= right; i++) {
		if (arr[i] < arr[pivot]) {
			swap(arr, i, index);
			index++;
		}
	}
	swap(arr, pivot, index - 1);
	return index - 1;
};

const swap = (arr, i, j) => {
	let temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

const array = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
console.log('原始array:', array);
const newArr = bucketSort(array);
console.log('newArr:', newArr);
// 原始 array:  [4, 6, 8, 5, 9, 1, 2, 5, 3, 2]
// 堆排序耗时:   0.133056640625ms
// newArr:  	 [1, 2, 2, 3, 4, 5, 5, 6, 8, 9]
