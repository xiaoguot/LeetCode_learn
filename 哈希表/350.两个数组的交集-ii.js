/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  if(nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const num1Map = new Map();
  const ret = [];

  for(let i of nums1) {
    num1Map.set(i,(num1Map.get(i) || 0) + 1)
  }

  for(let i of nums2) {
    if(num1Map.has(i) && num1Map.get(i) !== 0) {
      ret.push(i);
      num1Map.set(i,num1Map.get(i) - 1)
    }
  }

  return ret;

};

/*
var intersect = function(nums1, nums2) {
  //长短交换
  if (nums1.length > nums2.length) return intersect(nums2, nums1);
  const hashMap = new Map();

  //将较短的nums1中的元素与个数存入hashmap
  for(let i of nums1) {
    hashMap.set(i, (hashMap.get(i) || 0) + 1)
  }

  const res = [];
  let index = 0;
  //遍历nums2，遇到重复则count--并更新hashmap
  for(let i of nums2) {
    let count = hashMap.get(i);
    if(count > 0) {
      res[index++] = i;
      count--;

      //更新hashmap，以count状态作为判断条件
      if(count > 0) {
        hashMap.set(i,count);
      }else {
        hashMap.delete(i);
      }
    }
  }

  return res;
};
*/
// @lc code=end


// @after-stub-for-debug-begin
module.exports = intersect;
// @after-stub-for-debug-end