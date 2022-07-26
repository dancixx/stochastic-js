import {add, multiply} from '../math/complex';

/**
 *
 * @param {number[]} data
 * @returns {[number, number][]}
 * @memberof fft
 *
 * @description
 * Discrete Fourier Transform. Based on the algorithm described in
 * https://en.wikipedia.org/wiki/Discrete_Fourier_transform
 */
const dft = (data: number[]): [number, number][] => {
  const N = data.length;
  const X: [number, number][] = Array.from(Array(N), () => [0, 0]);

  for (let n = 0; n < N; n++) {
    X[n] = [0, 0];

    for (let k = 0; k < N; k++) {
      const coeff: [number, number] = [
        Math.cos((2 * Math.PI * n * k) / N),
        -Math.sin((2 * Math.PI * n * k) / N),
      ];

      X[n] = add(
        X[n],
        multiply(coeff, [data[k], 0] as unknown as [number, number]),
      );
    }
  }

  return X;
};

export default dft;
