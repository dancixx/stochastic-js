/**
 *
 * @param {number[]} vector
 * @returns {number}
 * @memberof statistics
 * @example
 * median([1, 2, 3, 4, 5]); // 3
 *
 * @description
 * Returns the median of a vector.
 */
const median1D = (vector: number[]): number => {
  const sorted = vector.sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
};

/**
 *
 * @param {number[][]} matrix
 * @param {Axis} axis
 * @returns {number | number[]}
 * @memberof statistics
 * @example
 * median([[1, 2, 3], [4, 5, 6]]); // [3, 5]
 * median([[1, 2, 3], [4, 5, 6]], 1); // [2.5, 4.5]
 *
 * @description
 * Returns the median of a matrix along an axis.
 */
const median2D = (matrix: Matrix, axis?: Axis): number | number[] => {
  if (axis === 0) {
    return matrix.map(row => median1D(row));
  } else if (axis === 1) {
    return matrix.map((row, i) => median1D(row.map((_, j) => matrix[j][i])));
  } else {
    return median1D(matrix.map(row => median1D(row)));
  }
};

/**
 *
 * @param {Vector | Matrix} values
 * @param {Axis} axis
 * @returns {number | number[]}
 * @memberof statistics
 * @example
 * median([1, 2, 3, 4, 5]); // 3
 * median([[1, 2, 3], [4, 5, 6]]); // [3, 5]
 * median([[1, 2, 3], [4, 5, 6]], 1); // [2.5, 4.5]
 *
 * @description
 * Returns the median of a vector or matrix along an axis.
 */
const median = (array: Vector | Matrix, axis?: Axis): number | number[] => {
  if (Array.isArray(array[0])) {
    return median2D(array as Matrix, axis);
  } else {
    return median1D(array as Vector);
  }
};

export default median;
