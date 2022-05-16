[![badge](https://img.shields.io/npm/dm/stochastic-js)](https://www.npmjs.com/package/stochastic-js)
[![badge](https://img.shields.io/npms-io/maintenance-score/stochastic-js)](https://www.npmjs.com/package/stochastic-js)
[![badge](https://img.shields.io/npm/l/stochastic-js)](https://www.npmjs.com/package/stochastic-js)
[![badge](https://img.shields.io/npm/v/stochastic-js)](https://www.npmjs.com/package/stochastic-js)
[![badge](https://img.shields.io/npm/types/stochastic-js)](https://www.npmjs.com/package/stochastic-js)

### **Stochastic.js**

This package is created to bring closer the stochastic calculus in Typescript.

### **Installation**

```
yarn add stochastic-js
```

```
npm i stochastic-js
```

### **Maintenance**

This is a totally new project. The modules will be come in the future as I have time for it or if there is any request.

### **Available modules**

**Continuous-time processes**

- Wiener (Brownian motion)
- Correlated Wieners (constant correlation, stochastic correlation based on tanh(OU))
- Brownian bridge
- Fractional Wiener Process (based on Cholesky decomp.) (beta)

**Diffusion processes**

- Geometric Brownian motion (GBM)
- Ornstein-Uhlenbeck (OU, Vasicek)
- Fractional Ornstein-Uhlenbeck (OU, Vasicek) (beta)
- Cox-Ingelsoll-Ross (CIR)

**Volatility models**

- Heston (constant correlation and stochastic correlation)

### **Future plans**

- [ ] Add multiple normal distribution generator
- [ ] Add different stochastic process, SDEs
- [x] Add fractional process support
- [ ] Add test statistics to estimate the paramters
- [ ] Add Fast Fourier implementations
- [ ] Add support for Lévy Process
- [ ] Add support for Jump Diffusions

### **Sponsoring**

This library can be very useful for anybody who wants to play with stochastic analysis or find data generators for machine learning projects. I plan to extend to a much more complex Math library with a lot of useful tools, but the main concept is still around financial mathematics. If you like this project you can buy me a coffee.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/dancixx)
