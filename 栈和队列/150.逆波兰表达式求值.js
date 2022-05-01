/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  // const stack = [];
  // let res = 0;
  // let x = 0;
  // let y = 0;

  // for(let i = 0;i < tokens.length;i++) {

  //   //方法一
  //   switch (tokens[i]) {
  //     case '+':
  //     x = stack.pop();
  //     y = stack.pop();
  //     res = x + y;
  //     stack.push(res);
  //       break;
  //     case '-':
  //     x = stack.pop();
  //     y = stack.pop();
  //     res = y - x;
  //     stack.push(res);
  //       break;
  //     case '*':
  //     x = stack.pop();
  //     y = stack.pop();
  //     res = x * y;
  //     stack.push(res);
  //       break;
  //     case '/':
  //     x = stack.pop();
  //     y = stack.pop();
  //     //Math.trunc() 方法会将数字的小数部分去掉，只保留整数部分。
  //     //res = -Math.floor(Math.abs(y / x));
  //     res = Math.trunc(y / x);
  //     stack.push(res);
  //       break;
  //     default:
  //       stack.push(Number(tokens[i]));
  //       break;
  //   }
  // }

  //方法二
  const s = new Map([
    ["+", (a, b) => a * 1 + b * 1],
    ["-", (a, b) => b - a],
    ["*", (a, b) => b * a],
    ["/", (a, b) => Math.trunc(b / a)],
  ]);
  const stack = [];

  for(const i of tokens) {
    if(!s.has(i)) {
      stack.push(i);
      continue;
    }

    stack.push(s.get(i)(stack.pop(), stack.pop()));
  }

  return stack.pop();
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = evalRPN;
// @after-stub-for-debug-end