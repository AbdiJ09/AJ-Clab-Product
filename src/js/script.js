const open = document.querySelector("#menu-icon");
const nav = document.querySelector(".nav");

open.onclick = () => {
  open.classList.toggle("bx-x");
  nav.classList.toggle("open");
};
document.addEventListener("click", function (e) {
  if (!open.contains(e.target) && !nav.contains(e.target)) {
    open.classList.remove("bx-x");
    nav.classList.remove("open");
  }
});
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 200);
});
[];
