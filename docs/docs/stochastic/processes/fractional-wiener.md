---
sidebar_position: 4
---

# Fractional Wiener

### Usage

```ts
import { fractionalWiener } from "stochastic-js";

const n = 100;
const T = 1;
const H = 0.7;

const { fgn, fbm } = fractionalWiener(n, T, H);

// fgn is the fractional Gaussian increments.
// fbm is the sample of the fractional Wiener process.
```
