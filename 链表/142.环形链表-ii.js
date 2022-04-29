/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  //当链表为空或者只有一个节点的时候是没有环的
  if(!head || !head.next) return null;

  let slow = head.next, fast = head.next.next;

  //判断链表是否有环，并且如果有，返回相遇时的节点
  while(fast && fast.next && fast !== slow) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if(!fast || !fast.next) return null;

  //获取链表入环时的第一个节点
  slow = head;
  while(fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};
// @lc code=end

