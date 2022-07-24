import normal from '../distributions/normal';
import choleskyDecomposition from '../../linalg/cholesky';

/**
 *
 * @param {number} n
 * @param {number} T
 * @param {number} H
 * @param {'cholesky' | 'kroese'} method
 * @returns {Record<'fgn' | 'fbm', number[]>}
 * @memberof stochastic
 * @example
 * const {fgn, fbm} = fractionalWiener(100, 1, 0.7, 'cholesky');
 *
 * @description
 * Fractional Brownian motion.
 */

const fractionalWiener = (
  n: number = 100,
  T: number = 1,
  H: number = 0.7,
  method: 'cholesky' | 'kroese' = 'cholesky',
): Record<'fgn' | 'fbm', number[]> => {
  if (H < 0 || H > 1) {
    throw new Error('Hurst must be between 0 and 1.');
  }

  if (method === 'kroese') {
    throw new Error('Kroese method is not implemented yet.');
  } else {
    const autoCovariance = (index: number, H: number) =>
      (1 / 2) *
      (Math.abs(index - 1) ** (2 * H) -
        2 * Math.abs(index) ** (2 * H) +
        Math.abs(index + 1) ** (2 * H));

    let gamma: number[][] = Array.from(Array(n - 1), () =>
      new Array(n - 1).fill(0),
    );

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < i + 1; j++) {
        gamma[i][j] = autoCovariance(i - j, H);
      }
    }

    const cholesky = choleskyDecomposition(gamma);

    let fgn: number[] = new Array(n - 1).fill(0);
    let fbm: number[] = new Array(n).fill(0);

    fbm[0] = 0;

    for (let i = 0; i < n - 1; i++) {
      fgn[i] = cholesky[i].map(v => v * normal()).reduce((a, b) => a + b);
      fbm[i + 1] = fbm[i] + fgn[i];
    }

    const timeScaledFBM = fbm.map(v => T ** H * v);

    return {fgn, fbm: timeScaledFBM};
  }
};

export default fractionalWiener;
