// 代码生成时间: 2025-10-07 16:48:42
// Importing lodash for utility functions
const _ = require('lodash');

class FinancialAccount {
  /**
   * Initialize a new financial account with an initial balance.
   * @param {number} initialBalance - The initial balance of the account.
   */
  constructor(initialBalance) {
    this.balance = initialBalance;
  }

  /**
   * Deposit money into the account.
   * @param {number} amount - The amount to deposit.
   */
  deposit(amount) {
    if (!_.isNumber(amount) || amount <= 0) {
      throw new Error('Invalid deposit amount.');
    }
    this.balance += amount;
  }

  /**
   * Withdraw money from the account.
   * @param {number} amount - The amount to withdraw.
   */
  withdraw(amount) {
    if (!_.isNumber(amount) || amount <= 0) {
      throw new Error('Invalid withdrawal amount.');
    }
    if (amount > this.balance) {
      throw new Error('Insufficient funds.');
    }
    this.balance -= amount;
  }

  /**
   * Get the current balance of the account.
   * @returns {number} - The current balance.
   */
  getBalance() {
    return this.balance;
  }
}

// Example usage
try {
  const account = new FinancialAccount(1000); // Start with an initial balance of $1000
  account.deposit(500); // Deposit $500
  console.log('Balance after deposit:', account.getBalance()); // Should log $1500
  account.withdraw(200); // Withdraw $200
  console.log('Balance after withdrawal:', account.getBalance()); // Should log $1300
} catch (error) {
  console.error(error.message);
}
