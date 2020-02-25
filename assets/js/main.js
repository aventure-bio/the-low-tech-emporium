---
---

if ('serviceWorker' in navigator) {
  // if (navigator.serviceWorker.controller) {
  //   console.log("An active service worker found, no need to register");
  // } else {
    // Register the service worker
    navigator.serviceWorker
      .register("{{ '/sw.js' | relative_url }}", { scope: "{{ '/' | relative_url }}" })
      .then(function (reg) {
        console.log("Service worker has been registered for scope: " + reg.scope);
      });
  // }
}

var textSwiper = new Swiper('.swiper-container.section__text', {
  speed: 350,
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
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
