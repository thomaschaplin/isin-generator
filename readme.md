# isin-generator
![npm (scoped)](https://img.shields.io/npm/v/@thomaschaplin/isin-generator)
[![GitHub issues](https://img.shields.io/github/issues/thomaschaplin/isin-generator)](https://github.com/thomaschaplin/isin-generator/issues)
[![GitHub forks](https://img.shields.io/github/forks/thomaschaplin/isin-generator)](https://github.com/thomaschaplin/isin-generator/network)
[![GitHub stars](https://img.shields.io/github/stars/thomaschaplin/isin-generator)](https://github.com/thomaschaplin/isin-generator/stargazers)
[![GitHub license](https://img.shields.io/github/license/thomaschaplin/isin-generator)](https://github.com/thomaschaplin/isin-generator/blob/master/LICENSE)

Generate a random name from a list of over 277,000 names

## Install

`npm i @thomaschaplin/isin-generator`

## Usage

### ES5
```js
const generateIsin = require('@thomaschaplin/isin-generator')
console.log(generateIsin.generateIsin()) // US112091HZ96
```

or

```js
const { generateIsin } = require('@thomaschaplin/isin-generator')
console.log(generateIsin()) // XS2841269504
```

### ES6

```js
import { generateIsin } from '@thomaschaplin/isin-generator')
console.log(generateIsin()) // US362159GW90
```

## License 
[MIT](./LICENSE)