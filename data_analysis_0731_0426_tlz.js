// 代码生成时间: 2025-07-31 04:26:48
// 引入lodash库
const _ = require('lodash');

/**
 * 统计数据分析器
 * @class DataAnalyzer
 */
class DataAnalyzer {
  
  /**
   * 构造函数
   * @param {Array} data - 数据源
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * 计算平均值
   * @returns {number} 平均值
   */
  calculateMean() {
    try {
      if (_.isEmpty(this.data)) {
        throw new Error('数据为空');
      }
      return _.mean(this.data);
    } catch (error) {
      console.error('计算平均值出错:', error.message);
      return null;
    }
  }

  /**
   * 计算中位数
   * @returns {number} 中位数
   */
  calculateMedian() {
    try {
      if (_.isEmpty(this.data)) {
        throw new Error('数据为空');
      }
      return _.median(this.data);
    } catch (error) {
      console.error('计算中位数出错:', error.message);
      return null;
    }
  }

  /**
   * 计算众数
   * @returns {number} 众数
   */
  calculateMode() {
    try {
      if (_.isEmpty(this.data)) {
        throw new Error('数据为空');
      }
      return _.mode(this.data);
    } catch (error) {
      console.error('计算众数出错:', error.message);
      return null;
    }
  }
}

// 示例用法
const data = [1, 2, 3, 4, 5, 5, 6, 7];
const analyzer = new DataAnalyzer(data);

console.log('平均值:', analyzer.calculateMean());
console.log('中位数:', analyzer.calculateMedian());
console.log('众数:', analyzer.calculateMode());