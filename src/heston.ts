import {correlatedWieners} from './wiener';

/**
 *
 * @param {number} v0
 * @param {number} kappa
 * @param {number} theta
 * @param {number} eta
 * @param {number} S0
 * @param {number} mu
 * @param {boolean} isCorrelationConstant
 * @param {number} n
 * @param {number} T
 * @returns {Record<'dS' | 'dv' | 'S' | 'v', number[]>}
 * @description
 * Heston model is a stochastic volatility model.
 * Default is the correlation between the price and the volatility is constant,
 * but you can set the isCorrelationConstant param to true to get the correlation
 * from a tanh tranformed OU proces.
 *
 * The model generate the asset price process and the volatility process.
 * dS = mu*S_t*dt + (v_t)**(1/2)*S_t*dW1_t
 * dv = (theta-v_t)*dt + eta*(v_t)**(1/2)*dW2_t
 */
const heston = (
  v0: number = 0.5,
  kappa: number,
  theta: number,
  eta: number,
  S0: number = 100,
  mu: number,
  isCorrelationConstant: boolean = true,
  n: number = 100,
  T: number = 1,
): Record<'dS' | 'dv' | 'S' | 'v', number[]> => {
  const {dW1, dW2} = correlatedWieners(isCorrelationConstant);
  const dt = T / n;
  let dS: number[] = new Array(n - 1).fill(0);
  let S: number[] = new Array(n).fill(0);
  let dv: number[] = new Array(n - 1).fill(0);
  let v: number[] = new Array(n).fill(0);

  S[0] = S0;
  v[0] = v0;

  for (let index = 0; index < n - 1; index++) {
    dv[index] =
      kappa * (theta - v[index]) * dt + eta * Math.sqrt(v[index]) * dW2[index];
    v[index + 1] = v[index] + dv[index];

    dS[index] =
      mu * S[index] * dt + Math.sqrt(v[index]) * S[index] * dW1[index];
    S[index + 1] = S[index] + dS[index];
  }

  return {dS, dv, S, v};
};

export default heston;
