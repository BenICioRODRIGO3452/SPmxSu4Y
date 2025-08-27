// 代码生成时间: 2025-08-27 23:36:41
 * using lodash for better maintainability and extensibility.
 */

class ApiResponseFormatter {

  constructor() {
    // Initialize any necessary properties or configurations
  }

  /**
   * Formats the API response into a standard structure
   *
   * @param {Object} response - The raw API response object
   * @param {Object} options - Options to customize the formatting
   * @returns {Object} - The formatted API response
   */
  formatResponse(response, options = {}) {
    try {
      // Validate the response object
      if (!_.isObject(response)) {
        throw new Error('Invalid response object');
      }

      // Extract the necessary properties from the response
      const {
        data = {},
        status = 200,
        message = 'Success',
        ...rest
      } = response;

      // Apply any custom formatting options
      const formattedResponse = {
        ...options,
        data: _.cloneDeep(data),
        status,
        message,
        ...rest
      };

      return formattedResponse;
    } catch (error) {
      // Handle any errors during formatting
      console.error('Error formatting API response:', error);
      throw error;
    }
  }
}

// Example usage
const formatter = new ApiResponseFormatter();
const rawResponse = {
  data: {
    id: 1,
    name: 'John Doe'
  },
  status: 200,
  message: 'User found'
};

const formattedResponse = formatter.formatResponse(rawResponse, {
  additionalInfo: 'This is a formatted response'
});
console.log(formattedResponse);
