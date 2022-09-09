import normal from '../distributions/normal';

/**
 *
 * @param {number} n
 * @param {number} lambda
 * @returns {Record<'times' | 'timesTotal' | 'X', number[]>}
 * @memberof stochastic
 * @example
 * const {times, timesTotal, X} = compoundPoisson(100, 0.7);
 *
 * @description
 * Poisson process.
 * X_t = lambda*X_t-1*(1-e^(-lambda*t))
 */
const possion = (
  n: number,
  lambda: number,
): Record<'times' | 'timesTotal' | 'X', number[]> => {
  if (lambda <= 0) {
    throw new Error('lambda must be positive');
  }

  if (n <= 0) {
    throw new Error('n must be positive');
  }

  let times = new Array(n).fill(0);
  let timesTotal: number[] = new Array(n + 1).fill(0);
  let X: number[] = new Array(n + 1).fill(0);

  timesTotal[0] = 0;
  X[0] = 0;

  // generate the events times
  for (let index = 0; index < n; index++) {
    times[index] = -Math.log(Math.random()) / lambda;
    timesTotal[index + 1] = timesTotal[index] + times[index];
    X[index + 1] = index + 1;
  }

  return {times, timesTotal, X};
};

/**
 *
 * @param {number} n
 * @param {number} lambda
 * @param {number[]} jumps
 * @returns {Record<'times' | 'timesTotal' | 'X' | 'jumps', number[]>}
 * @memberof stochastic
 * @example
 * const {times, timesTotal, X, jumps} = compoundPoisson(100, 0.7, [0.1, 0.2, 0.3]);
 *
 * @description
 * Poisson process with jumps. (Compound Poisson process)
 * X_t = sum_{i=1}^{N(t)} Y_i
 */
const compoundPoisson = (
  n: number,
  lambda: number,
  jumps?: number[],
): Record<'times' | 'timesTotal' | 'X' | 'jumps', number[]> => {
  if (lambda <= 0) {
    throw new Error('lambda must be positive');
  }

  if (n <= 0) {
    throw new Error('n must be positive');
  }

  const {times, timesTotal, X: poissonProcess} = possion(n, lambda);

  let X = new Array(poissonProcess.length + 1).fill(0);
  let _jumps = new Array(poissonProcess.length + 1).fill(0);

  X[0] = poissonProcess[0];
  _jumps[0] = 0;

  for (let index = 0; index < poissonProcess.length; index++) {
    if (!jumps) {
      const jump = normal(0, 1);
      _jumps[index + 1] = jump;
      X[index + 1] = X[index] + jump;
    } else {
      X[index + 1] = X[index] + jumps[index + 1];
    }
  }

  return {times, timesTotal, X, jumps: jumps || _jumps};
};

export {possion, compoundPoisson};
