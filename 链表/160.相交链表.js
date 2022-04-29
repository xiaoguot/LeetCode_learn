/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getListLength = function(head) {
  let len = 0, cur = head;
  while(cur) {
    len++;
    cur = cur.next;
  }

  return len;
}

var getIntersectionNode = function(headA, headB) {

  //暴力解法
/*   let ret2 = headB;

  while(ret2) {
    let ret1 = headA;
    while(ret1) {
      if(ret1 === ret2) return ret1;
      ret1 = ret1.next;
    }
    ret2 = ret2.next;
  }

  return null; */

  /* ------------------------------------------- */
  //时间复杂度为O(n + m)
  let lenA = lenB = 0;
  let curA = headA, curB = headB;
  lenA = getListLength(headA);
  lenB = getListLength(headB);

  if(lenA < lenB) {
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }

  let i = lenA - lenB;
  while(i-- >0) {
    curA = curA.next;
  }

  while(curA && curA !== curB) {
    curA = curA.next;
    curB = curB.next;
  }

  return curA;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = getIntersectionNode;
// @after-stub-for-debug-end