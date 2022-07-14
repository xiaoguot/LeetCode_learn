/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]); //先排序，保证区间左边界是递增的
  let prev = intervals[0];
  let result = [];

  for(let i = 0;i < intervals.length;i++) {
    let cur = intervals[i];

    if(cur[0] > prev[1]) {  //说明cur和prev边界不重合
      result.push(prev);
      prev = cur;
    }else {  //说明有重合的区间
      prev[1] = Math.max(prev[1], cur[1]);  //取右边界最大值
    }
  }

  result.push(prev);

  return result;
};
// @lc code=end

