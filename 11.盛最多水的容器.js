/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
/* var maxArea = function(height) {
  //暴力解法
  let maxAreaWater = 0;
  let leftMax = 0;

  for(let i = 0;i < height.length;i++) {
    if(height[i] <= leftMax) continue;
    leftMax = height[i];
    for(let j = i + 1;j < height.length;j++) {
      let area = (j - i) * Math.min(height[j], height[i]);
      if(area > maxAreaWater) maxAreaWater = area;
    }
  }

  return maxAreaWater;
}; */

var maxArea = function(height) {
  //双指针
  let left = 0, right = height.length - 1, max = 0;

  while(left < right) {
    let tmp = (right - left) * Math.min(height[left], height[right]);

    if(tmp > max) {
      max = tmp;
    }

    if(height[left] <= height[right]) {
      left++
    }else {
      right--;
    }
  }

  return max;
}
// @lc code=end

