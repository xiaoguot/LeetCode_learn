/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//双指针   时间复杂度：O(n)   空间复杂度：O(1)
var sortColors = function(nums) {
  let n = nums.length;
  let p0 = 0, p1 = 0;

  for(let i = 0;i < n;i++) {
    if(nums[i] === 1) {
      [nums[p1], nums[i]] = [nums[i], nums[p1]];
      p1++;
    }else if(nums[i] === 0) {
      [nums[p0], nums[i]] = [nums[i], nums[p0]];
      if(p0 < p1) {
        [nums[p1], nums[i]] = [nums[i], nums[p1]];
      }
      p0++;
      p1++;
    }
  }
};

/*
//单指针   时间复杂度：O(n)   空间复杂度：O(1)
var sortColors = function(nums) {
  let n = nums.length;
  let ptr = 0;
  for(let i = 0;i < n;i++) {
    if(nums[i] === 0) {
      [nums[ptr], nums[i]] = [nums[i], nums[ptr]];
      ptr++;
    }
  }

  for(let i = ptr;i < n;i++) {
    if(nums[i] === 1) {
      [nums[ptr], nums[i]] = [nums[i], nums[ptr]];
      ptr++;
    }
  }
};
 */


/* 时间复杂度：O(n^2)
var sortColors = function(nums) {
  let n = nums.length;
  if(n > 1) {
    for(let slow = 0;slow < n;slow++){
      for(let fast = slow+1;fast < n;fast++) {
        if(nums[slow] > nums[fast]) {
          [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
        }
      }
    }
  }
};
*/
// @lc code=end
