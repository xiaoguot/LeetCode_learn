/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
/* var insertIntoBST = function(root, val) {
  //无返回值的递归
  let node = new TreeNode(val);

  if(!root) return node;

  const travleTree = function(root,val) {
    if(root.val > val && !root.left) {
      root.left = node;
      return ;
    }else if(root.val < val && !root.right) {
      root.right = node;
      return ;
    }

    if(root.val > val) {
      travleTree(root.left, val);
    }
    if(root.val < val) {
      travleTree(root.right, val);
    }
  }

  travleTree(root, val);

  return root;
}; */

var insertIntoBST = function(root, val) {
  //有返回值的递归
  const setInOrder = (root, val) => {
    if(root === null) {
      let node = new TreeNode(val);
      root = node;
      return root;
    }

    if(root.val > val) {
      root.left = setInOrder(root.left, val);
    }
    if(root.val < val) {
      root.right = setInOrder(root.right, val);
    }

    return root;
  }

  return setInOrder(root, val);
}
// @lc code=end


// @after-stub-for-debug-begin
module.exports = insertIntoBST;
// @after-stub-for-debug-end