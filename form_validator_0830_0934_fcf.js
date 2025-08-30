// 代码生成时间: 2025-08-30 09:34:01
// Import the lodash library
const _ = require('lodash');

// Define a schema for validation rules
const validationRules = {
    // Example rules for different fields
    'username': {
        required: true,
        minLength: 3,
        maxLength: 20,
        regex: /^[a-zA-Z0-9]+$/,
        error: 'Username must be alphanumeric and 3 to 20 characters long.'
    },
    'password': {
        required: true,
        minLength: 8,
        maxLength: 100,
        regex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        error: 'Password must be at least 8 characters long and include a number, a special character, and a letter.'
    },
    'email': {
        required: true,
        regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        error: 'Email must be a valid email address.'
    }
};

/**
 * Validates a form object against a validation schema.
 * @param {Object} formData - The form data to validate.
 * @param {Object} schema - The validation rules for the form data.
 * @returns {Object} - An object containing the validation results.
 */
function validateForm(formData, schema) {
    const errors = {};

    // Iterate over each field in the schema
    _.forIn(schema, (rules, field) => {
        // Check if the field is required and if it is not present in the formData
        if (rules.required && !_.has(formData, field)) {
            errors[field] = `${field} is required.`;
        } else if (_.has(formData, field)) {
            // Check if the field meets the minimum length requirement
            if (rules.minLength && formData[field].length < rules.minLength) {
                errors[field] = `The ${field} must be at least ${rules.minLength} characters long.`;
            }
            // Check if the field meets the maximum length requirement
            if (rules.maxLength && formData[field].length > rules.maxLength) {
                errors[field] = `The ${field} must be no more than ${rules.maxLength} characters long.`;
            }
            // Check if the field matches the regular expression
            if (rules.regex && !rules.regex.test(formData[field])) {
                errors[field] = rules.error || 'Invalid format for the ' + field + '.';
            }
        }
    });

    return {
        isValid: _.isEmpty(errors),
        errors
    };
}

// Example usage
const formData = {
    'username': 'user1',
    'password': 'pass123!',
    'email': 'user@example.com'
};

const validationResult = validateForm(formData, validationRules);

if (validationResult.isValid) {
    console.log('Form data is valid.');
} else {
    console.error('Form data validation errors:', validationResult.errors);
}