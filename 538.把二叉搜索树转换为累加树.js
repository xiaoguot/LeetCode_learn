/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
/* var convertBST = function(root) {
  let res = [];

  const travNode = function(root) {
    if(!root) return;

    travNode(root.left);
    res.push(root);
    travNode(root.right);
  }

  travNode(root);

  let len = res.length;
  for(let i = len - 2;i >= 0;i--){
    res[i].val += res[i+1].val;
  }

  return root;
}; */

var convertBST = function(root) {
  let pre = 0;
  const reverseInOrder = (cur) => {
    if(cur) {
      reverseInOrder(cur.right);
      cur.val += pre;
      pre = cur.val;
      reverseInOrder(cur.left);
    }
  }

  reverseInOrder(root);

  return root;
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = convertBST;
// @after-stub-for-debug-end