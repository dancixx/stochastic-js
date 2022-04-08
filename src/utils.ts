const cumsum = (increments: number[]): number[] => {
  let cumsum: number[] = new Array(increments.length).fill(0);

  for (let index = 1; index < increments.length; index++) {
    cumsum[index] = increments[index - 1] + increments[index];
  }

  return cumsum;
};

export {cumsum};
