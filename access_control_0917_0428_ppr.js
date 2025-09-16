// 代码生成时间: 2025-09-17 04:28:16
// Require lodash for utility functions
const _ = require('lodash');

// Define a user roles enum for clarity
const UserRoles = {
    ADMIN: 'admin',
    USER: 'user',
    GUEST: 'guest'
};

// Define the permissions for each role
const permissions = {
    [UserRoles.ADMIN]: ['create', 'read', 'update', 'delete'],
    [UserRoles.USER]: ['read'],
    [UserRoles.GUEST]: []
};

/**
 * Checks if a user has the required permission.
 * @param {string} role - The user's role.
 * @param {string} permission - The permission to check for.
 * @returns {boolean} - Whether the user has the permission.
 */
function hasPermission(role, permission) {
    // Validate role and permission
    if (!_.has(permissions, role) || !_.includes(permissions[role], permission)) {
        throw new Error('Invalid role or permission');
    }

    // Check if the user has the permission
    return _.includes(permissions[role], permission);
}

/**
 * Access control function that checks a user's permissions.
 * @param {Object} user - The user object with role and other properties.
 * @param {string} action - The action to perform.
 * @returns {Promise} - A promise that resolves if the user has access, rejects otherwise.
 */
function checkAccess(user, action) {
    return new Promise((resolve, reject) => {
        // Check if the user and action are valid
        if (!user || !user.role || !action) {
            return reject(new Error('Invalid user or action'));
        }

        // Check if the user has the required permission
        if (hasPermission(user.role, action)) {
            resolve(true);
        } else {
            reject(new Error('Access denied'));
        }
    });
}

// Example usage
const user = {
    role: UserRoles.USER,
    name: 'John Doe'
};

checkAccess(user, 'read')
    .then(() => {
        console.log('Access granted');
    })
    .catch((error) => {
        console.error(error.message);
    });
