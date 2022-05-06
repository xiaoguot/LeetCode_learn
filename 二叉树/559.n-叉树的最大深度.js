/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
/* var maxDepth = function(root) {
  //N叉树层序遍历
  let depth = 0, queue = [];
  if(root) queue.push(root);

  while(queue.length !== 0) {
    // 记录当前层级节点数
    let length = queue.length;

    while(length--) {
      let node = queue.shift();

      // 存放当前层下一层的节点
      node.children && queue.push(...node.children);
    }

    depth++;
  }

  return depth;
}; */

var maxDepth = function(root) {
  //N叉树递归
  if(!root) return 0;
  let depth = 0;
  for(let node of root.children) {
    depth = Math.max(depth, maxDepth(node))
  }

  return depth + 1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxDepth;
// @after-stub-for-debug-end