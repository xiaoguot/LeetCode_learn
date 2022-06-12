/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let len = prices.length;

  if(len < 2) {
    return 0;
  }else if(len < 3) {
    return Math.max(0, prices[1] - prices[0]);
  }

  let dp = new Array(len).fill(0).map(() => new Array(4).fill(0));
  //let dp = Array.from(Array(prices.length), () => Array(4).fill(0));
  dp[0][0] = -prices[0]; //第0天买入股票，所得最大现金为负数

  for(let i = 1;i < len;i++) {
    dp[i][0] = Math.max(dp[i-1][0], Math.max(dp[i-1][3],dp[i-1][1]) - prices[i]);// 持有状态
    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][3]); // 今天不操作且不持有股票
    dp[i][2] = dp[i-1][0] + prices[i]; // 今天卖出股票
    dp[i][3] = dp[i-1][2]; // 冷冻期
  }

  return Math.max(dp[len-1][1], dp[len-1][2], dp[len-1][3]);
};
// @lc code=end

