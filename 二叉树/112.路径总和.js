/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @return {boolean}
 */
// var hasPathSum = function(root, targetSum) {
//   let sum = 0;

//   var getPathSum = function(root, sum) {
//       if(!root) return false;

//       if(!root.left && !root.right) {
//           sum += root.val;
//           if(sum === targetSum) {
//               return true;
//           }else {
//               return false;
//           }
//       }

//       sum += root.val;
//       let leftboo = getPathSum(root.left, sum);
//       let rightboo = getPathSum(root.right, sum);

//       return leftboo || rightboo;
//   }

//   return getPathSum(root, sum);

// };

var hasPathSum = function(root, targetSum) {
let sum = 0;

var getPathSum = function(root, sum) {
if(!root.left && !root.right) {
        sum += root.val;
        if(sum === targetSum) {
            return true;
        }else {
            return false;
        }
    }

    sum += root.val;
    if(root.left) {
        if(getPathSum(root.left, sum)) return true;
    }
    if(root.right){
        if(getPathSum(root.right, sum)) return true;
    }

    return false;
}

if(!root) return false;

return getPathSum(root, sum);

};
// @lc code=end

