import _ from 'lodash';
import {compoundPoisson} from '../noises/poisson';
import {wiener} from '../noises/wiener';

/**
 * @param {number} n
 * @param {number} gamma
 * @param {number} sigma
 * @param {number} lambda
 * @param {number} T
 * @returns {Record<'dX' | 'X', number[]>}
 * @description
 * X_t = gamma * t + sigma * W_t + Z_t
 * Returns Lévy jump diffusion path.
 */
const levy = (
  n: number,
  gamma: number,
  sigma: number,
  lambda: number,
  T: number = 1,
): Record<'dX' | 'X', number[]> => {
  const {dW} = wiener(n, 1);
  const {X: cPoisson} = compoundPoisson(
    n,
    lambda,
    () => _.random(0, 10, false)!,
  );
  const dX: number[] = new Array(n - 1).fill(0);
  const X: number[] = new Array(n).fill(0);
  const dt = T / n;

  X[0] = gamma;

  for (let index = 0; index < n - 1; index++) {
    dX[index] = gamma * dt + sigma * dW[index] + cPoisson[index];
    X[index + 1] = X[index] + dX[index];
  }

  return {dX, X};
};

export default levy;
