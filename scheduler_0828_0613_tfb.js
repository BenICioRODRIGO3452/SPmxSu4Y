// 代码生成时间: 2025-08-28 06:13:11
const _ = require('lodash');

class Scheduler {
  /**
   * Schedule a new task with a given name and interval.
   * @param {string} taskName - The name of the task.
   * @param {number} interval - The interval in milliseconds at which the task should run.
   * @param {function} taskFunction - The function to execute on each interval.
   */
  addTask(taskName, interval, taskFunction) {
    if (!_.isFunction(taskFunction)) {
      throw new Error('taskFunction must be a function');
    }
    setInterval(() => {
      this.executeTask(taskName, taskFunction);
    }, interval);
  }

  /**
   * Execute a task with the given name.
   * This is a placeholder method to simulate task execution.
   * In a real scenario, task execution would involve more complex logic.
   * @param {string} taskName - The name of the task to execute.
   * @param {function} taskFunction - The function associated with the task.
   */
  executeTask(taskName, taskFunction) {
    console.log(`Executing task: ${taskName}`);
    taskFunction();
  }
}

// Example usage:
const scheduler = new Scheduler();

// Define a simple task function.
const exampleTask = () => {
  console.log('Task is running...');
};

// Add the task to the scheduler with an interval of 2000 milliseconds.
scheduler.addTask('exampleTask', 2000, exampleTask);