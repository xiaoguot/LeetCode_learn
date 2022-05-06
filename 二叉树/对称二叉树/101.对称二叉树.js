/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
/* var isSymmetric = function(root) {
  //使用递归遍历左右子树 递归三部曲
  //1， 确定递归的参数 root.left, root.right 和返回值 true false

  var compareNode = function(left, right) {
    //2, 确定终止条件 空的情况
    if(left===null && right!==null || left!==null && right===null) {
      return false;
    }else if(left === null && right === null) {
      return true;
    }else if(left.val !== right.val) {
      return false;
    }

    //3, 确定单层递归逻辑
    let outSide = compareNode(left.left, right.right);
    let inSide = compareNode(left.right, right.left);
    return outSide && inSide;
  }

  if(!root) return true;

  return compareNode(root.left, root.right);
}; */

var isSymmetric = function(root) {
  //迭代方法判断是否是对称二叉树   队列
  let queue = [];
  if(!root) return true;

  queue.push(root.left);
  queue.push(root.right);
  while(queue.length) {
    let leftNode = queue.shift();
    let rightNode = queue.shift();

    if(leftNode===null && rightNode===null) continue;
    if(leftNode=== null || rightNode===null || leftNode.val !== rightNode.val) {
      return false;
    }

    queue.push(leftNode.left);
    queue.push(rightNode.right);
    queue.push(leftNode.right);
    queue.push(rightNode.left);
  }

  return true;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = isSymmetric;
// @after-stub-for-debug-end