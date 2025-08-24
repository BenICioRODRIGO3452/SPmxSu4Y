// 代码生成时间: 2025-08-25 07:24:51
 * Features:
 * - Add, update, delete, and fetch inventory items
 * - Handle errors and ensure data integrity
 * - Follow JavaScript best practices for readability and maintainability
 *
 * @author Your Name
 * @version 1.0.0
 */

const _ = require('lodash');

// Define the initial inventory as an array of objects
const inventory = [];

// Function to add a new item to the inventory
function addItem(id, name, quantity) {
  if (!_.isNumber(id) || !_.isString(name) || !_.isNumber(quantity)) {
    throw new Error('Invalid input types for item addition.');
  }
  inventory.push({ id, name, quantity });
  return _.cloneDeep(inventory);
}

// Function to update an existing item in the inventory
function updateItem(id, newName, newQuantity) {
  const itemIndex = _.findIndex(inventory, { id });
  if (itemIndex === -1) {
    throw new Error('Item not found in the inventory.');
  }
  if (!_.isString(newName) || !_.isNumber(newQuantity)) {
    throw new Error('Invalid input types for item update.');
  }
  inventory[itemIndex].name = newName;
  inventory[itemIndex].quantity = newQuantity;
  return _.cloneDeep(inventory);
}

// Function to delete an item from the inventory by its ID
function deleteItem(id) {
  const itemIndex = _.findIndex(inventory, { id });
  if (itemIndex === -1) {
    throw new Error('Item not found in the inventory.');
  }
  inventory.splice(itemIndex, 1);
  return _.cloneDeep(inventory);
}

// Function to fetch an item from the inventory by its ID
function fetchItem(id) {
  const item = _.find(inventory, { id });
  if (!item) {
    throw new Error('Item not found in the inventory.');
  }
  return _.cloneDeep(item);
}

// Function to fetch all items in the inventory
function fetchAllItems() {
  return _.cloneDeep(inventory);
}

// Example usage:
try {
  // Adding items to the inventory
  console.log('Adding items:', addItem(1, 'Apple', 100));
  console.log('Adding items:', addItem(2, 'Banana', 50));

  // Updating an item in the inventory
  console.log('Updating items:', updateItem(1, 'Green Apple', 120));

  // Deleting an item from the inventory
  console.log('Deleting items:', deleteItem(2));

  // Fetching all items in the inventory
  console.log('Fetching all items:', fetchAllItems());

  // Fetching a specific item by ID
  console.log('Fetching item:', fetchItem(1));
} catch (error) {
  console.error('An error occurred:', error.message);
}
