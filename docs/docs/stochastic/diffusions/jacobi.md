---
sidebar_position: 3
---

# Jacobi process

### Math Background

Soon...

### Usage

```ts
import {stochastic} from 'stochastic-js';

const alpha = 1;
const beta = 1;
const sigma = 1;
const X0 = 100;
const n = 100;
const T = 1;

const {dX, X} = stochastic.diffusions.jacobi(alpha, beta, sigma, X0, n, T);

// dX the increments of the process
// X the realization of the process
```
