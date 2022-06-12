/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let len = nums.length;
  let res = 1;
  let dp = new Array(len).fill(1); //dp[i]表示i之前包括i的以nums[i]结尾最长上升子序列的长度

  for(let i = 1;i < len;i++) {
    for(let j = 0;j < i;j++) {
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    res = Math.max(res, dp[i]);
  }

  return res;
};
// @lc code=end
