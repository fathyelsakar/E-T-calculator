const CACHE_NAME = "calc-cache-v1";
const cacheFiles = [
  '/E-T-calculator/',
  '/E-T-calculator/index.html',
  '/E-T-calculator/style.css',
  '/E-T-calculator/app.js',
  '/E-T-calculator/icons/icon-192.png',
  '/E-T-calculator/icons/icon-512.png'
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
