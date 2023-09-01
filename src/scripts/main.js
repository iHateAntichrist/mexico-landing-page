'use strict';

const sliderSlides = document.querySelectorAll('.slider__slide');
const sliderLine = document.querySelector('.slider__line');

const prevButton = document.querySelector('.slider__pagination-point-prev');
const nextButton = document.querySelector('.slider__pagination-point-next');

let sliderCount = 0;
const sliderWidth = document.querySelector('.slider').offsetWidth;

nextButton.addEventListener('click', () => {
  nextSlide();
  nextButton.classList.add('slider__pagination-point--selected');
  prevButton.classList.remove('slider__pagination-point--selected');
});

prevButton.addEventListener('click', () => {
  prevSlide();
  prevButton.classList.add('slider__pagination-point--selected');
  nextButton.classList.remove('slider__pagination-point--selected');
});

function nextSlide() {
  sliderCount++;

  if (sliderCount >= sliderSlides.length) {
    sliderCount--;
  }

  rollSlider();
}

function prevSlide() {
  sliderCount--;

  if (sliderCount < 0) {
    sliderCount++;
  }

  rollSlider();
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
