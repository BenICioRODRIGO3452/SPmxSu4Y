// 代码生成时间: 2025-08-22 06:41:20
const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');
const _ = require('lodash');

// 定义Excel生成器类
class ExcelGenerator {
    // 构造函数
    constructor() {
        this.workbook = XLSX.utils.book_new();
    }

    // 添加工作表
    addWorksheet(data, title) {
        if (!_.isArray(data)) {
            throw new Error('Data must be an array');
        }

        const worksheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(this.workbook, worksheet, title);
    }

    // 保存Excel文件
    saveExcel(filename) {
        if (!filename) {
            throw new Error('Filename is required');
        }

        const filePath = path.join(__dirname, filename);
        fs.writeFileSync(filePath, XLSX.write(this.workbook, {
            type: 'binary',
            bookType: 'xlsx'
        }));

        console.log(`Excel file saved as ${filename}`);
    }
}

// 使用示例
try {
    const excelGen = new ExcelGenerator();

    // 示例数据
    const data = [
        ['Name', 'Age'],
        ['John', 30],
        ['Jane', 25]
    ];

    // 添加工作表
    excelGen.addWorksheet(data, 'Sheet1');

    // 保存Excel文件
    excelGen.saveExcel('example.xlsx');
} catch (error) {
    console.error('Error generating Excel:', error.message);
}