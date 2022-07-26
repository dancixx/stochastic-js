const pow = (
  x: number | number[] | number[][],
  y: number,
): number | number[] | number[][] => {
  if (typeof x === 'number') {
    return x ** y;
  } else if (Array.isArray(x) && !Array.isArray(x[0])) {
    return (x as number[]).map(value => value ** y);
  } else {
    return (x as number[][]).map(row => row.map(value => value ** y));
  }
};

export default pow;
