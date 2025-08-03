// 代码生成时间: 2025-08-03 16:58:18
const _ = require('lodash');

/**
 * Checks if the network connection is active by attempting to fetch a resource.
 * @param {string} url - The URL to fetch to check connectivity.
 * @returns {Promise<boolean>} - A promise that resolves to true if the network is connected, false otherwise.
 */
async function checkNetworkConnection(url = 'https://www.google.com') {
  try {
    // Attempt to fetch the resource with a timeout of 5 seconds
    const response = await fetch(url, { timeout: 5000 });
    // Check if the response status is within the range of successful responses
    return response.ok;
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error('Network connection check failed:', error);
    return false;
  }
}

/**
 * Main function to execute the network connection check.
 */
async function main() {
  const isConnected = await checkNetworkConnection();
  console.log(isConnected ? 'Network connection is active.' : 'No network connection detected.');
}

// Run the main function to check the network connection status
main();