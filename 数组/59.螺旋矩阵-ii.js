/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let startX = startY = 0;  //定义每循环一个圈的起始位置
  let loop = Math.floor(n/2);  //旋转圈数  每个圈循环几次，例如n为奇数3，那么loop = 1 只是循环一圈，矩阵中间的值需要单独处理
  let mid = Math.floor(n/2);
  let offset = 1;
  let count = 1;
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while(loop--) {
    let row = startX, col = startY;

    //上行从左到右（左闭右开）
    for(; col < startX + n - offset; col++) {
      res[row][col] = count++;
    }

    //右列从上到下
    for(; row < startY + n - offset; row++) {
      res[row][col] = count++;
    }

    //下行从左到右
    for(; col > startX; col--) {
      res[row][col] = count++;
    }

    //左列从下到上
    for(; row > startY; row--) {
      res[row][col] = count++;
    }

    // 更新起始位置
    startX++;
    startY++;

    // 更新offset
    offset += 2;
  }

  // 如果n为奇数的话，需要单独给矩阵最中间的位置赋值
  if(n % 2 === 1) {
    res[mid][mid] = count;
  }

  return res;
};

// 测试用例
/* let n = 3;

console.time('执行用时');
console.log(generateMatrix(n));
console.timeEnd('执行用时'); */
// @lc code=end

