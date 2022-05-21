const mainNavigation = document.querySelector(".main-nav");
const navigationToggleButton = document.querySelector(".main-nav__toggle");
const googleMap = document.querySelector(".contacts__google-map");
const imageMap = document.querySelector(".contacts__image-map");

mainNavigation.classList.remove("main-nav--nojs");
googleMap.classList.remove("contacts__google-map--nojs");
imageMap.classList.add("contacts__image-map--js");

navigationToggleButton.addEventListener("click", function () {
  if (mainNavigation.classList.contains("main-nav--closed")) {
    mainNavigation.classList.remove("main-nav--closed");
    mainNavigation.classList.add("main-nav--opened");
  } else {
    mainNavigation.classList.add("main-nav--closed");
    mainNavigation.classList.remove("main-nav--opened");
  }
});
