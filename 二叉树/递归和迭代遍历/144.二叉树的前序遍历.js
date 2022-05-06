/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  //递归法
/*   const res = [];

  const traversal = function(root) {
    if(root === null) return ;

    res.push(root.val);
    traversal(root.left);
    traversal(root.right);
  }

  traversal(root);

  return res; */


  //统一迭代法
  const res = [];
  const stack = [];
  if (root) stack.push(root);

  while(stack.length) {
    const node = stack.pop();

    if(!node) {
      res.push(stack.pop().val);
      continue;
    }

    if(node.right) stack.push(node.right);  //右
    if(node.left) stack.push(node.left);  //左
    stack.push(node);  //中
    stack.push(null);
  }

  return res;
};
// @lc code=end

