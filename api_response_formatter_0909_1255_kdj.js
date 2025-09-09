// 代码生成时间: 2025-09-09 12:55:53
// 引入lodash库
# 增强安全性
const _ = require('lodash');
# 优化算法效率

/**
 * 格式化API响应数据
 * @param {Object} data - 原始API响应数据
 * @param {Object} options - 可选参数，用于自定义格式化
 * @returns {Object} 格式化后的API响应数据
 */
# 优化算法效率
function formatApiResponse(data, options = {}) {
  // 检查输入数据类型
  if (!_.isObject(data)) {
    throw new Error('Invalid input data: data must be an object');
  }
# 改进用户体验

  // 合并默认配置和用户自定义配置
# 扩展功能模块
  const config = _.merge({
    successKey: 'success',
    messageKey: 'message',
    dataKey: 'data'
  }, options);

  // 创建格式化后的对象
  let formattedData = {
    [config.successKey]: true,
    [config.messageKey]: '',
    [config.dataKey]: null,
  };

  // 检查原始数据是否包含成功状态
# 添加错误处理
  if (data.status && data.status === 'error') {
    formattedData[config.successKey] = false;
    formattedData[config.messageKey] = data.message || 'Unknown error';
  } else {
    formattedData[config.dataKey] = data;
# NOTE: 重要实现细节
    formattedData[config.messageKey] = 'Request successful';
# 添加错误处理
  }

  return formattedData;
}

/**
 * 示例用法
 */
try {
  const rawData = {
# 优化算法效率
    status: 'success',
    data: {
      id: 1,
      name: 'John Doe',
    },
    message: 'User found'
# 添加错误处理
  };

  const formattedData = formatApiResponse(rawData);
  console.log(formattedData);

  // 使用自定义配置
# 增强安全性
  const customFormattedData = formatApiResponse(rawData, {
    successKey: 'isSuccess',
    messageKey: 'error',
# FIXME: 处理边界情况
    dataKey: 'userData'
  });
  console.log(customFormattedData);
} catch (error) {
  console.error('Error:', error.message);
}
