/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/* var findDisappearedNumbers = function(nums) {
  const set = new Set(nums);
  const len = nums.length;

  for(let i = 1;i <= len;i++) {
    if(set.has(i)) {
      set.delete(i);
    }else {
      set.add(i);
    }
  }

  return [...set];
}; */

var findDisappearedNumbers = function(nums) {
  const n = nums.length;
  for(const num of nums) {
    let x = (num-1) % n;
    nums[x] += n;
  }

  let res = [];
  for(const [i, num] of nums.entries()) {
    if(num <= n) {
      res.push(i+1);
    }
  }

  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findDisappearedNumbers;
// @after-stub-for-debug-end