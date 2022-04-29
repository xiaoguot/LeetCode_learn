/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  let ret = new ListNode(0,head);
  let temp = ret;
  while(temp.next && temp.next.next) {
    let cur = temp.next.next; //记录临时节点
    let pre = temp.next; //记录临时节点

    pre.next = cur.next;
    cur.next = pre;
    temp.next = cur;

    temp = pre; //temp移动两位，进行一下轮交换
  }

  return ret.next
};
// @lc code=end

