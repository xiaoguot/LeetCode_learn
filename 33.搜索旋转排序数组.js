/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  //二分法
  let left = 0, right = nums.length - 1;
  while(left <= right) {
    let middle = left + Math.floor((right - left) / 2);
    if(nums[middle] === target) {
      return middle;
    }

    if(nums[middle] >= nums[left]) {     //在左侧升区间
      if(target >= nums[left] && target < nums[middle]) {    //说明target在[left, middle]之间
        right = middle - 1;
      }else {     //说明target在[middle, right]之间
        left = middle + 1;
      }
    }else {      //在右侧升区间
      if(target > nums[middle] && target <= nums[right]) {    //说明target在[middle, right]之间
        left = middle + 1;
      }else {
        right = middle - 1;     //说明target在[left, middle]之间
      }
    }
  }

  return -1;
};
// @lc code=end

