/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  //N叉树层序遍历
  let ret = [], queue = [];
  if(root) queue.push(root);

  while(queue.length !== 0) {
    // 记录当前层级节点数
    let length = queue.length;
    let curLevel = []; //用来记录每一层的节点

    for(let i = 0;i < length;i++) {
      let node = queue.shift();
      curLevel.push(node.val);

      // 存放当前层下一层的节点
      node.children && queue.push(...node.children);
    }

	    //
      ret.push(curLevel);
  }

  return ret;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = levelOrder;
// @after-stub-for-debug-end