/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  let resPath = [], curPath = [];
  let sum = 0;

  const getPath = function(root, curPath, sum) {
     if(!root.left && !root.right) {
         sum += root.val;
         if(sum === targetSum) {
             curPath.push(root.val);
             resPath.push([...curPath]);// 不能写resPath.push(curPath)  要深拷贝
             curPath.pop();
         }
         sum -= root.val;
         return ;
     }

     if(root.left) {
         curPath.push(root.val);
         getPath(root.left, curPath, sum + root.val);
         curPath.pop();
     }
     if(root.right) {
         curPath.push(root.val);
         getPath(root.right, curPath, sum + root.val);
         curPath.pop();
     }

     return ;
  }

  if(!root) return resPath;
  getPath(root, curPath, sum);

  return resPath;
};
// @lc code=end

