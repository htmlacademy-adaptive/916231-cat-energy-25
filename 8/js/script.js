const mainNavigation = document.querySelector(".main-nav");
const navigationToggleButton = document.querySelector(".main-nav__toggle");

mainNavigation.classList.remove("main-nav--nojs");

navigationToggleButton.addEventListener("click", function () {
  if (mainNavigation.classList.contains("main-nav--closed")) {
    mainNavigation.classList.remove("main-nav--closed");
    mainNavigation.classList.add("main-nav--opened");
  } else {
    mainNavigation.classList.add("main-nav--closed");
    mainNavigation.classList.remove("main-nav--opened");
  }
});
