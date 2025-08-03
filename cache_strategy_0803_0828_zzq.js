// 代码生成时间: 2025-08-03 08:28:50
 *             with error handling, and follows best practices for maintainability and scalability.
 */

// Importing lodash for utility functions
const _ = require('lodash');

/**
 * CacheManager class for managing cache
 *
 * @param {Object} options - Options for cache configuration
 * @param {number} options.capacity - Maximum number of items in the cache
 */
class CacheManager {
    constructor(options) {
        this.capacity = options.capacity;
        this.cache = new Map();
    }

    /**
     * Add or update an item in the cache
     *
     * @param {string} key - The key for the cache item
     * @param {any} value - The value to be cached
     */
    setItem(key, value) {
        if (this.cache.size >= this.capacity) {
            // If the cache is full, remove the oldest item
            this.removeOldestItem();
        }
        this.cache.set(key, { value: value, timestamp: Date.now() });
    }

    /**
     * Remove the oldest item from the cache
     *
     * @private
     */
    removeOldestItem() {
        const oldestKey = _.first([...this.cache.keys()]);
        this.cache.delete(oldestKey);
    }

    /**
     * Get an item from the cache
     *
     * @param {string} key - The key for the cache item
     * @returns {any} The cached value or undefined if not found
     */
    getItem(key) {
        if (this.cache.has(key)) {
            const item = this.cache.get(key);
            // Refresh the timestamp if the item is accessed
            item.timestamp = Date.now();
            return item.value;
        } else {
            throw new Error('Cache item not found');
        }
    }

    /**
     * Clear the entire cache
     */
    clearCache() {
        this.cache.clear();
    }
}

// Example usage of CacheManager
try {
    const cacheOptions = { capacity: 10 };
    const cacheManager = new CacheManager(cacheOptions);

    // Setting items in cache
    cacheManager.setItem('item1', 'value1');
    cacheManager.setItem('item2', 'value2');

    // Getting items from cache
    console.log(cacheManager.getItem('item1')); // Should log 'value1'

    // Clearing the cache
    cacheManager.clearCache();
} catch (error) {
    console.error(error.message);
}
