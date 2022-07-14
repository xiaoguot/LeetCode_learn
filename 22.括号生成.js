/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
/* var generateParenthesis = function(n) {
  let set = new Set(['()']);

  for(let c= 2;c <= n;c++) {
    let nextSet = new Set();
    for(const s of set) {
      for(let j = 0;j <= s.length;j++) {
        nextSet.add(s.slice(0, j) + '()' + s.slice(j));
      }
    }

    set = nextSet;
  }

  return [...set];
};
 */

var generateParenthesis = function(n) {
  const res = [];

  const dfs = function(lRemain, rRemain, str) {
    if(str.length === 2 * n) {  //字符串完成构建
      res.push(str);  //加入解集
      return ; //结束当前递归分支
    }

    if(lRemain > 0) {  //左括号还剩就选它，继续做递归
      dfs(lRemain - 1, rRemain, str + '(');
    }
    if(lRemain < rRemain) {  //右括号比左括号剩的多， 才能选择右括号
      dfs(lRemain, rRemain - 1, str + ')');
    }

  }

  dfs(n, n, '');
  return res;
};
// @lc code=end