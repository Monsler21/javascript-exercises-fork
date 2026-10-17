const add = function(num1, num2) {
	const result = num1 + num2;
  return result
};

const subtract = function(num1, num2) {
	const result = (num1) - (num2);
  return result
};

const sum = function(arr) {
	const result = arr.reduce((sum, current) => sum + current, 0);
  return result;
};

const multiply = function(arr) {
	const result = arr.reduce((sum, current) => sum * current, 1);
  return (arr.length === 0) ? 0 : result;
};

const power = function(base, exp) {
  const arr = Array(exp).fill(base);
	const result = arr.reduce((sum, current) => sum * current, 1);
  return (arr.length === 0) ? 0 : result;
};

const factorial = function(num) {
  let mult = 1;
  for (let i = num; i>= 1; i--) {
     mult *= i;
  }
  return mult;
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
