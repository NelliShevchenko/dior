const swiperTop = new Swiper('.top__swiper', {
  effect: 'fade',
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next-top',
    prevEl: '.swiper-button-prev-top',
  },
});

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordeon__item');

  accordions.forEach(accordion => {
    const trigger = accordion.querySelector('.accordeon__triger');

    trigger.addEventListener('click', () => {
      const content = accordion.querySelector('.accordeon__content');

      // Сначала закрываем все открытые контенты
      accordions.forEach(item => {
        const itemContent = item.querySelector('.accordeon__content');
        if (itemContent !== content) {
          itemContent.style.display = 'none';
          item.querySelector('.accordeon__triger').classList.remove('active');
        }
      });

      // Переключаем отображение текущего контента
      if (content.style.display === 'block') {
        content.style.display = 'none';
        trigger.classList.remove('active');
      } else {
        content.style.display = 'block';
        trigger.classList.add('active');
      }
    });
  });
});
