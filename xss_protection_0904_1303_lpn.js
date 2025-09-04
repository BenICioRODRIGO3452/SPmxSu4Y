// 代码生成时间: 2025-09-04 13:03:16
const _ = require('lodash');

/**
 * Function to sanitize input to prevent XSS attacks
 * @param {string} input - The input string to be sanitized
 * @returns {string} - The sanitized string
 */
function sanitizeInput(input) {
  // Check if input is not a string, throw an error
  if (typeof input !== 'string') {
    throw new Error('Input must be a string');
  }

  // Use lodash escape function to escape HTML characters
  return _.escape(input);
}

/**
 * Function to demonstrate the usage of the sanitizeInput function
 */
function main() {
  try {
    // Example input that could contain XSS payload
    const userInput = "<script>alert('XSS')</script>";

    // Sanitize the input to prevent XSS
    const sanitizedInput = sanitizeInput(userInput);

    // Log the sanitized input
    console.log('Sanitized Input:', sanitizedInput);
  } catch (error) {
    // Log any errors that occur during sanitization
    console.error('Error sanitizing input:', error.message);
  }
}

// Run the main function to demonstrate the functionality
main();