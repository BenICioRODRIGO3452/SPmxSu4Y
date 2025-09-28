// 代码生成时间: 2025-09-28 18:32:22
const _ = require('lodash');

/**
 * Deduplicate an array of objects based on a specified key.
 *
 * @param {Object[]} data - Array of objects to deduplicate.
 * @param {string} uniqueKey - The key to use for uniqueness.
 * @returns {Object[]} Deduped array of objects.
 */
function deduplicate(data, uniqueKey) {
  if (!Array.isArray(data)) {
    throw new Error('Input data must be an array.');
  }
  if (typeof uniqueKey !== 'string') {
    throw new Error('Unique key must be a string.');
  }

  return _.uniqBy(data, uniqueKey);
}

/**
 * Merge two arrays of objects into one, removing duplicates.
 *
 * @param {Object[]} array1 - First array of objects.
 * @param {Object[]} array2 - Second array of objects.
 * @param {string} uniqueKey - The key to use for uniqueness.
 * @returns {Object[]} Merged array of objects with duplicates removed.
 */
function mergeAndDedup(array1, array2, uniqueKey) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error('Both inputs must be arrays.');
  }
  if (typeof uniqueKey !== 'string') {
    throw new Error('Unique key must be a string.');
  }

  // Merge arrays and then deduplicate
  return deduplicate([...array1, ...array2], uniqueKey);
}

// Example usage
try {
  const array1 = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
  const array2 = [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];

  const dedupedArray = deduplicate(array1, 'id');
  console.log('Deduped Array:', dedupedArray);

  const mergedArray = mergeAndDedup(array1, array2, 'id');
  console.log('Merged Array:', mergedArray);
} catch (error) {
  console.error('An error occurred:', error.message);
}