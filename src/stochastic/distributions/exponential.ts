const bilateralExponential = (p: number, a: number, b: number) => {
  const U = Math.random();

  if (U >= p) {
    return (-1 / a) * Math.log((1 - U) / p);
  } else {
    return (1 / b) * Math.log(U / (1 - p));
  }
};
