---
sidebar_position: 1
---

# CIR

### Math Background

Soon...

### Usage

```ts
import {stochastic} from 'stochastic-js';

const kappa = 1;
const theta = 1;
const sigma = 1;
const X0 = 100;
const n = 100;
const T = 1;

const {dX, X} = stochastic.diffusions.cir(kappa, theta, sigma, X0, n, T);

// dX the increments of the process
// X the realization of the process
```
