import normal from './normal';
import ou from './ou';

/**
 *
 * @param {number} n
 * @param {number} T
 * @returns {Record<'dW' | 'W', number[]>}
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
 * @param {boolean} isConstant
 * @param {number} mu
 * @param {number} n
 * @param {number} sigma
 * @param {number} rho
 * @param {number} T
 * @param {number} theta
 * @returns {Record<'dW1' | 'dW2' | 'W1' | 'W2', number[]>}
 * @description
 * dW2_t = rho_t*dW1_t + (1-rho_t**2)**(1/2)*dZ_t
 * If the isConstant = false, than the correlation process comes from OU.
 */
const correlatedWieners = (
  isConstant: boolean = true,
  mu: number = 0.5,
  n: number = 100,
  sigma: number = 0.5,
  rho: number = 0.05,
  T: number = 1,
  theta: number = 8,
): Record<'dW1' | 'dW2' | 'W1' | 'W2', number[]> => {
  const {dW: dW1, W: W1} = wiener(n, T);
  const {dW: dZ} = wiener(n, T);
  let dW2: number[] = new Array(n - 1).fill(0);
  let W2: number[] = new Array(n).fill(0);

  if (isConstant) {
    for (let index = 0; index < n - 1; index++) {
      dW2[index] = rho * dW1[index] + Math.sqrt(1 - rho ** 2) * dZ[index];
    }
  } else {
    const {X: rho} = ou(theta, sigma, 0, mu, n, T);

    for (let index = 0; index < n - 1; index++) {
      dW2[index] =
        Math.tanh(rho[index]) * dW1[index] +
        Math.sqrt(1 - Math.tanh(rho[index]) ** 2) * dZ[index];

      W2[index + 1] = W2[index] + dW2[index];
    }
  }

  return {dW1, dW2, W1, W2};
};

export {correlatedWieners, wiener};
