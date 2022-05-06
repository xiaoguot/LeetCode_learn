/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
//还是用递归三部曲 + 后序遍历 左右中 当前左子树右子树高度相差大于1就返回-1
  var getHeight = function(root) {
    if(!root) return 0;

    let leftHeight = getHeight(root.left);
    // 当判定左子树不为平衡二叉树时,即可直接返回-1
    if(leftHeight === -1) return -1;
    let rightHeight = getHeight(root.right);
    // 当判定右子树不为平衡二叉树时,即可直接返回-1
    if(rightHeight === -1) return -1;

    if(Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }else {
      return 1 + Math.max(leftHeight, rightHeight);
    }
  }

  return !(getHeight(root) === -1);
};
// @lc code=end

