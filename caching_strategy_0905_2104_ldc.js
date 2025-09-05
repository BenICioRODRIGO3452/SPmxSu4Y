// 代码生成时间: 2025-09-05 21:04:16
// Import lodash
const _ = require('lodash');

/**
 * CachingStrategy class
 * @class CachingStrategy
 */
class CachingStrategy {
  #cacheStore;
  #maxCacheSize;
  #cacheTTL; // Time To Live

  /**
   * Creates an instance of CachingStrategy.
   * @param {number} maxCacheSize - Maximum number of items to store in cache.
   * @param {number} cacheTTL - Time to live for cache items in milliseconds.
   */
  constructor(maxCacheSize, cacheTTL) {
    this.#cacheStore = {};
    this.#maxCacheSize = maxCacheSize;
    this.#cacheTTL = cacheTTL;
  }

  /**
   * Get an item from the cache or fetch it from the source if not present.
   * @param {string} key - The key to look for in the cache.
   * @param {function} fetchFunction - Function to fetch the item if not in cache.
   * @returns {Promise<any>} - The cached item or the fetched item.
   */
  async get(key, fetchFunction) {
    const now = Date.now();
    const cachedValue = this.#cacheStore[key];
    
    if (cachedValue && (cachedValue.expiration > now)) {
      return cachedValue.value;
    } else {
      const fetchedValue = await fetchFunction();
      this.#set(key, fetchedValue);
      return fetchedValue;
    }
  }

  /**
   * Set an item in the cache.
   * @param {string} key - The key to store the item under.
   * @param {any} value - The value to store in the cache.
   */
  #set(key, value) {
    const expiration = Date.now() + this.#cacheTTL;
    if (_.size(this.#cacheStore) >= this.#maxCacheSize) {
      // Implement a strategy to remove the oldest item if cache is full
      this.#evict();
    }
    this.#cacheStore[key] = { value, expiration };
  }

  /**
   * Evict the oldest item from the cache.
   */
  #evict() {
    const oldestKey = _.keys(this.#cacheStore).reduce((oldKey, newKey) => {
      return (this.#cacheStore[oldKey].expiration < this.#cacheStore[newKey].expiration) ? oldKey : newKey;
    }, null);
    
    if (oldestKey) {
      delete this.#cacheStore[oldestKey];
    }
  }
}

// Export the CachingStrategy class
module.exports = CachingStrategy;
