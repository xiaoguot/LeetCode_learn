/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

  var isSameTree = function(root, subRoot) {
    let queue = [];
    queue.push(root);
    queue.push(subRoot);

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
  }

  if(!root && !subRoot) return true;

  let stack = [];
  let boolean = false;
  stack.push(root);

  while(stack.length) {
    let node = stack.pop();

    if(!node) {
      node = stack.pop();
      boolean = isSameTree(node, subRoot) || boolean;
      if(boolean) return true;
      continue;
    }

    stack.push(node);
    stack.push(null);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }

  return boolean;
};
// @lc code=end

