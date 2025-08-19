// 代码生成时间: 2025-08-19 23:22:11
// Import lodash for utility functions
const _ = require('lodash');

// Mock user database for demonstration purposes
const mockUserDatabase = {
  'johnDoe': {
    username: 'johnDoe',
    password: '$2b$10$N9qo8uLOickgx2ZMRZoMye.B2xqXJhNRtPD8xgQjM6vT/5p/3q6', // 'password' hashed with bcrypt
  },
};

// Function to verify user credentials
function verifyUserCredentials(username, password) {
  // Check if username exists in the mock database
  if (!_.has(mockUserDatabase, username)) {
    throw new Error('Username does not exist.');
  }

  // Get user object from the database
  const user = mockUserDatabase[username];

  // Check if password is correct (mocked with a simple comparison)
  if (user.password !== password) {
    throw new Error('Incorrect password.');
  }

  // If credentials are correct, return a success message
  return `Welcome back, ${username}!`;
}

// Function to handle login attempt
function handleLoginAttempt(username, password) {
  try {
    // Attempt to verify user credentials
    const successMessage = verifyUserCredentials(username, password);
    console.log(successMessage);
  } catch (error) {
    // Log error if credentials are incorrect
    console.error(error.message);
  }
}

// Example usage
handleLoginAttempt('johnDoe', 'password'); // Should log 'Welcome back, johnDoe!'
handleLoginAttempt('johnDoe', 'wrongPassword'); // Should log 'Incorrect password.'
handleLoginAttempt('unknownUser', 'password'); // Should log 'Username does not exist.'
