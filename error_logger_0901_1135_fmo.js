// 代码生成时间: 2025-09-01 11:35:00
 * Features:
 * - Collects and stores error messages
 * - Logs errors with timestamps
 * - Allows for error filtering and retrieval
 */

const _ = require('lodash');

class ErrorLogger {
  // Constructor to initialize the error logs array
  constructor() {
    this.errorLogs = [];
  }

  // Method to add an error to the log
  logError(error) {
    try {
      // Ensure that error is an object with message and stack
      if (_.isObject(error) && _.isString(error.message) && _.isString(error.stack)) {
        const logEntry = {
          timestamp: Date.now(),
          message: error.message,
          stack: error.stack
        };
        this.errorLogs.push(logEntry);
        console.log(`Logged error at ${logEntry.timestamp}: ${logEntry.message}`);
      } else {
        throw new Error('Invalid error object. Error must include message and stack.');
      }
    } catch (e) {
      console.error('Error logging error:', e.message);
    }
  }

  // Method to get all error logs
  getAllErrors() {
    return this.errorLogs;
  }

  // Method to filter errors based on a callback function
  filterErrors(filterFn) {
    return _.filter(this.errorLogs, filterFn);
  }
}

// Example usage:
// const logger = new ErrorLogger();
// try {
//   throw new Error('Something went wrong!');
// } catch (error) {
//   logger.logError(error);
// }

// console.log(logger.getAllErrors());