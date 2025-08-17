// 代码生成时间: 2025-08-17 22:45:31
const _ = require('lodash');

/**
 * 将JSON对象转换为字符串
 * @param {Object} obj - 要转换的JSON对象
 * @returns {string} 转换后的JSON字符串
 */
function formatJson(obj) {
    try {
        // 检查输入是否为有效JSON对象
        if (!_.isObject(obj)) {
            throw new Error('Invalid JSON object');
        }

        // 使用JSON.stringify将对象转换为字符串
        return JSON.stringify(obj, null, 2);
    } catch (error) {
        // 处理转换过程中的错误
        console.error('Error formatting JSON:', error.message);
        return null;
    }
}

/**
 * 将JSON字符串转换回JSON对象
 * @param {string} str - 要转换的JSON字符串
 * @returns {Object} 转换后的JSON对象
 */
function parseJson(str) {
    try {
        // 检查输入是否为非空字符串
        if (!_.isString(str) || str.trim() === '') {
            throw new Error('Invalid JSON string');
        }

        // 使用JSON.parse将字符串转换回对象
        return JSON.parse(str);
    } catch (error) {
        // 处理转换过程中的错误
        console.error('Error parsing JSON:', error.message);
        return null;
    }
}

// 示例用法
const exampleObj = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const formattedJson = formatJson(exampleObj);
console.log('Formatted JSON:', formattedJson);

const parsedObj = parseJson(JSON.stringify(exampleObj));
console.log('Parsed JSON object:', parsedObj);
