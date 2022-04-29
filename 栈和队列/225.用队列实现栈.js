/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let size = this.queue.length;

  while(size-- > 1) {
    this.queue.push(this.queue.shift())
  }

  return this.queue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  let x = this.pop();

  this.queue.push(x);

  return x;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return !this.queue.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end


// @after-stub-for-debug-begin
module.exports = MyStack;
// @after-stub-for-debug-end