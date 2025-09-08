// 代码生成时间: 2025-09-08 08:16:38
// Required libraries
const xlsx = require('node-xlsx');
const _ = require('lodash');
const fs = require('fs');

// Function to generate an Excel file
function generateExcel(data, filename) {
  // Check if data is provided
  if (!data || !Array.isArray(data)) {
    throw new Error('Invalid data provided for Excel generation.');
  }

  // Create an Excel buffer from data
  const buffer = xlsx.build([{ name: 'Sheet1', data }]);

  // Write buffer to file
  fs.writeFile(filename, buffer, (err) => {
    if (err) {
      throw new Error('Failed to write Excel file: ' + err.message);
    }
    console.log('Excel file generated successfully:', filename);
  });
}

// Example usage
try {
  // Define sample data
  const sampleData = [
    ['ID', 'Name', 'Age'],
    [1, 'John Doe', 30],
    [2, 'Jane Smith', 25],
    [3, 'Bob Johnson', 40]
  ];

  // Generate Excel file
  generateExcel(sampleData, 'sample_data.xlsx');
} catch (error) {
  console.error('Error generating Excel file:', error.message);
}