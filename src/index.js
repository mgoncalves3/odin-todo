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