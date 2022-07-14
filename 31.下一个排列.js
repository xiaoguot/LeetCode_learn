/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let i = nums.length - 2;
  while(i >= 0 && nums[i] >= nums[i+1]) { //向左遍历，寻找第一个小于右邻居的数
    i--;
  }
  if(i >= 0) {  //这个数在数组中存在，从它身后挑一个比它大的数和它换
    let j = nums.length - 1;
    while(j >= 0 && nums[j] <= nums[i]) { //从最后向左遍历，找到第一个比它大
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]];  //交换
  }
  //如果 i=-1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
  let l = i + 1;
  let r = nums.length - 1;
  while(l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];  // i 右边的数进行翻转，使得变大的幅度小一些
    l++;
    r--;
  }
};
// @lc code=end

