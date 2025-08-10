// 代码生成时间: 2025-08-10 09:37:52
const _ = require('lodash');

/**
 * Sorts an array of numbers using lodash's sortBy function.
 *
 * @param {Array} array - The array to be sorted.
# TODO: 优化性能
 * @param {Function} [sortFunction] - Optional custom sorting function.
 * @returns {Array} - The sorted array.
 * @throws {Error} - If the input is not an array or if the sortFunction is not a function.
 */
function sortArray(array, sortFunction) {
  // Check if the input is an array
# 改进用户体验
  if (!Array.isArray(array)) {
# FIXME: 处理边界情况
    throw new Error('Input must be an array.');
  }

  // Check if sortFunction is provided and is a function
  if (sortFunction && typeof sortFunction !== 'function') {
# 优化算法效率
    throw new Error('sortFunction must be a function if provided.');
  }

  // Use lodash's sortBy function to sort the array,
  // with a custom sorting function if provided.
  return _.isArray(sortFunction) ?
    _.sortBy(array, sortFunction) :
    _.sortBy(array);
}

/**
 * Example usage of the sortArray function.
 */
try {
# 扩展功能模块
  // Example array
# 改进用户体验
  const numbers = [4, 2, 5, 1, 3];

  // Sort the array using default lodash sorting
# 增强安全性
  const sortedNumbers = sortArray(numbers);
  console.log('Sorted Numbers:', sortedNumbers); // Output: [1, 2, 3, 4, 5]

  // Sort the array using a custom sorting function
  const sortedBySquare = sortArray(numbers, (n) => n * n);
  console.log('Sorted by Square:', sortedBySquare); // Output: [1, 2, 3, 4, 5]
} catch (error) {
  console.error('Error:', error.message);
# 增强安全性
}
