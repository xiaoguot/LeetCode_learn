/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let number1 = new Set(nums1);
  let number2 = new Set(nums2);
  let res = new Set();

  for (let i of number1.values()) {
    if(number2.has(i)) {
      res.add(i);
    }
  }

  //Array.from(res)
  return [...res]
};
// @lc code=end

