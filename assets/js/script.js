"use strick";

//
// HEADER
//

// add event on each element that we choose

const addEventOnElement = function (element, type, callback) {
  if (element.length > 1) {
    for (let i = 0; i < element.length; i++) {
      element[i].addEventListener(type, callback);
    }
  } else {
    element.addEventListener(type, callback);
  }
};

//navbar toglle

const navbarElement = document.querySelector("[data-navbar]");

const navBtnTogller = document.querySelector("[data-nav-toggler]");

const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNav = function () {
  navbarElement.classList.toggle("active");
  navBtnTogller.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnElement(navBtnTogller, "click", toggleNav);

const closeNav = function () {
  navbarElement.classList.remove("active");
  navBtnTogller.classList.remove("active");
  document.body.classList.remove("active");
};

addEventOnElement(navLinks, "click", closeNav);

const toggleActoveLinks = function () {
  for (const navLink of navLinks) {
    navLink.classList.remove("active");
    this.classList.add("active");
  }
};
addEventOnElement(navLinks, "click", toggleActoveLinks);

// active header

const headerElement = document.querySelector("[data-header]");

const activeHeader = function () {
  if (scrollY > 300) {
    headerElement.classList.add("active");
  } else {
    headerElement.classList.remove("active");
  }
};

addEventOnElement(window, "scroll", activeHeader);

//
// HOME
//

const slideBox = document.querySelectorAll(".slide-wrapper .slide-box");
const slideBtn = document.querySelectorAll(".home .btn-box button");

let slideCounter = 0;
const showSlide = function () {
  slideCounter++;
  for (const slide of slideBox) {
    slide.classList.add("d-none");
  }
  document.querySelector(".slide" + slideCounter).classList.remove("d-none");
  for (const btn of slideBtn) {
    btn.classList.remove("active");
  }
  document.getElementById("btn" + slideCounter).classList.add("active");
  if (slideCounter == 3) {
    slideCounter = 0;
  }
};
showSlide();
let intervalHandler = setInterval(showSlide, 8000);

document.getElementById("btn1").onclick = function () {
  clearInterval(intervalHandler);
  slideCounter = 0;
  showSlide();
  intervalHandler = setInterval(showSlide, 8000);
};
document.getElementById("btn2").onclick = function () {
  clearInterval(intervalHandler);
  slideCounter = 1;
  showSlide();
  intervalHandler = setInterval(showSlide, 8000);
};
document.getElementById("btn3").onclick = function () {
  clearInterval(intervalHandler);
  slideCounter = 2;
  showSlide();
  intervalHandler = setInterval(showSlide, 8000);
};

//
// INTRO
//

// scroll effect on circle tag

const circleTag = document.querySelector("[data-circle]");

const scrollEffect = function () {
  if (circleTag.getBoundingClientRect().top < window.innerHeight / 1.5) {
    circleTag.classList.add("circle-300");
  } else {
    circleTag.classList.remove("circle-300");
  }
};
addEventOnElement(window, "scroll", scrollEffect);

//
// MARKET
//
const marketBtns = document.querySelectorAll(".market .tab-btn");

const marketBtnActiveToggle = function () {
  for (const marketBtn of marketBtns) {
    marketBtn.classList.remove("active");
    this.classList.add("active");
  }
};
addEventOnElement(marketBtns, "click", marketBtnActiveToggle);

//
// Footer
//

const footerLinkHeaders = document.querySelectorAll(".footer .footer-list .h3");
for (const footerLinkHeader of footerLinkHeaders) {
  footerLinkHeader.nextElementSibling.style.maxHeight =
    footerLinkHeader.nextElementSibling.scrollHeight + "px";
}

const accurdion = function () {
  for (const footerLinkHeader of footerLinkHeaders) {
    footerLinkHeader.nextElementSibling.classList.add("fade");
    this.nextElementSibling.classList.remove("fade");
  }
};

addEventOnElement(footerLinkHeaders, "click", accurdion);
// ALL SECTION
// scroll efect on sections
//

const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (const section of sections) {
    if (section.getBoundingClientRect().top < window.innerHeight) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  }
};

scrollReveal();

addEventOnElement(window, "scroll", scrollReveal);
