//给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。
// 实现 NumArray 类：
// NumArray(int[] nums) 使用数组 nums 初始化对象
// int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，
// 包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）


//  总和可以拆解为前j项元素总和减去前i项元素总和



var NumArray = function(nums) {
    const n = nums.length;    //定义n定值为数组的长度
    this.nums = new Array(n+1).fill(0);  //定义新数组，此数组为 nums数组的下标从0到i-1项和
    for(let i=0;i<=n;i++){
        this.nums[i+1]=this.nums[i]+nums[i];  // 下标前i+1项的和为此数组的下标前i项和再加上原数组的第i项
    }
};


NumArray.prototype.sumRange = function(i, j) {
    return this.nums[j+1]-this.nums[i]  // 下标i到j项和为数组前j项和减去前i项和
};
