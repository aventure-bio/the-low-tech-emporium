if ("serviceWorker" in navigator) {
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
      nextEl: ".swiper-button-next.text-button",
      prevEl: ".swiper-button-prev.text-button",
    },
  });
  singleTextSwiper.controller.control = singleTextSwiper;
}

if (document.getElementById("simple-img-swiper")) {
  var singleImgSwiper = new Swiper("#simple-img-swiper", {
    speed: 350,
    autoplay: true,
    effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next.img-button",
      prevEl: ".swiper-button-prev.img-button",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });
  singleImgSwiper.controller.control = singleImgSwiper;
}

if (document.getElementById("simultaneous-text-swiper")) {
  var simultaneousTextSwiper = new Swiper("#simultaneous-text-swiper", {
    speed: 350,
    loop: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var simultaneousImgSwiper = new Swiper("#simultaneous-img-swiper", {
    speed: 350,
    effect: "fade",
    grabCursor: true,
    keyboard: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    a11y: {
      prevSlideMessage: "Produit précédant",
      nextSlideMessage: "Produit nuivant",
      paginationBulletMessage: "Aller au produit {{ index }}",
    },
  });

  simultaneousImgSwiper.controller.control = simultaneousTextSwiper;
  simultaneousTextSwiper.controller.control = simultaneousImgSwiper;
}


// Mobile Nav

var menu = document.getElementById("menu"),
    navButton = document.querySelector("nav > button"),
    menuOverlay = document.getElementById("menu-overlay"),
    breakpoint = 990;

function toggleVisibility(element) {
  if (element.style.display === "none") {
    element.style.display = "initial";
  } else {
    element.style.display = "none";
  }
}

function toggleMobileNav() {
  var expanded = navButton.getAttribute("aria-expanded") === "true" || false;
  navButton.setAttribute("aria-expanded", !expanded);
  menu.classList.add("transition");
  if (expanded === false) {
    // open
    toggleVisibility(menuOverlay);
    menu.style.display = "flex";
    // setTimeout is needed to keep CSS transitions visible
    setTimeout(function(){ 
      menuOverlay.classList.toggle("menu-expanded");
      menu.classList.toggle("menu-expanded");
    }, 10);
  }
  else {
    // close
    menuOverlay.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-expanded");
    // setTimeout is needed to keep CSS transitions visible
    setTimeout(function(){ 
      toggleVisibility(menuOverlay);
      menu.style.display = "none";
    }, 400); // transition speed
  }
  if (!document.body.classList.contains("no-overflow-y") ) {
    document.body.classList.add("no-overflow-y");
  } else {
    document.body.classList.remove("no-overflow-y");
  }
}

// Toggle mobile nav when clicking on the nav button
navButton.addEventListener("click", function() {
  toggleMobileNav();
});
// Toggle mobile nav when clicking on the background overlay
menuOverlay.addEventListener("click", function() {
  toggleMobileNav();
});

// Toggle nav menu when window is wider than breakpoint (990px)
window.onresize = function() {
  if (window.innerWidth >= breakpoint) {
    document.body.classList.remove("no-overflow-y");
    menuOverlay.classList.remove("menu-expanded");
    menuOverlay.style.display = "none";
    menu.style.display = "flex";
    menu.classList.remove("menu-expanded");
    menu.classList.remove("transition");
    navButton.setAttribute("aria-expanded", false);
  }
}

// Update header on scroll
var triggerY = 225; // #header height - #menu.scrolled height
var elementsToHide = document.querySelectorAll("#header > div");
var header = document.querySelector("#header");
var menu = document.querySelector("#menu");

window.addEventListener('scroll', function(e) {
  var collapsed = header.classList.contains("scrolled");
  if (window.scrollY < triggerY) {
    // normal
    if (collapsed) {
      for (var i = elementsToHide.length - 1; i >= 0; i--) {
        elementsToHide[i].classList.remove("hide");
      };
      header.classList.remove("scrolled");
      menu.classList.remove("scrolled");
    }
  } else {
    // collapsed
    if (!collapsed) {
      for (var i = elementsToHide.length - 1; i >= 0; i--) {
        elementsToHide[i].classList.add("hide");
      };
      header.classList.add("scrolled");
      menu.classList.add("scrolled");
    }
  }
});


// Filter list function
function filterList() {
  // Declare variables
  var input, filter, ul, li, a, p, i;
  input = document.getElementById('filter');
  filter = input.value.toUpperCase();
  ul = document.querySelector(".magasins");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    p = li[i].getElementsByTagName("p")[0];
    var aTxtValue = a.textContent || a.innerText;
    var pTxtValue = p.textContent || p.innerText;
    var txtValue = aTxtValue + pTxtValue;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
