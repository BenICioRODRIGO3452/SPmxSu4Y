// 代码生成时间: 2025-09-12 11:08:57
const fs = require('fs');
const path = require('path');
const lodash = require('lodash');
const AdmZip = require('adm-zip'); // Node.js package for handling zip files

/**
 * Unzips a file to a specified directory.
 *
 * @param {string} zipFilePath - The path to the zip file to be unzipped.
 * @param {string} outputDirectory - The path to the directory where files will be unzipped.
 * @returns {Promise<void>} - A promise that resolves when the unzip operation is complete.
 */
function unzipFile(zipFilePath, outputDirectory) {
  return new Promise((resolve, reject) => {
    // Check if the zip file exists
    fs.access(zipFilePath, fs.constants.F_OK, (err) => {
      if (err) {
        reject(new Error(`The zip file does not exist: ${zipFilePath}`));
        return;
      }

      // Check if the output directory exists, if not create it
      fs.access(outputDirectory, fs.constants.F_OK, (err) => {
        if (err) {
          fs.mkdir(outputDirectory, { recursive: true }, (mkdirErr) => {
            if (mkdirErr) {
              reject(new Error(`Failed to create output directory: ${outputDirectory}`));
              return;
            }
          });
        }

        // Unzip the file
        const zip = new AdmZip(zipFilePath);
        if (!zip.getEntries().length) {
          reject(new Error('The zip file is empty'));
          return;
        }

        zip.extractAllTo(outputDirectory, /*overwrite*/true);
        resolve();
      });
    });
  });
}

/**
 * The main function that runs the unzip tool.
 * It accepts the path to the zip file and the output directory as arguments.
 *
 * @param {string} argv[2] - The path to the zip file to be unzipped.
 * @param {string} argv[3] - The path to the directory where files will be unzipped.
 */
function main() {
  if (process.argv.length < 4) {
    console.error('Usage: node unzip_tool.js <zipFilePath> <outputDirectory>');
    process.exit(1);
  }

  const zipFilePath = process.argv[2];
  const outputDirectory = process.argv[3];

  unzipFile(zipFilePath, outputDirectory)
    .then(() => {
      console.log('Unzip operation completed successfully.');
    })
    .catch((error) => {
      console.error(`An error occurred: ${error.message}`);
    });
}

// Run the main function when the script is executed directly
if (require.main === module) {
  main();
}

module.exports = { unzipFile };