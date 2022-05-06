/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function(root) {
  let res = [], queue = [];
  if(root) queue.push(root);

  while(queue.length !== 0) {
    let len = queue.length;
    let max;

    for(let i = 0; i < len;i++) {
      let node = queue.shift();
      if(i === 0) {
        max = node.val;
      }else if(max < node.val) {
        max = node.val;
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    //存放每一层的最大值
    res.push(max)
  }

  return res;
};
// @lc code=end

