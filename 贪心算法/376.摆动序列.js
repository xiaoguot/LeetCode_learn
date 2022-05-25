/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//贪心算法
/* var wiggleMaxLength = function(nums) {
  if(nums.length <= 1) return nums.length;
  let res = 1;
  let preDiff = 0, curDiff = 0;

  for(let i = 0;i < nums.length - 1;i++) {
    curDiff = nums[i + 1] - nums[i];
    if((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
      res++;
      preDiff = curDiff;
    }
  }

  return res;
}; */

//动态规划
var wiggleMaxLength = function(nums) {
  if(nums.length === 1) return 1;
  let up = 1, down = 1;
  for(let i = 1;i < nums.length;i++) {
    if(nums[i] < nums[i - 1]) {
      down = Math.max(up + 1, down);
    }

    if(nums[i] > nums[i - 1]) {
      up = Math.max(up, down + 1);
    }
  }

  return Math.max(up, down);
};
// @lc code=end

