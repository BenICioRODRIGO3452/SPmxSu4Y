// 代码生成时间: 2025-10-09 00:00:24
const _ = require('lodash');
const axios = require('axios');
const qs = require('qs'); // For query string building

class LoadTestTool {
  /**
   * @param {string} url - The URL to load test.
   * @param {object} options - Options for the load test.
   * @param {number} options.numRequests - The number of requests to send.
   * @param {number} options.delay - The delay between requests in milliseconds.
   * @param {object} options.data - The data to send with each request.
   */
  constructor(url, options) {
    this.url = url;
    this.options = _.defaultsDeep(options, {
      numRequests: 100,
      delay: 1000,
      data: {}
    });
  }

  /**
   * Starts the load test.
   * @returns {Promise<void>}
   */
  async start() {
    try {
      for (let i = 0; i < this.options.numRequests; i++) {
        const response = await this.sendRequest();
        console.log(`Request ${i + 1}: ${response.status} ${response.statusText}`);
        await this.sleep(this.options.delay);
      }
    } catch (error) {
      console.error('Load test failed:', error);
    }
  }

  /**
   * Sends a single HTTP request to the specified URL with the given data.
   * @returns {Promise<AxiosResponse>}
   */
  async sendRequest() {
    try {
      const response = await axios.post(this.url, this.options.data);
      return response;
    } catch (error) {
      throw new Error(`Request failed: ${error.message}`);
    }
  }

  /**
   * A simple delay function to pause the execution for a specified time.
   * @param {number} ms - The delay time in milliseconds.
   * @returns {Promise<void>}
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Example usage:
// const loadTester = new LoadTestTool('https://your-api.com/endpoint', {
//   numRequests: 200,
//   delay: 500,
//   data: {
//     key: 'value'
//   }
// });
// loadTester.start();
