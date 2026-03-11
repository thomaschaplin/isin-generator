import { countryCodes } from "./fixtures/country-codes"
import { generateCusip } from "@thomaschaplin/cusip-generator"

export const generateIsin = (countryCode?: string): string => {
    const cusip = generateCusip()
    const code = countryCode ? countryCode.toUpperCase() : countryCodes[Math.floor(Math.random() * countryCodes.length)]
    const isin = code + cusip + generateIsinCheckDigit(code + cusip + '0')
    return isin
}

const isIsinCorrectLength = (isin: string) => isin.length !== 12

const calculateValues = (isin: string): number[] => {
    const values = [];

    for (let i = 10; i >= 0; i--) {
        const char = isin.charAt(i);
        if (isNaN(parseInt(char))) {
            const letterCode = isin.charCodeAt(i) - 55;
            values.push(letterCode % 10);
            if (letterCode > 9) {
                values.push(Math.floor(letterCode / 10));
            }
        } else {
            values.push(Number(char));
        }
    }
    return values
}

const calculateCheckDigit = (values: number[]) => {
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        if (i % 2 == 0) {
            const d = values[i] * 2;
            sum += Math.floor(d / 10)
            sum += d % 10;
        } else {
            sum += values[i];
        }
    }
    return (10 - (sum % 10)) % 10
}

const generateIsinCheckDigit = (isin: string) => {
    if (isIsinCorrectLength(isin)) throw new Error('ISIN must be 12 characters long')
    const values = calculateValues(isin)
    const checkDigit = calculateCheckDigit(values)
    return checkDigit
}
