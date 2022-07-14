/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();

  for(let str of strs) {
    let array = Array.from(str); //将字符串转为数组
    array.sort();  //给字母排序
    let key = array.toString();  //再转为字符串   str.split('').sort().join('')
    let list = map.get(key) ? map.get(key) : new Array();
    list.push(str);
    map.set(key, list);
  }

  return [...map.values()];
};
// @lc code=end

