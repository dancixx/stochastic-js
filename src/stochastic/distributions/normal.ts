type NormalMethods = 'BOX_MULLER';

/**
 *
 * @param {number} m
 * @param {number} sigma
 * @param {NormalMethods} method
 * @returns {number}
 * @memberof stochastic
 * @example
 * const sample = normal(0, 1);
 *
 * @description
 * This function returns a sample from normal distribution.
 * Default is generated a N(0, 1) sample based on Box-Müller tranformation.
 */

const normal = (
  m: number = 0,
  sigma: number = 1,
  method: NormalMethods = 'BOX_MULLER',
): number => {
  let sample: number = 0;

  if (method === 'BOX_MULLER') {
    const u = Math.random();
    const v = Math.random();

    sample = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }

  return sample * sigma + m;
};

export default normal;
