/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let sum = 0;

  var isLeftLeaf = function(root, sum) {
    let left = root.left;
    let right = root.right;

    if(left && !left.left && !left.right) {
      sum += left.val;
    }else if(left && (left.left || left.right)) {
      sum = isLeftLeaf(left, sum)
    }

    if(right && (right.left || right.right)) {
      sum = isLeftLeaf(right, sum)
    }

    return sum;
  }

  return isLeftLeaf(root, sum);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = sumOfLeftLeaves;
// @after-stub-for-debug-end