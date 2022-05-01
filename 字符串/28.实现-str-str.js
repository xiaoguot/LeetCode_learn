/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  let haystackArr = Array.from(haystack);
  let needleArr = Array.from(needle);
  let h = 0, n = 0, temp = -1;

  if(needle.length === 0) return 0;

  while(n < needle.length && h < haystack.length) {
    if(haystackArr[h] === needleArr[n]) {
      if(temp < 0 || haystackArr[h-1] === needleArr[n-1]) {
        temp = h;
        n++;
        h++;
      }else {
        return -1;
      }
    }else if(temp >= 0) {
      return -1;
    }else {
      h++;
    }
  }

  return temp >= 0 ? temp - needle.length + 1 : -1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = strStr;
// @after-stub-for-debug-end