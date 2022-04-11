const reverseString = function (word) {
    let wordArr = [...word];
    let reversedArr = [];
    for (let i = 0; i < wordArr.length; i++) {
        reversedArr.unshift(wordArr[i]);
    }
    return reversedArr.join('');
};

// Do not edit below this line
module.exports = reverseString;
