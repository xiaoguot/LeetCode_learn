/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function(root) {
  //递归法
  //使用前序遍历，可以先遍历左边，得到最大深度
  let maxLen = 0, resNode;
  var findValue = function(root, curLen) {
      if(!root.left && !root.right) {
          if(curLen > maxLen) {
              maxLen = curLen;
              resNode = root.val;
          }
      }

      root.left && findValue(root.left, curLen+1);
      root.right && findValue(root.right, curLen+1);
  }

  findValue(root, 1);
  return resNode;

};
// @lc code=end

