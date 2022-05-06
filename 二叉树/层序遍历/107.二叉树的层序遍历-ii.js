/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  //二叉树层序遍历
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
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

	    // 从数组前头插入值，避免最后反转数组，减少运算时间
      ret.unshift(curLevel);
  }

  return ret;
};
// @lc code=end

