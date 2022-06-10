/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  let dp = new Array(n + 1).fill(0);  //注意是n+1
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for(let i = 3;i <= n;i++) {
    for(let j = 0;j < i;j++) {
      dp[i] += dp[i-j-1]*dp[j]
    }
  }

  return dp[n];
};
// @lc code=end

