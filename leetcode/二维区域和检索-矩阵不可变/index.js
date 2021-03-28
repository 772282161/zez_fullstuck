// 给定一个二维矩阵，计算其子矩形范围内元素的总和，该子矩阵的左上角为 (row1, col1) ，右下角为 (row2, col2) 。

// 上图子矩阵左上角 (row1, col1) = (2, 1) ，右下角(row2, col2) = (4, 3)，该子矩形内元素的总和为 8。
// 给定 matrix = [
//     [3, 0, 1, 4, 2],
//     [5, 6, 3, 2, 1],
//     [1, 2, 0, 1, 5],
//     [4, 1, 0, 1, 7],
//     [1, 0, 3, 0, 5]
//   ]

//   sumRegion(2, 1, 4, 3) -> 8
//   sumRegion(1, 1, 2, 2) -> 11
//   sumRegion(1, 2, 2, 4) -> 12


// 初始化时对数组计算前缀和，每次检索即可在 O(1) 的时间内得到结果。初始化时对矩阵的每一行计算前缀和，
// 检索时对二维区域中的每一行计算子数组和，然后对每一行的子数组和计算总和。
// 具体实现方面，创建 mm 行 n+1n+1 列的二维数组 {sums}sums，其中 mm 和 nn 分别是矩阵 {matrix}matrix 的行数和列数，
// {sums}[i]sums[i] 为 {matrix}[i]matrix[i] 的前缀和数组。将 {sums}sums 的列数设为 n+1n+1 的目的是为了方便计算每一行的子数组和，
// 不需要对 {col}_1=0	的情况特殊处理。








var NumMatrix = function(matrix){
    const m = matrix.length
    if(m>0){
        const n = matrix[0].length
        this.sums = new Array(m).fill(0).map(()=>new Array(n+1).fill(0))
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                this.sums[i][j+1] = this.sums[i][j] + matrix[i][j]
            }
        }
    }
}

NumMatrix.prototype.sumRegio = function(row1,col1,row2,col2){
    let sum=0
    for(let i=row1;i<=row2;i++){
        sum+=this.sums[i][col2+1]-this.sums[i][col1]
    }
    return sum
}