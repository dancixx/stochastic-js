/**
 *
 * @param {number[]} vector
 * @returns {number[]}
 * @memberof math
 *
 * @description
 * Cumulative sum of a vector.
 */

const cumsum = (vector: number[]): number[] => {
  const sum: number[] = new Array(vector.length).fill(0);

  for (let i = 0; i < vector.length - 1; i++) {
    sum[i + 1] = sum[i] + vector[i];
  }

  return sum;
};

export default cumsum;
