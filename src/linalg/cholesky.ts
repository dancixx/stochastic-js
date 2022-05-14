/**
 *
 * @param {number[][]} a
 * @returns {number[][]}
 */
const choleskyDecomposition = (a: number[][]): number[][] => {
  let L: number[][] = Array.from(Array(a.length), () =>
    Array.from(Array(a.length), () => 0),
  );

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      let sum = 0;
      for (let k = 0; k < j; k++) {
        sum += L[i][k] * L[j][k];
      }
      L[i][j] = i === j ? Math.sqrt(a[i][i] - sum) : (a[i][j] - sum) / L[j][j];
    }
  }

  return L;
};

export default choleskyDecomposition;
