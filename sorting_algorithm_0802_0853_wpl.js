// 代码生成时间: 2025-08-02 08:53:20
const _ = require('lodash');

// Function to validate input array
const validateArray = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('Input must be an array.');
  }
  if (array.some((element) => typeof element !== 'number')) {
    throw new Error('All elements in the array must be numbers.');
  }
};

// Bubble Sort Algorithm
const bubbleSort = (array) => {
  validateArray(array);
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        _.swap(array, j, j + 1);
      }
    }
  }
  return array;
};

// Quick Sort Algorithm
const quickSort = (array) => {
  validateArray(array);
  if (_.isEmpty(array) || _.size(array) === 1) {
    return array;
  }
  const pivot = array[0];
  const left = [];
  const right = [];

  array.forEach((element) => {
    if (element < pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  });

  return _.concat(quickSort(left), _.concat([pivot], quickSort(right)));
};

// Merge Sort Algorithm
const mergeSort = (array) => {
  validateArray(array);
  if (_.size(array) <= 1) {
    return array;
  }
  const middle = Math.floor(_.size(array) / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return _.concat(mergeSort(left), mergeSort(right)).sort((a, b) => a - b);
};

// Expose the sorting functions
module.exports = {
  bubbleSort,
  quickSort,
  mergeSort
};