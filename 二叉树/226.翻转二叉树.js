/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
/* var invertTree = function(root) {
  //层序遍历
  let queue = [];
  queue.push(root);
  while(queue.length && root) {
    let len = queue.length;

    for(let i = 0;i < len;i++) {
      let node = queue.shift();
      [node.left, node.right] = [node.right, node.left];

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return root;
}; */

/* var invertTree = function(root) {
  //递归法前序遍历
  //终止条件
  if(root===null){
      return root;
  }

  //确定节点处理逻辑 交换
  [root.left, root.right] = [root.right, root.left];
  invertTree(root.left);
  invertTree(root.right);

  return root;
}; */

var invertTree = function(root) {
  //统一迭代法前序遍历
  let stack = [];
  stack.push(root);

  while(stack.length && root) {
    let node = stack.pop();

    if(!node) {
      node = stack.pop();
      [node.left, node.right] = [node.right, node.left];
      continue;
    }

    //前序遍历顺序中左右  入栈顺序是前序遍历的倒序右左中
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
    stack.push(node);
    stack.push(null);
  }

  return root;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = invertTree;
// @after-stub-for-debug-end