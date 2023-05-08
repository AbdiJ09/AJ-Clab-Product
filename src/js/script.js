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

const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2500,
  reset: true,
});
sr.reveal(".about-img", {});
sr.reveal(".about-text", { origin: "bottom" }, { delay: 400 });
sr.reveal(".card", { delay: 400 });
sr.reveal(".middle-text", { delay: 300 });
sr.reveal(".product-shop", { origin: "bottom" }, { delay: 300 });
