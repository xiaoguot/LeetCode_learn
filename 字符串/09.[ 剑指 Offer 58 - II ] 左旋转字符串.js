/**
 * * 题目名称：左旋转字符串
 * * 题目地址：https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof
 */

// * 思路：

var reverseLeftWords = function(s, n) {
    var reverseChoose = function(strArr, start, end) {
        while(start < end) {
            [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
            start++;
            end--;
        }
    }

    let strArr = Array.from(s);
    let len = strArr.length;
    reverseChoose(strArr, 0, len - 1);
    reverseChoose(strArr, 0, len - n -1);
    reverseChoose(strArr, len - n, len - 1);

    return strArr.join('');
};

// 测试用例
let test = 'abcdefg';
let n = 2;

console.time('执行用时');
console.log(reverseLeftWords(test, n));
console.timeEnd('执行用时');