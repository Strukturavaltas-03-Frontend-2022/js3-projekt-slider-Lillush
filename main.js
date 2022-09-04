import { gallery } from "./pictures.js";

("use strict");

const imageSlide = document.querySelector(".image__slide");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const imageText = document.querySelector(".image__text");
const pageDots = document.querySelector(".page__dots");
const pageCounter = document.querySelector(".pagenumber");
let singleDots;

let stepTime = 3000;
let i = 0;

for (let i = 0; i < gallery.length; i++) {
  const singleDot = document.createElement("div");
  singleDot.classList.add("dots");
  singleDot.innerHTML = "⭕";
  pageDots.appendChild(singleDot);
}

singleDots = document.querySelectorAll(".dots");

rightArrow.addEventListener("click", () => {
  i < gallery.length - 1 ? i++ : (i = 0);
  changeImageContent(i);
});

leftArrow.addEventListener("click", () => {
  i === 0 ? (i = gallery.length - 1) : i--;
  changeImageContent(i);
});

const changeImageContent = (i) => {
  imageSlide.setAttribute("src", `${gallery[i].src}`);
  imageSlide.setAttribute("alt", `${gallery[i].text}`);
  pageCounter.innerHTML = `${i + 1}/7`;
  imageText.innerHTML = gallery[i].text;

  singleDots.forEach((dot) => {
    dot.innerHTML = "⭕";
  });
  singleDots[i].innerHTML = "⚫";
};

setInterval(() => {
  i < gallery.length - 1 ? i++ : (i = 0);
  changeImageContent(i);
}, stepTime);

singleDots.forEach((dot, i) =>
  dot.addEventListener("click", () => {
    changeImageContent(i);
  })
);
