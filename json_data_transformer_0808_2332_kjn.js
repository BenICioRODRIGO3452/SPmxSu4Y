// 代码生成时间: 2025-08-08 23:32:28
// 引入lodash库
const _ = require('lodash');

/**
 * 将输入的JSON数据转换为目标格式
 * @param {Object} inputJson - 输入的JSON对象
 * @param {Object} targetFormat - 目标格式的定义
 * @returns {Object} 转换后的JSON对象
 */
function transformJsonData(inputJson, targetFormat) {
  // 验证输入参数是否合法
  if (!_.isObject(inputJson) || !_.isObject(targetFormat)) {
    throw new Error('输入参数不合法，必须是对象类型');
  }

  // 使用lodash的cloneDeep方法深拷贝输入的JSON对象
  const outputJson = _.cloneDeep(inputJson);

  // 遍历目标格式的定义，进行转换
  _.forOwn(targetFormat, (format, key) => {
    // 检查输入JSON对象中是否存在对应的键
    if (!_.has(outputJson, key)) {
      throw new Error(`输入JSON对象中缺少键：${key}`);
    }

    // 根据目标格式的定义进行转换
    switch (format.type) {
      case 'uppercase':
        outputJson[key] = _.toUpper(outputJson[key]);
        break;
      case 'lowercase':
        outputJson[key] = _.toLower(outputJson[key]);
        break;
      case 'capitalize':
        outputJson[key] = _.capitalize(outputJson[key]);
        break;
      default:
        throw new Error(`不支持的转换类型：${format.type}`);
    }
  });

  return outputJson;
}

// 示例用法
const inputJson = {
  name: 'John Doe',
  age: 30
};

const targetFormat = {
  name: { type: 'capitalize' },
  age: { type: 'uppercase' }
};

try {
  const outputJson = transformJsonData(inputJson, targetFormat);
  console.log(outputJson);
} catch (error) {
  console.error(error.message);
}