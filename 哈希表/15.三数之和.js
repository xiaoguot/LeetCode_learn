/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len = nums.length;
  if(len < 3) return [];
  nums.sort((a, b) => a - b);
  const resSet = new Set();

  for(let i = 0;i < len - 2;i++) {
    if(nums[i] > 0) break;
    let l= i + 1, r = len - 1;

    while(l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if(sum > 0) { r--; continue };
      if(sum < 0) { l++; continue };
      resSet.add(`${nums[i]},${nums[l]},${nums[r]}`);
      l++;
      r--;
    }
  }

  //先将set转为数组，再通过split将数组里的字符串转为数组最终想要的结果
  let num = Array.from(resSet);
  let ret = num.map(i => i.split(","));

  return ret;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = threeSum;
// @after-stub-for-debug-end