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
      // used[i - 1] == true，说明同⼀树⽀nums[i - 1]使⽤过
      // used[i - 1] == false，说明同⼀树层nums[i - 1]使⽤过
      // 如果同⼀树层nums[i - 1]使⽤过则直接跳过
      if(i > 0 && n === nums[i-1] && !used[i-1]) continue;

      //如果同⼀树⽀nums[i]没使⽤过开始处理
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

