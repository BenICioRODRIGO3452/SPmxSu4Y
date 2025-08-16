// 代码生成时间: 2025-08-16 16:33:41
// Import Lodash library
const _ = require('lodash');

// Define a constructor function for the data model
function DataModel() {
    // Initialize data store
    this.dataStore = [];
}

/**
 * Add a new item to the data store
 * @param {Object} item - The item to add to the data store
 * @returns {Object} - The added item
 */
DataModel.prototype.addItem = function(item) {
    if (!item) {
        throw new Error('Item cannot be null or undefined');
    }
    this.dataStore.push(item);
    return item;
};

/**
 * Retrieve all items from the data store
 * @returns {Array} - All items in the data store
 */
DataModel.prototype.getItems = function() {
    return this.dataStore;
};

/**
 * Find an item in the data store by a specific key
 * @param {String} key - The key to search by
 * @param {String} value - The value to find
 * @returns {Object|null} - The found item or null if not found
 */
DataModel.prototype.findItem = function(key, value) {
    return _.find(this.dataStore, item => item[key] === value);
};

/**
 * Update an existing item in the data store
 * @param {Object} item - The item to update with new values
 * @returns {Object|null} - The updated item or null if not found
 */
DataModel.prototype.updateItem = function(item) {
    const index = _.findIndex(this.dataStore, {id: item.id});
    if (index !== -1) {
        this.dataStore[index] = item;
        return item;
    }
    return null;
};

/**
 * Remove an item from the data store
 * @param {Number} id - The ID of the item to remove
 * @returns {Object|null} - The removed item or null if not found
 */
DataModel.prototype.removeItem = function(id) {
    const index = _.findIndex(this.dataStore, {id: id});
    if (index !== -1) {
        return this.dataStore.splice(index, 1)[0];
    }
    return null;
};

// Export the DataModel module
module.exports = DataModel;