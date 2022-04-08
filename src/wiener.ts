import normal from './normal';
import {cumsum} from './utils';

const norm = new normal();

/**
 *
 * @param n {number}
 * @param T {number}
 * @returns {Record<string, number[]>}
 */
const wiener = (n: number = 100, T: number = 1): Record<string, number[]> => {
  const dt = T / n;
  let dW: number[] = new Array(n - 1).fill(0);

  for (let index = 0; index < n - 1; index++) {
    dW[index] = Math.sqrt(dt) * norm.boxMuller();
  }

  return {dW, path: cumsum(dW)};
};

export default wiener;
