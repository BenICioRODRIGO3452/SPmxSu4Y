// 代码生成时间: 2025-09-23 19:15:23
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

// Function to rename a single file.
// @param {string} oldPath - The current path of the file.
// @param {string} newPath - The desired path of the file.
// @returns {Promise} - A promise that resolves when the file is renamed.
function renameFile(oldPath, newPath) {
  return new Promise((resolve, reject) => {
    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

// Function to generate a new file name based on a prefix and an index.
// @param {string} prefix - The prefix for the new file name.
// @param {number} index - The index to append to the prefix.
// @param {string} extension - The file extension to append to the new file name.
// @returns {string} - The new file name with the given prefix and index.
function generateFileName(prefix, index, extension) {
  return `${prefix}_${index}${extension}`;
}

// Main function to rename files in a directory based on a prefix and file extension.
// @param {string} directoryPath - The path to the directory containing the files to rename.
// @param {string} prefix - The prefix for the new file names.
// @param {string} extension - The file extension to keep for the files.
// @returns {Promise} - A promise that resolves when all files have been renamed.
function batchRenameFiles(directoryPath, prefix, extension) {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      // Filter files by the given extension and rename them.
      Promise.all(files
        .filter(file => path.extname(file) === `.${extension}`)
        .map((file, index) => {
          const oldPath = path.join(directoryPath, file);
          const newPath = path.join(directoryPath, generateFileName(prefix, index, extension));
          return renameFile(oldPath, newPath);
        })).then(() => {
          resolve();
        }).catch(error => {
          reject(error);
        });
    });
  });
}

// Example usage:
// batchRenameFiles('path/to/directory', 'newName', 'txt').then(() => {
//   console.log('Files have been renamed successfully.');
// }).catch(error => {
//   console.error('Error renaming files:', error);
// });
