const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

let isMenuOpen = false; // Track the menu state

// Toggle menu visibility and icon change
menuBtn.addEventListener("click", (e) => {
  if (isMenuOpen) {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
  } else {
    navLinks.classList.add("open");
    menuBtnIcon.setAttribute("class", "ri-close-line");
  }
  isMenuOpen = !isMenuOpen;
});

// Close menu when clicking on any of the menu items
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
  isMenuOpen = false;
});

// ScrollReveal Options
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Helper function to apply ScrollReveal to elements
const applyScrollReveal = (selector, options = {}) => {
  ScrollReveal().reveal(selector, { ...scrollRevealOption, ...options });
};

// Header Animation
applyScrollReveal(".header__image img", { duration: 1000 });
applyScrollReveal(".header__content h1", { delay: 500 });
applyScrollReveal(".header__content .section__description", { delay: 1000 });
applyScrollReveal(".header__btn", { delay: 1500 });
applyScrollReveal(".header__content .socials", { delay: 2000 });

// Popular Products Animation
applyScrollReveal(".popular__card", { interval: 500 });

// Discover Section Animation
applyScrollReveal(".discover__card img", { origin: "left" });
applyScrollReveal(".discover__card:nth-child(2) img", { origin: "right" });
applyScrollReveal(".discover__card__content h4", { delay: 500 });
applyScrollReveal(".discover__card__content .section__description", { delay: 1000 });
applyScrollReveal(".discover__card__content h3", { delay: 1500 });
applyScrollReveal(".discover__card__btn", { delay: 2000 });

// Banner Section Animation
applyScrollReveal(".banner__content .section__header");
applyScrollReveal(".banner__content .section__description", { delay: 500 });
applyScrollReveal(".banner__card", { delay: 1000, interval: 500 });

// Subscribe Section Animation
applyScrollReveal(".subscribe__content .section__header");
applyScrollReveal(".subscribe__content .section__description", { delay: 500 });
applyScrollReveal(".subscribe__content form", { delay: 1000 });
