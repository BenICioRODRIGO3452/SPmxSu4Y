// 代码生成时间: 2025-10-07 02:18:22
// 引入lodash库
const _ = require('lodash');

// 定义打卡记录存储结构
let attendanceRecords = [];

/**
 * 打卡函数
 * @param {string} employeeId - 员工ID
 * @param {string} timestamp - 打卡时间戳
 * @returns {boolean} - 打卡是否成功
 */
function clockIn(employeeId, timestamp) {
  // 检查员工ID是否有效
  if (!_.isString(employeeId) || employeeId.trim() === '') {
    console.error('无效的员工ID');
    return false;
  }

  // 检查时间戳是否有效
  if (!_.isString(timestamp) || timestamp.trim() === '') {
    console.error('无效的时间戳');
    return false;
  }

  // 创建打卡记录对象
  const record = {
    employeeId: employeeId,
    timestamp: timestamp,
  };

  // 添加打卡记录
  attendanceRecords.push(record);

  console.log(`员工ID ${employeeId} 在时间 ${timestamp} 打卡成功。`);

  return true;
}

/**
 * 查询打卡记录函数
 * @param {string} employeeId - 员工ID
 * @returns {Array} - 该员工的打卡记录
 */
function queryRecordsByEmployeeId(employeeId) {
  // 检查员工ID是否有效
  if (!_.isString(employeeId) || employeeId.trim() === '') {
    console.error('无效的员工ID');
    return [];
  }

  // 使用lodash的filter方法查找指定员工的打卡记录
  const records = _.filter(attendanceRecords, { employeeId: employeeId });

  if (records.length === 0) {
    console.log(`员工ID ${employeeId} 没有打卡记录。`);
  } else {
    console.log(`员工ID ${employeeId} 的打卡记录如下：`, records);
  }

  return records;
}

// 示例用法
clockIn('E001', '2023-04-01T09:00:00Z');
queryRecordsByEmployeeId('E001');
