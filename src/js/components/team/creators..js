import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useCreatorsSlider = () => {
  new Swiper('.creators__slider', {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    navigation: {
      prevEl: '.creators__btn--prev',
      nextEl: '.creators__btn--next',
    },
  });
};
