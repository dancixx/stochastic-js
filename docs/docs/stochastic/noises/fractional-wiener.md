---
sidebar_position: 4
---

# Fractional Wiener

### Usage

```ts
import {stochastic} from 'stochastic-js';

const n = 100;
const T = 1;
const H = 0.7;

const {fgn, fbm} = stochastic.noises.fractionalWiener(n, T, H);

// fgn is the fractional Gaussian increments.
// fbm is the sample of the fractional Wiener process.
```
