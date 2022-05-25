/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  if(nums.length === 1) return true;
  let cover = 0;

/*   局部最优解：每次取最大跳跃步数（取最大覆盖范围），整体最优解：最后得到整体最大覆盖范围，看是否能到终点 */
  for(let i = 0;i <= cover;i++) {
    cover = Math.max(cover, i + nums[i]);
    if(cover >= nums.length - 1) {
      return true;
    }
  }

  return false;
};
// @lc code=end

