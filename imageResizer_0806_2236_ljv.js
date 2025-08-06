// 代码生成时间: 2025-08-06 22:36:32
const fs = require('fs');
const path = require('path');
const sharp = require('sharp'); // Sharp library for image processing
const _ = require('lodash');

/**
 * Resizes an image to a specified size.
 * @param {string} imagePath - The path to the image file.
 * @param {number} targetWidth - The target width for resizing.
 * @param {number} targetHeight - The target height for resizing.
 * @returns {Promise<string>} - A promise that resolves to the resized image path.
 */
function resizeImage(imagePath, targetWidth, targetHeight) {
  return new Promise((resolve, reject) => {
    // Use Lodash to handle potential errors
    try {
      // Read the image file with Sharp
      sharp(imagePath)
        .resize({ width: targetWidth, height: targetHeight })
        .toBuffer()
        .then((data) => {
          // Generate a new filename with the resized suffix
          const resizedImageName = `${path.basename(imagePath, path.extname(imagePath))}_resized${path.extname(imagePath)}`;
          const resizedImagePath = path.join(path.dirname(imagePath), resizedImageName);

          // Write the resized image to a file
          fs.writeFileSync(resizedImagePath, data);

          // Resolve the promise with the resized image path
          resolve(resizedImagePath);
        })
        .catch((err) => {
          // Reject the promise with the error
          reject(err);
        });
    } catch (err) {
      // Reject the promise with the error
      reject(err);
    }
  });
}

/**
 * Resizes multiple images in a directory to a specified size.
 * @param {string} directoryPath - The path to the directory containing images.
 * @param {number} targetWidth - The target width for resizing.
 * @param {number} targetHeight - The target height for resizing.
 * @returns {Promise<void>} - A promise that resolves when all images are resized.
 */
function resizeImagesInDirectory(directoryPath, targetWidth, targetHeight) {
  return new Promise((resolve, reject) => {
    // Read all image files in the directory
    fs.readdir(directoryPath, (err, files) => {
      if (err) {
        reject(err);
        return;
      }

      // Filter out non-image files
      const imageFiles = files.filter((file) => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext);
      });

      // Use Lodash to map over image files and resize them
      _.map(imageFiles, (file) => {
        const imagePath = path.join(directoryPath, file);
        resizeImage(imagePath, targetWidth, targetHeight)
          .then((resizedImagePath) => {
            console.log(`Resized image: ${resizedImagePath}`);
          })
          .catch((err) => {
            console.error(`Error resizing image: ${err.message}`);
          });
      });

      // Resolve the promise when all images are resized
      resolve();
    });
  });
}

// Example usage:
const directoryPath = './images'; // Replace with your image directory path
const targetWidth = 800; // Replace with your target width
const targetHeight = 600; // Replace with your target height

resizeImagesInDirectory(directoryPath, targetWidth, targetHeight)
  .then(() => {
    console.log('All images have been resized successfully.');
  })
  .catch((err) => {
    console.error('Error resizing images:', err.message);
  });