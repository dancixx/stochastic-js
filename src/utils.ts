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

export {cumsum};
