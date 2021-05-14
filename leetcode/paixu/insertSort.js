const binaryInsertionSort = array => {
	const len = array.length;
	if (len <= 1) return;

	let current, i, j, low, high, m;
	for (i = 1; i < len; i++) {
		low = 0;
		high = i - 1;
		current = array[i];

		while (low <= high) {
			//步骤 1 & 2 : 折半查找
			m = (low + high) >> 1; // 注: x>>1 是位运算中的右移运算, 表示右移一位, 等同于 x 除以 2 再取整, 即 x>>1 == Math.floor(x/2) .
			if (array[i] >= array[m]) {
				//值相同时, 切换到高半区，保证稳定性
				low = m + 1; //插入点在高半区
			} else {
				high = m - 1; //插入点在低半区
			}
		}
		for (j = i; j > low; j--) {
			//步骤 3: 插入位置之后的元素全部后移一位
			array[j] = array[j - 1];
			console.log('array2 :', JSON.parse(JSON.stringify(array)));
		}
		array[low] = current; //步骤 4: 插入该元素
	}
	console.log('array2.0 :', JSON.parse(JSON.stringify(array)));
	return array;
};


let a = [9,1,8,2,7,3,6,4,5]
console.log (binaryInsertionSort(a))