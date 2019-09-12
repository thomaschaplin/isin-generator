'use-strict'

const countryCodes = require('./country-codes.json')
const cusip = require('@thomaschaplin/cusip-generator').generateCusip()


const generateIsin = cusip => {
    let code = countryCodes[Math.floor(Math.random() * countryCodes.length)]
    let isin = code + cusip + generateIsinCheckDigit(code + cusip + '0')
    return isin
}

const generateIsinCheckDigit = isin => {
    if (isin.length != 12) return false;
    var v = [];
    for (var i = isin.length - 2; i >= 0; i--) {
        let c = isin.charAt(i);
        if (isNaN(c)) {
            var letterCode = isin.charCodeAt(i) - 55;
            v.push(letterCode % 10);
            if (letterCode > 9) {
                v.push(Math.floor(letterCode / 10));
            }
        } else {
            v.push(Number(c));
        }
    }
    var sum = 0;
    var l = v.length;
    for (var i = 0; i < l; i++) {
        if (i % 2 == 0) {
            var d = v[i] * 2;
            sum += Math.floor(d / 10)
            sum += d % 10;
        } else {
            sum += v[i];
        }
    }
    return (10 - (sum % 10)) % 10
}


exports.isinGenerator = function isinGenerator() {
    return generateIsin(cusip)
}