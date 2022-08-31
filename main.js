import { gallery } from "./pictures.js";

("use strict");

const imageSlide = document.querySelector(".image__slide");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const imageText = document.querySelector(".image__text");
const pageDots = document.querySelector(".page__dots");
const pageCounter = document.querySelector(".pagenumber");

let stepTime = 5000;
let i = 0;

let image = gallery[i].src;
let altText = gallery[i].text;

const slideRight = (i) => {
    
    if (i < gallery.length+1) {
        i++;
        console.log(i);
        imageSlide.setAttribute("src", `${image}`);
        imageSlide.setAttribute("alt", `${altText}`);
    } else {
        i = 0;
        imageSlide.setAttribute("src", `${image}`)
    }
      //  imageSlide.setAttribute("alt", `${altText}`);
    }

const slideLeft = (i) => {

}

const autoSlide = (i) => {

}


rightArrow.addEventListener('click', slideRight);
leftArrow.addEventListener('click', slideLeft);