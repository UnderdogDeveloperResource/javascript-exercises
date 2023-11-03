const convertToCelsius = function(temp) {
  // F = (x - 32) * 5/9
  let converted = (temp - 32) * 5/9;
  return round(converted);
};

const convertToFahrenheit = function(temp) {
  // C = (x * 9/5 + 32)
  let converted = temp * 9/5 + 32;
  return round(converted);
};

function round(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
