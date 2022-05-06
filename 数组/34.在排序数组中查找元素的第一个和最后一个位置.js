/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const getRightBorder = (nums, target) => {
    const len = nums.length;
    let left = 0, right = len - 1;
    let rightBorder = -2;  //记录一下rightBorder没有被赋值的情况

    while(left <= right) {
      const middle = left + Math.floor((right - left)/2);

      if(nums[middle] > target) {
        right = middle - 1;
      }else {
        left = middle + 1;
        rightBorder = left;
      }
    }

    return rightBorder;
  }

  const getLeftBorder = (nums, target) => {
    const len = nums.length;
    let left = 0, right = len - 1;
    let leftBorder = -2;  // 记录一下leftBorder没有被赋值的情况

    while(left <= right) {
      const middle = left + Math.floor((right - left)/2);

      if(nums[middle] < target) {
        left = middle + 1;
      }else {
        right = middle - 1;
        leftBorder = right;
      }
    }

    return leftBorder;
  }

  const rightBorder = getRightBorder(nums, target);
  const leftBorder = getLeftBorder(nums, target);

  //情况一：target 在数组范围的右边或者左边，例如数组{3, 4, 5}，target为2或者数组{3, 4, 5},target为6，此时应该返回{-1, -1}
  if(leftBorder === -2 || rightBorder === -2) return [-1, -1];
  //情况三：target 在数组范围中，且数组中存在target，例如数组{3,6,7},target为6，此时应该返回{1, 1},不包含左右边界
  if(rightBorder - leftBorder > 1) return [leftBorder + 1, rightBorder - 1];

  //情况二：target 在数组范围中，且数组中不存在target，例如数组{3,6,7},target为5，此时应该返回{-1, -1}
  return [-1, -1]
};
// @lc code=end

