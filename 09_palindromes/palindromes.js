const palindromes = function (word) {
    alphabetOnly = word.replace(/[\s\W]/g, '').toLowerCase();
    reversedWord = alphabetOnly.split('').reverse().join('');
    return alphabetOnly === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
