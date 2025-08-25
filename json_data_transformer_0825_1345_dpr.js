// 代码生成时间: 2025-08-25 13:45:26
// 引入lodash库
const _ = require('lodash');

/**
 * 将JSON数据从一个格式转换为另一个格式
 * 
 * @param {Object} sourceData - 原始JSON数据
 * @param {Array} transformRules - 转换规则数组
 * @returns {Object} 转换后的JSON数据
 */
function transformJsonData(sourceData, transformRules) {
    // 检查输入参数是否有效
    if (!_.isObject(sourceData) || !_.isArray(transformRules)) {
        throw new Error('Invalid input parameters');
    }

    // 初始化转换后的JSON数据
    let transformedData = {};

    // 遍历转换规则数组
    transformRules.forEach(rule => {
        // 检查转换规则是否包含必要的属性
        if (!_.isString(rule.sourcePath) || !_.isString(rule.targetPath)) {
            throw new Error('Invalid transform rule');
        }

        // 使用lodash的get方法获取原始数据中的值
        const value = _.get(sourceData, rule.sourcePath);

        // 使用lodash的set方法设置转换后的JSON数据
        _.set(transformedData, rule.targetPath, value);
    });

    // 返回转换后的JSON数据
    return transformedData;
}

// 示例用法
const sourceJsonData = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};

const transformRules = [
    { sourcePath: 'name', targetPath: 'person.name' },
    { sourcePath: 'age', targetPath: 'person.age' },
    { sourcePath: 'address.street', targetPath: 'person.address.street' },
    { sourcePath: 'address.city', targetPath: 'person.address.city' },
    { sourcePath: 'address.state', targetPath: 'person.address.state' },
    { sourcePath: 'address.zip', targetPath: 'person.address.zip' }
];

try {
    const transformedJsonData = transformJsonData(sourceJsonData, transformRules);
    console.log('Transformed JSON Data:', transformedJsonData);
} catch (error) {
    console.error('Error transforming JSON data:', error.message);
}