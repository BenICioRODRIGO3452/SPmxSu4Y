// 代码生成时间: 2025-09-19 09:38:11
const _ = require('lodash');
const { spawn } = require('child_process');

/**
 * Represents a managed process
 *
 * @typedef {Object} ManagedProcess
 * @property {String} name - The name of the process
 * @property {String} command - The command to start the process
 * @property {Object} options - Command options including environment variables, etc.
 * @property {ChildProcess} child - The child process object
 */

class ProcessManager {

  /**
   * Creates a new instance of ProcessManager
   *
   * @param {String} name - The name of the process manager
   */
  constructor(name) {
    this.name = name;
    this.processes = {};
  }

  /**
   * Starts a new process
   *
   * @param {String} processName - The name of the process to start
   * @param {String} command - The command to execute
   * @param {Object} options - Additional options for the process
   * @returns {Promise<ManagedProcess>} - The started process
   */
  async startProcess(processName, command, options = {}) {
    if (this.processes[processName]) {
      throw new Error(`Process ${processName} is already running.`);
    }

    const child = spawn(command, options.args || [], options);
    const managedProcess = {
      name: processName,
      command: command,
      options: options,
      child: child,
    };

    this.processes[processName] = managedProcess;

    child.stdout.on('data', (data) => {
      console.log(`${processName} stdout: ${data}`);
    });

    child.stderr.on('data', (data) => {
      console.error(`${processName} stderr: ${data}`);
    });

    child.on('close', (code) => {
      console.log(`${processName} process exited with code ${code}`);
      delete this.processes[processName];
    });

    child.on('error', (error) => {
      console.error(`${processName} process error: ${error.message}`);
    });

    return managedProcess;
  }

  /**
   * Stops a running process
   *
   * @param {String} processName - The name of the process to stop
   * @returns {Promise<void>}
   */
  async stopProcess(processName) {
    if (!this.processes[processName]) {
      throw new Error(`Process ${processName} is not running.`);
    }

    const process = this.processes[processName];
    process.child.kill();
  }

  /**
   * Gets the status of a process
   *
   * @param {String} processName - The name of the process
   * @returns {Promise<ManagedProcess | null>} - The process information or null if not found
   */
  async getProcessStatus(processName) {
    return this.processes[processName] || null;
  }

  /**
   * Lists all running processes
   *
   * @returns {Object} - An object with process names as keys and ManagedProcess objects as values
   */
  async listProcesses() {
    return _.cloneDeep(this.processes);
  }
}

// Example usage of the Process Manager
(async () => {
  const pm = new ProcessManager('MyProcessManager');
  try {
    const process = await pm.startProcess('exampleProcess', 'echo', {
      args: ['Hello, world!'],
      stdio: 'inherit',
    });
    console.log('Process started:', process.name);

    // Wait for some time before stopping the process
    setTimeout(async () => {
      await pm.stopProcess('exampleProcess');
      console.log('Process stopped:', process.name);
    }, 5000);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();
