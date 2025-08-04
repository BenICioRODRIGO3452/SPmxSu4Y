// 代码生成时间: 2025-08-04 09:13:09
const fs = require('fs');
const path = require('path');
const { forEach } = require('lodash');

/**
 * Function to rename files in a directory based on a naming pattern.
 * @param {string} directoryPath - The path to the directory containing files to rename.
 * @param {Function} namingFunction - A function that takes the original filename and returns the new filename.
 * @returns {Promise<void>}
 */
async function batchRenameFiles(directoryPath, namingFunction) {
  // Check if the directory exists
  if (!fs.existsSync(directoryPath)) {
    throw new Error(`Directory not found: ${directoryPath}`);
  }

  // Read all files in the directory
  const files = fs.readdirSync(directoryPath);

  // Loop through each file and rename it
  forEach(files, (file) => {
    const originalPath = path.join(directoryPath, file);
    const stats = fs.statSync(originalPath);
    
    // Check if it's a file (not a directory)
    if (stats.isFile()) {
      // Get the new filename
      const newFilename = namingFunction(file);
      const newPath = path.join(directoryPath, newFilename);
      
      // Rename the file
      fs.renameSync(originalPath, newPath);
    }
  });
}

/**
 * Example naming function that adds a prefix to each file.
 * @param {string} originalFilename - The original filename.
 * @returns {string} - The new filename with the prefix.
 */
function addPrefixNamingFunction(originalFilename) {
  const prefix = 'new_';
  return `${prefix}${originalFilename}`;
}

/**
 * Example usage of the batchRenameFiles function.
 * Renames all files in the provided directory by adding a 'new_' prefix.
 */
(async () => {
  try {
    const directoryPath = './example_directory';
    await batchRenameFiles(directoryPath, addPrefixNamingFunction);
    console.log('Files have been renamed successfully.');
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
})();