import _ from 'lodash';
import normal from './normal';

/**
 *
 * @param n
 * @param T
 * @param H
 * @param method
 * @returns
 */

const fractionalWiener = (
  n: number = 100,
  T: number = 1,
  H: number = 0.7,
  method: 'cholesky' | 'kroese' = 'cholesky',
) => {
  if (H < 0 || H > 1) {
    throw new Error('Hurst must be between 0 and 1.');
  }

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

  const choleskyMatrix = ((gamma: number[][]) => {
    const zeros: number[][] = Array.from(Array(gamma.length), () =>
      new Array(gamma.length).fill(0),
    );
    const L: number[][] = zeros.map((row, r, xL) =>
      row.map((v, c) => {
        const sum = row.reduce(
          (s, _, i) => (i < c ? s + xL[r][i] * xL[c][i] : s),
          0,
        );
        return (xL[r][c] =
          c < r + 1
            ? r === c
              ? Math.sqrt(gamma[r][r] - sum)
              : (gamma[r][c] - sum) / xL[c][c]
            : v);
      }),
    );
    return L;
  })(gamma);

  let fgn: number[] = new Array(n - 1).fill(0);
  let fbm: number[] = new Array(n).fill(0);

  fbm[0] = 0;

  for (let i = 0; i < n - 1; i++) {
    fgn[i] = _.sum(_.map(choleskyMatrix[i], v => v * normal()));
    fbm[i + 1] = fbm[i] + fgn[i];
  }

  const timeScaledFBM = fbm.map(v => T ** H * v);

  return {fgn, fbm: timeScaledFBM};
};

export default fractionalWiener;
