const swiper = new Swiper('.swiper', {
  effect: 'fade',
  autopay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});