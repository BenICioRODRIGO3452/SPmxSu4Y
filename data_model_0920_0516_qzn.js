// 代码生成时间: 2025-09-20 05:16:11
const _ = require('lodash');

// Define a simple data model structure
const dataModel = {
  "users": [],
  "products": []
};

// Function to add a user to the data model
function addUser(user) {
  if (!user || !_.isPlainObject(user)) {
    throw new Error('Invalid user data provided.');
  }
  dataModel.users.push(_.cloneDeep(user));
}

// Function to add a product to the data model
function addProduct(product) {
  if (!product || !_.isPlainObject(product)) {
    throw new Error('Invalid product data provided.');
  }
  dataModel.products.push(_.cloneDeep(product));
}

// Function to find a user by ID
function findUserById(userId) {
  if (!_.isNumber(userId)) {
    throw new Error('Invalid user ID provided.');
  }
  return _.find(dataModel.users, { 'id': userId });
}

// Function to find a product by ID
function findProductById(productId) {
  if (!_.isNumber(productId)) {
    throw new Error('Invalid product ID provided.');
  }
  return _.find(dataModel.products, { 'id': productId });
}

// Function to update a user's data
function updateUser(userId, userData) {
  const user = findUserById(userId);
  if (!user) {
    throw new Error('User not found.');
  }
  if (!userData || !_.isPlainObject(userData)) {
    throw new Error('Invalid user data provided for update.');
  }
  _.merge(user, userData);
}

// Function to update a product's data
function updateProduct(productId, productData) {
  const product = findProductById(productId);
  if (!product) {
    throw new Error('Product not found.');
  }
  if (!productData || !_.isPlainObject(productData)) {
    throw new Error('Invalid product data provided for update.');
  }
  _.merge(product, productData);
}

// Function to remove a user from the data model
function removeUser(userId) {
  dataModel.users = _.remove(dataModel.users, function(user) {
    return user.id === userId;
  });
}

// Function to remove a product from the data model
function removeProduct(productId) {
  dataModel.products = _.remove(dataModel.products, function(product) {
    return product.id === productId;
  });
}

// Export the data model functions for use
module.exports = {
  addUser,
  addProduct,
  findUserById,
  findProductById,
  updateUser,
  updateProduct,
  removeUser,
  removeProduct
};