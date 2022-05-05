/**
 *
 * @param {number[]} increments
 * @returns {number[]}
 */
const cumsum = (increments: number[]): number[] => {
  let cumsum: number[] = new Array(increments.length).fill(0);

  for (let index = 0; index < increments.length; index++) {
    cumsum[index + 1] = cumsum[index] + increments[index];
  }

  return cumsum;
};

// TODO: dft function
const dft = (data: number[]): readonly [number[], number[]] => {
  let real: number[] = [];
  let im: number[] = [];

  return [real, im];
};

export {cumsum, dft};
