/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  //暴力解法
  // const number = [];
  // let z = 0;

  // for(let i = 0;i < nums.length - k + 1;i++) {
  //   let max = nums[i];
  //   for(let j = i;j < i + k;j++) {
  //     if(nums[j] >= max) {
  //       max = nums[j];
  //     }
  //   }

  //   number[z++] = max;
  // }

  // return number;

  //单调队列
  class MonoQueue {
    queue;
    constructor() {
      this.queue = [];
    }

    enqueue(value) {
      let back = this.queue[this.queue.length - 1];
      while(back !== undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }

      this.queue.push(value);
    }

    dequeue(value) {
      let front = this.front();
      if(front === value) {
        this.queue.shift();
      }
    }

    front() {
      return this.queue[0];
    }
  }

  let helperQueue = new MonoQueue();
  let i = 0, j = 0;
  let resArr = [];

  while(j < k) {
    helperQueue.enqueue(nums[j++]);
  }
  resArr.push(helperQueue.front());
  while(j < nums.length) {
    helperQueue.enqueue(nums[j++]);
    helperQueue.dequeue(nums[i++]);
    resArr.push(helperQueue.front());
  }

  return resArr;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = maxSlidingWindow;
// @after-stub-for-debug-end