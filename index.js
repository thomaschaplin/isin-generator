'use-strict'

const countryCodes = require('./country-codes.json')
const cusip = require('@thomaschaplin/cusip-generator').generateCusip()


const generateIsin = (countryCode) => {
    const code = countryCode ? countryCode : countryCodes[Math.floor(Math.random() * countryCodes.length)]
    const isin = code + cusip + generateIsinCheckDigit(code + cusip + '0')
    return isin
}

const isIsinCorrectLength = (isin) => {
    if(isin.length !== 12) {
        throw new Error("Invalid cusip")
    }
}

const calculateValues = (isin) => {
    const values = [];

    for (let i = 10; i >= 0; i--) {
        const char = isin.charAt(i);
        if (isNaN(char)) {
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

const calculateCheckDigit = (values) => {
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

const generateIsinCheckDigit = isin => {
    isIsinCorrectLength(isin)
    const values = calculateValues(isin)
    const checkDigit = calculateCheckDigit(values)
    return checkDigit
}


exports.isinGenerator = function isinGenerator() {
    return generateIsin(cusip)
}

// console.log(generateIsin())
