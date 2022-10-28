// Import Bootstrap .css and JS scripts
import "./scss/main.scss";
import "bootstrap";
require("bootstrap-icons/font/bootstrap-icons.scss");
import { createTask } from "./logic.js";


export const modal = document.getElementById('modal-form')



function toggleDoneButton(button) {
  if (button.classList.contains("bi-circle")) {
    button.classList.replace("bi-circle", "bi-check-circle");
    return;
  }
  if (button.classList.contains("bi-check-circle")) {
    button.classList.replace("bi-check-circle", "bi-circle");
    return;
  }
}

function bindButtons() {
  let buttons = document.querySelectorAll(".check-btn");

  for (let btn of buttons) {
    // toggleDoneButton is called as a callback because otherwise
    //  it is called immediately
    btn.onclick = () => toggleDoneButton(btn);
  }

  return;
}


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

// Bind the existing buttons on page load
window.addEventListener("load", bindButtons);

// >>> NEW!!!! <<<
// Mutation API ## https://dom.spec.whatwg.org/#interface-mutationobserver

// Set a target to listen to changes
const target = document.getElementById("todo-item-list");

// Object to tell observer what to look for
const config = { attributes: true, childList: true };

// Function that gets executed when observer detects a change
const onChangeList = (mutationList) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList") {
      bindButtons();
    }
  }
};

// Create a observer and pass it the callback function
const observer = new MutationObserver(onChangeList);

// Pass parameters to the observer
observer.observe(target, config);

