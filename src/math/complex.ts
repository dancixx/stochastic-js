// TODO: types for this function
const add = (a: [number, number], b: [number, number]): [number, number] => {
  return [a[0] + b[0], a[1] + b[1]];
};

const subtract = (
  a: [number, number],
  b: [number, number],
): [number, number] => {
  return [a[0] - b[0], a[1] - b[1]];
};

const multiply = (
  a: [number, number],
  b: [number, number],
): [number, number] => {
  return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
};

const division = (
  a: [number, number],
  b: [number, number],
): [number, number] => {
  const denominator = magnitude(b);
  const numerator = multiply(a, conjugate(b));
  return [numerator[0] / denominator, numerator[1] / denominator];
};

const conjugate = (a: [number, number]): [number, number] => {
  return [a[0], -a[1]];
};

const magnitude = (a: [number, number]): number => {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
};

export {add, subtract, multiply, division, conjugate, magnitude};
