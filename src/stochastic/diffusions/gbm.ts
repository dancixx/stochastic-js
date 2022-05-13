import {wiener} from '../noises/wiener';

/**
 *
 * @param {number} mu
 * @param {number} sigma
 * @param {number} S0
 * @param {number} n
 * @param {number} T
 * @returns {Record<'dS' | 'dW' | 'S' | 'W', number[]>}
 * @description
 * dS_t = mu*S_t*dt + sigma*S_t*dW_t
 * mu is the drift and the sigma is the diffusion coefficient.
 */
const gbm = (
  mu: number,
  sigma: number,
  S0: number = 100,
  n: number = 100,
  T: number = 1,
): Record<'dS' | 'dW' | 'S' | 'W', number[]> => {
  const {dW, W} = wiener(n, T);
  const dt = T / n;
  let dS: number[] = new Array(n - 1).fill(0);
  let S: number[] = new Array(n).fill(0);

  S[0] = S0;

  for (let index = 0; index < n - 1; index++) {
    dS[index] = mu * S[index] * dt + sigma * S[index] * dW[index];
    S[index + 1] = S[index] + dS[index];
  }

  return {dS, dW, S, W};
};

export default gbm;
