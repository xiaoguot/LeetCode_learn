/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePaths = function(m, n, obstacleGrid) {
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; ++i) {
    if(obstacleGrid[0][i] === 1) {
      break;
    }
    dp[0][i] = 1
  }

  for (let i = 0; i < m; ++i) {
    if(obstacleGrid[i][0] === 1) {
      break;
    }
    dp[i][0] = 1
  }

  for(let i = 1;i < m;i++) {
    for(let j = 1;j < n;j++) {
      if(obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      }else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
    }
  }

  return dp[m-1][n-1];
};

var uniquePathsWithObstacles = function(obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  return uniquePaths(m, n, obstacleGrid);
};
// @lc code=end

