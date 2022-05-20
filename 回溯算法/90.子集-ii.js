/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const res = [], path= [];
  const len = nums.length;
  nums.sort();

  backTracking(0);
  return res;

  function backTracking(i) {
    res.push([...path]);

    let f = -1;
    for(let j = i;j < len;j++){
      const n = nums[j];
      if(j > 0 && n === nums[j - 1] && n === f) continue;
      f = n;
      path.push(n);
      backTracking(j + 1);
      path.pop();
    }
  }
};
// @lc code=end

