// 代码生成时间: 2025-10-09 16:51:03
const _ = require('lodash');

// Configuration object for audit log
const config = {
  auditLogPath: './security_audit_log.json',
  maxLogSize: 100 // Maximum number of logs to keep
};

// Audit log storage
let auditLog = [];

// Function to load audit log from file
function loadAuditLog() {
  try {
    // Assuming the log file is in JSON format
    const logData = require(config.auditLogPath);
    auditLog = _.isArray(logData) ? logData : [];
  } catch (error) {
    // Log file not found or invalid format, start with an empty log
    console.error('Failed to load audit log:', error.message);
    auditLog = [];
  }
}

// Function to save audit log to file
function saveAuditLog() {
  try {
    const logData = JSON.stringify(auditLog, null, 2);
    require('fs').writeFileSync(config.auditLogPath, logData);
  } catch (error) {
    console.error('Failed to save audit log:', error.message);
  }
}

// Function to add a new log entry
function addLogEntry(entry) {
  if (!_.isObject(entry) || _.isEmpty(entry)) {
    throw new Error('Log entry must be a non-empty object.');
  }

  auditLog.push(entry);

  // Trim the log to the maximum size
  if (auditLog.length > config.maxLogSize) {
    auditLog.shift();
  }

  // Save the updated log to file
  saveAuditLog();
}

// Function to retrieve the audit log
function getAuditLog() {
  return _.cloneDeep(auditLog); // Return a deep copy of the log to prevent external mutations
}

// Load the existing audit log on module initialization
loadAuditLog();

// Export the module functions
module.exports = {
  addLogEntry,
  getAuditLog
};