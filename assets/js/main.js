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

if (document.querySelector(".swiper-container.section__text") !== null) {
  var textSwiper = new Swiper('.swiper-container.section__text', {
    speed: 350,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  textSwiper.controller.control = imgSwiper;
}

if (document.querySelector(".swiper-container.section__img") !== null) {
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
}


// Add class on Scroll
var scrollpos = window.scrollY,
    header = document.querySelector("#header"),
    nav = document.querySelector("#header nav"),
    trigger_point = header.offsetHeight - nav.offsetHeight;

function add_class_on_scroll()    { nav.classList.add("fixed") };
function remove_class_on_scroll() { nav.classList.remove("fixed") };

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;
  if (scrollpos >= trigger_point) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
  // console.log(scrollpos);
})


// Navigation
// https://www.smashingmagazine.com/2017/11/building-accessible-menu-systems/
var nav = document.querySelector('#header nav'),
    navButton = document.querySelector('#header nav button'),
    menu = document.querySelector('#header #menu'),
    menuOverlay = document.querySelector('#header #menu-overlay'),
    breakpoint = 990;
navButton.addEventListener('click', function() {
  var expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);
  if (menuOverlay.style.display == "none") {
    menu.style.display = "flex";
    menuOverlay.style.display = "block";
    setTimeout(function(){
      menu.classList.toggle('menu-expanded');
      menuOverlay.classList.toggle('menu-expanded');
    }, 10);
  } else {
    menu.classList.toggle('menu-expanded');
    menuOverlay.classList.toggle('menu-expanded');
    setTimeout(function(){ 
      menuOverlay.style.display = "none";
      menu.style.display = "none";
    }, 400);
  }
});

window.onresize = function() {
  if (window.innerWidth >= breakpoint ) {
    menu.style.display = "flex";
    menu.classList.remove('menu-expanded');
    if (menuOverlay.style.display == "block") {
      menuOverlay.classList.remove('menu-expanded');
      navButton.setAttribute('aria-expanded', false);
      setTimeout(function(){ menuOverlay.style.display = "none"; }, 400);
    }
  }
  else {
    if (menuOverlay.style.display == "none") {
      menu.style.display = "none";
      navButton.setAttribute('aria-expanded', false);
    }
  }
}
