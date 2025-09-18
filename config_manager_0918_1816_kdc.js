// 代码生成时间: 2025-09-18 18:16:46
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

class ConfigManager {
  /**
   * Constructor for ConfigManager.
   * @param {string} configFilePath - The path to the configuration file.
   */
  constructor(configFilePath) {
    this.configFilePath = configFilePath;
    this.configData = null;
  }

  /**
   * Loads the configuration data from the file.
   * @returns {Promise<Object>} - The loaded configuration data.
   */
  loadConfig() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.configFilePath, 'utf8', (err, data) => {
        if (err) {
          reject(new Error(`Failed to read config file: ${err.message}`));
        } else {
          try {
            this.configData = JSON.parse(data);
            resolve(this.configData);
          } catch (parseErr) {
            reject(new Error(`Failed to parse config file: ${parseErr.message}`));
          }
        }
      });
    });
  }

  /**
   * Saves the current configuration data to the file.
   * @param {Object} newData - The new configuration data to save.
   * @returns {Promise<void>} - Resolves when the save operation is complete.
   */
  saveConfig(newData) {
    return new Promise((resolve, reject) => {
      const dataToSave = _.cloneDeep(newData); // Deep clone to prevent mutations of the original data
      fs.writeFile(this.configFilePath, JSON.stringify(dataToSave, null, 2), 'utf8', (err) => {
        if (err) {
          reject(new Error(`Failed to write config file: ${err.message}`));
        } else {
          this.configData = dataToSave; // Update internal config data with the new data
          resolve();
        }
      });
    });
  }

  /**
   * Updates a specific property in the configuration.
   * @param {string} key - The key to update.
   * @param {any} value - The new value for the key.
   * @returns {Promise<void>} - Resolves when the update is complete.
   */
  updateConfig(key, value) {
    return this.loadConfig()
      .then(() => {
        _.set(this.configData, key, value);
        return this.saveConfig(this.configData);
      })
      .catch((err) => {
        throw err; // Re-throw the error to be handled by the caller
      });
  }

  /**
   * Retrieves a specific property from the configuration.
   * @param {string} key - The key to retrieve.
   * @returns {Promise<any>} - The value associated with the key.
   */
  getConfig(key) {
    return this.loadConfig()
      .then(() => {
        return _.get(this.configData, key);
      })
      .catch((err) => {
        throw err; // Re-throw the error to be handled by the caller
      });
  }
}

// Example usage:
const configManager = new ConfigManager(path.join(__dirname, 'config.json'));

// Load and log the configuration
configManager.loadConfig()
  .then((config) => {
    console.log('Loaded configuration:', config);
  })
  .catch((err) => {
    console.error('Error loading configuration:', err);
  });

// Update a configuration value and save it
configManager.updateConfig('exampleKey', 'exampleValue')
  .then(() => {
    console.log('Configuration updated and saved.');
  })
  .catch((err) => {
    console.error('Error updating configuration:', err);
  });

// Retrieve a configuration value
configManager.getConfig('exampleKey')
  .then((value) => {
    console.log('The value of exampleKey is:', value);
  })
  .catch((err) => {
    console.error('Error retrieving configuration value:', err);
  });
