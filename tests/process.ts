import fractionalWiener from '../src/fractionalWiener';
import gbm from '../src/gbm';
import {brownianBridge, wiener} from '../src/wiener';

const {B} = brownianBridge(20, 1);
console.log(B);
