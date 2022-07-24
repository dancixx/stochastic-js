import {wiener} from '../noises';

/**
 *
 * @param {number} alpha
 * @param {number} beta
 * @param {number} sigma
 * @param {number} X0
 * @param {number} n
 * @param {number} T
 * @returns {Record<'dW' | 'dX' | 'W' | 'X', number[]>}
 * @memberof stochastic
 *
 * @description
 * dX_t = (alpha-beta*X_t)*dt + sigma*(X_t*(1-X_t))**(1/2)*dW_t
 */
const jacobi = (
  alpha: number,
  beta: number,
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
      (alpha - beta * X[index]) * dt +
      sigma * Math.sqrt(X[index] * (1 - X[index])) * dW[index];
    X[index + 1] = X[index] + dX[index];
  }

  return {dW, dX, W, X};
};

const data = jacobi(1, 1, 1);
console.log(data);

export default jacobi;
