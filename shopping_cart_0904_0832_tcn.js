// 代码生成时间: 2025-09-04 08:32:57
class ShoppingCart {
  
  constructor() {
    // Initialize an empty array to store cart items
    this.items = [];
  }

  /**
   * Adds an item to the shopping cart.
   *
   * @param {object} item - The item to add to the cart.
   * @param {number} item.price - The price of the item.
   * @param {number} item.quantity - The quantity of the item.
   * @returns {void}
   */
  addItem(item) {
    if (!item || typeof item.price !== 'number' || typeof item.quantity !== 'number') {
      throw new Error('Invalid item');
    }

    let existingItem = this.items.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push({ ...item, quantity: item.quantity });
    }
  }

  /**
   * Removes an item from the shopping cart.
   *
   * @param {number} itemId - The ID of the item to remove.
   * @returns {void}
   */
  removeItem(itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
  }

  /**
   * Calculates the total price of the items in the cart.
   *
   * @returns {number} - The total price.
   */
  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

// Example usage:

try {
  let cart = new ShoppingCart();
  cart.addItem({ id: 1, price: 9.99, quantity: 1 });
  cart.addItem({ id: 2, price: 19.99, quantity: 2 });
  console.log('Total price:', cart.calculateTotal()); // Should log the total price of the cart items
  cart.removeItem(1);
  console.log('Total price after removal:', cart.calculateTotal()); // Should log the total price after removing item with ID 1
} catch (error) {
  console.error('An error occurred:', error.message);
}
