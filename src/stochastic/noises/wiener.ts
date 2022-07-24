import normal from '../distributions/normal';
import {fou, ou} from '../diffusions/ou';
import {jacobi} from '../diffusions';

/**
 *
 * @param {number} n
 * @param {number} T
 * @returns {Record<'dW' | 'W', number[]>}
 * @memberof stochastic
 * @example
 * const {dW, W} = wiener(100, 1);
 *
 * @description
 * Return a realization of Wiener process.
 * This process is known as Brownian motion too.
 */
const wiener = (
  n: number = 100,
  T: number = 1,
): Record<'dW' | 'W', number[]> => {
  const dt = T / n;
  let dW: number[] = new Array(n - 1).fill(0);
  let W: number[] = new Array(n).fill(0);

  for (let index = 0; index < n - 1; index++) {
    dW[index] = Math.sqrt(dt) * normal();
    W[index + 1] = W[index] + dW[index];
  }

  return {dW, W};
};

/**
 *
 * @param {number} n
 * @param {number} T
 * @returns {Record<'B', number[]>}
 * @memberof stochastic
 * @example
 * const {B} = brownian(100, 1);
 *
 * @description
 * This returns a relaization of Brownian bridge.
 * B_t = W_t - t/T*W_T
 */
const brownianBridge = (
  n: number = 100,
  T: number = 1,
): Record<'B', number[]> => {
  const {W} = wiener(n, T);
  const dt = T / n;
  let B: number[] = new Array(n).fill(0);

  for (let index = 0; index < n - 1; index++) {
    B[index] = W[index] - ((dt * index) / T) * W[n - 1];
  }

  return {B};
};

/**
 *
 * @param {boolean} isConstant
 * @param {number} n
 * @param {number} T
 * @param {number} rho
 * @param {number} mu
 * @param {number} sigma
 * @param {number} theta
 * @param {number} alpha
 * @param {number} beta
 * @param {number} H
 * @param {boolean} isRoughCorrelation
 * @param {'ornsteinUhlenbeck' | 'jacobi'} correlationProcess
 * @returns {Record<'dW1' | 'dW2' | 'W1' | 'W2', number[]>}
 * @memberof stochastic
 * @example
 * const {dW1, dW2, W1, W2} = correlatedWiener(true, 100, 1, 0.05, 0.5, 0.5, 8, 0.5, 0.5, 0.7, false);
 *
 * @description
 * dW2_t = rho_t*dW1_t + (1-rho_t**2)**(1/2)*dZ_t
 * If the isConstant = false, than the correlation process comes from OU or Jacobi.
 * If the isRoughCorrelation = true, than the correlation process comes from Fou.
 */

const correlatedWieners = (
  isConstant: boolean = true,
  n: number = 100,
  T: number = 1,
  rho: number = 0.05,
  mu: number = 0.5,
  sigma: number = 0.5,
  theta: number = 8,
  alpha: number = 0.5,
  beta: number = 0.5,
  H: number = 0.7,
  isRoughCorrelation: boolean = false,
  correlationProcess: 'ornsteinUhlenbeck' | 'jacobi' = 'ornsteinUhlenbeck',
): Record<'dW1' | 'dW2' | 'W1' | 'W2', number[]> => {
  const {dW: dW1, W: W1} = wiener(n, T);
  const {dW: dZ} = wiener(n, T);
  let dW2: number[] = new Array(n - 1).fill(0);
  let W2: number[] = new Array(n).fill(0);

  if (isConstant) {
    for (let index = 0; index < n - 1; index++) {
      dW2[index] = rho * dW1[index] + Math.sqrt(1 - rho ** 2) * dZ[index];
    }
  } else if (!isRoughCorrelation) {
    const {X: rho} = ou(theta, sigma, 0, mu, n, T);

    for (let index = 0; index < n - 1; index++) {
      dW2[index] =
        Math.tanh(rho[index]) * dW1[index] +
        Math.sqrt(1 - Math.tanh(rho[index]) ** 2) * dZ[index];
      W2[index + 1] = W2[index] + dW2[index];
    }
  } else {
    const {X: rho} =
      correlationProcess === 'ornsteinUhlenbeck'
        ? fou(theta, sigma, 0, mu, n, T, H)
        : jacobi(alpha, beta, sigma, 0, n, T);

    for (let index = 0; index < n - 1; index++) {
      dW2[index] =
        Math.tanh(rho[index]) * dW1[index] +
        Math.sqrt(1 - Math.tanh(rho[index]) ** 2) * dZ[index];
      W2[index + 1] = W2[index] + dW2[index];
    }
  }

  return {dW1, dW2, W1, W2};
};

export {brownianBridge, correlatedWieners, wiener};
