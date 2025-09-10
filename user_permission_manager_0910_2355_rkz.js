// 代码生成时间: 2025-09-10 23:55:54
// Importing lodash library
const _ = require('lodash');

// UserPermissionManager class definition
class UserPermissionManager {
  /**
# TODO: 优化性能
   * Constructor to initialize user permissions
   * @param {Object} userPermissions - An object containing user roles and their permissions
   */
  constructor(userPermissions) {
    this.userPermissions = userPermissions;
  }
# 优化算法效率

  /**
   * Checks if a user has a specific permission
   * @param {string} userId - The ID of the user
   * @param {string} permission - The permission to check
   * @returns {boolean} - True if the user has the permission, false otherwise
   */
  hasPermission(userId, permission) {
    try {
      // Check if user exists in permissions data
      if (!_.has(this.userPermissions, userId)) {
# FIXME: 处理边界情况
        throw new Error('User not found');
      }

      // Get user roles
# 优化算法效率
      const roles = this.userPermissions[userId].roles;

      // Check if any role has the permission
      return _.some(roles, (role) => {
        return _.includes(this.userPermissions[role].permissions, permission);
# 优化算法效率
      });
    } catch (error) {
      // Handle error and return false
      console.error(error);
      return false;
    }
  }

  /**
   * Adds a new permission to a user role
   * @param {string} userId - The ID of the user
   * @param {string} role - The role to update
   * @param {string} permission - The permission to add
   */
  addPermissionToRole(userId, role, permission) {
    try {
      // Check if user and role exist
      if (!_.has(this.userPermissions, userId) || !_.includes(this.userPermissions[userId].roles, role)) {
# 扩展功能模块
        throw new Error('User or role not found');
      }

      // Get role permissions
# 优化算法效率
      const rolePermissions = this.userPermissions[role].permissions;

      // Add permission if not already exists
      if (!_.includes(rolePermissions, permission)) {
        this.userPermissions[role].permissions.push(permission);
      }
    } catch (error) {
      // Handle error
      console.error(error);
    }
  }
}

// Example usage
const userPermissions = {
  '1': { roles: ['admin'] },
  'admin': { permissions: ['read', 'write', 'delete'] }
};

const permissionManager = new UserPermissionManager(userPermissions);
# 改进用户体验

// Check user permission
console.log(permissionManager.hasPermission('1', 'write')); // true

// Add new permission to role
permissionManager.addPermissionToRole('1', 'admin', 'update');
# 添加错误处理
console.log(permissionManager.hasPermission('1', 'update')); // true
