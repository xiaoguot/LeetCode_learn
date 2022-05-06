/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x;

    while(left <= right) {
      //x>>1 表示除以2并取整
      let middle = left + ((right - left) >> 1);
      //let middle = left + Math.floor((right - left)/2);

      if(middle * middle > x) {
        right = middle - 1;
      }else if(middle * middle < x) {
        left = middle + 1;
      }else {
        return middle
      }
    }

    if(left * left < x) return left;
    if(right * right < x) return right;
};
// @lc code=end

