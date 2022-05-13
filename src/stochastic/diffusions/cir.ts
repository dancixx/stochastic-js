import {wiener} from '../noises/wiener';

/**
 * @param {number} kappa
 * @param {number} theta
 * @param {number} sigma
 * @param {number} X0
 * @param {number} n
 * @param {number} T
 * @returns {Record<'dW' | 'dX' | 'W' | 'X', number[]>}
 * @description
 * dX_t = kappa*(theta-X_t)*dt + sigma*(X_t)**(1/2)*dW_t
 * If sigma, kappa, theta, X0 > 0 is true than a unique strong solution is exists
 * where X_t >=0.
 * If 2*kappa*theta > sigma**2 than solution is positive, X_t > 0.
 */
const cir = (
  kappa: number,
  theta: number,
  sigma: number,
  X0: number = 0,
  n: number = 100,
  T: number = 1,
): Record<'dW' | 'dX' | 'W' | 'X', number[]> => {
  const {dW, W} = wiener(n, T);
  const dt = T / n;
  let dX: number[] = new Array(n - 1).fill(0);
  let X: number[] = new Array(n).fill(0);

  X[0] = X0;

  for (let index = 0; index < n - 1; index++) {
    dX[index] =
      kappa * (theta - X[index]) * dt + sigma * Math.sqrt(X[index]) * dW[index];
    X[index + 1] = X[index] + dX[index];
  }

  return {dW, dX, W, X};
};

export default cir;
