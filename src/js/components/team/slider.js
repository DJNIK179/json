import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    breakpoints: {
      1200: {
        centeredSlides: false,
        spaceBetween: 32,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },
  });
};
