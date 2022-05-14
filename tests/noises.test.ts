import {possion} from '../src/stochastic/noises/poisson';
import {brownianBridge, wiener} from '../src/stochastic/noises/wiener';

it('wiener-process', () => {
  const seriesLength = 100;
  const {dW, W} = wiener(seriesLength, 1);

  // the length of the increments should be equal to the {seriesLength - 1}
  expect(dW.length).toBe(seriesLength - 1);

  // the length of the process should be equal to the {seriesLength}
  expect(W.length).toBe(seriesLength);

  // the first value of the Wiener process should be equal to 0
  expect(W[0]).toBe(0);
});

it('brownian-bridge', () => {
  const seriesLength = 100;
  const {B} = brownianBridge(seriesLength, 1);

  // the length of the process should be equal to the {seriesLength}
  expect(B.length).toBe(seriesLength);

  // the first value of the Brownian bridge should be equal to 0
  expect(B[0]).toBe(0);

  // the last value of the Brownian bridge should be equal to 0
  expect(B[seriesLength - 1]).toBe(0);
});
