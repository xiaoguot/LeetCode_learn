/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
  let level = 0, queue = [];
  queue.push(root);

  while(queue.length && root) {
    let len = queue.length;
    level++;

    while(len--) {
      let node = queue.shift();
      //如果左右节点都是null，则该节点深度最小
      if(node.left === null && node.right === null) {
        return level;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return level;
};
// @lc code=end

