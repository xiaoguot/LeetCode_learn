/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let res = 0;
  const glen = g.length;
  const slen = s.length;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);


/*   for(let i = 0;i < glen;i++) {
    while(j < slen) {
      if(s[j] >= g[i]) {
        res++;
        j++;
        break;
      }else {
        j++;
      }
    }
  } */

  for(let i = 0;i < slen;i++) {
    if(res < glen && g[res] <= s[i]) {
      res++;
    }
  }

  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findContentChildren;
// @after-stub-for-debug-end