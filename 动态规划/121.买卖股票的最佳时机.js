/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  //贪心算法
/*   const len = prices.length;
  let dp = new Array(len+1).fill(0);
  let min = prices[0];

  for(let i = 1;i < len;i++) {
    dp[i + 1] = Math.max(dp[i], prices[i] - min);

    if(prices[i] < min) {
      min = prices[i];
    }
  }

  return dp[len]; */

  //动态规划
  const len = prices.length;
  let dp = new Array(len).fill([0, 0]);
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  for(let i = 1;i < len;i++) {
    //第i天持有股票，所得最多现金
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    //第i天不持有股票，所得最多现金
    dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
  }

  return dp[len - 1][1];
};
// @lc code=end

