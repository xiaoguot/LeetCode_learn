/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let left = 0,right = nums.length - 1;
  while(left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if(nums[middle] > target) {
      right = middle - 1;  //target在左区间，所以[left,middle - 1]
    }else if(nums[middle] < target) {
      left = middle + 1;  //target在右区间，所以[middle + 1,right]
    }else {  // nums[middle] == target
      return middle;
    }
  }

  return right + 1;
};

// 测试用例
/* let nums = [-1,0,3,5,9,12];
let target = 4;

console.time('执行用时');
console.log(searchInsert(nums, target));
console.timeEnd('执行用时'); */
// @lc code=end

