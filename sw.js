self.addEventListener('install', e=>{e.waitUntil(caches.open('bs-v1').then(c=>c.addAll(['./','./index.html','./manifest.json','./assets/brand.png'])))});
self.addEventListener('fetch', e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))})
