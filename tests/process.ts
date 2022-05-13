import fractionalWiener from '../src/stochastic/noises/fractionalWiener';
import gbm from '../src/stochastic/diffusions/gbm';
import {brownianBridge, wiener} from '../src/stochastic/noises/wiener';

console.time();
const {fgn, fbm} = fractionalWiener(100, 1, 0.8);
console.log(fbm, fbm.length, fgn.length);
console.timeEnd();
