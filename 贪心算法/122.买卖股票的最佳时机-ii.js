/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = 0;

/*   局部最优：收集每天的正利润，全局最优：求得最大利润。
  利润是可以分解的
  假如第0天买入，第3天卖出，那么利润为：prices[3] - prices[0]。

  相当于(prices[3] - prices[2]) + (prices[2] - prices[1]) + (prices[1] - prices[0])。*/
  for(let i = 1;i < prices.length;i++) {
    res += Math.max(prices[i] - prices[i - 1], 0);
  }

  return res;
};
// @lc code=end

