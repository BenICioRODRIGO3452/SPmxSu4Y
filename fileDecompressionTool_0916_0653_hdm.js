// 代码生成时间: 2025-09-16 06:53:05
// Import required libraries
const AdmZip = require('adm-zip');

const fs = require('fs');

const path = require('path');


/**
 * Decompress a file to a specified destination.
 * @param {string} zipFilePath - The path to the zip file.
 * @param {string} outputDirectory - The directory where the files will be decompressed.
 * @returns {Promise<void>} - A promise that resolves when decompression is complete.
 */
function decompressFile(zipFilePath, outputDirectory) {

  return new Promise((resolve, reject) => {

    // Check if the zip file exists

    if (!fs.existsSync(zipFilePath)) {

      reject(new Error(`The zip file ${zipFilePath} does not exist.`));

      return;

    }


    // Create the output directory if it doesn't exist

    if (!fs.existsSync(outputDirectory)) {

      fs.mkdirSync(outputDirectory, { recursive: true });

    }


    // Create an instance of AdmZip and decompress the file

    const zip = new AdmZip(zipFilePath);

    zip.extractAllTo(outputDirectory, /*overwrite*/true);

    resolve();

  });

}


// Example usage

const zipFilePath = 'path/to/your/zipfile.zip';
const outputDirectory = 'path/to/extracted/folder';

decompressFile(zipFilePath, outputDirectory)
  .then(() => {
    console.log('File decompression complete.');
  })
  .catch((error) => {
    console.error('An error occurred:', error.message);
  });
