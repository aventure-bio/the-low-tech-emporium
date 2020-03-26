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

if (document.getElementById("simple-text-swiper")) {
  var singleTextSwiper = new Swiper('#simple-text-swiper', {
    speed: 350,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next.text-button',
      prevEl: '.swiper-button-prev.text-button',
    },
  });
  singleTextSwiper.controller.control = singleTextSwiper;
}

if (document.getElementById("simple-img-swiper")) {
  var singleImgSwiper = new Swiper('#simple-img-swiper', {
    speed: 350,
    autoplay: true,
    effect: 'fade',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next.img-button',
      prevEl: '.swiper-button-prev.img-button',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });
  singleImgSwiper.controller.control = singleImgSwiper;
}

if (document.getElementById("simultaneous-text-swiper")) {
  var simultaneousTextSwiper = new Swiper('#simultaneous-text-swiper', {
    speed: 350,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var simultaneousImgSwiper = new Swiper('#simultaneous-img-swiper', {
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

  simultaneousImgSwiper.controller.control = simultaneousTextSwiper;
  simultaneousTextSwiper.controller.control = simultaneousImgSwiper;
}
