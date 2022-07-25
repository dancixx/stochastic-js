import {Complex} from '../types';

// TODO: types for this function
const add = (a: Complex, b: Complex): Complex => {
  return [a[0] + b[0], a[1] + b[1]];
};

const subtract = (a: Complex, b: Complex): Complex => {
  return [a[0] - b[0], a[1] - b[1]];
};

const multiply = (a: Complex, b: Complex): Complex => {
  return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
};

const division = (a: Complex, b: Complex): Complex => {
  const denominator = magnitude(b);
  const numerator = multiply(a, conjugate(b));
  return [numerator[0] / denominator, numerator[1] / denominator];
};

const conjugate = (a: Complex): Complex => {
  return [a[0], -a[1]];
};

const magnitude = (a: Complex): number => {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
};

export {add, subtract, multiply, division, conjugate, magnitude};
