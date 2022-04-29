/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/* 方法一：暴力解法  时间复杂度O(n^2)
var minSubArrayLen = function(target, nums) {
  let min = 0, length;
  for(let i = 0;i < nums.length;i++) {
    let sum = 0;
    for(let j = i;j < nums.length;j++) {
      sum += nums[j];
      if(sum >= target) {
        length = j - i + 1;
        if(length < min | min === 0) {
          min = length;
        }
      }
    }
  }

  return min;
}; */

//方法二：滑动窗口
var minSubArrayLen = function(target, nums) {
  let min = 0, length = 0, sum = 0, j = 0;
  for(let i = 0;i < nums.length;i++) {
    sum += nums[i];
    while(sum >= target) {
      length = i - j + 1;
      if(length < min | min === 0) {
        min = length;
      }
      sum -= nums[j++];
    }
  }

  return min;
};

// 测试用例
/* let nums = [1,1,5,4,6];
let target = 11;

console.time('执行用时');
console.log(minSubArrayLen(target, nums));
console.timeEnd('执行用时'); */
// @lc code=end

