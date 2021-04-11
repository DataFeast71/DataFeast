const btnHamburger = document.querySelector("#btnHamburger");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");
const rowsBlog = document.querySelectorAll(".row");
// const hero = document.querySelector(".hero");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    rowsBlog.forEach((elements) => {
      elements.classList.remove("sendBack");
    });
    // hero.classList.remove("sendBack");
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    rowsBlog.forEach((elements) => {
      elements.classList.add("sendBack");
    });
    // hero.classList.add("sendBack");
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
