/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  //暴力解法 时间复杂度为O（n^2）
  // for(let i = 0;i < nums.length;i++) {
  //   for(let j = i + 1;j < nums.length;j++) {
  //     sum = nums[i] + nums[j];
  //     if(sum === target) {
  //       return [i, j]
  //     }
  //   }
  // }

  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[target - nums[i]] !== undefined) {
      return [i, hash[target - nums[i]]];
    }
    hash[nums[i]] = i;
  }

  // const map = new Map();
  // for(let i = 0;i < nums.length;i++) {
  //   if(!map.has(target - nums[i])) {
  //     map.set(nums[i] ,i);
  //   } else {
  //     j = map.get(target - nums[i])
  //     return [i ,j];
  //   }
  // }

  return [];
};
// @lc code=end

