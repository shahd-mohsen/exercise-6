class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  // Add a new task
  addTask(description) {
    const task = {
      id: this.nextId++,
      description,
      completed: false,
    };
    this.tasks.push(task);
    alert(`Task added: ${task.description}`);
  }

  // Display all tasks
  displayTasks() {
    if (this.tasks.length === 0) {
      alert("No tasks available.");
      return;
    }
    let taskList = "Task List:\n";
    this.tasks.forEach((task) => {
      taskList += `${task.id}. [${task.completed ? "Completed" : " "}] ${task.description}\n`;
    });
    alert(taskList);
  }

  // Toggle task completion status by ID
  toggleTaskCompletion(id) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
      alert(`Task ${task.id} marked as ${task.completed ? "completed" : "not completed"}.`);
    } else {
      alert(`Task with ID ${id} not found.`);
    }
  }

  // Remove a task by ID
  removeTask(id) {
    const index = this.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      const removedTask = this.tasks.splice(index, 1);
      alert(`Task "${removedTask[0].description}" removed.`);
    } else {
      alert(`Task with ID ${id} not found.`);
    }
  }

  // Update task description by ID
  updateTask(id, newDescription) {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.description = newDescription;
      alert(`Task ${task.id} description updated to: ${task.description}`);
    } else {
      alert(`Task with ID ${id} not found.`);
    }
  }

  // Search tasks by name
  searchTasks(query) {
    const filteredTasks = this.tasks.filter((task) =>
      task.description.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredTasks.length === 0) {
      alert(`No tasks found matching "${query}".`);
    } else {
      let taskList = `Tasks matching "${query}":\n`;
      filteredTasks.forEach((task) => {
        taskList += `${task.id}. [${task.completed ? "X" : " "}] ${task.description}\n`;
      });
      alert(taskList);
    }
  }
}

// Run the interactive task list
const taskManager = new TaskManager();

function showMenu() {
  let menu = `
    Choose an option:
    1. Add Task
    2. Display All Tasks
    3. Toggle Task Completion
    4. Update Task
    5. Remove Task
    6. Search for Task
    7. Exit
  `;
  return prompt(menu);
}

let running = true;

while (running) {
  const choice = showMenu();

  switch (choice) {
    case '1': {
      const description = prompt('Enter task description: ');
      taskManager.addTask(description);
      break;
    }
    case '2': {
      taskManager.displayTasks();
      break;
    }
    case '3': {
      const id = parseInt(prompt('Enter task ID to toggle completion: '));
      taskManager.toggleTaskCompletion(id);
      break;
    }
    case '4': {
      const id = parseInt(prompt('Enter task ID to update: '));
      const newDescription = prompt('Enter new description: ');
      taskManager.updateTask(id, newDescription);
      break;
    }
    case '5': {
      const id = parseInt(prompt('Enter task ID to remove: '));
      taskManager.removeTask(id);
      break;
    }
    case '6': {
      const query = prompt('Enter search term: ');
      taskManager.searchTasks(query);
      break;
    }
    case '7': {
      running = false;
      alert('Exiting.');
      break;
    }
    default:
      alert('Invalid choice, please try again.');
  }
}
