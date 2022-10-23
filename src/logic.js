import { taskList } from "./index.js";

// New task template
export function createTask(title, description) {
  taskList.taskList = document.getElementById("todo-item-list");
  // Check how many items in list
  let listItemCount = taskList.childElementCount;

  // Create task item
  let item = document.createElement("div");
  item.classList.add("accordion-item");

  // Set Header and title classes and attributes
  let header = document.createElement("h2");
  header.classList.add("accordion-header");
  header.id = `item-${listItemCount + 1}`;

  let itemTitle = document.createElement("button");
  itemTitle.type = "button";
  itemTitle.classList.add("accordion-button", "collapsed");
  itemTitle.setAttribute("aria-expanded", "false");
  itemTitle.setAttribute("aria-controls", `collapse-${listItemCount + 1}`);
  itemTitle.setAttribute("data-bs-toggle", "collapse");
  itemTitle.setAttribute("data-bs-target", `#collapse-${listItemCount + 1}`);
  itemTitle.textContent = title;

  // Header is the first element in Item
  header.appendChild(itemTitle);
  item.appendChild(header);

  // Body and attributes
  let itemBody = document.createElement("div");
  itemBody.id = `collapse-${listItemCount + 1}`;
  itemBody.classList.add("accordion-collapse", "collapse");
  itemBody.setAttribute("aria-labelledby", `item-${listItemCount + 1}`);

  // Description container
  let descContainer = document.createElement("div");
  descContainer.classList.add("accordion-body", "justify-content-between");

  // Description text
  let text = document.createElement("p");
  text.classList.add("mb-0");
  text.textContent = description;

  descContainer.appendChild(text);

  // Actions and buttons wrapper
  let DateActionsWrapper = document.createElement("div");
  DateActionsWrapper.classList.add(
    "item-actions-wrapper",
    "d-flex",
    "justify-content-between"
  );

  // Item due date
  let dueDate = document.createElement("div");
  dueDate.classList.add("due-date", "hstack", "align-items-end", "opacity-75");
  let p1 = document.createElement("p");
  p1.classList.add("p-0", "m-0");
  p1.textContent = "Due: ";

  // Actual date value
  //  --- TODO ---
  let p2 = document.createElement("p");
  p2.classList.add("date-value", "m-0", "ps-1");
  p2.textContent = "01/01/1900";
  dueDate.appendChild(p1);
  dueDate.appendChild(p2);

  // Date comes first
  DateActionsWrapper.appendChild(dueDate);

  // Buttons and actions
  let actionBtns = document.createElement("div");
  actionBtns.classList.add("actions-btns", "hstack", "align-items-start");

  let editBtn = document.createElement("button");
  editBtn.type = "button";
  editBtn.classList.add("btn", "btn-outline-primary", "btn-sm", "me-3");
  editBtn.textContent = "Edit";

  let doneBtn = document.createElement("i");
  doneBtn.classList.add("bi", "bi-circle", "check-btn", "m-0");

  actionBtns.appendChild(editBtn);
  actionBtns.appendChild(doneBtn);

  // Buttons sit bellow the text
  DateActionsWrapper.appendChild(actionBtns);

  descContainer.appendChild(DateActionsWrapper);
  itemBody.appendChild(descContainer);
  item.appendChild(itemBody);

  return item;
}
