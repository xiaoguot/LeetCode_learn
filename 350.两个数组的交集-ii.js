/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if(nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const num1Map = new Map();
  const ret = [];

  for(let i of nums1) {
    num1Map.set(i,(num1Map.get(i) || 0) + 1)
  }

  for(let i of nums2) {
    if(num1Map.has(i) && num1Map.get(i) !== 0) {
      ret.push(i);
      num1Map.set(i,num1Map.get(i) - 1)
    }
  }

  return ret;

};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = intersect;
// @after-stub-for-debug-end