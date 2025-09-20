// 代码生成时间: 2025-09-20 18:28:53
// test_data_generator.js
// 使用JS和LODASH框架创建的测试数据生成器

// 引入lodash库
const _ = require('lodash');

// 测试数据生成器函数
function generateTestData(options) {
  // 参数校验
  if (!options) {
    throw new Error('Options are required to generate test data.');
  }

  // 定义测试数据结构
  const testData = {
    id: _.uniqueId('test_data_'),
    name: _.capitalize(`test${_.random(1, 100)}`),
    age: _.random(18, 65),
    email: _.sampleSize(['user@example.com', 'test.user123@example.com', 'john.doe@example.com'], 1)[0],
    isActive: _.sampleSize([true, false], 1)[0],
    tags: _.shuffle(['javascript', 'lodash', 'test', 'data', 'generator'])[0],
    address: {
      street: _.sampleSize(['123 Test Lane', '456 Sample Street', '789 Data Drive'], 1)[0],
      city: _.sampleSize(['Testville', 'Sampletown', 'Dataopolis'], 1)[0],
      zipCode: _.pad(_.random(10000, 99999), 5, '0'),
    },
  };

  // 返回生成的测试数据
  return testData;
}

// 使用示例
try {
  const data = generateTestData({});
  console.log('Generated Test Data:', data);
} catch (error) {
  console.error('Error generating test data:', error.message);
}
