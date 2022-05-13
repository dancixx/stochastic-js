import {fou} from '../src/stochastic/diffusions/ou';

console.time();
const data = fou(1, 2);
console.log(data);
console.timeEnd();
