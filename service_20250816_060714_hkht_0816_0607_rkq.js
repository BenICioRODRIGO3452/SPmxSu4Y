// 代码生成时间: 2025-08-16 06:07:14
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

/**
 * 功能：递归遍历指定文件夹，整理文件结构
 * @param {string} sourcePath - 源文件夹路径
 * @param {string} targetPath - 目标文件夹路径
 * @param {object} options - 配置选项
 */
function organizeFolderStructure(sourcePath, targetPath, options) {
  // 验证源文件夹路径是否存在
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`源文件夹路径不存在: ${sourcePath}`);
  }

  // 验证配置选项
  if (!options || typeof options !== 'object') {
    throw new Error('配置选项必须是对象');
  }

  // 遍历源文件夹
  fs.readdir(sourcePath, { withFileTypes: true }, (err, files) => {
    if (err) {
      throw new Error(`读取源文件夹失败: ${err.message}`);
    }

    // 遍历每个文件/文件夹
    _.forEach(files, (file) => {
      const filePath = path.join(sourcePath, file.name);
      const targetFilePath = path.join(targetPath, file.name);

      // 检查是否是文件
      if (file.isFile()) {
        // 根据配置选项处理文件
        if (options.fileHandler) {
          options.fileHandler(filePath, targetFilePath);
        } else {
          // 默认处理：复制文件
          fs.copyFileSync(filePath, targetFilePath);
        }
      } else if (file.isDirectory()) {
        // 检查目标路径是否存在，不存在则创建
        if (!fs.existsSync(targetFilePath)) {
          fs.mkdirSync(targetFilePath);
        }

        // 递归整理子文件夹
        organizeFolderStructure(filePath, targetFilePath, options);
      }
    });
  });
}

/**
 * 配置示例：
 * {
 *   fileHandler: (sourceFilePath, targetFilePath) => {
 *     // 自定义文件处理逻辑
 *     fs.copyFileSync(sourceFilePath, targetFilePath);
 *   }
 * }
 * 使用示例：
 * organizeFolderStructure('sourceFolder', 'targetFolder', {
 *   fileHandler: (sourceFilePath, targetFilePath) => {
 *     fs.copyFileSync(sourceFilePath, targetFilePath);
 *   }
 * });
 */

// 导出函数
module.exports = organizeFolderStructure;