---
sidebar_position: 1
---

# Wiener

### Math Background

Soon...

### Usage

```ts
import {stochastic} from 'stochastic-js';

const n = 100;
const T = 1;

const {dW, W} = stochastic.noises.wiener(n, T);

// dW is the increments of the Wiener process
// W is the generated sample of the Wiener process
```
