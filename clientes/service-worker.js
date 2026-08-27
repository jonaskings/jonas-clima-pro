const CACHE = 'jonas-clima-clientes-v5';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './firebase-config.js', '../jonas-clima-pro-icon.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request))));
