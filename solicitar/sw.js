// App "Solicitar OS": sem cache, sempre a versão mais nova.
// Aqui também vão entrar as notificações, quando o Firebase estiver pronto.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){ e.respondWith(fetch(e.request)); });
