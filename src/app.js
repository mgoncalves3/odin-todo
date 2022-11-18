import "./styles.css";
import "./styles.scss";
import "material-icons/css/material-icons.css";

// Animate list item dropdown menu
!!!!!!!!
function bindDropdownBtns() {
  let dropdownShowBtns = document.querySelectorAll(".more-options-btn");
  const dropdownMenu = document.querySelectorAll(".dropdown");

  dropdownShowBtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      if (btn.classList.contains('visible')) {
        dropdownMenu[i].classList.remove('visible');
      } else {
        dropdownMenu[i].classList.add('visible');
      }
    });
  });
}

// ! TODO
// ! bind the buttons on load and change
const itemList = document.getElementById('item-list');
window.addEventListener("DOMContentLoaded", bindDropdownBtns);
const observerOptions = {
  childList: true
}
let todoCountObserver = new MutationObserver(bindDropdownBtns);
todoCountObserver.observe(itemList, observerOptions);

// Open/Close add task modal
const modal = document.getElementById("modal-background");
const addTaskBtn = document.querySelector(".new-todo-btn-open-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

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
// const template = document.getElementById("new-task-template");
// const itemTemplate = template.content.cloneNode(true);
// console.log(itemTemplate);

function createNewTask() {
  let newTask = {
    title: document.querySelector("#task-title").value,
    description: document.querySelector("#task-description").value,
    priority: function () {

    },
    date: document.querySelector("#task-due-date").value,
  };

  return newTask;
}

function addToHtml(Object) {
  const template = document.getElementById("new-task-template");
  const itemTemplate = template.content.cloneNode(true);
  // const idList = [
  //   "new-task-template-title",
  //   "new-task-template-description",
  //   "new-task-template-priority",
  //   "new-task-template-date",
  // ];

  // idList.forEach((elem) => {
  //   let htmlToAdd = itemTemplate.getElementById(elem);

  //   console.log(htmlToAdd);
  // });

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
