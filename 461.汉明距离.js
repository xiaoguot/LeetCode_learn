/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let len = 0;  //长度
  x = x ^ y;  //异或操作

  while(x) {
    x &= (x - 1);  //Brian Kernighan 算法
    len++;
  }

  return len;
};
// @lc code=end
