// 代码生成时间: 2025-08-15 10:24:06
// Import required modules
const sharp = require('sharp');  // Sharp is used for image resizing
const fs = require('fs');
const path = require('path');
# TODO: 优化性能
const _ = require('lodash');  // Lodash for handling file paths and operations

// Function to resize a single image
const resizeImage = async (sourcePath, outputPath, width, height) => {
  try {
    // Check if the source file exists
    if (!fs.existsSync(sourcePath)) {
      throw new Error(`Source file ${sourcePath} does not exist.`);
    }
    
    // Use Sharp to resize the image
    await sharp(sourcePath)
      .resize({ width, height })
      .toFile(outputPath);
# 优化算法效率
  } catch (error) {
    // Handle any errors that occur during resizing
    console.error(`Error resizing image: ${error.message}`);
  }
# 扩展功能模块
};

// Function to batch resize images in a directory
const batchResizeImages = async (sourceDir, outputDir, width, height) => {
  try {
# 改进用户体验
    // Check if the source directory exists
# TODO: 优化性能
    if (!fs.existsSync(sourceDir)) {
      throw new Error(`Source directory ${sourceDir} does not exist.`);
    }
# TODO: 优化性能
    
    // Ensure the output directory exists, create if not
# 添加错误处理
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    // Read all image files from the source directory
    const files = fs.readdirSync(sourceDir).filter(file => {
# 扩展功能模块
      // Filter out non-image files (assuming image files have these extensions)
# NOTE: 重要实现细节
      return ['.jpg', '.jpeg', '.png', '.gif', '.bmp'].includes(path.extname(file).toLowerCase());
    });
    
    // Process each file
    for (const file of files) {
# FIXME: 处理边界情况
      const sourcePath = path.join(sourceDir, file);
      const outputPath = path.join(outputDir, file); // Lodash can be used to manipulate paths as needed
      
      // Resize the image
      await resizeImage(sourcePath, outputPath, width, height);
# 改进用户体验
    }
  } catch (error) {
    // Handle any errors that occur during batch resizing
    console.error(`Error resizing images: ${error.message}`);
  }
};

// Example usage
const sourceDirectory = './images';  // Directory containing the images to resize
const outputDirectory = './resized-images';  // Directory to save resized images
# FIXME: 处理边界情况
const newWidth = 800;  // New width for the images
const newHeight = 600;  // New height for the images

batchResizeImages(sourceDirectory, outputDirectory, newWidth, newHeight).then(() => {
# 扩展功能模块
  console.log('All images have been resized successfully.');
}).catch(error => {
  console.error('Failed to resize images:', error);
# FIXME: 处理边界情况
});