// "use strict";
const navBtn = document.querySelector(".nav-toggle-btn");
const navToggle = document.querySelector(".nav-wrapper");
const card = document.querySelectorAll(".product-card-wrapper ");

const parallax = document.querySelector(".parallax");
const text = document.querySelector(".parallax__text");
const curLeft = document.querySelector(".curtain-left");
const curRight = document.querySelector(".curtain-right");
const satgeImg = document.querySelector(".stage-img");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");

//show nav
navBtn.addEventListener("click", function () {
  navToggle.toggleAttribute("visible");
});

//menu button X transition
navBtn.addEventListener("click", () => {
  bar1.toggleAttribute("active");
  bar2.toggleAttribute("active");
  bar3.toggleAttribute("active");
});

window.addEventListener(
  "scroll",
  function () {
    const value = window.scrollY;

    // const value = parallax.getBoundingClientRect().top;

    console.log(value);

    text.style.left = value * 3.5 + "px";
    curLeft.style.left = value * -1.5 + "px";
    curRight.style.right = value * -1.5 + "px";

    satgeImg.style.marginTop = value * -2.5 + "px";
  },
  false
);
