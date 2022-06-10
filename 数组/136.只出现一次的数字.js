/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

  //考察：异或运算
/*   一个数和 0 做 XOR 运算等于本身：a⊕0 = a
      一个数和其本身做 XOR 运算等于 0：a⊕a = 0
      XOR 运算满足交换律和结合律：a⊕b⊕a = (a⊕a)⊕b = 0⊕b = b */

  let ans = 0;

  for(const num of nums) {
    ans ^= num;
  }

  return ans;

/*   使用了额外空间

  let set = new Set();

  for(let i = 0;i < nums.length;i++) {
    if(set.has(nums[i])) {
      set.delete(nums[i]);
      continue;
    }

    set.add(nums[i]);
  }

  return [...set][0]; */
};
// @lc code=end

