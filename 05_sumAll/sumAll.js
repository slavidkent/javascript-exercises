const sumAll = function (startVal, endVal) {
    let sum = 0;
    
    if (startVal < 0 || endVal < 0 || typeof startVal !== 'number' || typeof endVal !== 'number') {
        return 'ERROR';
    }
    if (startVal > endVal) {
        [startVal, endVal] = [endVal, startVal];
    }

    for (let i = startVal; i <= endVal; i++) {
        sum += i;
    }
    return sum;
};

sumAll(100, 88);

// Do not edit below this line
module.exports = sumAll;
