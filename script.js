const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("open");
  menuBtn.classList.toggle("open");
  document.body.classList.toggle("stop-scroll");
  console.log(menuBtn);
});

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (section) {
      console.log("working");
      if (section.isIntersecting) {
        section.target.classList.add("active");
      }
    });
  },
  { threshold: 0.8 },
);

document.querySelectorAll("section").forEach(function (section) {
  observer.observe(section);
});
