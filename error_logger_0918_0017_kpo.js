// 代码生成时间: 2025-09-18 00:17:16
const _ = require('lodash');

// Configure the error logging system
const config = {
  filePath: './error_logs/',
  fileName: 'error_log.txt',
  maxFileSize: 1048576 // 1MB
};

// Function to check if the file size is within the limit
function isFileSizeWithinLimit(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size <= config.maxFileSize;
  } catch (error) {
    console.error('Failed to check file size:', error);
    return false;
  }
}

// Function to write error message to log file
function writeErrorToLogFile(error) {
  const message = `[${new Date().toISOString()}] - ${error.message}
`;
  const logFilePath = `${config.filePath}${config.fileName}`;

  if (isFileSizeWithinLimit(logFilePath)) {
    fs.appendFileSync(logFilePath, message, 'utf8');
  } else {
    // Handle the case where the file size exceeds the limit
    console.error('Error log file size exceeds the limit.');
  }
}

// Error logger class
class ErrorLogger {
  /**
   * Log an error
   *
   * @param {Error} error - The error object to log
   * @returns {void}
   */
  logError(error) {
    _.isFunction(error)
      ? error() // If error is a function, execute it and log
      : writeErrorToLogFile(error);
  }

  /**
   * Log errors from an array of error objects or functions
   *
   * @param {Array<Error|Function>} errors - Array of errors to log
   * @returns {void}
   */
  logErrors(errors) {
    _.each(errors, (error) => this.logError(error));
  }
}

// Export the ErrorLogger class
module.exports = ErrorLogger;