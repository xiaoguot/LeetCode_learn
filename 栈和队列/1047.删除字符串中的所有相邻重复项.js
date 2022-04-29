/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  const stack = [];

  for(let x of s) {
    let y = stack.pop();
    if(x !== y) {
      stack.push(y);
      stack.push(x);
    }
  }

  return stack.join('');
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeDuplicates;
// @after-stub-for-debug-end