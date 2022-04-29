/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }

/*
  方法一：暴力解法

  let length = 0;
  let ret = new ListNode(0, head), cur = ret;

  //获取链表的长度
  while(head) {
    length++;
    head = head.next;
  }

  let index = length - n; //删除节点的位置

  if(index < 0 ) return '输入的n错误';
  if(index === 0 && length === 1) {
    cur.next = cur.next.next
    return cur.next
  }

  //让cur指向删除节点的前一个
  while(index-- > 0) {
      cur = cur.next
  }

  //删除目标节点
  cur.next = cur.next.next
  return ret.next */

/* ----------------------------------------------------------- */

  //方法二： 双指针法
  let ret = new ListNode(0, head), slow = ret, fast = ret;

  //让fast先走n+1步
  while(n-- > -1) {
    fast = fast.next;
  }

  //slow和fast同时走，直到fast指向null,此时slow指向删除节点的前一个节点
  while(fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;

  return ret.next;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end