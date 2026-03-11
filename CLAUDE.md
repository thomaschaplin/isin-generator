# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies
npm run build        # compile TypeScript to build/
npm run watch        # compile in watch mode
npm test             # run tests
npm run test:coverage  # run tests with coverage report
npm run test:mutation  # run Stryker mutation tests (~3 min)
```

To run a single test file:
```bash
npx jest src/__tests__/generate-isin.spec.ts
```

To run a test by name:
```bash
npx jest -t "should generate the correct check digit"
```

## Architecture

This is a small npm library (`@thomaschaplin/isin-generator`) that generates valid 12-character ISINs. It depends on `@thomaschaplin/cusip-generator` to supply the 9-character CUSIP component of each ISIN.

**ISIN structure:** `[2-char country code] + [9-char CUSIP] + [1 check digit]`

### Source layout

- `src/generate-isin.ts` — core logic. `generateIsin(countryCode?: string)` picks a random country code (or uses the one provided), calls `generateCusip()` fresh each invocation, then computes a Luhn-variant check digit via `calculateValues` → `calculateCheckDigit`.
- `src/fixtures/country-codes.ts` — exported `string[]` of ISO 3166-1 alpha-2 country codes used for random selection.
- `src/index.ts` — re-exports `generateIsin` as the public API.
- `build/` — compiled output (gitignored); this is what gets published to npm per the `files` field in `package.json`.

### Check digit algorithm

The `generateIsinCheckDigit` function is called with a 12-character string (`code + cusip + '0'`). `calculateValues` iterates indices 0–10 (skipping the placeholder check digit at index 11), converts letters to their numeric equivalent via `charCode - 55`, and splits two-digit results. `calculateCheckDigit` then applies a Luhn-style doubling of even-indexed values to produce the final digit.

### Testing approach

Tests mock `@thomaschaplin/cusip-generator` with a fixed CUSIP (`"037833100"`) to enable deterministic assertions on exact ISIN output (e.g. `"US0378331005"`). When adding tests for the check digit logic, use this pattern — asserting exact output kills far more mutations than length-only checks.

### Pre-push hook

Husky runs `prepush.sh` before every push, which reads `.prepush.config` and interactively prompts to merge `master` and/or run tests. In non-interactive environments (e.g. CI) the `/dev/tty` read will fail gracefully and the push continues.
