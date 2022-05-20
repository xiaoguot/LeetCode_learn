/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// 等差数列
var maxV = k => k * (9 + 10 - k) / 2;
var minV = k => k * (1 + k) / 2;

var combinationSum3 = function(k, n) {
  const res = [], path = [];
  function backTracking(k, n, i, sum) {
    const len = path.length;
    if(len > k || sum > n) return;
    if (maxV(k - len) < n - sum) return;
    if (minV(k - len) > n - sum) return;

    if(len === k && sum === n) {
      res.push([...path]);
      return;
    }

    const min = Math.min(n - sum, 9 - (k - len) + 1)

    for(let a = i;a <= min;a++) {
      path.push(a);
      sum += a;
      backTracking(k, n, a + 1, sum);
      sum -= a;
      path.pop();
    }
  }

  backTracking(k, n, 1, 0);
  return res;
};
// @lc code=end
// @after-stub-for-debug-begin
module.exports = combinationSum3;
// @after-stub-for-debug-end