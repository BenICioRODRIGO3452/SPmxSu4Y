// 代码生成时间: 2025-09-07 07:10:16
const _ = require('lodash'); // Importing Lodash library

/**
 * Calculate the sum of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of the two numbers
 */
function add(a, b) {
    try {
        if (!_.isNumber(a) || !_.isNumber(b)) {
            throw new Error('Both arguments must be numbers.');
        }
        return a + b;
    } catch (error) {
        console.error(error.message);
        throw error; // Rethrow the error to be handled by the caller
    }
}

/**
 * Calculate the difference between two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The difference between the two numbers
 */
function subtract(a, b) {
    try {
        if (!_.isNumber(a) || !_.isNumber(b)) {
            throw new Error('Both arguments must be numbers.');
        }
        return a - b;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

/**
 * Calculate the product of two numbers
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The product of the two numbers
 */
function multiply(a, b) {
    try {
        if (!_.isNumber(a) || !_.isNumber(b)) {
            throw new Error('Both arguments must be numbers.');
        }
        return a * b;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

/**
 * Calculate the division of two numbers
 * @param {number} a - The numerator
 * @param {number} b - The denominator
 * @returns {number} The division result
 */
function divide(a, b) {
    try {
        if (!_.isNumber(a) || !_.isNumber(b)) {
            throw new Error('Both arguments must be numbers.');
        }
        if (b === 0) {
            throw new Error('Cannot divide by zero.');
        }
        return a / b;
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

/**
 * Calculate the power of a number
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} The result of raising the base to the power of the exponent
 */
function power(base, exponent) {
    try {
        if (!_.isNumber(base) || !_.isNumber(exponent)) {
            throw new Error('Both arguments must be numbers.');
        }
        return Math.pow(base, exponent);
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

/**
 * Calculate the square root of a number
 * @param {number} num - The number to calculate the square root of
 * @returns {number} The square root of the number
 */
function squareRoot(num) {
    try {
        if (!_.isNumber(num)) {
            throw new Error('Argument must be a number.');
        }
        if (num < 0) {
            throw new Error('Cannot calculate the square root of a negative number.');
        }
        return Math.sqrt(num);
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}

// Export the functions for use in other modules
module.exports = {
    add,
    subtract,
    multiply,
    divide,
    power,
    squareRoot
};