// 代码生成时间: 2025-09-20 23:58:22
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

// Define the database connection configuration
const dbConfig = {
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name'
};

// Define the migration directory path
const migrationDir = path.join(__dirname, 'migrations');

// Function to read all migration files in the directory
function readMigrationFiles() {
  try {
    const files = fs.readdirSync(migrationDir);
    return files.filter(file => file.endsWith('.js'));
  } catch (error) {
    console.error('Error reading migration files:', error);
    throw error;
  }
}

// Function to execute a single migration file
function executeMigration(file) {
  try {
    const migration = require(path.join(migrationDir, file));
    migration.up();
    console.log(`Migration ${file} executed successfully`);
  } catch (error) {
    console.error(`Error executing migration ${file}:`, error);
    throw error;
  }
}

// Function to perform the migration process
function runMigrations() {
  try {
    console.log('Starting database migrations...');
    const migrationFiles = readMigrationFiles();
    migrationFiles.forEach(file => executeMigration(file));
    console.log('All migrations completed successfully');
  } catch (error) {
    console.error('Migration process failed:', error);
  }
}

// Function to revert the migration process
function revertMigrations() {
  try {
    console.log('Reverting database migrations...');
    const migrationFiles = readMigrationFiles().reverse();
    migrationFiles.forEach(file => {
      const migration = require(path.join(migrationDir, file));
      migration.down();
      console.log(`Migration ${file} reverted successfully`);
    });
    console.log('All migrations reverted successfully');
  } catch (error) {
    console.error('Migration revert process failed:', error);
  }
}

// Example migration file structure:
// Each migration file should export an object with 'up' and 'down' functions
// up: function to apply the migration
// down: function to revert the migration

// Usage
// runMigrations(); // To run all migrations
// revertMigrations(); // To revert all migrations

module.exports = {
  runMigrations,
  revertMigrations
};