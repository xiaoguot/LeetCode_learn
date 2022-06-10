/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let len = nums.length;
  let dp = new Array(len + 1).fill(0);
  dp[1] = nums[0];

  for(let j = 2;j <= len;j++) {
    dp[j] = Math.max(dp[j-2] + nums[j-1], dp[j-1]);
  }

  return dp[len];
};
// @lc code=end

