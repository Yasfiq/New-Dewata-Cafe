const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.querySelectorAll("nav ul li").forEach((n) =>
  n.addEventListener("click", () => {
    if ((n = document.querySelector(".menu"))) {
      nav.classList.add("active");
      hamburger.classList.add("active");
    } else {
      nav.classList.remove("active");
      hamburger.classList.remove("active");
    }
  })
);
