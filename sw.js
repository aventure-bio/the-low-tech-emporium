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
    "revision": "10e92cdc14d3a92a4d0332e8a9b1ba42"
  },
  {
    "url": "assets/css/main.css",
    "revision": "72c05b07b76a3c96678f90b587acb70a"
  },
  {
    "url": "index.html",
    "revision": "204d060f3ca11149b54d737572c5c6fc"
  },
  {
    "url": "js/main.js",
    "revision": "e0c2c3c345b58b633384d102755db8ce"
  },
  {
    "url": "la-gamme.html",
    "revision": "165ff380de0085e7f44fa4beddd43cbc"
  },
  {
    "url": "la-pollution-plastique.html",
    "revision": "83a419379f9bc493ff704cf86e83a58a"
  },
  {
    "url": "les-ingredients.html",
    "revision": "6cb9297744d874675e56a81e86f4f667"
  },
  {
    "url": "manifest.json",
    "revision": "46102c97723387539e129a92e37c39d5"
  },
  {
    "url": "nos-valeurs.html",
    "revision": "4540ce02d26ab83a1dd5bf6b2ba08c27"
  },
  {
    "url": "README.md",
    "revision": "0443e5d67a84bc24e95e2410be1ca391"
  },
  {
    "url": "robots.txt",
    "revision": "b3647cd549ad9b078514e907c19c1e80"
  },
  {
    "url": "sitemap.xml",
    "revision": "1d87e5c97ea77897c07ecb066455fd97"
  },
  {
    "url": "votre-impact.html",
    "revision": "9afa7461f5786ff1c2deb5773b63cfac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
