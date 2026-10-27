// Notificações do Painel de OS (Firebase). Este arquivo fica na raiz do repositório,
// ao lado do index.html. Ele recebe os avisos mesmo com o painel fechado.
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: 'AIzaSyBcZzBG3ADvSkXAk2IKTNbUvjD0-T08alk',
  authDomain: 'painel-de-os.firebaseapp.com',
  projectId: 'painel-de-os',
  storageBucket: 'painel-de-os.firebasestorage.app',
  messagingSenderId: '575243124952',
  appId: '1:575243124952:web:0ad5b1f2391dd369b0d7ad'
});
// com o painel fechado, o próprio Firebase mostra o aviso e abre o painel ao tocar
firebase.messaging();

// avisos mostrados com o painel aberto: tocar abre o endereço do aviso
self.addEventListener('notificationclick', function (e) {
  var d = (e.notification && e.notification.data) || {};
  if (!d.link) return;
  e.notification.close();
  e.waitUntil(clients.openWindow(d.link));
});
