// 代码生成时间: 2025-08-28 21:05:12
const _ = require('lodash');

/**
 * SystemPerformanceMonitor class to monitor system performance.
 * It includes methods to get CPU usage, memory usage, and disk usage.
 */
class SystemPerformanceMonitor {

  /**
   * Retrieves the CPU usage percentage.
   * @returns {Promise<number>} CPU usage percentage.
   */
  async getCpuUsage() {
    try {
      // Assuming `os` module is used to get system information
      // In real implementation, you might need to install an external package like `os-utils` or `node-os-utils`
      const { cpu } = require('os-utils');
      return await cpu.usage();
    } catch (error) {
      console.error('Failed to retrieve CPU usage:', error);
      throw error;
    }
  }

  /**
   * Retrieves the total and free memory in bytes.
   * @returns {Promise<Object>} An object containing total and free memory.
   */
  async getMemoryUsage() {
    try {
      const { freemem, totalmem } = require('os');
      const memoryUsage = {
        total: totalmem(),
        free: freemem()
      };
      return memoryUsage;
    } catch (error) {
      console.error('Failed to retrieve memory usage:', error);
      throw error;
    }
  }

  /**
   * Retrieves the disk usage for all available disks.
   * @returns {Promise<Array<Object>>} An array of objects containing disk usage information.
   */
  async getDiskUsage() {
    try {
      // Assuming `fs` module is used to get disk space information
      const { statvfs } = require('fs');
      const diskUsage = [];
      const drives = ['C:\', 'D:\', 'E:\']; // Example drives
      for (const drive of drives) {
        const stats = await new Promise((resolve, reject) => {
          statvfs(drive, (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          });
        });
        diskUsage.push({
          drive,
          total: stats.f_blocks * stats.f_frsize,
          free: stats.f_bfree * stats.f_frsize,
          available: stats.f_bavail * stats.f_frsize
        });
      }
      return diskUsage;
    } catch (error) {
      console.error('Failed to retrieve disk usage:', error);
      throw error;
    }
  }

  /**
   * Gets an overall system health report.
   * @returns {Promise<Object>} An object containing system health report.
   */
  async getSystemHealthReport() {
    try {
      const cpuUsage = await this.getCpuUsage();
      const memoryUsage = await this.getMemoryUsage();
      const diskUsage = await this.getDiskUsage();
      const systemHealth = {
        cpuUsage,
        memory: memoryUsage,
        disk: diskUsage
      };
      return systemHealth;
    } catch (error) {
      console.error('Failed to get system health report:', error);
      throw error;
    }
  }
}

// Example usage:
const monitor = new SystemPerformanceMonitor();
monitor.getSystemHealthReport()
  .then(report => {
    console.log('System Health Report:', report);
  }).catch(error => {
    console.error('Error in getting system health report:', error);
  });