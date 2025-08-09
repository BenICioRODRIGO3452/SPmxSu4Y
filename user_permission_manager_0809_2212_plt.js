// 代码生成时间: 2025-08-09 22:12:00
const _ = require('lodash');

// 定义用户权限数据结构
# NOTE: 重要实现细节
class UserPermission {
  constructor(userId, permissions) {
# FIXME: 处理边界情况
    this.userId = userId;
    this.permissions = permissions;
  }

  // 添加权限
  addPermission(permission) {
    if (!_.includes(this.permissions, permission)) {
      this.permissions.push(permission);
      console.log(`权限 ${permission} 已添加给用户 ${this.userId}`);
    } else {
      console.error(`用户 ${this.userId} 已有权限 ${permission}`);
    }
  }

  // 移除权限
  removePermission(permission) {
    const index = _.indexOf(this.permissions, permission);
    if (index > -1) {
      this.permissions.splice(index, 1);
      console.log(`权限 ${permission} 已从用户 ${this.userId} 移除`);
    } else {
      console.error(`用户 ${this.userId} 没有权限 ${permission}`);
    }
# 优化算法效率
  }
# TODO: 优化性能

  // 检查用户是否有特定权限
  hasPermission(permission) {
# 优化算法效率
    return _.includes(this.permissions, permission);
  }
}

// 示例使用
const user1 = new UserPermission('user1', ['read', 'write']);

// 为用户添加权限
user1.addPermission('delete');

// 检查用户是否具有特定权限
const hasDeletePermission = user1.hasPermission('delete');
console.log(`用户 user1 是否有 delete 权限: ${hasDeletePermission}`);

// 为用户移除权限
user1.removePermission('read');

module.exports = UserPermission;
# TODO: 优化性能