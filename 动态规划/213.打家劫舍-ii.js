/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let len = nums.length;
  if (len === 0) return 0
  if (len === 1) return nums[0]
  let dp1 = new Array(len).fill(0);
  let dp2 = new Array(len).fill(0);
  dp1[1] = nums[0];
  dp2[1] = nums[1];

  //考虑包含首元素，不包含尾元素
  for(let j = 2;j <= len-1;j++) {
    dp1[j] = Math.max(dp1[j-2] + nums[j-1], dp1[j-1]);
  }

  //考虑包含尾元素，不包含首元素
  for(let j = 2;j <= len;j++) {
    dp2[j] = Math.max(dp2[j-2] + nums[j], dp2[j-1]);
  }

  return Math.max(dp1[len-1], dp2[len-1]);
};
// @lc code=end

