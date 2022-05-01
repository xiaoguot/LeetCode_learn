/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var getSum = function(n) {
  let sum = 0;
  while(n) {
    sum += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }

  return sum;
}

var isHappy = function(n) {
  const resultSet = new Set();

  while(n !== 1) {

    n = getSum(n);
    if(resultSet.has(n)) {
      // 如果在循环中某个值重复出现，说明此时陷入死循环，也就说明这个值不是快乐数
      return false;
    } else {
      resultSet.add(n);
    }
  }

  return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isHappy;
// @after-stub-for-debug-end