// 代码生成时间: 2025-09-14 20:15:10
const express = require('express');
# 添加错误处理
const lodash = require('lodash');
# NOTE: 重要实现细节
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data for demonstration purposes
const users = {
    "1": { "id": 1, "name": "John" },
    "2": { "id": 2, "name": "Jane" }
};
# 增强安全性

// GET /users - Retrieve all users
# TODO: 优化性能
app.get('/users', (req, res) => {
    try {
        // Clone the users object to avoid direct mutation
        const allUsers = lodash.cloneDeep(users);
        res.status(200).json(allUsers);
    } catch (error) {
        // Handle any errors that may occur
        res.status(500).json({ error: error.message });
    }
# FIXME: 处理边界情况
});

// GET /users/:id - Retrieve a single user by id
app.get('/users/:id', (req, res) => {
# 扩展功能模块
    try {
        const { id } = req.params;
        if (users[id]) {
            res.status(200).json(users[id]);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
# FIXME: 处理边界情况

// POST /users - Create a new user
app.post('/users', (req, res) => {
# FIXME: 处理边界情况
    try {
        const newUser = req.body;
        if (!newUser.id || !newUser.name) {
            return res.status(400).json({ error: 'User id and name are required' });
        }
        // Ensure the user doesn't already exist
# NOTE: 重要实现细节
        if (users[newUser.id]) {
            return res.status(409).json({ error: 'User already exists' });
# 改进用户体验
        }
        users[newUser.id] = newUser;
# 扩展功能模块
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /users/:id - Update a user by id
app.put('/users/:id', (req, res) => {
    try {
# NOTE: 重要实现细节
        const { id } = req.params;
        const updatedUser = req.body;
        if (!users[id]) {
            return res.status(404).json({ error: 'User not found' });
        }
# TODO: 优化性能
        if (!updatedUser.name) {
            return res.status(400).json({ error: 'User name is required' });
        }
        users[id].name = updatedUser.name;
        res.status(200).json(users[id]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
# 改进用户体验

// DELETE /users/:id - Delete a user by id
app.delete('/users/:id', (req, res) => {
    try {
        const { id } = req.params;
        if (!users[id]) {
            return res.status(404).json({ error: 'User not found' });
# NOTE: 重要实现细节
        }
        delete users[id];
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
# 增强安全性
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});