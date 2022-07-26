/**
 *
 * @param {number[]} vector
 * @returns {number}
 * @memberof statistics
 * @example
 * mean([1, 2, 3, 4, 5]); // 3
 *
 * @description
 * Returns the mean of a vector.
 */
const mean1D = (vector: number[]): number => {
  return vector.reduce((a, b) => a + b, 0) / vector.length;
};

/**
 *
 * @param {number[][]} matrix
 * @param {0 | 1} axis
 * @returns {number | number[]}
 * @memberof statistics
 * @example
 * mean([[1, 2, 3], [4, 5, 6]]); // [2, 3, 4]
 * mean([[1, 2, 3], [4, 5, 6]], 1); // [2.5, 4.5]
 *
 * @description
 * Returns the mean of a matrix along an axis.
 */
const mean2D = (matrix: number[][], axis?: 0 | 1): number | number[] => {
  if (axis === 0) {
    return matrix.map(row => mean1D(row));
  } else if (axis === 1) {
    return matrix.map((row, i) => mean1D(row.map((_, j) => matrix[j][i])));
  } else {
    return mean1D(matrix.map(row => mean1D(row)));
  }
};

/**
 *
 * @param {number[] | number[][]} array
 * @param {0 | 1} axis
 * @returns {number | number[]}
 * @memberof statistics
 * @example
 * mean([1, 2, 3, 4, 5]); // 3
 * mean([[1, 2, 3], [4, 5, 6]]); // [2, 3, 4]
 * mean([[1, 2, 3], [4, 5, 6]], 1); // [2.5, 4.5]
 *
 * @description
 * Returns the mean of a vector or matrix along an axis.
 */
const mean = (
  array: number[] | number[][],
  axis?: 0 | 1,
): number | number[] => {
  if (Array.isArray(array[0])) {
    return mean2D(array as number[][], axis);
  } else {
    return mean1D(array as number[]);
  }
};

export default mean;
