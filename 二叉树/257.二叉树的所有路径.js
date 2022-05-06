/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  //递归遍历+递归三部曲
  let res = [];
  //1,确定递归函数，函数参数 返回值
  const getPath = function(node, curPath) {
    //2,确定终止条件， 到叶子节点为止
    if(!node.left && !node.right) {
      curPath += node.val;
      res.push(curPath);
      return ;
    }

    //3,确定单层逻辑
    curPath += node.val + '->';
    node.left && getPath(node.left, curPath);
    node.right && getPath(node.right, curPath);
  }

  getPath(root, '');
  return res;
};
// @lc code=end

