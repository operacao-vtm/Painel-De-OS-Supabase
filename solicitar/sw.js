// App "Solicitar OS": sem cache (sempre a versão mais nova) e com as notificações do Firebase.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: 'AIzaSyBcZzBG3ADvSkXAk2IKTNbUvjD0-T08alk', authDomain: 'painel-de-os.firebaseapp.com',
  projectId: 'painel-de-os', storageBucket: 'painel-de-os.firebasestorage.app',
  messagingSenderId: '575243124952', appId: '1:575243124952:web:0ad5b1f2391dd369b0d7ad'
});
firebase.messaging();   // com o app fechado, o Firebase mostra o aviso e abre o app ao tocar

self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){ e.respondWith(fetch(e.request)); });
