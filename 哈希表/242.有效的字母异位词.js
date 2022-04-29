/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  //两个字符串长度不相同肯定不为字母异位词
  if(s.length !== t.length) return false;

  //需要把字符映射到数组也就是哈希表的索引下标上，因为字符a到字符z的ASCII是26个连续的数值，所以字符a映射为下标0，相应的字符z映射为下标25。
  let ret = new Array(26).fill(0);
  const base = 'a'.charCodeAt();

  for(let i of s) {
    ret[i.charCodeAt() - base]++;
  }
  for(let i of t) {
    if(!ret[i.charCodeAt() - base]) return false;
    ret[i.charCodeAt() - base]--;
  }

  return true;
};
// @lc code=end

