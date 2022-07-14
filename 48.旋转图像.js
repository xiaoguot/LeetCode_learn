/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length;
  for(let i = 0;i < Math.floor(n / 2);i++) {
    for(let j = 0;j < Math.floor((n+1) / 2);j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = temp;
    }
  }
};

/* var rotate = function(matrix) {
  let len = matrix.length;

  for(let i = 0;i < len;i++) {
    let arr = [];
    for(let j = len - 1;j >= 0;j--){
      arr.push(matrix[j][i]);
    }
    matrix.push(arr);
  }
  matrix.splice(0,n);
}; */
// @lc code=end

