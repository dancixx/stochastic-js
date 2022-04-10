import fractionalWiener from '../src/fractionalWiener';
import gbm from '../src/gbm';
import {wiener} from '../src/wiener';

const {dW, W} = wiener();
const {dS, S} = gbm(1, 0.2, 100);
