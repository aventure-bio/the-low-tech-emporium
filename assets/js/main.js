var textSwiper = new Swiper('.swiper-container.section__text', {
  speed: 350,
  loop: true,
  autoplay: true
});

var imgSwiper = new Swiper('.swiper-container.section__img', {
  speed: 350,
  effect: 'fade',
  grabCursor: true,
  keyboard: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    prevSlideMessage: 'Produit précédant',
    nextSlideMessage: 'Produit nuivant',
    paginationBulletMessage: "Aller au produit {{ index }}",
  },
});

imgSwiper.controller.control = textSwiper;
textSwiper.controller.control = imgSwiper;
