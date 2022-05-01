/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = new Map();
  for(let i of ransomNote) {
    if(map.has(i)) {
      let count = map.get(i) + 1;
      map.set(i, count)
    }else {
      map.set(i,1);
    }
  }

  for(let i of magazine) {
    if(map.has(i)) {
      let count = map.get(i) - 1;
      if(!count) {
        map.delete(i);
      }else {
        map.set(i,count)
      }
    }
  }

  return !map.size;
};
// @lc code=end

const ransomNote = 'aa'
const magazine = 'aab'

canConstruct(ransomNote,magazine)
