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

const circleButtons = document.querySelectorAll(".circle");
const slideImg = document.querySelector("[data-slide-img]");
const slideText = document.querySelector("[data-slide-text]");

circleButtons[0].onclick = function () {
  slideImg.src = "assets/images/gift.png";

  slideText.innerHTML = `  <h2 class="slide-title">macan gift card</h2>
                           <h3>Spread Love, Not FUD</h3>
                           <p>Gift crypto to your loved ones</p>
                           <div class="button-box">
                               <button class="btn btn-primary">READ MORE</button>
                            </div>
                           `;
};
circleButtons[1].onclick = function () {
  slideImg.src = "assets/images/calc.jfif";

  slideText.innerHTML = `<h2 class="slide-title">recurring buy calculator</h2>
                         <p>
                           Reviwe your potential earning with
                           <em>recurring buy calculator</em>
                         </p>
                         <div class="button-box">
                           <button class="btn btn-primary">READ MORE</button>
                         </div>
                         `;
};
circleButtons[2].onclick = function () {
  slideImg.src = "assets/images/visaCard.jfif";

  slideText.innerHTML = `  <h2 class="slide-title">buy crypto with visa card</h2>
                           <p>
                             Now you can buy crypto with your
                             <em>Debit/Visa</em> card easy and fast
                           </p>
                           <div class="button-box">
                             <button class="btn btn-primary">READ MORE</button>
                           </div>
                           `;
};

const activeCircleButtons = function () {
  for (const circleButton of circleButtons) {
    circleButton.classList.remove("active");
    this.classList.add("active");
  }
};

addEventOnElement(circleButtons, "click", activeCircleButtons);

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
    if (section.getBoundingClientRect().top < window.innerHeight / 1.5) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  }
};

scrollReveal();

addEventOnElement(window, "scroll", scrollReveal);
