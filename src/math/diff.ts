/**
 *
 * @param {number[]} v vector
 * @returns {number[]}
 * @memberof math
 *
 * @description
 * Derivative of a vector.
 */

const diff = (v: number[]): number[] => {
  const diff: number[] = new Array(v.length).fill(0);

  for (let i = 0; i < v.length - 1; i++) {
    diff[i] = v[i + 1] - v[i];
  }

  return diff;
};

export default diff;
