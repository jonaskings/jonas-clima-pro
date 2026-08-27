const CACHE = 'jonas-clima-pro-v8';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg', './jonas-clima-pro-logo.jpeg'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request))));

