import {cumsum} from './utils';

const wiener = (n: number = 100) => {
  let increments: number[] = new Array(n).fill(0);

  for (let index = 1; index < n; index++) {
    increments[index] = increments[index] + Math.random();
  }

  return {increments, path: cumsum(increments)};
};

export default wiener;
