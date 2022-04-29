/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

class LinkNode {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

var MyLinkedList = function() {
  this.length = 0;
  this.tail = null;
  this.head = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function(index) {
  if(index < 0 || index >= this.length) return null
  //创建虚拟头结点
  let cur = new LinkNode(0, this.head);
  while(index-- >= 0) {
    cur = cur.next;
  }

  return cur;
}

MyLinkedList.prototype.get = function(index) {
  if(index < 0 || index >= this.length) return -1

  return this.getNode(index).val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = new LinkNode(val, this.head);
  this.head = node;
  this.length++;
  if(!this.tail) {
    this.tail = node;
  }
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const node = new LinkNode(val, null);

  if(this.length === 0) {
    this.head = node;
    this.tail = node;
  }else {
    this.tail.next = node;
    this.tail = node;
  }
  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if(index > this.length) return;
  if(index <= 0) {
    this.addAtHead(val);
    return;
  }
  if(index === this.length) {
    this.addAtTail(val);
    return;
  }

  //获取目标节点的上一个节点
  const node = this.getNode(index - 1 );
  node.next = new LinkNode(val, node.next);
  this.length++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if(index < 0 || index >= this._size) return;
  if(index === 0) {
    this.head = this.head.next
    if(index === this.length - 1) {
      this.tail = this.head
    }
    this.length--;
    return;
  }
  //获取目标节点的上一个节点
  const node = this.getNode(index - 1 );
  node.next = node.next.next;
  //处理尾节点
  if(index === this.length - 1) {
    this.tail = node;
  }

  this.length--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

