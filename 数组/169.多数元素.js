/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
/*   const halfNum = nums.length / 2;
  const map = new Map();
  let target;

  if(nums.length === 1) return nums[0];

  for(let i = 0;i < nums.length;i++) {
    if(map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
      if(map.get(nums[i]) > halfNum) {
        target = nums[i];
        break;
      }
    }else {
      map.set(nums[i], 1);
    }
  }

  return target; */

  //排序   思路：如果有一个数字出现的频率大于n/2，则在数组nums.length / 2的位置就是这个数
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};
// @lc code=end

