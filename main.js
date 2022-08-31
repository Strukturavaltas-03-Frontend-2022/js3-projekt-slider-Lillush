import { gallery } from "./pictures.js";

("use strict");

const imageSlide = document.querySelector(".image__slide");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const imageText = document.querySelector(".image__text");
const pageDots = document.querySelector(".page__dots");
const pageCounter = document.querySelector(".pagenumber");

let stepTime = 3000;
let i = 0;

rightArrow.addEventListener('click', () => {
    if (i < gallery.length-1) {
        i++;
    } else {
        i = 0;
    }
  changeImgContent(i);
    });

leftArrow.addEventListener('click', () => {
    if (i === 0) {
        i = gallery.length-1;
    } else {
        i--;
    }
    changeImgContent(i);
    });

const changeImgContent = () => {
    imageSlide.setAttribute("src", `${gallery[i].src}`);
    imageSlide.setAttribute("alt", `${gallery[i].text}`);
    imageText.innerHTML = `${gallery[i].text}`;
    pageCounter.innerHTML = `${i+1}/${gallery.length}`;
    }


setInterval(() => {
    if (i < gallery.length-1) {
        i++;
    } else {
        i = 0;
    }
    changeImgContent(i)}, stepTime);

