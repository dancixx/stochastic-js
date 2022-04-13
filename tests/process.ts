import fractionalWiener from '../src/fractionalWiener';
import gbm from '../src/gbm';
import {brownianBridge, wiener} from '../src/wiener';

console.time();
const {fgn, fbm} = fractionalWiener(100, 1, 0.8);
console.log(fbm, fbm.length, fgn.length);
console.timeEnd();
