/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0,right = nums.length - 1;
  while(left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if(nums[middle] > target) {
      right = middle - 1;
    }else if(nums[middle] < target) {
      left = middle + 1;
    }else {
      return middle;
    }
  }

  return -1;
};

// 测试用例
/* let nums = [-1,0,3,5,9,12];
let target = 3;

console.time('执行用时');
console.log(search(nums, target));
console.timeEnd('执行用时'); */
// @lc code=end

