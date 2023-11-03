const leapYears = function(year) {        
    return isDivisibleBy(year, 4) && (!isDivisibleBy(year, 100) || isDivisibleBy(year, 400));
};

function isDivisibleBy (num, divisor) {
    return num % divisor === 0;
}

// Do not edit below this line
module.exports = leapYears;
