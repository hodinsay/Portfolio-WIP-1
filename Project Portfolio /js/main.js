// #header

const button = document.getElementById("nav-btn");
const navMenu = document.querySelector(".nav-item")

button.addEventListener("click", slide);

function slide(){
    navMenu.classList.toggle("active");
    button.classList.toggle("active");
}