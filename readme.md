<img src="assets/logo.png" alt="logo" width="301" height="273" />

# isin-generator

isin-generator is a [Node.js](https://nodejs.org/en/) library to generate
random ISIN.

An International Securities Identification Number (ISIN) is a code that uniquely identifies a specific securities issue. The organization that allocates ISINs in any particular country is the country's respective National Numbering Agency (NNA).

## Usage

`npm i @thomaschaplin/isin-generator`

### Example Usage

#### ES5

```js
const generateIsin = require("@thomaschaplin/isin-generator");
console.log(generateIsin.generateIsin()); // US112091HZ96
```

or

```js
const { generateIsin } = require("@thomaschaplin/isin-generator");
console.log(generateIsin()); // XS2841269504
```

#### ES6

```js
import { generateIsin } from '@thomaschaplin/isin-generator')
console.log(generateIsin()) // US362159GW90
```

## Setup

Make sure you have [Node.js](https://nodejs.org/en/) installed on your machine

### Development

#### Installation

- Clone this repository
  `git clone git@github.com:thomaschaplin/isin-generator.git`
- Change directory `cd isin-generator`
- Install the dependencies `npm install`
- Transpile the code `npm run build` or `npm run watch`

#### Tests

- Run the tests `npm test`
- Run the tests with coverage `npm run test:coverage`

## License

[MIT](./LICENSE)

---

[Logo](https://www.clipartkey.com/view/wbiiho_stamp-on-document-clipart/) graphic by <a href="https://www.clipartkey.com/upic/4653/">Skyler B</a> from ClipArtKey.
