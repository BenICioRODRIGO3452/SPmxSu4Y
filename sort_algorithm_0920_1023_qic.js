// 代码生成时间: 2025-09-20 10:23:31
// Import the necessary lodash function
const _ = require('lodash');

// Define a function to sort an array of numbers
function sortArray(numbers) {
  // Check if the input is an array and contains only numbers
  if (!_.isArray(numbers) || !_.every(numbers, _.isNumber)) {
    throw new Error('Input must be an array of numbers.');
  }

  // Use lodash _.sortBy function to sort the array
  // This will sort the array in ascending order by default
  const sortedNumbers = _.sortBy(numbers);

  // Return the sorted array
  return sortedNumbers;
}

// Example usage:
try {
  const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const sortedNumbers = sortArray(unsortedNumbers);
  console.log('Sorted Numbers:', sortedNumbers);
} catch (error) {
  console.error('Error:', error.message);
}