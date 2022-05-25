/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  let sum = 0;
  nums.sort((a, b) => {
    return Math.abs(b) - Math.abs(a);
  });

  //局部最优：让绝对值大的负数变为正数，当前数值达到最大
  for(let i = 0;i < nums.length;i++) {
    if(nums[i] < 0 && k > 0) {
      nums[i] *= -1;
      k--;
    }
  }

  //将负数都转变为正数了，K依然大于0
  //局部最优：只找数值最小的正整数进行反转，当前数值可以达到最大
  if(k > 0 && k % 2 === 1) {
    nums[nums.length - 1] *= -1;
  }

  k = 0;

  return nums.reduce((a, b) => a + b);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = largestSumAfterKNegations;
// @after-stub-for-debug-end