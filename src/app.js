import "./styles.css";
import "./styles.scss";
import "material-icons/css/material-icons.css";

// Animate list item dropdown menu
const dropdownShowBtn = document.querySelector(".more-options-btn");
const dropdownMenu = document.querySelector(".dropdown");

dropdownShowBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("visible");
});

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