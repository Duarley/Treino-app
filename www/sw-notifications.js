self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('treino-cache-v1').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/styles.css',
      '/app.js',
      '/icon.svg'
    ]))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== 'treino-cache-v1').map((key) => caches.delete(key)))
    )
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open('treino-cache-v1').then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match('/index.html'));
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      if (clients.length > 0) {
        clients[0].focus();
      }
    })
  );
});
