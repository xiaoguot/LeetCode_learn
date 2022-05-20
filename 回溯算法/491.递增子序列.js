/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const res = [], path = [];
  const len = nums.length;

  const backTracking = function(i) {
    if(path.length >= 2) {
      res.push([...path]);
    }

    //注意本题nums是不能先排序再运算，所以和用used数组有区别
    let uset = []; // 这里使用数组来进行去重操作，题目说数值范围[-100, 100]
    for(let j = i;j < len;j++) {
      const n = nums[j];
      if((j > 0 && n < path[path.length - 1]) || uset[nums[j] + 100]) continue;

      uset[nums[j] + 100] = true; // 记录这个元素在本层用过了，本层后面不能再用了
      path.push(n);
      backTracking(j + 1);
      path.pop();
    }
  }

  backTracking(0);

  return res;
};
// @lc code=end

