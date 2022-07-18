---
sidebar_position: 1
---

# Heston stochastic volatility model

### Math Background

Soon...

### Usage

```ts
import {stochastic} from 'stochastic-js';

const v0 = 0.5;
const kappa = 1;
const theta = 1;
const eta = 1;
const S0 = 100;
const mu = 1;
const isCorrelationCosntant = true;
const n = 100;
const T = 1;

const {dS, dv, S, v} = stochastic.models.heston(
  v0,
  kappa,
  theta,
  eta,
  S0,
  mu,
  isCorrelationConstant,
  n,
  T,
);

// dS is the increments of the price process and dv of the volatility process
// S and v are the realizations of the models' processes
```
