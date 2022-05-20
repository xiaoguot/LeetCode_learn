/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
/* var combinationSum2 = function(candidates, target) {
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

    let f = -1;
    for(let i = startIndex;i < len;i++) {
      const n = candidates[i];
      if(n > target - sum || n === f) continue;
      f = n;
      path.push(n);
      sum += n;
      backTracking(sum, i + 1);
      sum -= n;
      path.pop();
    }
  }

  backTracking(0, 0);
  return res;
}; */

//使用used数组去重
var combinationSum2 = function(candidates, target) {
  const res = [], path = [];
  const len = candidates.length;
  candidates.sort(); // 排序
  let used = new Array(len).fill(false);

  const backTracking = function(sum, startIndex) {
    if(sum === target) {
      res.push([...path]);
      return;
    }

    if(sum > target) {
      return;
    }

    for(let i = startIndex;i < len;i++) {
      const n = candidates[i];
      if(n > target - sum || (i > 0 && n === candidates[i-1] && !used[i-1])) continue;
      path.push(n);
      sum += n;
      used[i] = true;
      backTracking(sum, i + 1);
      sum -= n;
      path.pop();
      used[i] = false;
    }
  }

  backTracking(0, 0);
  return res;
};
// @lc code=end

