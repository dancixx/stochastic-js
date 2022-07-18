---
sidebar_position: 6
---

# Compound Poisson (BETA)

### Math Background

Soon...

### Usage

```ts
import {stochastic} from 'stochastic-js';

const n = 100;
const lambda = 1;

const {times, timesTotal, X} = stochastic.noises.compoundPoisson(n, lambda);
```
