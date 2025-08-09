// 代码生成时间: 2025-08-10 02:06:27
const _ = require('lodash');

// Define the ProcessManager class
class ProcessManager {
  // Initialize the process manager with an empty registry
  constructor() {
    this.processRegistry = {};
  }

  // Start a new process
  startProcess(id, func) {
    if (_.isEmpty(id) || typeof func !== 'function') {
      throw new Error('Invalid process id or function.');
    }
    if (this.processRegistry[id]) {
      throw new Error(`Process with id ${id} already exists.`);
    }

    this.processRegistry[id] = {
      status: 'running',
      func: func
    };
  }

  // Stop an existing process
  stopProcess(id) {
    if (!this.processRegistry[id]) {
      throw new Error(`Process with id ${id} does not exist.`);
    }

    this.processRegistry[id].status = 'stopped';
  }

  // List all processes
  listProcesses() {
    return _.reduce(this.processRegistry, (result, process, id) => {
      result.push({ id, status: process.status });
      return result;
    }, []);
  }
}

// Example usage of the ProcessManager
const manager = new ProcessManager();

// Define a sample process function
const sampleProcess = () => {
  console.log('Sample process is running.');
};

// Start the sample process
manager.startProcess('sampleProcessId', sampleProcess);

// List all processes
const processes = manager.listProcesses();
console.log(processes);

// Stop the sample process
manager.stopProcess('sampleProcessId');

// List all processes after stopping
const processesAfterStop = manager.listProcesses();
console.log(processesAfterStop);
