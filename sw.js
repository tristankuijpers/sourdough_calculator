const CACHE_NAME = 'sourdough-v10';
const ASSETS = [
  './',
  './index.html',
  './products.js',
  './site.webmanifest',
  './assets/style.css',
  './assets/favicon-32x32.png',
  './assets/favicon-192x192.png',
  './assets/favicon-512x512.png',
  './assets/apple-touch-icon.png',
  './assets/screenshot-desktop.png',
  './assets/screenshot-mobile.png',
  './recipes/recipe.html',
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

// cache-first, refreshed in the background, network as last resort.
// Only HTTP(S) GET requests are handled; everything else (chrome-extension:,
// about:, non-GET) is left untouched so it goes straight to the browser/network.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!/^https?:$/.test(new URL(event.request.url).protocol)) return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          // Same-origin responses are cached when ok. Cross-origin "no-cors"
          // requests (e.g. Google Fonts) resolve as opaque responses with
          // status 0, where response.ok is false — accept them by type instead.
          if (response.ok || response.type === 'opaque') {
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
