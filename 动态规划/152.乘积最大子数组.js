/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

//动态规划
var maxProduct = function(nums) {
  let len = nums.length;
  // 维护一个最大值和一个最小值
  let prevMin = nums[0];
  let prevMax = nums[0];
  let res = nums[0];
  let temp1 = 0, temp2 = 0;

  for(let i = 1;i < len;i++) {
    temp1 = prevMin * nums[i];
    temp2 = prevMax * nums[i];
    prevMin = Math.min(temp1, temp2, nums[i]);
    prevMax = Math.max(temp1, temp2, nums[i]);
    res = Math.max(res, prevMax);
  }

  return res;
};
// @lc code=end

