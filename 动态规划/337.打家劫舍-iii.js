/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
var rob = function(root) {
  //后序遍历
  var postOrder = function(node) {
    //递归终止条件，出口
    if(!node) return [0, 0];
    //遍历左子树
    const left = postOrder(node.left);
    //遍历右子树
    const right = postOrder(node.right);

    //不偷当前节点，左右子节点都可以偷或者不偷，取最大值
    const DoNot = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    //偷当前节点，左右子节点都不可以取
    const Do = node.val + left[0] + right[0];

    return [DoNot, Do];
  }

  const res = postOrder(root);

  return Math.max(...res);
};
// @lc code=end
