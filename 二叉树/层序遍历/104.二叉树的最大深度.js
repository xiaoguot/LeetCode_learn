/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  let depth = 0, queue = [];
  queue.push(root);

  while(queue.length && root) {
    let len = queue.length;

    while(len--) {
      let node = queue.shift();

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    depth++;
  }

  return depth;
};
// @lc code=end

