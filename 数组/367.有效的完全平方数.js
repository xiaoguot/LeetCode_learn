/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 0, right = num;

    while(left <= right) {
      //x>>1 表示除以2并取整
      let middle = left + ((right - left) >> 1);
      //let middle = left + Math.floor((right - left)/2);

      if(middle * middle > num) {
        right = middle - 1;
      }else if(middle * middle < num) {
        left = middle + 1;
      }else {
        return true
      }
    }

    return false;
};
// @lc code=end

