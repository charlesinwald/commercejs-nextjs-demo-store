import React from 'react';
import { Autoplay, EffectFade, Swiper as SwiperCore } from 'swiper';

const params = {
  slidesPerView: 1,
  watchOverflow: false,
  autoplay: {
    delay: 5000
  },
  loop: true,
  allowTouchMove: false,
  speed: 1000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
};
const images = [
  '/images/home-1.jpg',
  '/images/home-2.jpg',
  '/images/home-3.jpg',
  '/images/home-4.jpg',
];

export default function HeroSection() {
  return (
      <img src="/images/svg/topography.svg" style={{width: "100vw"}}/>
  );
}
