/**
 *
 * @param {number[]} a vector
 * @param {number[]} b vector
 * @returns {number}
 * @memberof linalg
 *
 * @description
 * Dot product of two vectors.
 */

const dot = (a: number[], b: number[]): number => {
  let sum = 0;

  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }

  return sum;
};

export default dot;
