/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map1 = new Map();
  let count = 0;

  for(let i = 0;i < nums1.length;i++) {
    for(let j = 0;j < nums2.length;j++) {
      let sum = nums1[i] + nums2[j];
      if(!map1.has(sum)) {
        map1.set(sum, 1)
      }else {
        map1.set(sum, map1.get(sum) + 1);
      }
    }
  }

    for(let i = 0;i < nums3.length;i++) {
    for(let j = 0;j < nums4.length;j++) {
      let sum = nums3[i] + nums4[j];
      if(map1.has(-sum)) {
        count = count + map1.get(-sum);
      }
    }
  }

  return count;
};
// @lc code=end

