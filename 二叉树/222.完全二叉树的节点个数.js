/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
/* var countNodes = function(root) {
  //层序遍历
  if(!root) return 0;
  let queue = [], sum = 0;
  queue.push(root);

  while(queue.length) {
    let len = queue.length
    sum += len;

    while(len--) {
      let node = queue.shift();

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return sum;
}; */

//递归法
var countNodes = function(root) {
  if(!root) return 0;
  let sum = 0;

  if(root.left) {
    sum += countNodes(root.left);
  }
  if(root.right) {
    sum += countNodes(root.right);
  }

  return sum + 1;
};
// @lc code=end

