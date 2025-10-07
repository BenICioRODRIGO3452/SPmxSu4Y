// 代码生成时间: 2025-10-08 03:43:19
// Import Lodash library
const _ = require('lodash');

/**
 * Compares two datasets and returns a report on inconsistencies.
 * 
 * @param {Array} dataset1 - The first dataset to compare.
 * @param {Array} dataset2 - The second dataset to compare.
 * @returns {Array} - An array of inconsistencies found.
 */
function checkDataConsistency(dataset1, dataset2) {
    // Check if both datasets are arrays
    if (!_.isArray(dataset1) || !_.isArray(dataset2)) {
        throw new Error('Both inputs must be arrays.');
    }

    // Use Lodash to find differences
    const inconsistencies = _.filter(dataset1, (value) => !_.includes(dataset2, value));

    // Check for inconsistencies in the second dataset
    const inconsistencies2 = _.filter(dataset2, (value) => !_.includes(dataset1, value));

    // Combine both sets of inconsistencies
    return _.union(inconsistencies, inconsistencies2);
}

// Example usage
const dataset1 = [1, 2, 3, 4, 5];
const dataset2 = [1, 2, 4, 5, 6];

try {
    const inconsistencies = checkDataConsistency(dataset1, dataset2);
    if (inconsistencies.length === 0) {
        console.log('Data is consistent.');
    } else {
        console.log('Inconsistencies found:', inconsistencies);
    }
} catch (error) {
    console.error('Error:', error.message);
}