/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let slow = 0;
  for(let fast = 0; fast < nums.length; fast++) {
      if(nums[fast] !== val) {
          nums[slow++] = nums[fast];
      }
  }
  return slow;
};

// 测试用例
let nums = [-1,0,3,0,9,0];
let val = 0;

console.time('执行用时');
console.log(removeElement(nums, val));
console.timeEnd('执行用时');
// @lc code=end

