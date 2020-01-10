const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const NavItems = document.querySelectorAll(".nav-item");

let menuNotopen = true;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (menuNotopen) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    NavItems.forEach(item => item.classList.add("show"));

    menuNotopen = false;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    NavItems.forEach(item => item.classList.remove("show"));
    menuNotopen = true;
  }
}
