// 代码生成时间: 2025-08-12 02:50:57
// Importing necessary Lodash functions
const _ = require('lodash');

class ApiResponseFormatter {
  /**
   * Creates an instance of ApiResponseFormatter.
   *
   * @param {Object} apiResponse - The raw API response object.
   */
  constructor(apiResponse) {
    if (_.isNil(apiResponse)) {
      throw new Error('API response is required.');
    }

    this.apiResponse = apiResponse;
  }

  /**
   * Formats the API response with a specified template.
   *
   * @param {Object} template - The template object to format the response with.
   *
   * @returns {Object} The formatted API response.
   *
   * @throws {Error} If the template is invalid or missing required properties.
   */
  formatResponse(template) {
    if (!_.isObject(template) || _.isEmpty(template)) {
      throw new Error('A valid template is required to format the response.');
    }

    // Applying the template to the API response
    const formattedResponse = _.reduce(template, (result, value, key) => {
      if (_.has(this.apiResponse, key)) {
        result[key] = _.get(this.apiResponse, key);
      } else if (_.isFunction(value)) {
        // If a function is provided, execute it to get the value
        result[key] = value(this.apiResponse);
      } else {
        // If the key is not present and no function is provided, use a default value or throw an error
        result[key] = 'Not Available';
      }
      return result;
    }, {});

    return formattedResponse;
  }
}

// Example usage
try {
  const apiResponse = {
    data: {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com'
    }
  };

  const formatter = new ApiResponseFormatter(apiResponse);
  const template = {
    id: 'id',
    fullName: 'name',
    emailAddress: 'email',
    createdAt: (response) => {
      // Assuming the API response has a 'data.createdAt' field
      return response.data.createdAt;
    }
  };

  const formatted = formatter.formatResponse(template);
  console.log(formatted);
} catch (error) {
  console.error('Error formatting API response:', error.message);
}