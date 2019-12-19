/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "acheter.html",
    "revision": "123656c8bfc37f802b2815e9c9173076"
  },
  {
    "url": "assets/css/main.css",
    "revision": "1202f13fe3c3ba79b66b81bbba907162"
  },
  {
    "url": "assets/fonts/NeutraText-BoldAlt.woff",
    "revision": "2807426e5ce2afa93f6fbd07577cd59a"
  },
  {
    "url": "assets/fonts/NeutraText-BoldAlt.woff2",
    "revision": "55e3b05fa97ab9731e26d2924889d0f8"
  },
  {
    "url": "assets/fonts/NeutraText-BoldItalicAlt.woff",
    "revision": "d5368b085c532d80f839299d5afe2dd4"
  },
  {
    "url": "assets/fonts/NeutraText-BoldItalicAlt.woff2",
    "revision": "beb5113abc45b2e7dcff90d71989e1f6"
  },
  {
    "url": "assets/fonts/NeutraText-BookAlt.woff",
    "revision": "dc238efcf8065fff544f8630ee0ec27c"
  },
  {
    "url": "assets/fonts/NeutraText-BookAlt.woff2",
    "revision": "fc41d3ffc299cc11435291f4043defe1"
  },
  {
    "url": "assets/fonts/NeutraText-BookItalicAlt.woff",
    "revision": "de3b3a186d0616a6f961d86a0fda2c25"
  },
  {
    "url": "assets/fonts/NeutraText-BookItalicAlt.woff2",
    "revision": "1b58c7714738628c65f0db6926351626"
  },
  {
    "url": "assets/img/AdobeStock_-1-b&w-960w.png",
    "revision": "f316fc4c6bac6a576a0ecfc6ce04c834"
  },
  {
    "url": "assets/img/AdobeStock_-35-8c-1920w.png",
    "revision": "cbe6e0b2d07bbee82cdb051a853fd165"
  },
  {
    "url": "assets/img/AdobeStock_-35-8c-960w.png",
    "revision": "0a2a424829897fe3141cc790a221c1bb"
  },
  {
    "url": "assets/img/AdobeStock_-35-b&w-960w.png",
    "revision": "3f0e42ded6ad197b6ae07920a028f5ad"
  },
  {
    "url": "assets/img/AdobeStock_-36-8c-960w.png",
    "revision": "b95915c8cc54d40a0ac51f4f3ab08e4e"
  },
  {
    "url": "assets/img/AdobeStock_-36-b&w-960w.png",
    "revision": "9ce82e52e600cdf1e582e04095c41f8b"
  },
  {
    "url": "assets/img/logo-surfrider-foundation-europe.svg",
    "revision": "64127c329687505b1b7dd8db8269fde7"
  },
  {
    "url": "assets/img/SLIDER_-1-16c-1920w.png",
    "revision": "fe39a31a9c9663c7acd0dc80c35c1d16"
  },
  {
    "url": "assets/img/TGE-icon-white.png",
    "revision": "83f258f346dba73c625ab62396cc5bb7"
  },
  {
    "url": "assets/img/TGE-icon.png",
    "revision": "77de72f14d8c0d449be61ea6857971ae"
  },
  {
    "url": "assets/img/TGE-logo.svg",
    "revision": "fe524b505d2131e52f430c51c8e061f4"
  },
  {
    "url": "assets/img/VISUEL_AMANDE-15.png",
    "revision": "ee6b6392a4d5d86bd2a071365b47f6a0"
  },
  {
    "url": "assets/img/VISUEL_FE.png",
    "revision": "78abf580d1784ff2839bf08380a83ddd"
  },
  {
    "url": "assets/img/VISUEL_LAVANDE-13.png",
    "revision": "4193b104d681ff903c5c542db2c6e2b4"
  },
  {
    "url": "assets/img/VISUEL_menthe-12.png",
    "revision": "43803553775eff5a5a24332241a2694d"
  },
  {
    "url": "assets/img/VISUEL_PAMPLEMOUSSE-14.png",
    "revision": "f097d7f76040aafda2ef681193e622a9"
  },
  {
    "url": "assets/img/VISUEL_vanille.png",
    "revision": "efbbb0459499510e4383f086ad1e9f16"
  },
  {
    "url": "assets/js/main.js",
    "revision": "93a84452d9fe24f198f20d2ec84ae86c"
  },
  {
    "url": "index.html",
    "revision": "ed28c6427a1f036d5e37439213349bde"
  },
  {
    "url": "la-gamme.html",
    "revision": "c1d67675fe2aa401eaa65320c3b862c5"
  },
  {
    "url": "la-pollution-plastique.html",
    "revision": "d4d0de7c8b4a74d73dfb47fdccb69c63"
  },
  {
    "url": "les-ingredients.html",
    "revision": "27ecbd3331075aa45da5090d48362432"
  },
  {
    "url": "manifest.json",
    "revision": "9a11077f0414a56dccd9881b94d4d01a"
  },
  {
    "url": "nos-valeurs.html",
    "revision": "7ad7d6dd80dfe9e4c8b1737d3b600e40"
  },
  {
    "url": "robots.txt",
    "revision": "45fa963a5e67c6a3ef67c8ffa71b2b88"
  },
  {
    "url": "sitemap.xml",
    "revision": "37a19123bda759b1f5388bbf86442ca5"
  },
  {
    "url": "votre-impact.html",
    "revision": "270d45312202df3c3c2d1d3e5d39d5bc"
  },
  {
    "url": "workbox-config.js",
    "revision": "d9392acba8215ebb2cb1a058dedc2f51"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
