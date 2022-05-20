/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let path = [], res = [];

  const backTracking = function(n, k, startIndex) {
    if(path.length === k) {
      res.push([...path]);
      return;
    }

    for(let i = startIndex;i <= n - (k - path.length) + 1;i++){
      path.push(i);
      backTracking(n, k, i+1);
      path.pop();
    }
  }

  backTracking(n, k, 1);
  return res;
};
// @lc code=end

