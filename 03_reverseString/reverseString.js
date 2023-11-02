const reverseString = function(input) {
    let output = [];    
    for (let i = input.length; i >= 0; --i) {
        output.push(input[i]);
    }
    return output.join('');
};

// Do not edit below this line
module.exports = reverseString;
