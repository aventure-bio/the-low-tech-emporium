// Only trigger if service workers are supported in browser.
if ('serviceWorker' in navigator) {
  // Wait until window is loaded before registering.
  window.addEventListener('load', () => {
    // Register the service worker with "/" as it's scope.
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      // Output success/failure of registration.
      .then(() => console.log('SW registered'))
      .catch(() => console.error('SW registration failed'));
  });
}

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
