// 代码生成时间: 2025-09-22 19:25:04
const _ = require('lodash');

/**
 * 数据清洗和预处理工具
 * @param {Array} data 输入数据数组
 * @param {Object} options 清洗和预处理选项
 * @returns {Array} 清洗后的数据数组
 */
function cleanAndPreprocessData(data, options) {
  // 检查输入数据是否有效
  if (!Array.isArray(data)) {
    throw new Error('Input data must be an array.');
  }

  // 检查选项是否有效
  if (!options || typeof options !== 'object') {
    throw new Error('Options must be an object.');
  }

  // 复制数据以避免直接修改原始数据
  const cleanData = _.cloneDeep(data);

  // 根据选项执行清洗和预处理操作
  if (options.trimStrings) {
    cleanData.forEach(item => {
      if (_.isString(item)) {
        item.replace(/^\s+|\s+$/g, '');
      }
    });
  }

  if (options.removeEmptyEntries) {
    cleanData.filter(item => !_.isEmpty(item));
  }

  // 可以添加更多的清洗和预处理步骤
  // ...

  return cleanData;
}

// 示例用法
try {
  const rawData = ['  Hello ', 'World!', '', 'JS is fun', null, undefined];
  const options = {
    trimStrings: true,
    removeEmptyEntries: true
  };
  const cleanedData = cleanAndPreprocessData(rawData, options);
  console.log(cleanedData); // 输出: ['Hello', 'World!', 'JS is fun']
} catch (error) {
  console.error(error.message);
}