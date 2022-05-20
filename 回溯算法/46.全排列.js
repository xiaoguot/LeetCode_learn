/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [], path = [];
  const len = nums.length;
  let used = new Array(len).fill(false);

  const backTracking = function() {
    if(path.length === len) {
      res.push([...path])
      return;
    }

    for(let i = 0;i < len;i++) {
      if(used[i]) continue;

      used[i] = true;
      path.push(nums[i]);
      backTracking();
      path.pop();
      used[i] = false;
    }
  }

  backTracking();
  return res;
};
// @lc code=end

