import normal from '../distributions/normal';
import {compoundPoisson} from '../noises/poisson';
import {wiener} from '../noises/wiener';

/**
 * @param {number} n
 * @param {number} S0
 * @param {number} alpha
 * @param {number} sigma
 * @param {number} lambda
 * @param {number} theta
 * @param {number} T
 * @returns {Record<'dX' | 'X', number[]>}
 * @description
 * Merton jump diffusion model.
 * X_t = (alpha - sigma**2/2 - lambda*theta) * t + sigma * W_t + Z_t
 */
const merton = (
  n: number,
  S0: number = 100,
  alpha: number,
  sigma: number,
  lambda: number,
  theta: number,
  T: number = 1,
): Record<'dX' | 'X', number[]> => {
  const {dW} = wiener(n, 1);
  const {X: cPoisson} = compoundPoisson(
    n,
    lambda,
    new Array(n - 1).fill(() => normal()),
  );
  const dX: number[] = new Array(n - 1).fill(0);
  const X: number[] = new Array(n).fill(0);
  const dt = T / n;

  X[0] = S0;

  for (let index = 0; index < n - 1; index++) {
    dX[index] =
      (alpha - sigma ** 2 / 2 - lambda * theta) * dt +
      sigma * dW[index] +
      cPoisson[index];

    X[index + 1] = X[index] + dX[index];
  }

  return {dX, X};
};

export default merton;
