// 代码生成时间: 2025-09-22 04:04:45
// Access Control using JS and Lodash
// This module provides a simple way to check user permissions

const _ = require('lodash');

/**
 * Permission checker function
 * @param {Object} user - The user object containing roles
 * @param {string} requiredRole - The required role for the action
 * @returns {boolean} - true if user has required role, false otherwise
 */
function hasPermission(user, requiredRole) {
    // Check if user is defined and has roles
    if (!user || !user.roles) {
        throw new Error('Invalid user object');
    }
    // Use Lodash to check if the required role is in the user's roles array
    return _.includes(user.roles, requiredRole);
}

/**
 * Example usage of the permission checker
 */
try {
    // Example user object with roles
    const user = {
        name: 'John Doe',
        roles: ['admin', 'user']
    };

    // Check if the user has 'admin' role
    if (hasPermission(user, 'admin')) {
        console.log('Access granted');
    } else {
        console.log('Access denied');
    }

    // Check if the user has 'editor' role
    if (hasPermission(user, 'editor')) {
        console.log('Access granted');
    } else {
        console.log('Access denied');
    }
} catch (error) {
    console.error('Error:', error.message);
}
