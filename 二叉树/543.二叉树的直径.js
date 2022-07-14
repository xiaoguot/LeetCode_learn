/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
  let res = 0;

  const treeDepth = function(root) {
    if(!root) {
      return 0;
    }

    let leftMaxDepth = treeDepth(root.left);
    let rightMaxDepth = treeDepth(root.right);

    res = Math.max(res, leftMaxDepth + rightMaxDepth);

    return Math.max(leftMaxDepth, rightMaxDepth) + 1;
  }

  treeDepth(root);

  return res;
};
// @lc code=end
