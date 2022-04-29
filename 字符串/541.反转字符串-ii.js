/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  const ss = s.split('');
  const len = s.length;

  for(let i = 0;i < len;i += 2*k) {
    let l = i - 1, r = i + k > len ? len : i + k;
    while(++l < --r) {
      [ss[r], ss[l]] = [ss[l], ss[r]];
    }
  }

  return ss.join('');
};
// @lc code=end

