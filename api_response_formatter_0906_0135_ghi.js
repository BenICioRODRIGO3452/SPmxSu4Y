// 代码生成时间: 2025-09-06 01:35:45
// api_response_formatter.js
// 该模块是一个API响应格式化工具，它使用JS和LODASH框架来实现功能。

const _ = require('lodash'); // 引入lodash框架

// 定义一个函数来格式化API响应
function formatApiResponse(data) {
  // 检查输入是否为对象
  if (!_.isObject(data)) {
    throw new Error('Invalid input: data must be an object.');
  }

  // 确认数据包含必要的字段
  if (!_.has(data, 'status') || !_.has(data, 'message') || !_.has(data, 'data')) {
    throw new Error('Invalid input: data must contain status, message, and data fields.');
  }

  // 检查状态是否合法
  if (!_.includes(['success', 'error'], data.status)) {
    throw new Error('Invalid status: status must be either success or error.');
  }

  // 格式化响应
  const formattedResponse = {
    status: data.status,
    message: data.message,
    data: data.data ? _.cloneDeep(data.data) : null,
  };

  return formattedResponse;
}

// 导出函数以供其他模块使用
module.exports = {
  formatApiResponse,
};

// 以下是使用示例：

/*
let apiResponse = {
  status: 'success',
  message: 'Operation completed successfully',
  data: {
    result: 'some data'
  }
};

try {
  let formattedResponse = formatApiResponse(apiResponse);
  console.log(formattedResponse);
} catch (error) {
  console.error(error.message);
}
*/
