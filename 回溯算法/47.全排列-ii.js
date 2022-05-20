/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = [], path = [];
  const len = nums.length;
  nums.sort();
  let used = new Array(len).fill(false);

  const backTracking = function() {
    if(path.length === len) {
      res.push([...path])
      return;
    }

    for(let i = 0;i < len;i++) {
      const n = nums[i];
      if(i > 0 && n === nums[i-1] && !used[i-1]) continue;

      if(!used[i]) {
        used[i] = true;
        path.push(n);
        backTracking();
        path.pop();
        used[i] = false;
      }

    }
  }

  backTracking();
  return res;
};
// @lc code=end

