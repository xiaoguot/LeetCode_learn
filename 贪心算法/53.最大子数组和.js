/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = -Infinity;
  let count = 0;

/*   局部最优：当前“连续和”为负数的时候立刻放弃，从下一个元素重新计算“连续和”，因为负数加上下一个元素 “连续和”只会越来越小。

  全局最优：选取最大“连续和” */

  for(let i = 0;i < nums.length;i++) {
    count += nums[i];
    if(count > res) {
      res = count;
    }

    if(count < 0) {
      count = 0;
    }
  }

  return res;
};
// @lc code=end

