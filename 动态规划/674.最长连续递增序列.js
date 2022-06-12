/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let len = nums.length;
  let res = 1;
  let dp = new Array(len).fill(1); //dp[i]表示i之前包括i的以nums[i]结尾最长连续上升子序列的长度

  for(let i = 1;i < len;i++) {
      if(nums[i] > nums[i-1]) {
        dp[i] = dp[i-1] + 1;
      }else {
        dp[i] = 1;
      }

    res = Math.max(res, dp[i]);
  }

  return res;
};
// @lc code=end

