/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function(root) {
    let count = 0,maxCount = 1;
    let pre = root,res = [];
  // 1.确定递归函数及函数参数
  const travelTree = function(cur) {
      // 2. 确定递归终止条件
      if(cur === null) {
          return ;
      }
      travelTree(cur.left);
      // 3. 单层递归逻辑
      if(pre.val === cur.val) {
          count++;
      }else {
          count = 1;
      }
      pre = cur;
      if(count === maxCount) {
          res.push(cur.val);
      }
      if(count > maxCount) {
          res = [];
          maxCount = count;
          res.push(cur.val);
      }
      travelTree(cur.right);
  }
  travelTree(root);
  return res;
};
// @lc code=end

