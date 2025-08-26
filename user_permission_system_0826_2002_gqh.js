// 代码生成时间: 2025-08-26 20:02:51
const _ = require('lodash');

// UserPermission class to manage user permissions
class UserPermission {
  // UserPermission constructor
  constructor() {
    this.permissions = {}; // Stores user permissions
  }

  // Set user permissions
  setUserPermissions(userId, permissions) {
    if (!userId || !_.isArray(permissions)) {
      throw new Error('Invalid input: User ID and permissions must be provided');
    }
    this.permissions[userId] = permissions;
  }

  // Get user permissions
  getUserPermissions(userId) {
    if (!userId) {
      throw new Error('Invalid input: User ID must be provided');
    }
    return this.permissions[userId] || [];
  }

  // Check if user has a specific permission
  hasPermission(userId, permission) {
    if (!userId || !permission) {
      throw new Error('Invalid input: User ID and permission must be provided');
    }
    const userPermissions = this.permissions[userId];
    if (!userPermissions) {
      return false;
    }
    return userPermissions.includes(permission);
  }
}

// Example usage
try {
  const userPermissions = new UserPermission();
  userPermissions.setUserPermissions('user1', ['read', 'write']);
  console.log(userPermissions.getUserPermissions('user1')); // ['read', 'write']
  console.log(userPermissions.hasPermission('user1', 'read')); // true
  console.log(userPermissions.hasPermission('user1', 'delete')); // false
} catch (error) {
  console.error(error.message);
}