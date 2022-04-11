const removeFromArray = function (arr, ...dataToRemove) {
    let numberIndex;
    for (let i = 0; i < dataToRemove.length; i++) {
        numberIndex = arr.indexOf(dataToRemove[i]);
        if (numberIndex===-1){
            continue;
        }else{
            arr.splice(numberIndex,1);
        }
    }
    return arr;
};

removeFromArray([2, 3, 4, 5, 6, 7], 4, 2);
// Do not edit below this line
module.exports = removeFromArray;
