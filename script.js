const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuBtn.classList.toggle("open");
  console.log(menuBtn);
});
