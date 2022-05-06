/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  //先判断p和q是否为空
  if(!p && !q) return true;

  let queue = [];
  queue.push(p);
  queue.push(q);

  while(queue.length) {
    let leftNode = queue.shift();
    let rightNode = queue.shift();

    if(leftNode===null && rightNode===null) continue;
    if(leftNode=== null || rightNode===null || leftNode.val !== rightNode.val) {
      return false;
    }

    queue.push(leftNode.left);
    queue.push(rightNode.left);
    queue.push(leftNode.right);
    queue.push(rightNode.right);
  }

  return true;
};
// @lc code=end

