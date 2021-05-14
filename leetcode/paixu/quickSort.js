console.time('快速排序耗时')
const quickSort = arr => {
	if (arr.length <= 1) {
		return arr;
	}

	//取基准点
	const midIndex = Math.floor(arr.length / 2);
	//取基准点的值，splice(index,1) 则返回的是含有被删除的元素的数组。
	const valArr = arr.splice(midIndex, 1);
	const midIndexVal = valArr[0];
	const left = []; //存放比基准点小的数组
	const right = []; //存放比基准点大的数组
	//遍历数组，进行判断分配
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < midIndexVal) {
			left.push(arr[i]); //比基准点小的放在左边数组
		} else {
			right.push(arr[i]); //比基准点大的放在右边数组
		}
	}
	//递归执行以上操作，对左右两个数组进行操作，直到数组长度为 <= 1
	return quickSort(left).concat(midIndexVal, quickSort(right));
  
};
console.timeEnd('快速排序耗时')
const array2 = [35, 33, 42, 10, 14, 19, 27, 44];
console.log('quickSort1 ', quickSort(array2));
// quickSort1: [1, 2, 3, 4, 5]

