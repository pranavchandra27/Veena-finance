const navbar = document.querySelector("nav");
const menu = document.querySelector(".nav-links");
const menu_icon = document.querySelector(".menu-icon");

/** Handling hamburger menu click **/
menu_icon.addEventListener("click", () => {
  menu_icon.classList.toggle("open");
  menu.classList.toggle("close");
});

/** Changing nav bg while scroll  **/
document.addEventListener("scroll", (e) => {
  const { scrollTop } = document.documentElement;

  if (scrollTop >= 150) {
    navbar.classList.add("nav-bg");
  } else {
    navbar.classList.remove("nav-bg");
  }
});
