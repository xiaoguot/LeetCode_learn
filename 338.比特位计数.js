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
Brian Kernighan 算法的原理是：对于任意整数 xx，令 x=x~\&~(x-1)x=x & (x−1)，该运算将 xx 的二进制表示的最后一个 11 变成 00。因此，对 xx 重复该操作，直到 xx 变成 00，则操作次数即为 xx 的「一比特数」。
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
