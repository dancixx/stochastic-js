import pow from '../math/pow';

/**
 *
 * @param {number[]} vector
 * @returns
 *
 * @description
 * Variance of a vector.
 */

const variance = (vector: number[]) => {
  const firstMoment =
    (1 / vector.length) * vector.reduce((acc, value) => acc + value, 0);
  const secondMoment =
    (1 / vector.length) *
    (pow(vector, 2) as number[]).reduce((acc, value) => acc + value, 0);

  return secondMoment - firstMoment ** 2;
};

export default variance;
