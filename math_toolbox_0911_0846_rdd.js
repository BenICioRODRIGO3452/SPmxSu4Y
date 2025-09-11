// 代码生成时间: 2025-09-11 08:46:19
const _ = require('lodash');

// Math operations are encapsulated in this object
const MathToolbox = {
  // Adds two numbers together
  add: function(a, b) {
    if (!_.isNumber(a) || !_.isNumber(b)) {
      throw new Error('Both arguments must be numbers.');
    }
    return a + b;
  },

  // Subtracts one number from another
  subtract: function(a, b) {
    if (!_.isNumber(a) || !_.isNumber(b)) {
      throw new Error('Both arguments must be numbers.');
    }
    return a - b;
  },

  // Multiplies two numbers
  multiply: function(a, b) {
    if (!_.isNumber(a) || !_.isNumber(b)) {
      throw new Error('Both arguments must be numbers.');
    }
    return a * b;
  },

  // Divides one number by another
  divide: function(a, b) {
    if (!_.isNumber(a) || !_.isNumber(b)) {
      throw new Error('Both arguments must be numbers.');
    }
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  },

  // Calculates the power of a number
  power: function(base, exponent) {
    if (!_.isNumber(base) || !_.isNumber(exponent)) {
      throw new Error('Both arguments must be numbers.');
    }
    return Math.pow(base, exponent);
  },

  // Calculates the square root of a number
  squareRoot: function(value) {
    if (!_.isNumber(value)) {
      throw new Error('Argument must be a number.');
    }
    if (value < 0) {
      throw new Error('Cannot calculate the square root of a negative number.');
    }
    return Math.sqrt(value);
  },

  // Calculates the factorial of a number
  factorial: function(number) {
    if (!_.isNumber(number) || number < 0 || !Number.isInteger(number)) {
      throw new Error('Argument must be a non-negative integer.');
    }
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
};

// Exporting the MathToolbox object for use
module.exports = MathToolbox;