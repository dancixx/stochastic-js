/**
 *
 * @param {number[]} v vector
 * @returns {number[]}
 *
 * @description
 * Cumulative sum of a vector.
 */

const cumsum = (v: number[]): number[] => {
  const sum: number[] = new Array(v.length).fill(0);

  for (let i = 0; i < v.length - 1; i++) {
    sum[i + 1] = sum[i] + v[i];
  }

  return sum;
};

export default cumsum;
