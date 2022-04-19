const add = function (x, y) {
    return x + y;
};

const subtract = function (x, y) {
    return x - y;
};

const sum = function (numbers) {
    return numbers.reduce((x, y) => x + y, 0);
};

const multiply = function (numbers) {
    return numbers.reduce((x, y) => x * y, 1);
};

const power = function (x, y) {
    return x ** y;
};

const factorial = function (number) {
    if (number <= 1) {
        return 1;
    } else {
        return factorial(number - 1) * number;
    }
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
