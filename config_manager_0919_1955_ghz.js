// 代码生成时间: 2025-09-19 19:55:37
const lodash = require('lodash');
const fs = require('fs');
const path = require('path');

/**
 * Config Manager class
 */
class ConfigManager {
  
  /**
   * Constructs a new instance of ConfigManager
   * @param {string} configPath - The path to the configuration file
   */
  constructor(configPath) {
    this.configPath = configPath;
  }

  /**
   * Loads the configuration file
   * @returns {Object} - The configuration object
   */
  loadConfig() {
    try {
      const rawData = fs.readFileSync(this.configPath, 'utf8');
      return JSON.parse(rawData);
    } catch (error) {
      // Handle file not found or parse error
      console.error('Error loading configuration:', error.message);
      throw error;
    }
  }

  /**
   * Saves the configuration object to the file
   * @param {Object} config - The configuration object to save
   * @returns {void}
   */
  saveConfig(config) {
    try {
      fs.writeFileSync(this.configPath, JSON.stringify(config, null, 2), 'utf8');
    } catch (error) {
      // Handle file write error
      console.error('Error saving configuration:', error.message);
      throw error;
    }
  }

  /**
   * Updates the configuration file with new data
   * @param {Object} updates - The new configuration data
   * @returns {Object} - The updated configuration object
   */
  updateConfig(updates) {
    const config = this.loadConfig();
    // Use Lodash's merge function to deep merge the updates with the existing config
    const updatedConfig = lodash.merge({}, config, updates);
    this.saveConfig(updatedConfig);
    return updatedConfig;
  }
}

/**
 * Exports the ConfigManager class
 */
module.exports = ConfigManager;