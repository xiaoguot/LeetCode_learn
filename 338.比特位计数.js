/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */

/*
Brian Kernighan 算法的原理是：对于任意整数 x，令 x=x & (x−1)，该运算将 x 的二进制表示的最后一个 1 变成 0。因此，对 x 重复该操作，直到 x 变成 0，则操作次数即为 x 的「一比特数」。
 */
var countBits = function(n) {
    const bits = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        bits[i] = countOnes(i);
    }
    return bits
};

const countOnes = (x) => {
    let ones = 0;
    while (x > 0) {
        x &= (x - 1);
        ones++;
    }
    return ones;
}

/*
var countBits = function(n) {
  //动规---最高有效位
  const res = new Array(n+1).fill(0)
  let highBit = 0;

  for(let i = 1;i <= n;i++) {
    if((i & (i-1)) === 0) {
      highBit = i;
    }

    res[i] = res[i - highBit] + 1;
  }

  return res;
}; */

/* var countBits = function(n) {
  //动规---最低有效位
  const res = new Array(n+1).fill(0)

  for(let i = 1;i <= n;i++) {
    res[i] = res[i >> 1] + (i & 1);
  }

  return res;
}; */
// @lc code=end
