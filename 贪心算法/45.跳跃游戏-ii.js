/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let nextIndex = 0;
  let curIndex = 0;
  let steps = 0;

  for(let i = 0;i < nums.length - 1;i++) {
    nextIndex = Math.max(i + nums[i], nextIndex);
    if(i === curIndex) {
      curIndex = nextIndex;
      steps++;
    }
  }

  return steps;
};
// @lc code=end

