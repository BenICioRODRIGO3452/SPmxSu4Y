// 代码生成时间: 2025-08-14 02:55:38
const _ = require('lodash');

/**
 * Cleans an array of objects by removing null or undefined values.
 * @param {Array} data - The array of objects to clean.
 * @returns {Array} - The cleaned array of objects.
 */
function cleanData(data) {
  if (!_.isArray(data)) {
    throw new Error('Input data must be an array.');
  }

  return _.filter(data, (item) => item !== null && item !== undefined);
}

/**
 * Removes any unnecessary whitespace from strings within an array of objects.
 * @param {Array} data - The array of objects to process.
 * @param {String} key - The key to focus on.
 * @returns {Array} - The array of objects with trimmed strings.
 */
function trimStrings(data, key) {
  if (!_.isArray(data)) {
    throw new Error('Input data must be an array.');
  }

  if (!_.isString(key)) {
    throw new Error('Key must be a string.');
  }

  return _.map(data, (item) => {
    if (_.isObject(item) && _.has(item, key) && _.isString(item[key])) {
      item[key] = item[key].trim();
    }
    return item;
  });
}

/**
 * Converts strings within an array of objects to uppercase.
 * @param {Array} data - The array of objects to process.
 * @param {String} key - The key to focus on.
 * @returns {Array} - The array of objects with uppercase strings.
 */
function toUpperCase(data, key) {
  if (!_.isArray(data)) {
    throw new Error('Input data must be an array.');
  }

  if (!_.isString(key)) {
    throw new Error('Key must be a string.');
  }

  return _.map(data, (item) => {
    if (_.isObject(item) && _.has(item, key) && _.isString(item[key])) {
      item[key] = item[key].toUpperCase();
    }
    return item;
  });
}

/**
 * Main function to execute data cleaning and preprocessing.
 * @param {Array} rawData - The raw data to be cleaned and preprocessed.
 * @returns {Array} - The cleaned and preprocessed data.
 */
function processData(rawData) {
  try {
    // Clean the data by removing null or undefined values
    const cleanedData = cleanData(rawData);

    // Trim strings within the cleaned data
    const trimmedData = trimStrings(cleanedData, 'keyToTrim'); // Replace 'keyToTrim' with the actual key

    // Convert strings to uppercase within the trimmed data
    const uppercasedData = toUpperCase(trimmedData, 'keyToUpper'); // Replace 'keyToUpper' with the actual key

    return uppercasedData;
  } catch (error) {
    console.error('Error processing data:', error.message);
    throw error;
  }
}

// Example usage:
const rawData = [
  { keyToTrim: '  some value ', keyToUpper: 'some text' },
  { keyToTrim: null },
  { keyToUpper: 'another text' }
];

try {
  const processedData = processData(rawData);
  console.log('Processed Data:', processedData);
} catch (error) {
  console.error('Failed to process data:', error.message);
}