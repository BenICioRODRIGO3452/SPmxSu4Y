// 代码生成时间: 2025-08-30 00:35:29
// 引入lodash库
const _ = require('lodash');

/**
 * 将源JSON对象转换为目标JSON对象
 *
 * @param {Object} source - 源JSON对象
 * @param {Object} schema - 目标JSON对象的结构定义
 * @returns {Object} 转换后的JSON对象
 */
function convertJson(source, schema) {
  // 检查输入参数是否有效
  if (!_.isObject(source) || !_.isObject(schema)) {
    throw new Error('输入参数必须是对象');
  }

  // 定义转换后的JSON对象
  let target = {};

  // 遍历schema中的每个属性
  _.forOwn(schema, (value, key) => {
    // 检查源JSON对象中是否存在该属性
    if (source.hasOwnProperty(key)) {
      // 根据属性类型进行转换
      if (_.isArray(value)) {
        // 如果属性值是数组，则转换为数组
        target[key] = source[key].map(item => value[0](item));
      } else {
        // 否则，直接赋值
        target[key] = value(source[key]);
      }
    } else {
      // 如果源JSON对象中不存在该属性，则抛出错误
      throw new Error(`属性 ${key} 不存在于源JSON对象中`);
    }
  });

  return target;
}

// 示例用法
const sourceJson = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'swimming']
};

const schema = {
  username: v => `user_${v.name}`,
  birthdate: v => new Date(v.age, 0, 1),
  interests: [v => v.hobbies.join(', ')]
};

try {
  const targetJson = convertJson(sourceJson, schema);
  console.log(targetJson);
} catch (error) {
  console.error(error.message);
}
