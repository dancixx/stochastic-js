import {Complex} from '../types';
import {add, multiply} from '../math/complex';

/**
 *
 * @param {number[]} data
 * @returns {Complex[]}
 * @memberof fft
 *
 * @description
 * Discrete Fourier Transform. Based on the algorithm described in
 * https://en.wikipedia.org/wiki/Discrete_Fourier_transform
 */
const dft = (data: number[]): Complex[] => {
  const N = data.length;
  const X: Complex[] = Array.from(Array(N), () => [0, 0]);

  for (let n = 0; n < N; n++) {
    X[n] = [0, 0];

    for (let k = 0; k < N; k++) {
      const coeff: Complex = [
        Math.cos((2 * Math.PI * n * k) / N),
        -Math.sin((2 * Math.PI * n * k) / N),
      ];

      X[n] = add(X[n], multiply(coeff, [data[k], 0] as unknown as Complex));
    }
  }

  return X;
};

export default dft;
