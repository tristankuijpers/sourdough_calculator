const CACHE_NAME = 'sourdough-v1';
const ASSETS = [
  './',
  './index.html',
  './site.webmanifest',
  './assets/style.css',
  './assets/favicon-32x32.png',
  './assets/favicon-192x192.png',
  './assets/favicon-512x512.png',
  './assets/favicon-maskable.png',
  './assets/apple-touch-icon.png',
  './recipes/bread.html',
  './recipes/bread-content.js',
  './recipes/pizza.html',
  './recipes/pizza-content.js',
  './recipes/focaccia.html',
  './recipes/focaccia-content.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// cache-first, refreshed in the background, network as last resort
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
