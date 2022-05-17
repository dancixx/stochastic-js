---
sidebar_position: 3
---

# Correlated Wieners

### Math Background

Soon...

### Usage

#### Example #1

```ts
import { correlatedWieners } from "stochastic-js";

// the correlation is constant and time-independent
const isConstant = true;
const n = 100;
const T = 1;
const rho = 0.02;

const { dW1, dw2, W1, W2 } = correlatedWieners(isConstant, _, n, _, rho, T, _);

// dW is the increments of the Wiener process
// W is the generated sample of the Wiener process
```

#### Example #2

```ts
import { correlatedWieners } from "stochastic-js";

// the correlation comes from tanh transformed Ornstein-Uhlenbeck process
const isConstant = false;
const n = 100;
const T = 1;
const rho = 0.02;
const mu = 0.5;
const sigma = 0.5;
const theta = 8;

const { dW1, dw2, W1, W2 } = correlatedWieners(isConstant, mu, n, sigma, rho, T, theta);

// dW1, dW2 are the increments of the Wiener processes
// W1, W2 are the generated sample of the Wiener processes
```

#### Example #3

```ts
import { correlatedWieners } from "stochastic-js";

// the correlation comes from tanh transformed fractional Ornstein-Uhlenbeck process
const isConstant = false;
const n = 100;
const T = 1;
const rho = 0.02;
const mu = 0.5;
const sigma = 0.5;
const theta = 8;
const H = 0.7;
const isRoughCorrelation = true;

const { dW1, dw2, W1, W2 } = correlatedWieners(isConstant, mu, n, sigma, rho, T, theta, H, isRoughCorrelation);

// dW1, dW2 are the increments of the Wiener processes
// W1, W2 are the generated sample of the Wiener processes
```

### Future Plans

-   [ ] Add support for Jacobi process as correlation process
