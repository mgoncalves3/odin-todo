// Import Bootstrap .css and JS scripts
import "./scss/main.scss";
import "bootstrap";
require("bootstrap-icons/font/bootstrap-icons.scss");
import { createTask } from "./logic.js";

export let taskList = document.getElementById("todo-item-list");

// Auto resize new task description textarea
const tx = document.getElementsByTagName("textarea");

// Check the number of characters in textarea on input
//  and change the height of the area
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute(
    "style",
    "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
  );
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = this.scrollHeight + "px";
}

// Add task
const createTaskBtn = document.getElementById("create-task-btn");

// Add task button logic
// --- TODO ---
createTaskBtn.addEventListener("click", () => {
  let newTaskTitle = document.getElementById("task-title").value;
  let newTaskDescription = document.getElementById("task-text").value;
  taskList.append(createTask(newTaskTitle, newTaskDescription));
});
