/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  //字符串转为数组
  let strArr = Array.from(s);
  // 移除多余空格
  removeExtraSpace(strArr);
  //翻转整个字符串
  reverse(strArr, 0, strArr.length - 1)

  let start = 0;

  for(let i = 0;i <= strArr.length;i++) {
    if(strArr[i] === ' ' || i === strArr.length) {
      // 翻转单词
      reverse(strArr, start, i-1)
      start = i + 1
    }
  }

  return strArr.join('');
};

var removeExtraSpace = function(strArr) {
  let slow = 0, fast = 0;
  
  while(fast < strArr.length) {
    //移除开头和重复的空格
    if(strArr[fast] === ' ' && (fast === 0 || strArr[fast - 1] === ' ')) {
      fast++;
    }else {
      strArr[slow++] = strArr[fast++];
    }
  }

  //移除末尾的空格
  strArr.length = strArr[slow - 1] === ' ' ? slow - 1 : slow;

}

// 翻转从 start 到 end 的字符
var reverse = function(strArr, start, end) {
  let left = start, right = end;

  while(left < right) {
    // 交换
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]]
    left++;
    right--;
  }
}
// @lc code=end

