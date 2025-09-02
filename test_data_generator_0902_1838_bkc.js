// 代码生成时间: 2025-09-02 18:38:06
const _ = require('lodash');

/**
 * A utility function to generate test data.
 * @param {number} count - The number of test data items to generate.
 * @returns {Array} An array of test data items.
 */
function generateTestData(count) {
  // Validate input
  if (!_.isInteger(count) || count <= 0) {
    throw new Error('Invalid count: must be a positive integer');
  }

  // Generate test data
  const testData = _.times(count, () => ({
    id: _.uniqueId('test_data_'),
    name: _.sampleSize(['Alice', 'Bob', 'Charlie', 'David'], 1)[0],
    age: _.random(18, 65),
    email: _.sampleSize(['alice@example.com', 'bob@example.com', 'charlie@example.com', 'david@example.com'], 1)[0],
  }));

  return testData;
}

// Example usage
try {
  const testData = generateTestData(5);
  console.log(testData);
} catch (error) {
  console.error('Error generating test data:', error.message);
}