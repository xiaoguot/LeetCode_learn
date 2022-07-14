/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  //统一迭代法
  if(!root) return ;
  const stack = [];
  stack.push(root);
  let prev = null;

  while(stack.length) {
    const curr = stack.pop();
    if(prev) {
      prev.left = null;
      prev.right = curr;
    }

    curr.right && stack.push(curr.right);
    curr.left && stack.push(curr.left);

    prev = curr;
  }
};
/*
var flatten = function(root) {
  while(root) {
    if(!root.left) {
      root = root.right;
    }else {
      //找到左子树中的最右边节点
      let prev = root.left;
      while(prev.right) {
        prev = prev.right;
      }
      //将原右子树接到左子树的最右边节点
      prev.right = root.right;
      //将左子树接到右子树
      root.right = root.left;
      root.left = null;

      //遍历下一个节点
      root = root.right;
    }
  }
}; */

/*
//递归法
var flatten = function(root) {
  let res = [];

  const tracking = function(root) {
    if(!root) {
      return ;
    }

    res.push(root);
    tracking(root.left);
    tracking(root.right);
  }

  tracking(root);
  for(let i = 1;i < res.length;i++) {
    const prev = res[i - 1], cur = res[i];
    prev.left = null;
    prev.right = cur;
  }
}; */
// @lc code=end

