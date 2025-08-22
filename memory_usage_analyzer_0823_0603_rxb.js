// 代码生成时间: 2025-08-23 06:03:46
// Import the lodash library
const _ = require('lodash');

/**
 * Function to analyze the memory usage of an array of objects.
 * It calculates the total memory usage and identifies the object(s) with the highest memory usage.
 *
 * @param {Array} data - Array of objects to analyze.
 * @returns {Object} - Object containing total memory usage and the object with the highest memory usage.
 */
function analyzeMemoryUsage(data) {
  // Check if data is an array
  if (!_.isArray(data)) {
    throw new Error('Input data must be an array.');
  }

  // Check if data is not empty
  if (data.length === 0) {
    throw new Error('Input data array must not be empty.');
  }

  // Initialize variables to store total memory usage and the object with the highest memory usage
  let totalMemoryUsage = 0;
  let highestMemoryUsageObject = null;
  let highestMemoryUsage = 0;

  // Iterate over the data array to calculate memory usage and identify the object with the highest memory usage
  data.forEach(obj => {
    // Calculate memory usage of the current object (this is a placeholder as actual memory usage calculation is not possible in JS)
    const memoryUsage = _.size(obj);

    // Update total memory usage
    totalMemoryUsage += memoryUsage;

    // Check if the current object has the highest memory usage so far
    if (memoryUsage > highestMemoryUsage) {
      highestMemoryUsage = memoryUsage;
      highestMemoryUsageObject = obj;
    }
  });

  // Return the result object
  return {
    totalMemoryUsage,
    highestMemoryUsageObject
  };
}

// Example usage
const data = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
try {
  const result = analyzeMemoryUsage(data);
  console.log('Total Memory Usage:', result.totalMemoryUsage);
  console.log('Object with Highest Memory Usage:', result.highestMemoryUsageObject);
} catch (error) {
  console.error('Error:', error.message);
}