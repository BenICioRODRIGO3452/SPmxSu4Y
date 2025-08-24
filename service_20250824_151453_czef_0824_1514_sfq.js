// 代码生成时间: 2025-08-24 15:14:53
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

/**
 * FolderStructureOrganizer class to organize folder structure.
 * @class
 */
class FolderStructureOrganizer {

  constructor(sourcePath) {
    this.sourcePath = sourcePath;
  }

  /**
   * Recursively scans the directory and organizes the structure.
   * @param {string} dirPath - The current directory path to scan.
   * @param {Function} callback - A callback function to handle the results.
   */
  organize(dirPath, callback) {
    const self = this;

    // Check if the directory exists
    fs.access(dirPath, fs.constants.F_OK, (err) => {
      if (err) {
        // Directory not found, call the callback with an error
        return callback("Directory not found: " + dirPath, null);
      }

      // Read the directory contents
      fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
        if (err) {
          // Error reading the directory, call the callback with an error
          return callback("Error reading directory: " + dirPath, null);
        }

        // Process each file or directory in the current directory
        _.each(files, (file) => {
          const filePath = path.join(dirPath, file.name);

          if (file.isDirectory()) {
            // If it's a directory, recursively call organize on it
            self.organize(filePath, callback);
          } else {
            // If it's a file, call the callback with the file path
            callback(null, filePath);
          }
        });
      });
    });
  }
}

/**
 * Example usage:
 * const organizer = new FolderStructureOrganizer('/path/to/your/directory');
 * organizer.organize('/path/to/your/directory', (err, result) => {
 *   if (err) {
 *     console.error(err);
 *   } else {
 *     console.log('File organized:', result);
 *   }
 * });
 */