/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const map = new Map();
  map.set('2', ['a','b','c']);
  map.set('3', ['d','e','f']);
  map.set('4', ['g','h','i']);
  map.set('5', ['j','k','l']);
  map.set('6', ['m','n','o']);
  map.set('7', ['p','q','r','s']);
  map.set('8', ['t','u','v']);
  map.set('9', ['w','x','y','z']);

  const res = [], path = [];
  const digitsArray = Array.from(digits);
  const len = digitsArray.length;

  const backTracking = function(startIndex) {
    if(path.length === len) {
      res.push(path.join(''));
      return;
    }
    let arr = map.get(digitsArray[startIndex]);

    for(let i = 0;i < arr.length;i++) {
      path.push(arr[i]);
      backTracking(startIndex + 1);
      path.pop();
    }
  }

  if(!digits) return res;

  backTracking(0);

  return res;
};
// @lc code=end

