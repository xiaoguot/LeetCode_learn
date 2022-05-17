/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var leftLeafNode = function(node) {
  if(!node.left) return node;

  return leftLeafNode(node.left);
}

var deleteNode = function(root, key) {
  if(!root) return root;
  if(root.val === key) {
    if(root.left === null) {
      return root.right;
    }
    if(root.right === null) {
      return root.left;
    }

    if(root.left !== null && root.right !== null) {
      let node = leftLeafNode(root.right);
      node.left = root.left;
      root = root.right;
      return root;
    }
  }

  if(root.val > key) {
    root.left = deleteNode(root.left, key);
  }else if(root.val < key) {
    root.right = deleteNode(root.right, key);
  }

  return root;
};
// @lc code=end

