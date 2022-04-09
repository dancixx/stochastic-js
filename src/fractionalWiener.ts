/**
 *
 * @param n {number}
 * @param T {number}
 * @param H {number}
 */

const fractionalWiener = (n: number = 100, T: number = 1, H: number = 0.7) => {
  if (H < 0 || H > 1) {
    throw new Error('Hurst must be between 0 and 1.');
  }
};

export default fractionalWiener;
