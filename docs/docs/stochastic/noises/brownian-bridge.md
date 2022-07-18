---
sidebar_position: 2
---

# Brownian Bridge

### Math Background

Soon...

### Usage

```ts
import {stochastic} from 'stochastic-js';

const n = 100;
const T = 1;

const {B} = stochastic.noises.brownianBridge(n, T);

// B is the generated sample of the brownian bridge.
```
