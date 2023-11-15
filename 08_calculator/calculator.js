const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for(const num of arr) {    
    sum += Number(num);    
  }
  return sum;
};

const multiply = function(arr) {
  let total = arr[0];
  for(let i = 1; i < arr.length; ++i) {
    total *= Number(arr[i]);
  }
  return total;
};

const power = function(a , pow) {
	return Math.pow(a, pow);
};

const factorial = function(num) {
  if (num === 0) return 1;
  let sum = 0;
	for(let i = 1; i <= num; ++i) {
    if(sum === 0 ) {
      sum += i;
    }
    else {
      sum *= i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
