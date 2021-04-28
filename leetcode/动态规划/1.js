/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const MAX = 10001;
    let dp = Array(amount + 1).fill(MAX)
    dp[0] = 0
    for (let j = 0; j < coins.length; j++) {
        for (let i = coins[j]; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
        }
    }
    if (dp[amount] == MAX) {
        return -1
    }
    return dp[amount]
};

const coinChange = function(coins, amount) {
    const MAX = 10001
    // 用于保存每个目标总额对应的最小硬币个数
    const dp = Array(amount + 1).fill(MAX)
    // 提前定义已知情况(边界)
    dp[0] = 0
    // 遍历 [1, amount] 这个区间的硬币总额
    for(let i = 1;i <= amount; i++) {
        // 求的是最小值，因此我们预设为无穷大，确保它一定会被更小的数更新
        dp[i] = Infinity
        // 循环遍历每个可用硬币的面额
        for(let j = 0; j < coins.length; j++) {
            // 若硬币面额小于目标总额，则问题成立
            if(i - coins[j] >= 0) {
                // 状态转移方程
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }
    // 若目标总额对应的解为无穷大，则意味着没有一个符合条件的硬币总数来更新它，本题无解，返回-1
    if(dp[amount] === MAX) {
        return -1
    }
    // 若有解，直接返回解的内容
    return dp[amount]
};
