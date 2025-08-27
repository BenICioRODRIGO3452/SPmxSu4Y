// 代码生成时间: 2025-08-27 11:00:18
// Importing necessary functions from lodash
const { sortBy } = require('lodash');

/**
 * A function to sort an array of numbers using the bubble sort algorithm.
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} - The sorted array.
 */
function bubbleSort(arr) {
  if (!Array.isArray(arr) || !arr.every(item => typeof item === 'number')) {
    throw new Error('Input must be an array of numbers.');
  }

  let len = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap elements
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

/**
 * A function to sort an array of numbers using the quick sort algorithm.
 * @param {number[]} arr - The array of numbers to sort.
 * @returns {number[]} - The sorted array.
 */
function quickSort(arr) {
  if (!Array.isArray(arr) || !arr.every(item => typeof item === 'number')) {
    throw new Error('Input must be an array of numbers.');
  }

  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * A function to sort an array of objects using lodash's sortBy function.
 * @param {object[]} arr - The array of objects to sort.
 * @param {string} key - The key by which to sort the objects.
 * @returns {object[]} - The sorted array of objects.
 */
function sortByLodash(arr, key) {
  if (!Array.isArray(arr) || !arr.every(item => typeof item === 'object') || typeof key !== 'string') {
    throw new Error('Input must be an array of objects and key must be a string.');
  }

  return sortBy(arr, key);
}

// Example usage:
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// console.log(bubbleSort(numbers));
// console.log(quickSort(numbers));
// const objects = [{ name: 'John', age: 30 }, { name: 'Jane', age: 25 }, { name: 'Doe', age: 35 }];
// console.log(sortByLodash(objects, 'age'));