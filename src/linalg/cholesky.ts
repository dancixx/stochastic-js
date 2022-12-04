/**
 *
 * @param {number[][]} a
 * @param {'cholesky-banachiewicz' | 'cholesky-crout'} algorithm
 * @returns {number[][]}
 * @memberof linalg
 *
 * @description
 * Cholesky decomposition of a matrix. Based on the algorithm described in
 * https://en.wikipedia.org/wiki/Cholesky_decomposition
 */
const choleskyDecomposition = (
  a: number[][],
  algorithm:
    | 'cholesky-banachiewicz'
    | 'cholesky-crout' = 'cholesky-banachiewicz',
): number[][] => {
  const L: number[][] = Array.from(Array(a.length), () =>
    Array.from(Array(a.length), () => 0),
  );

  if (algorithm === 'cholesky-banachiewicz') {
    for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < i + 1; j++) {
        let sum = 0;
        for (let k = 0; k < j; k++) {
          sum += L[i][k] * L[j][k];
        }
        L[i][j] =
          i === j ? Math.sqrt(a[i][i] - sum) : (a[i][j] - sum) / L[j][j];
      }
    }
  } else if (algorithm === 'cholesky-crout') {
    for (let j = 0; j < a.length; j++) {
      let sum = 0;
      for (let k = 0; k < j; k++) {
        sum += L[j][k] * L[j][k];
      }
      L[j][j] = Math.sqrt(a[j][j] - sum);

      for (let i = j + 1; i < a.length; i++) {
        sum = 0;
        for (let k = 0; k < j; k++) {
          sum += L[i][k] * L[j][k];
        }
        L[i][j] = (1.0 / L[j][j]) * (a[i][j] - sum);
      }
    }
  }

  return L;
};

export default choleskyDecomposition;
