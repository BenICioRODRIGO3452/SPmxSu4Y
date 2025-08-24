// 代码生成时间: 2025-08-24 11:29:15
// 引入lodash库
const _ = require('lodash');

/**
 * JSON数据格式转换器
 * @param {Object} inputJson - 输入的JSON数据
 * @param {Object} outputSchema - 输出JSON数据的格式模板
 * @returns {Object} - 转换后的JSON数据
 */
function transformJsonData(inputJson, outputSchema) {
    // 验证输入参数
    if (!_.isObject(inputJson) || !_.isObject(outputSchema)) {
        throw new Error('Invalid input parameters');
    }

    // 根据输出模板生成转换后的JSON数据
    const transformedJson = {};
    for (const key in outputSchema) {
        const value = outputSchema[key];
        // 根据模板的路径获取输入JSON中对应的值
        const inputValue = _.get(inputJson, value.path);
        // 如果值存在则添加到转换后的JSON中
        if (inputValue !== undefined) {
            transformedJson[key] = inputValue;
        }
    }

    return transformedJson;
}

// 示例用法
const inputJson = {
    "name": "John",
    "age": 30,
    "address": {
        "street": "123 Main St",
        "city": "New York",
        "state": "NY"
    }
};

const outputSchema = {
    "firstName": {"path": "name"},
    "age": {"path": "age"},
    "address": {
        "path": "address.street"
    },
    "city": {"path": "address.city"},
    "state": {"path": "address.state"}
};

try {
    const transformedJson = transformJsonData(inputJson, outputSchema);
    console.log(JSON.stringify(transformedJson, null, 2));
} catch (error) {
    console.error(error.message);
}
