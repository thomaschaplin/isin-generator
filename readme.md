<img src="assets/logo.png" alt="logo" width="301" height="273" />

# isin-generator

isin-generator is a [Node.js](https://nodejs.org/en/) library to generate random valid ISINs.

An International Securities Identification Number (ISIN) is a code that uniquely identifies a specific securities issue. The organization that allocates ISINs in any particular country is the country's respective National Numbering Agency (NNA).

## Usage

`npm i @thomaschaplin/isin-generator`

### Example Usage

#### CommonJS

```js
const { generateIsin } = require("@thomaschaplin/isin-generator");

console.log(generateIsin());       // random country code, e.g. XS2841269504
console.log(generateIsin("US"));   // fixed country code,  e.g. US0378331005
```

#### ES Modules / TypeScript

```ts
import { generateIsin } from "@thomaschaplin/isin-generator";

console.log(generateIsin());       // random country code, e.g. XS2841269504
console.log(generateIsin("US"));   // fixed country code,  e.g. US0378331005
```

### API

#### `generateIsin(countryCode?: string): string`

Generates a valid 12-character ISIN. Optionally accepts an [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code to fix the country prefix. The country code is case-insensitive. If omitted, a country code is chosen at random.

## Development

### Installation

```bash
git clone git@github.com:thomaschaplin/isin-generator.git
cd isin-generator
npm install
```

### Build

```bash
npm run build   # compile TypeScript to build/
npm run watch   # compile in watch mode
```

### Tests

```bash
npm test                  # run tests
npm run test:coverage     # run tests with coverage report
npm run test:mutation     # run mutation tests
```

## License

[MIT](./LICENSE)

---

[Logo](https://www.clipartkey.com/view/wbiiho_stamp-on-document-clipart/) graphic by <a href="https://www.clipartkey.com/upic/4653/">Skyler B</a> from ClipArtKey.
