/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  //递归法
/*   const res = [];

  const traversal = function(root) {
    if(root === null) return ;

    traversal(root.left);
    traversal(root.right);
    res.push(root.val);
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

    stack.push(node);  //中
    stack.push(null);
    if(node.right) stack.push(node.right);  //右
    if(node.left) stack.push(node.left);  //左

  }

  return res;
};
// @lc code=end

