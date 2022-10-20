// Import Bootstrap .css and JS scripts
import './scss/main.scss';
import 'bootstrap';
require('bootstrap-icons/font/bootstrap-icons.scss');

// console.log("Interesting!");

// Check button JS
let checkBtns = document.querySelectorAll('.check-btn');
console.log(checkBtns);

checkBtns.forEach(btn => {
  btn.addEventListener('mouseover', function  () {
    btn.classList.toggle("bi-circle")
    btn.classList.add("bi-check-circle")
  })
  btn.addEventListener('mouseout', () => {
    btn.classList.remove('bi-check-circle');
    btn.classList.toggle('bi-circle');
  })
})

// const textArea = document.getElementsByTagName("textarea");
// for (let i = 0; i < textArea.length; i++) {
//   textArea[i].setAttribute("style", "overflow-y:hidden;");
//   textArea[i].style.height = textArea[i].scrollHeight;
//   textArea[i].addEventListener("input", OnInput, false);
// }

// function OnInput() {
//   this.style.height = 0;
//   this.style.height = (this.scrollHeight) + "px";
// }


const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
  console.log("i ran")
}

console.log(tx);