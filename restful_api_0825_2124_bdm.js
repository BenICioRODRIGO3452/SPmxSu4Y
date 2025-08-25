// 代码生成时间: 2025-08-25 21:24:56
const express = require('express');
const _ = require('lodash');

// 创建Express应用
const app = express();

// 中间件：解析JSON请求体
app.use(express.json());

// 数据存储模拟（使用内存对象）
const users = [];

// 获取所有用户
app.get('/users', (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 获取单个用户
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = _.find(users, { id: parseInt(id) });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.status(200).json(user);
});

// 创建新用户
app.post('/users', (req, res) => {
  const newUser = req.body;
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }
  users.push(newUser);
  res.status(201).json(newUser);
});

// 更新用户信息
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const user = _.find(users, { id: parseInt(id) });
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  _.extend(user, req.body);
  res.status(200).json(user);
});

// 删除用户
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = _.findIndex(users, { id: parseInt(id) });
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  users.splice(userIndex, 1);
  res.status(204).json();
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});
