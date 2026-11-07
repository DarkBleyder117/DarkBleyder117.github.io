const C='xbglobal-v1.0', F=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','logo-verde.png','logo-claro.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
