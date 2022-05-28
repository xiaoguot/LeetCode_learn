/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let dp = new Array(n + 1).fill(0);  //注意是n+1
  dp[2] = 1;  //初始化

  for(let i = 3;i <= n;i++) {
    for(let j = 1;j < i - 1;j++) {
      dp[i] = Math.max(dp[i], j * (i-j), dp[i - j] * j);
    }
  }



  return dp[n];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = integerBreak;
// @after-stub-for-debug-end