// 代码生成时间: 2025-09-10 06:30:59
const _ = require('lodash');

/**
 * Cache Strategy implementation using JS and Lodash.
 *
 * This module provides a simple in-memory cache with key-based access,
 * allowing for storing and retrieving cached data.
 *
 * @module cacheStrategy
 */

/**
 * The Cache class provides a simple caching mechanism.
 * @class Cache
 */
class Cache {
  /**
   * Initializes the cache storage.
   */
  constructor() {
    this.cacheStorage = {};
  }

  /**
   * Stores data in the cache with a given key.
   *
   * @param {string} key - The key to store the data under.
   * @param {any} data - The data to be stored.
   * @returns {void}
   */
  set(key, data) {
    this.cacheStorage[key] = data;
  }

  /**
   * Retrieves data from the cache by key.
   *
   * @param {string} key - The key of the data to retrieve.
   * @returns {any|null} - The cached data or null if no data is found.
   */
  get(key) {
    if (!_.has(this.cacheStorage, key)) {
      return null;
    }
    return this.cacheStorage[key];
  }

  /**
   * Checks if a key exists in the cache.
   *
   * @param {string} key - The key to check for existence.
   * @returns {boolean} - True if the key exists, otherwise false.
   */
  has(key) {
    return _.has(this.cacheStorage, key);
  }

  /**
   * Removes data from the cache by key.
   *
   * @param {string} key - The key of the data to remove.
   * @returns {void}
   */
  remove(key) {
    if (this.has(key)) {
      delete this.cacheStorage[key];
    }
  }

  /**
   * Clears the entire cache.
   *
   * @returns {void}
   */
  clear() {
    this.cacheStorage = {};
  }
}

/**
 * Default cache instance.
 * @type {Cache}
 */
const defaultCache = new Cache();

// Export the Cache class and the default instance.
module.exports = {
  Cache,
  defaultCache
};