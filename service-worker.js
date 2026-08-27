const CACHE = 'jonas-clima-pro-v30';
const ASSETS = ['./', './index.html', './vip.html', './manifest.webmanifest', './jonas-clima-pro-icon.png', './firebase-config.js'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request))));
