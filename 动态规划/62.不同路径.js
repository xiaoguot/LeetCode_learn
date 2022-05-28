/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0].fill(1);
  if(n === 1) {
    return 1;
  }

  for(let i = 1;i < m;i++) {
    for(let j = 1;j < n;j++) {
      if(j === 1) {
        dp[i][j-1] = 1;
      }
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
    }
  }

  return dp[m-1][n-1];
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = uniquePaths;
// @after-stub-for-debug-end