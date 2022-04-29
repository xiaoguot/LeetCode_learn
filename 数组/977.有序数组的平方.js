/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
/*方法一：   return nums.map(x => x*x).sort(function(x,y) {
    if(x < y) {
      return -1;
    }else if(x > y) {
      return 1;
    }else {
      return 0;
    }
  }); */

  /* 方法一简洁版  return nums.map(x => x*x).sort((x,y) => x-y); */

  //方法二  双指针法
  let n = nums.length;
  let res = new Array(n).fill(0);
  let j = n - 1, k = n - 1;
  for(let i = 0;i<=j;) {
    let right = nums[j] * nums[j];
    let left = nums[i] * nums[i];
    if(left <= right) {
      res[k--] = right;
      j--;
    }else if(left > right) {
      res[k--] = left;
      i++;
    }
  }

  return res;
};
// @lc code=end

const nums = [-7,-3,2,3,11];
console.log(sortedSquares(nums));