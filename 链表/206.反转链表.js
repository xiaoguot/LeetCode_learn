/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//递归法
var reverse = function(pre,head) {
  if(!head) return pre;
  const temp = head.next;
  head.next = pre;
  pre = head;

  return reverse(pre,temp)
}

var reverseList = function(head) {

  return reverse(null, head)

  //双指针法
/*   if(!head || !head.next) return head;

  let cur = head;
  let pre = null, temp = null;

  while(cur) {
    temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur.next = temp;
  }

  return pre */
};
// @lc code=end

