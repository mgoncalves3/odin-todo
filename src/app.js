import "./styles.css";
import "./styles.scss";

const newTaskForm = document.querySelector("form");
const newTaskBtn = document.querySelector(".new-task-form button");
const taskList = document.getElementById("todo-list");

function addTaskToList(newTask) {
  function createItem() {
    let title = document.createElement("p");
    let description = document.createElement("p");
    let dueDate = document.createElement("p");

    title.className = "item-title";
    title.textContent = newTask.title;
    description.className = "item-description";
    description.textContent = newTask.description;
    dueDate.className = "item-due-date";
    dueDate.textContent = newTask.dueDate;

    return { title, description, dueDate };
  }
  let item = createItem();
  let newListItem = document.createElement("li");
  newListItem.className = "todo-item";
  newListItem.appendChild(item.title);
  newListItem.appendChild(item.description);
  newListItem.appendChild(item.dueDate);

  console.log(newListItem);

  return newListItem;
}

newTaskBtn.addEventListener("click", (e) => {
  let newTask = {
    title: e.target.parentElement[0].value,
    description: e.target.parentElement[1].value,
    dueDate: e.target.parentElement[2].value,
  };
  taskList.appendChild(addTaskToList(newTask));
});

const showNewTaskModal = document.querySelector(
  "button.new-task-btn.modal-show"
);
showNewTaskModal.addEventListener("click", () => {
  newTaskForm.classList.toggle("hidden");
});

const deleteTaskBtn = document.querySelector("button.delete-task-btn");

deleteTaskBtn.addEventListener("click", () => {
  let itemToRemove = taskList.children[0];
  console.log(itemToRemove)
  taskList.removeChild(itemToRemove);
});



