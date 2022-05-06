/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root) {
  //递归法
/*   const res = [];

  const traversal = function(root) {
    if(root === null) return ;

    traversal(root.left);
    res.push(root.val);
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
    stack.push(node);  //中
    stack.push(null);
    if(node.left) stack.push(node.left);  //左
  }

  return res;
};
// @lc code=end

