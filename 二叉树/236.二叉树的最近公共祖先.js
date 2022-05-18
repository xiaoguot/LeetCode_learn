/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  const travleTree = function(root, p , q) {
    //确定递归终止条件
    if(root === null || root === p || root === q) {
      return root;
    }

    //单层递归逻辑
    let left = travleTree(root.left, p, q);
    let right = travleTree(root.right, p, q);
    if(left !== null && right !== null) {
      return root;
    }

    if(left === null) {
      return right;
    }

    return left;
  }

  return travleTree(root, p, q);
};
// @lc code=end

