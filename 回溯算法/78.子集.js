/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [], path = [];
  const len = nums.length;
  nums.sort(); //排序

  const backTracking = function(startIndex) {
    if(startIndex === 0) res.push([]);
    if(startIndex === len) return;

    for(let i = startIndex;i < len;i++) {
      let n = nums[i];
      path.push(n);
      res.push([...path]);
      backTracking(i + 1);
      path.pop();
    }
  }

  backTracking(0);
  return res;
};
// @lc code=end

