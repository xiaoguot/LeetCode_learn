/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    //确定递归终止条件
    if(root === null) {
      return root;
    }

    if(root.val > p.val && root.val > q.val) {
      // 向左子树查询
      return lowestCommonAncestor(root.left, p, q);
    }else if(root.val < p.val && root.val < q.val) {
      // 向右子树查询
      return lowestCommonAncestor(root.right, p, q);
    }

  return root;
};

/* var lowestCommonAncestor = function(root, p, q) {
    // 使用迭代的方法
    while(root) {
        if(root.val>p.val&&root.val>q.val) {
            root = root.left;
        }else if(root.val<p.val&&root.val<q.val) {
            root = root.right;
        }else {
            return root;
        }

    }
    return null;
}; */
// @lc code=end

