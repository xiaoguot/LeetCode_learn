/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {

  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }

  if(!nums.length) return null;

  let max = Math.max(...nums);
  let rootIndex = nums.indexOf(max);//获取索引值，最大值作为中间节点
  const root = new TreeNode(max);// 创建中间节点

  let leftArray = nums.slice(0,rootIndex);
  let rightArray = nums.slice(rootIndex + 1);

  root.left = constructMaximumBinaryTree(leftArray);
  root.right = constructMaximumBinaryTree(rightArray);

  return root;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = constructMaximumBinaryTree;
// @after-stub-for-debug-end