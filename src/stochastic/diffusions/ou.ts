import fractionalWiener from '../noises/fractionalWiener';
import {wiener} from '../noises/wiener';

/**
 * @param {number} theta
 * @param {number} sigma
 * @param {number} X0
 * @param {number} mu
 * @param {number} n
 * @param {number} T
 * @returns {Record<'dW' | 'dX' | 'W' | 'X', number[]>}
 * @description
 * dX_t = theta*(mu-X_t)*dt + sigma*dW_t
 * If the mu !==0 the generator returns a mean reverting OU path (Vasicek model.).
 */
const ou = (
  theta: number,
  sigma: number,
  X0: number = 0,
  mu: number = 0,
  n: number = 100,
  T: number = 1,
): Record<'dW' | 'dX' | 'W' | 'X', number[]> => {
  const {dW, W} = wiener(n, T);
  const dt = T / n;
  let dX: number[] = new Array(n - 1).fill(0);
  let X: number[] = new Array(n).fill(0);

  X[0] = X0;

  for (let index = 0; index < n - 1; index++) {
    dX[index] = theta * (mu - X[index]) * dt + sigma * dW[index];
    X[index + 1] = X[index] + dX[index];
  }

  return {dW, dX, W, X};
};

/**
 *
 * @param {number} theta
 * @param {number} sigma
 * @param {number} X0
 * @param {number} mu
 * @param {number} n
 * @param {number} T
 * @returns {Record<'fbm' | 'fgn' | 'dX' | 'X', number[]>}
 * @description
 * dX_t = theta*(mu-X_t)*dt + sigma*dW^H_t
 * If the mu !==0 the generator returns a mean reverting FOU path (Vasicek model.).
 */
const fou = (
  theta: number,
  sigma: number,
  X0: number = 0,
  mu: number = 0,
  n: number = 100,
  T: number = 1,
): Record<'fgn' | 'fbm' | 'dX' | 'X', number[]> => {
  const {fgn, fbm} = fractionalWiener(n, T);
  const dt = T / n;
  let dX: number[] = new Array(n - 1).fill(0);
  let X: number[] = new Array(n).fill(0);

  X[0] = X0;

  for (let index = 0; index < n - 1; index++) {
    dX[index] = theta * (mu - X[index]) * dt + sigma * fgn[index];
    X[index + 1] = X[index] + dX[index];
  }

  return {fbm, fgn, dX, X};
};

export {ou, fou};
