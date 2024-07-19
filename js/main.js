const swiperTop = new Swiper('.top__swiper', {
  effect: 'fade',
  autopay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next-top',
    prevEl: '.swiper-button-prev-top',
  },

});



const swiperAbout = new Swiper(".about__slider", {
      
       freeMode: {
    enabled: true,
    sticky: true,
  },
  slidesPerView: "auto",
  spaceBetween: 20,
  // freeMode: true,
      // slidesPerView: "auto",
      // spaceBetween: 30,
     navigation: {
    nextEl: '.swiper-button-next-bottom',
    prevEl: '.swiper-button-prev-bottom',
  },
    });