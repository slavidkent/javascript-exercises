const repeatString = function(word, num) {
    if (num<0){
        return 'ERROR'
    }
    let words='';
    for (let i=0; i<num;i++){
        words+=word;
    }
    return words;
};

// Do not edit below this line
module.exports = repeatString;
