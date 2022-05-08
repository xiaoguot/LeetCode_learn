/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
  let box = [-1,-1];
  let slow = 0, fast = 0, max = 0, curMax = 0;
  let len = fruits.length;

  while(slow < len) {
    box[0] = fruits[slow];
    while(fast < len) {
      if(fruits[slow] !== fruits[fast]) {
        if(box[1] === -1 || box[1] === fruits[fast]) {
          box[1] = fruits[fast];
          fast++;
          curMax++;
        }else if(box[1] !== fruits[fast]) {
          break;
        }
      }else {
        fast++;
        curMax++;
      }
    }

    max = curMax > max ? curMax : max;

    if(max >= len - slow) {
      return max;
    }

    slow++;
    fast = slow;
    curMax = 0;
    box[0] = -1;
    box[1] = -1;
  }

  return max;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = totalFruit;
// @after-stub-for-debug-end