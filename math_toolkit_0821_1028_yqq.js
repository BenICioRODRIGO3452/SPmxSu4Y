// 代码生成时间: 2025-08-21 10:28:31
const _ = require('lodash');

// Utility function to check if a value is a number
const isNumber = (value) => typeof value === 'number' && !isNaN(value);

/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
const add = (a, b) => {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Both arguments must be numbers.');
  }
  return a + b;
};

/**
 * Subtracts two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The difference of a and b.
 */
const subtract = (a, b) => {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Both arguments must be numbers.');
  }
  return a - b;
};

/**
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
const multiply = (a, b) => {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Both arguments must be numbers.');
  }
  return a * b;
};

/**
 * Divides two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The quotient of a and b.
 * @throws {Error} If b is zero.
 */
const divide = (a, b) => {
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('Both arguments must be numbers.');
  }
  if (b === 0) {
    throw new Error('Cannot divide by zero.');
  }
  return a / b;
};

// Additional mathematical functions can be added here following the same pattern.

// Export the toolkit
module.exports = {
  add,
  subtract,
  multiply,
  divide
};