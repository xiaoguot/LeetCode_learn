/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
const isPalindrome = (s, l, r) => {
  for(let i = l, j = r;i < j;i++, j--) {
    if(s[i] !== s[j]) {
      return false;
    }
  }

  return true;
}

var partition = function(s) {
  const res = [], path = [], len = s.length;

  const backTracking = function(i) {
    // 如果起始位置已经大于s的大小，说明已经找到了一组分割方案了
    if(i >= len) {
      res.push([...path]);
      return;
    }

    for(let j = i;j < len;j++) {
      if(!isPalindrome(s, i , j)) continue;// 是回文子串,如果不是则直接跳过
      path.push(s.substr(i, j - i + 1));
      backTracking(j + 1);//寻找j+1为起始位置的子串
      path.pop();// 回溯过程，弹出本次已经填在的子串
    }
  }

  backTracking(0);
  return res;
};
// @lc code=end

