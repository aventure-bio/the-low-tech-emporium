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
    "revision": "54206f263b886fae7ea232799b2a4134"
  },
  {
    "url": "assets/css/main.css",
    "revision": "c79b6b8b09824bad4c2fa9faaa97bae1"
  },
  {
    "url": "assets/css/style.css",
    "revision": "0c12d00cc93c2b64eb4cccb3d36df8fd"
  },
  {
    "url": "assets/fonts/Geomanist-Black.woff",
    "revision": "e886940f0008410cfd93e1c89ca52839"
  },
  {
    "url": "assets/fonts/Geomanist-Black.woff2",
    "revision": "54db2aeed26f6711f97ec77e278804cc"
  },
  {
    "url": "assets/fonts/Geomanist-Book.woff",
    "revision": "ee97a5ae47e6a1cd53e4bfb2c19ef6f5"
  },
  {
    "url": "assets/fonts/Geomanist-Book.woff2",
    "revision": "e972489c24f517d864ad0f757f00684a"
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
    "url": "assets/img/IMG_BRUT-16c-442w.png",
    "revision": "0010c2da2b785a51819750fc537e2b25"
  },
  {
    "url": "assets/img/LAETITIA-64c-480w.jpg",
    "revision": "4fed6264c2e15f50508e13fed320875b"
  },
  {
    "url": "assets/img/logo-OFG.svg",
    "revision": "a75dff018683ce7b8a8f2a5fef27d180"
  },
  {
    "url": "assets/img/logo-slow-cosmetique.svg",
    "revision": "6f928d11a28b1b6d530bed7c8d5b9d37"
  },
  {
    "url": "assets/img/logo-surfrider-foundation-europe.svg",
    "revision": "64127c329687505b1b7dd8db8269fde7"
  },
  {
    "url": "assets/img/logo-vegan.svg",
    "revision": "56a1a03fd75a3397d1b10e7eca1c336e"
  },
  {
    "url": "assets/img/SLIDER_-1-16c-1920w.png",
    "revision": "fe39a31a9c9663c7acd0dc80c35c1d16"
  },
  {
    "url": "assets/img/surfrider-video-poster.jpg",
    "revision": "1958edc2ebe1109d772ab346c61829b0"
  },
  {
    "url": "assets/img/TERRAIN_FOOT.png",
    "revision": "a881ed1f8de7930002ddcf6e00f831ac"
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
    "url": "assets/img/VISUEL_AMANDE-15.jpg",
    "revision": "acabc360bd520fb0c1776cb1f4ec26ee"
  },
  {
    "url": "assets/img/VISUEL_FE.jpg",
    "revision": "2a01a2d5dbf6bc35e64cc8ce3d149928"
  },
  {
    "url": "assets/img/VISUEL_LAVANDE-13.jpg",
    "revision": "e2bff10e8516b0467fa324d137f773a1"
  },
  {
    "url": "assets/img/VISUEL_menthe-12.jpg",
    "revision": "026a5976eac3632ccf35e4df350bbdf0"
  },
  {
    "url": "assets/img/VISUEL_PAMPLEMOUSSE-14.jpg",
    "revision": "8e89913763ca588a5d39ec466c95b352"
  },
  {
    "url": "assets/img/VISUEL_vanille.jpg",
    "revision": "3b5ec960619a5261a0c28c70198c72a5"
  },
  {
    "url": "assets/js/main.js",
    "revision": "26ce136ccae097843cb76111e0f9d3c1"
  },
  {
    "url": "Gemfile.lock",
    "revision": "c856018d677b29ad15dde70e5c409d01"
  },
  {
    "url": "index.html",
    "revision": "74971566054815b68d863d06403fbf92"
  },
  {
    "url": "la-gamme.html",
    "revision": "4c7b7b24dac52e0028aac89648ba86a8"
  },
  {
    "url": "la-pollution-plastique.html",
    "revision": "9448b51ca4839d62716f649d1fe676f4"
  },
  {
    "url": "les-ingredients.html",
    "revision": "3f20ddde47af9b9bd2c4d777d554c371"
  },
  {
    "url": "manifest.json",
    "revision": "9a11077f0414a56dccd9881b94d4d01a"
  },
  {
    "url": "nos-valeurs.html",
    "revision": "15c4eff43beb03615f405d05c176a0a1"
  },
  {
    "url": "robots.txt",
    "revision": "3d772e2d4c2d09578589c0bb3b48073c"
  },
  {
    "url": "sitemap.xml",
    "revision": "ad5dad9a5120af1bcfe6397248b6eadf"
  },
  {
    "url": "votre-impact.html",
    "revision": "8da2bdf0886b02da54c604d1d71c3287"
  },
  {
    "url": "workbox-config.js",
    "revision": "68eec0fdcd7a8f9187ef6e509fe4678e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
