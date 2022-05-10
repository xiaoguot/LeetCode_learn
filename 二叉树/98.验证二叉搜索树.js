/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  //特性： 用中序遍历二叉搜索树，可以得到一个有序数组
  //递归法
  let pre = null;
  const inOrder = function(root) {
    if(!root) return true;

    let left = inOrder(root.left);

    if(pre !== null && pre.val >= root.val) {
      return false;
    }
    pre = root;

    let right = inOrder(root.right);

    return left && right;
  }

  return inOrder(root);
};

/* var isValidBST = function (root) {
  //用辅助数组来做
  let arr = [];
  const buildArr = (root) => {
      if (root) {
          buildArr(root.left);
          arr.push(root.val);
          buildArr(root.right);
      }
  }
  buildArr(root);
  for (let i = 1; i < arr.length; ++i) {
      if (arr[i] <= arr[i - 1])
          return false;
  }
  return true;
}; */
// @lc code=end

