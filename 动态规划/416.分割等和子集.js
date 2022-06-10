/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let sum = 0;
  nums.sort((a, b) => a - b);
  for(let i = 0;i < nums.length;i++) {
    sum += nums[i];
  }

  if(sum % 2 !== 0) {
    return false;
  }

  let target = sum / 2;
  const dp = Array(target + 1).fill(0);

  // 开始 01背包
  for(let i = 0;i < nums.length;i++) {
    for(let j = target;j >= nums[i];j--) {
      dp[j] = Math.max(dp[j], dp[j-nums[i]] + nums[i]);
    }
  }

  return dp[target] === target;
};
// @lc code=end

