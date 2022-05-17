/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function(root, low, high) {
  if(!root) return null;

  if(root.val > high) {
    //root值大于最大值， 则去遍历左子树， 返回左子树符合条件的头结点
    let left = trimBST(root.left, low, high);
    return left;
  }

  if(root.val < low) {
    //root值小于最小值， 则去遍历右子树， 返回右子树符合条件的头结点
    let right = trimBST(root.right, low, high);
    return right
  }

  //如果在区间内
  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);

  return root;
};
// @lc code=end

