const sumAll = function(num1, num2) {
    // Negative or non-numeric numbers are not allowed
    if(num1 < 0 || num2 < 0) return "ERROR";
    if(typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";

    // Swap numbers around if the first is greater
    if (num1 > num2) {
        var temp = num1;
        num1 = num2;
        num2 = temp;
    }
    
    // sum all numbers between num1 and num2
    let sum = num1;
    while (num1 < num2) {
        ++num1;
        sum += num1;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
