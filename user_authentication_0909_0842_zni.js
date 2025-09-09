// 代码生成时间: 2025-09-09 08:42:26
const _ = require('lodash');

// 用户数据示例
const users = [
  { id: 1, username: 'user1', password: 'pass1' },
  { id: 2, username: 'user2', password: 'pass2' },
  { id: 3, username: 'user3', password: 'pass3' },
];

// 用户身份认证函数
function authenticateUser(username, password) {
  // 查找用户
  const user = _.find(users, { username });

  // 如果用户不存在，返回错误
  if (!user) {
    return {
      success: false,
      message: '用户名不存在',
    };
  }

  // 校验密码
  if (user.password === password) {
    return {
      success: true,
      message: '认证成功',
      user,
    };
  } else {
    return {
      success: false,
      message: '密码错误',
    };
  }
}

// 示例用法
const result = authenticateUser('user1', 'pass1');
console.log(result);
