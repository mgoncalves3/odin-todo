import "./styles.css";
import "./styles.scss";
import "material-icons/css/material-icons.css";

// * Animate list item dropdown menu
function handleDropdownBtns(e) {
  // Select all the dropdown buttons
  let dropdownBtns = document.getElementsByClassName("more-options-btn");
  // We pass the event to this function
  // When an event is fired, go through every btn in the page
  // if any btn is the target of the click event, then toggle the dropdown menu
  for (let btn of dropdownBtns) {
    if (e.type === "click" && e.target === btn) {
      btn.nextElementSibling.classList.toggle("visible");
    }
  }
}

// * Mutation Observer API
// Get where to look for changes
const itemList = document.getElementById("item-list");
// Object with which changes to look for
const observerOptions = {
  childList: true,
};

// * Click event handler
window.addEventListener("click", handleDropdownBtns);
// Create the MutationObserver
let todoCountObserver = new MutationObserver(handleDropdownBtns);
// Call the observe function and pass in the arguments.
// We are now looking for changes in itemList
todoCountObserver.observe(itemList, observerOptions);

// * Open/Close add task modal
const modal = document.getElementById("modal-background");
const addTaskBtn = document.querySelector(".new-todo-btn-open-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

// * Open the add todo modal
addTaskBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  modal.setAttribute("data-openstatus", "open");
});

window.addEventListener("click", (e) => {
  if (e.target == modal || e.target == modalCloseBtn) {
    if (modal.dataset.openstatus === "open") {
      modal.style.display = "none";
      modal.setAttribute("data-openstatus", "closed");
    }
  }
});

const modalAddBtn = document.querySelector(".modal-add-btn");
modalAddBtn.addEventListener("click", (e) => {
  console.log(e);
  addToHtml(createNewTask());
});

const taskList = document.getElementById("item-list");

function createNewTask() {
  let newTask = {
    title: document.querySelector("#task-title").value,
    description: document.querySelector("#task-description").value,
    priority: function () {},
    date: document.querySelector("#task-due-date").value,
  };

  return newTask;
}

function addToHtml(Object) {
  const template = document.getElementById("new-task-template");
  const itemTemplate = template.content.cloneNode(true);

  let newTitle = itemTemplate.getElementById("new-task-template-title");
  let newDesc = itemTemplate.getElementById("new-task-template-description");
  let newPrio = itemTemplate.getElementById("new-task-template-priority");
  let newDate = itemTemplate.getElementById("new-task-template-date");

  newTitle.innerText = Object.title;
  newDesc.innerText = Object.description;
  newPrio.style.color = Object.priority;
  newDate.innerText = Object.date;

  taskList.appendChild(itemTemplate);
}
