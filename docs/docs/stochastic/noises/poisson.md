---
sidebar_position: 5
---

# Poisson (BETA)

### Math Background

Soon...

### Usage

#### Example #1

```ts
import {stochastic} from 'stochastic-js';

const n = 100;
const lambda = 1;

const {times, timesTotal, X, jumps} = stochastic.noises.poisson(n, lambda);
```

#### Example #2

```ts
import {stochastic} from 'stochastic-js';

const n = 100;
const lambda = 1;

// default comes from normal distribution, but it is possible to override
const jumps = number[]

const {times, timesTotal, X, jumps} = stochastic.noises.compoundPoisson(
  n,
  lambda,
);
```
