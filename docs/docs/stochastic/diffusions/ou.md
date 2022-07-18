---
sidebar_position: 4
---

# Ornstein-Uhlenbeck process

### Math Background

Soon...

### Usage

#### Example #1

```ts
import {stochastic} from 'stochastic-js';

const theta = 1;
const sigma = 1;
const mu = 1;
const X0 = 100;
const n = 100;
const T = 1;

const {dX, X} = stochastic.diffusions.ou(theta, sigma, X0, mu, n, T);

// the method generate an ordinary Ornstein-Uhlenbeck process
// dX the increments of the process
// X the realization of the process
```

#### Example #1

```ts
import {stochastic} from 'stochastic-js';

const theta = 1;
const sigma = 1;
const mu = 1;
const X0 = 100;
const n = 100;
const T = 1;
const H = 0.7; // the Hurst parameter must be in (0, 1)

const {dX, X} = stochastic.diffusions.fou(theta, sigma, X0, mu, n, T, H);

// the method generate a fractional Ornstein-Uhlenbeck process
// dX the increments of the process
// X the realization of the process
```
