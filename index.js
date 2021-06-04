// Create a new task
// A new task will be created as incomplete
// Add description
function newTask(title, description) {
  task = {
    'title': title,
    'description': description,
    'complete': false,
    completeTask: function() {
      task.complete = true;
    },
    logTaskState: function() {
      //Must use this when function is inside object
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }
  };
  return task;
}

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed
