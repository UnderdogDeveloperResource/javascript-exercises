const removeFromArray = function(arr) {
    for (let i = 1; i < arguments.length; ++i) {
        let index = arr.indexOf(arguments[i]);
        if(index < 0) {
            continue;
        }

        arr.splice(index, 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
