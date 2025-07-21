let tasks = [];

function addTask() {
  const taskText = prompt("Enter a new task:");
  if (taskText && taskText.trim() !== "") {
    const task = {
      id: Date.now(),
      text: taskText.trim()
    };
    tasks.push(task);
    renderTasks();
  }
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const newText = prompt("Edit your task:", task.text);
  if (newText && newText.trim() !== "") {
    task.text = newText.trim();
    renderTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="editTask(${task.id})">✏️</button>
        <button onclick="deleteTask(${task.id})">❌</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}
