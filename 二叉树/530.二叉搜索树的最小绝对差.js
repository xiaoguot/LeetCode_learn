/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @return {number}
 */
/* var getMinimumDifference = function(root) {
  //辅助数组
  let arr = [];

  const buildArr = function(root) {
    if(root) {
      buildArr(root.left);
      arr.push(root.val);
      buildArr(root.right);
    }
  }

  buildArr(root);
  let min = arr[arr.length - 1];
  for(let i = 1;i < arr.length;i++) {
    let tmp = arr[i] - arr[i - 1];
    if(tmp < min) {
      min = tmp;
    }
  }

  return min;
}; */

var getMinimumDifference = function(root) {
  //递归法
  let res = Infinity;
  let pre = null;

  const inOrder = function(root) {
    if(!root) return;

    inOrder(root.left);
    if(pre) res = Math.min(res, root.val - pre.val);
    pre = root;
    inOrder(root.right);
  }

  inOrder(root);

  return res;
}
// @lc code=end

