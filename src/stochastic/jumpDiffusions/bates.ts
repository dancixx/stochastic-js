import {normal} from '../distributions';
import {compoundPoisson, correlatedWieners} from '../noises';

/**
 *
 * @param {number} v0
 * @param {number} S0
 * @param {number} rho
 * @param {number} n
 * @param {number} T
 * @param {number} kappa
 * @param {number} theta
 * @param {number} eta
 * @param {number} r
 * @param {number} q
 * @param {number} k
 * @param {number} lambda
 * @param nu
 * @param {boolean} isCorrelationConstant
 * @returns {Record<'dv' | 'dX' | 'v' | 'X', number[]>}
 * @description
 * Bates jump diffusion model.
 * X_t = (r - lambda*k - 0.5*v_t) * t + sqrt(v_t) * W_t + Z_t
 */
const bates = (
  v0: number = 0.5,
  S0: number = 100,
  rho: number = 0.05,
  n: number = 100,
  T: number = 1,
  kappa: number,
  theta: number,
  eta: number,
  r: number,
  k: number,
  lambda: number,
  isCorrelationConstant: boolean = true,
): Record<'dv' | 'dX' | 'v' | 'X', number[]> => {
  const {dW1, dW2} = correlatedWieners(isCorrelationConstant, n, T, rho);
  const dt = T / n;
  const dv: number[] = new Array(n - 1).fill(0);
  const v: number[] = new Array(n).fill(0);
  const dX: number[] = new Array(n - 1).fill(0);
  const X: number[] = new Array(n).fill(0);

  const {X: cPoisson} = compoundPoisson(
    n,
    lambda,
    new Array(n - 1).fill(() => normal()),
  );

  v[0] = v0;
  X[0] = S0;

  for (let index = 0; index < n - 1; index++) {
    dv[index] =
      kappa * (theta - v[index]) * dt + eta * Math.sqrt(v[index]) * dW2[index];
    v[index + 1] = Math.max(...[v[index] + dv[index], 0]);

    dX[index] =
      (r - lambda * k - 0.5 * v[index]) * dt +
      Math.sqrt(v[index]) * dW1[index] +
      cPoisson[index];
    X[index + 1] = X[index] + dX[index];
  }

  return {dv, dX, v, X};
};

export default bates;
