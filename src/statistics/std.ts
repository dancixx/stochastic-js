import variance from './var';

const std = (values: number[]) => {
  return Math.sqrt(variance(values));
};

export default std;
