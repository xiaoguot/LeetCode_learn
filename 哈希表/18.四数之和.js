/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const len = nums.length;
  if(len < 4) return [];
  nums.sort((a, b) => a - b);
  const res = [];

  for(let i = 0;i < len - 3;i++) {
    let temp = target - nums[i];

    // a 去重
    if(i > 0 && nums[i] === nums[i - 1]) continue;
    for(let j = i + 1;j < len - 2;j++) {

        // b去重
        if(j > i+1 && nums[j] === nums[j - 1]) continue;
        let l = j + 1, r = len - 1;
        while(l < r) {
            const sum = nums[j] + nums[l] + nums[r];
            if(sum < temp) { l++; continue };
            if(sum > temp) { r--; continue };
            res.push([nums[i], nums[j], nums[l], nums[r]])
            
            // c d 去重
            while(l < r && nums[l] === nums[++l]);
            while(l < r && nums[r] === nums[--r]);
        }
    }
  }

  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = fourSum;
// @after-stub-for-debug-end