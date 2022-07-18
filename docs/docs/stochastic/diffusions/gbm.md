---
sidebar_position: 2
---

# Geometric Brownian motion

### Math Background

Soon...

### Usage

```ts
import {stochastic} from 'stochastic-js';

const mu = 1;
const sigma = 1;
const S0 = 100;
const n = 100;
const T = 1;

const {dS, S} = stochastic.diffusions.gbm(mu, sigma, S0, n, T);

// dS the increments of the process
// S the realization of the process
```
