// 代码生成时间: 2025-10-12 23:50:48
// Import Lodash library
const _ = require('lodash');

// Define the RFIDTag class to represent an individual RFID tag
class RFIDTag {
  constructor(id, name, location) {
    this.id = id;
    this.name = name;
    this.location = location;
  }
}

// Define the RFIDTagManager class to manage RFID tags
class RFIDTagManager {
  constructor() {
    // Initialize an empty array to store RFID tags
    this.tags = [];
  }

  // Add a new RFID tag to the system
  addTag(tag) {
    if (!(tag instanceof RFIDTag)) {
      throw new Error('Invalid RFID tag object');
    }
    this.tags.push(tag);
  }

  // Remove an RFID tag from the system
  removeTag(rfidId) {
    const index = this.tags.findIndex(tag => tag.id === rfidId);
    if (index === -1) {
      throw new Error('RFID tag not found');
    }
    this.tags.splice(index, 1);
  }

  // Update an existing RFID tag
  updateTag(rfidId, updatedTag) {
    const index = this.tags.findIndex(tag => tag.id === rfidId);
    if (index === -1) {
      throw new Error('RFID tag not found');
    }
    if (!(updatedTag instanceof RFIDTag)) {
      throw new Error('Invalid RFID tag object');
    }
    this.tags[index] = updatedTag;
  }

  // Retrieve an RFID tag by ID
  getTag(rfidId) {
    const tag = this.tags.find(tag => tag.id === rfidId);
    if (!tag) {
      throw new Error('RFID tag not found');
    }
    return tag;
  }

  // Retrieve all RFID tags
  getAllTags() {
    return _.cloneDeep(this.tags);
  }
}

// Example usage of the RFIDTagManager system
const tagManager = new RFIDTagManager();

// Create RFID tags
const tag1 = new RFIDTag(1, 'Tag 1', 'Warehouse A');
const tag2 = new RFIDTag(2, 'Tag 2', 'Warehouse B');

// Add tags to the system
tagManager.addTag(tag1);
tagManager.addTag(tag2);

// Retrieve a specific tag
const retrievedTag = tagManager.getTag(1);
console.log(retrievedTag);

// Update a tag
const updatedTag = new RFIDTag(1, 'Updated Tag 1', 'Warehouse C');
tagManager.updateTag(1, updatedTag);

// Retrieve all tags
const allTags = tagManager.getAllTags();
console.log(allTags);

// Remove a tag
tagManager.removeTag(2);
console.log(tagManager.getAllTags());
