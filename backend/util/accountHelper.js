const {PRECISION} = require("../config");

const normalizeAmount=(amount)=>{
    return amount * PRECISION;
}

const formatBalance = (balance) => {
    return balance/PRECISION;
}

module.exports = {normalizeAmount, formatBalance};