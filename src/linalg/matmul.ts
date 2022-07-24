/**
 *
 * @param {number[][]} a matrix
 * @param {number[][]} b matix
 * @returns {number[][]}
 * @memberof linalg
 *
 * @description
 * Matrix multiplication of two matrices.
 */

const matmul = (a: number[][], b: number[][]): number[][] => {
  const aRows = a.length;
  const aCols = a[0].length;
  const bRows = b.length;
  const bCols = b[0].length;

  if (aCols !== bRows) {
    throw new Error(
      `matmul: incompatible matrix dimensions: ${aCols} != ${bRows}`,
    );
  }

  const result: number[][] = [];

  for (let i = 0; i < aRows; i++) {
    result.push([]);
    for (let j = 0; j < bCols; j++) {
      let sum = 0;
      for (let k = 0; k < aCols; k++) {
        sum += a[i][k] * b[k][j];
      }
      result[i].push(sum);
    }
  }

  return result;
};

export default matmul;
