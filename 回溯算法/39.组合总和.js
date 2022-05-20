/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = [], path = [];
  const len = candidates.length;
  candidates.sort(); // 排序

  const backTracking = function(sum, startIndex) {
    if(sum === target) {
      res.push([...path]);
      return;
    }

    if(sum > target) {
      return;
    }

    for(let i = startIndex;i < len;i++) {
      if(candidates[i] > target - sum) continue;
      path.push(candidates[i]);
      sum += candidates[i];
      backTracking(sum, i);
      sum -= candidates[i];
      path.pop();
    }
  }

  backTracking(0, 0);
  return res;
};
// @lc code=end

